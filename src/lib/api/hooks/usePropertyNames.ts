import { useMemo } from 'react';
import { useQueries } from '@tanstack/react-query';

import type { ClassPropertyContractV1 } from '../../../../shared/bsdd-api/generated/types.gen';
import { fetchPropertyName } from '../fetchers/classes';
import { bsddKeys } from '../queryKeys';

/**
 * Fetches natural-language property names, one query per property so each is
 * individually cached and re-used across different classes.
 * Returns a stable-reference map { [propertyUri]: name } via combine's structural sharing.
 */
export function usePropertyNames(
  classProperties: ClassPropertyContractV1[],
  language: string,
): { data: Record<string, string>; isLoading: boolean } {
  const propsWithUri = useMemo(
    () =>
      classProperties.filter(
        (p): p is ClassPropertyContractV1 & { propertyUri: string } =>
          typeof p.propertyUri === 'string' && p.propertyUri.length > 0,
      ),
    [classProperties],
  );

  return useQueries({
    queries: propsWithUri.map((p) => ({
      queryKey: bsddKeys.propertyName(p.propertyUri, language),
      queryFn: () => fetchPropertyName(p, language),
      staleTime: 1000 * 60 * 60,
      gcTime: 1000 * 60 * 60 * 24,
    })),
    // combine applies structural sharing: only returns a new reference when data changes,
    // preventing the PropertySets effect from triggering on every render.
    combine: (results) => {
      const data: Record<string, string> = {};
      let isLoading = false;
      for (let i = 0; i < propsWithUri.length; i++) {
        const r = results[i];
        if (r?.isLoading) isLoading = true;
        if (r?.data) data[propsWithUri[i].propertyUri] = r.data;
      }
      return { data, isLoading };
    },
  });
}
