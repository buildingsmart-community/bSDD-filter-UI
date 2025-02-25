import { ClassContractV1 } from './BsddApiBase';
import { getPropertyClassificationUris, getSlicerClassificationUris } from './BsddApiHelpers';

describe('BsddApiHelpers', () => {
  describe('getPropertyClassificationUris', () => {
    it('should return an empty array if dictionaryClassification is null', () => {
      const result = getPropertyClassificationUris(null);
      expect(result).toEqual([]);
    });

    it('should return unique URIs of parent and child classifications', () => {
      const dictionaryClassification: ClassContractV1 = {
        classRelations: [
          { relationType: 'IsChildOf', relatedClassUri: 'uri1' },
          { relationType: 'IsChildOf', relatedClassUri: 'uri2' },
        ],
        reverseClassRelations: [
          { relationType: 'IsParentOf', classUri: 'uri3' },
          { relationType: 'IsParentOf', classUri: 'uri1' },
        ],
      } as ClassContractV1;

      const result = getPropertyClassificationUris(dictionaryClassification);
      expect(result).toEqual(['uri1', 'uri2', 'uri3']);
    });

    it('should filter out unwanted RelationTypes', () => {
      const dictionaryClassification: ClassContractV1 = {
        classRelations: [
          { relationType: 'IsChildOf', relatedClassUri: 'uri1' },
          { relationType: 'HasPart', relatedClassUri: 'uri2' },
        ],
        reverseClassRelations: [
          { relationType: 'IsParentOf', classUri: 'uri3' },
          { relationType: 'IsPartOf', classUri: 'uri4' },
        ],
      } as ClassContractV1;

      const result = getPropertyClassificationUris(dictionaryClassification);
      expect(result).toEqual(['uri1', 'uri3']);
    });
  });

  describe('getSlicerClassificationUris', () => {
    it('should return an empty array if dictionaryClassification is null', () => {
      const result = getSlicerClassificationUris(null, undefined);
      expect(result).toEqual([]);
    });

    it('should return unique URIs of related IFC entities, class relations, and reverse class relations', () => {
      const dictionaryClassification: ClassContractV1 = {
        relatedIfcEntityNames: ['entity1', 'entity2'],
        classRelations: [
          { relationType: 'IsChildOf', relatedClassUri: 'uri1' },
          { relationType: 'IsChildOf', relatedClassUri: 'uri2' },
        ],
        reverseClassRelations: [
          { relationType: 'IsParentOf', classUri: 'uri3' },
          { relationType: 'IsParentOf', classUri: 'uri1' },
        ],
      } as ClassContractV1;

      const ifcDictionaryUri = 'http://example.com/ifc';
      const result = getSlicerClassificationUris(dictionaryClassification, ifcDictionaryUri);
      expect(result).toEqual([
        'http://example.com/ifc/class/entity1',
        'http://example.com/ifc/class/entity2',
        'uri1',
        'uri2',
        'uri3',
      ]);
    });

    it('should not filter out any RelationTypes', () => {
      const dictionaryClassification: ClassContractV1 = {
        relatedIfcEntityNames: ['entity1'],
        classRelations: [
          { relationType: 'IsChildOf', relatedClassUri: 'uri1' },
          { relationType: 'HasPart', relatedClassUri: 'uri2' },
        ],
        reverseClassRelations: [
          { relationType: 'IsParentOf', classUri: 'uri3' },
          { relationType: 'IsPartOf', classUri: 'uri4' },
        ],
      } as ClassContractV1;

      const ifcDictionaryUri = 'http://example.com/ifc';
      const result = getSlicerClassificationUris(dictionaryClassification, ifcDictionaryUri);
      expect(result).toEqual(['http://example.com/ifc/class/entity1', 'uri1', 'uri2', 'uri3', 'uri4']);
    });
  });
});
