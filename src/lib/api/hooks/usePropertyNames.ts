import { useQuery } from '@tanstack/react-query';

import { ClassPropertyContractV1 } from '../../common/BsddApi/BsddApiBase';
import { fetchPropertyNaturalLanguageNames } from '../fetchers/classes';
import { bsddKeys } from '../queryKeys';

export function usePropertyNames(classProperties: ClassPropertyContractV1[], language: string) {
  const uris = classProperties.map((p) => p.propertyUri).filter(Boolean) as string[];

  return useQuery({
    queryKey: bsddKeys.propertyNames(uris, language),
    queryFn: () => fetchPropertyNaturalLanguageNames(classProperties, language),
    staleTime: 1000 * 60 * 60, // 1 hour
    enabled: classProperties.length > 0,
  });
}
