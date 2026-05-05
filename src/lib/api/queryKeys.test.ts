import { describe, expect, it } from 'vitest';

import { bsddKeys } from './queryKeys';

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
    expect(bsddKeys.classDetails('https://x', 'en')).toEqual(
      bsddKeys.classDetails('https://x', 'en'),
    );
  });

  it('differentiates by inputs', () => {
    expect(bsddKeys.dictionary('a')).not.toEqual(bsddKeys.dictionary('b'));
    expect(bsddKeys.dictionaries(true)).not.toEqual(bsddKeys.dictionaries(false));
    expect(bsddKeys.dictionaryClasses('uri', 'en')).not.toEqual(bsddKeys.dictionaryClasses('uri', 'nl'));
  });
});
