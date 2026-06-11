// Purpose: shared ranking for bSDD SearchInDictionary results. The endpoint
// matches names, codes, synonyms and descriptions but returns hits
// alphabetically, so indirect matches must be ranked down and tagged with why
// they matched.
import type { ClassSearchResultContractV1 } from '../../../../shared/bsdd-api/generated/types.gen';

export type SearchMatchedOn = 'synonym' | 'description';

export interface RankedClassSearchResult {
  bsddClass: ClassSearchResultContractV1 & { uri: string; name: string };
  matchedOn?: SearchMatchedOn;
}

export function rankClassSearchResults(
  classes: ClassSearchResultContractV1[] | null | undefined,
  query: string,
): RankedClassSearchResult[] {
  const lcQuery = query.toLowerCase();
  const ranked = (classes ?? [])
    .filter((c): c is RankedClassSearchResult['bsddClass'] => !!(c.uri && c.name))
    .map((bsddClass) => {
      const name = bsddClass.name.toLowerCase();
      const code = bsddClass.referenceCode?.toLowerCase() ?? '';
      let tier: number;
      let matchedOn: SearchMatchedOn | undefined;
      if (name === lcQuery) tier = 0;
      else if (name.startsWith(lcQuery)) tier = 1;
      else if (name.includes(lcQuery)) tier = 2;
      else if (code.includes(lcQuery)) tier = 3;
      else if (bsddClass.synonyms?.some((s) => s.toLowerCase().includes(lcQuery))) {
        tier = 4;
        matchedOn = 'synonym';
      } else {
        tier = 5;
        if (bsddClass.definition?.toLowerCase().includes(lcQuery)) matchedOn = 'description';
      }
      return { tier, result: { bsddClass, matchedOn } };
    });
  ranked.sort((a, b) => a.tier - b.tier || a.result.bsddClass.name.localeCompare(b.result.bsddClass.name));
  return ranked.map((r) => r.result);
}
