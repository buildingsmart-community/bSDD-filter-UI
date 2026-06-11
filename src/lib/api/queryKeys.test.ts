import { describe, expect, it } from 'vitest';

import { bsddKeys, isPersistableQueryKey } from './queryKeys';

describe('bsddKeys', () => {
  it('shares the "bsdd" namespace prefix on every key', () => {
    expect(bsddKeys.all[0]).toBe('bsdd');
    expect(bsddKeys.dictionaries(true)[0]).toBe('bsdd');
    expect(bsddKeys.dictionary('uri')[0]).toBe('bsdd');
    expect(bsddKeys.dictionaryClasses('uri', 'en')[0]).toBe('bsdd');
    expect(bsddKeys.classDetails('uri', 'en')[0]).toBe('bsdd');
    expect(bsddKeys.classes(['uri'], 'en')[0]).toBe('bsdd');
    expect(bsddKeys.search('uri', 'q')[0]).toBe('bsdd');
    expect(bsddKeys.propertyName('uri', 'en')[0]).toBe('bsdd');
  });

  it('produces stable keys for identical inputs', () => {
    expect(bsddKeys.dictionary('https://x')).toEqual(bsddKeys.dictionary('https://x'));
    expect(bsddKeys.classDetails('https://x', 'en')).toEqual(bsddKeys.classDetails('https://x', 'en'));
  });

  it('differentiates by inputs', () => {
    expect(bsddKeys.dictionary('a')).not.toEqual(bsddKeys.dictionary('b'));
    expect(bsddKeys.dictionaries(true)).not.toEqual(bsddKeys.dictionaries(false));
    expect(bsddKeys.dictionaryClasses('uri', 'en')).not.toEqual(bsddKeys.dictionaryClasses('uri', 'nl'));
    expect(bsddKeys.search('uri', 'q', 'en')).not.toEqual(bsddKeys.search('uri', 'q', 'nl'));
    expect(bsddKeys.search('uri', 'q', 'en')).not.toEqual(bsddKeys.search('uri', 'q'));
  });
});

describe('isPersistableQueryKey', () => {
  it('excludes ephemeral search results from persistence', () => {
    expect(isPersistableQueryKey(bsddKeys.search('uri', 'q'))).toBe(false);
    expect(isPersistableQueryKey(bsddKeys.search('uri', 'q', 'en'))).toBe(false);
  });

  it('keeps everything else persistable', () => {
    expect(isPersistableQueryKey(bsddKeys.dictionaries(false))).toBe(true);
    expect(isPersistableQueryKey(bsddKeys.dictionary('uri'))).toBe(true);
    expect(isPersistableQueryKey(bsddKeys.dictionaryClasses('uri', 'en'))).toBe(true);
    expect(isPersistableQueryKey(bsddKeys.dictionaryClassesInfinite('uri', 'en'))).toBe(true);
    expect(isPersistableQueryKey(bsddKeys.classDetails('uri', 'en'))).toBe(true);
    expect(isPersistableQueryKey(bsddKeys.propertyName('uri', 'en'))).toBe(true);
  });
});
