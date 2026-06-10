import { QueryClient } from '@tanstack/react-query';
import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('../fetchers/dictionaries', () => ({
  fetchAllDictionaryClasses: vi.fn(),
  fetchDictionaryByUri: vi.fn(),
}));

import { fetchAllDictionaryClasses, fetchDictionaryByUri } from '../fetchers/dictionaries';
import { ifcEntityToBsddClass, patchIfcClassificationReference, validateIfcData } from './validateIfcData';

const fetchClasses = fetchAllDictionaryClasses as unknown as ReturnType<typeof vi.fn>;
const fetchDictionary = fetchDictionaryByUri as unknown as ReturnType<typeof vi.fn>;

function makeClient() {
  return new QueryClient({ defaultOptions: { queries: { retry: false, gcTime: 0, staleTime: 0 } } });
}

beforeEach(() => {
  fetchClasses.mockReset();
  fetchDictionary.mockReset();
});

describe('ifcEntityToBsddClass', () => {
  it('drops NOTDEFINED / USERDEFINED predefined types when building a class name', () => {
    expect(ifcEntityToBsddClass('IfcWall', undefined)).toBe('IfcWall');
    expect(ifcEntityToBsddClass('IfcWall', 'NOTDEFINED')).toBe('IfcWall');
    expect(ifcEntityToBsddClass('IfcWall', 'USERDEFINED')).toBe('IfcWall');
    expect(ifcEntityToBsddClass('IfcWall', 'PARTITIONING')).toBe('IfcWallPARTITIONING');
    expect(ifcEntityToBsddClass(undefined, 'PARTITIONING')).toBe('PARTITIONING');
  });
});

describe('patchIfcClassificationReference', () => {
  it('returns valid when location is already populated', async () => {
    const result = await patchIfcClassificationReference(
      { type: 'IfcClassificationReference', name: 'X', location: 'https://x' } as any,
      makeClient(),
      'en-GB',
    );
    expect(result.validationState).toBe('valid');
    expect(fetchClasses).not.toHaveBeenCalled();
  });

  it('passes through unchanged when no location and no referencedSource location', async () => {
    const ref = { type: 'IfcClassificationReference', name: 'X' } as any;
    const result = await patchIfcClassificationReference(ref, makeClient(), 'en-GB');
    expect(result.validationState).toBe('valid');
    expect(result.ifcClassificationReference).toBe(ref);
    expect(fetchClasses).not.toHaveBeenCalled();
  });

  it('fixes a reference by matching identification against fetched classes and re-resolving the dictionary', async () => {
    fetchClasses.mockResolvedValue([{ code: 'WALL01', name: 'Wall A', uri: 'https://example.org/class/wall01' }]);
    fetchDictionary.mockResolvedValue({
      uri: 'https://example.org/dict',
      name: 'Test dict',
      version: '1',
      organizationCodeOwner: 'org',
    });

    const result = await patchIfcClassificationReference(
      {
        type: 'IfcClassificationReference',
        identification: 'wall01',
        name: 'Wall A',
        referencedSource: { type: 'IfcClassification', location: 'https://example.org/dict' } as any,
      } as any,
      makeClient(),
      'en-GB',
    );

    expect(result.validationState).toBe('fixed');
    expect(result.ifcClassificationReference.location).toBe('https://example.org/class/wall01');
    expect(result.ifcClassificationReference.identification).toBe('WALL01');
    expect(fetchClasses).toHaveBeenCalled();
    // Note: the hey-api fetcher signature dropped the `language` arg — language
    // filtering is now done at fetchClassDetail level. We no longer assert on it.
    expect(fetchClasses.mock.calls[0][0]).toBe('https://example.org/dict');
    expect(fetchDictionary).toHaveBeenCalled();
  });

  it('passes through unchanged when the fetcher returns no matching class', async () => {
    fetchClasses.mockResolvedValue([{ code: 'OTHER', name: 'Other', uri: 'https://x' }]);
    const ref = {
      type: 'IfcClassificationReference',
      identification: 'nope',
      name: 'Nope',
      referencedSource: { type: 'IfcClassification', location: 'https://example.org/dict' } as any,
    } as any;
    const result = await patchIfcClassificationReference(ref, makeClient(), 'en-GB');
    expect(result.validationState).toBe('valid');
    expect(result.ifcClassificationReference).toBe(ref);
  });
});

describe('validateIfcData', () => {
  it('strips trailing "Type" suffix and merges duplicate property sets by name', async () => {
    fetchClasses.mockResolvedValue([]);
    const result = await validateIfcData(
      [
        {
          type: 'IfcWallType',
          isDefinedBy: [
            {
              type: 'IfcPropertySet',
              name: 'Pset_Common',
              hasProperties: [
                { type: 'IfcPropertySingleValue', name: 'A', nominalValue: { type: 'IfcText', value: '1' } } as any,
              ],
            },
            {
              type: 'IfcPropertySet',
              name: 'Pset_Common',
              hasProperties: [
                { type: 'IfcPropertySingleValue', name: 'B', nominalValue: { type: 'IfcText', value: '2' } } as any,
              ],
            },
          ],
          hasAssociations: [],
        },
      ],
      makeClient(),
      'en-GB',
    );

    expect(result[0].type).toBe('IfcWall');
    expect(result[0].isDefinedBy).toHaveLength(1);
    expect(result[0].isDefinedBy?.[0].hasProperties).toHaveLength(2);
  });

  it('passes through unresolvable IfcClassificationReference associations unchanged', async () => {
    const ref = { type: 'IfcClassificationReference', name: 'Bad' } as any;
    const result = await validateIfcData(
      [{ type: 'IfcWall', hasAssociations: [ref] }],
      makeClient(),
      'en-GB',
    );
    expect(result[0].hasAssociations).toHaveLength(1);
    expect(result[0].hasAssociations?.[0]).toEqual(ref);
  });

  it('passes through IfcMaterial associations untouched', async () => {
    const result = await validateIfcData(
      [
        {
          type: 'IfcWall',
          hasAssociations: [{ type: 'IfcMaterial', name: 'Concrete' } as any],
        },
      ],
      makeClient(),
      'en-GB',
    );
    expect(result[0].hasAssociations).toEqual([{ type: 'IfcMaterial', name: 'Concrete' }]);
  });
});
