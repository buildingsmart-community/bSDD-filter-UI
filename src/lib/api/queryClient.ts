import { QueryClient } from '@tanstack/react-query';

export function createBsddQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 15, // 15 minutes default
        gcTime: 1000 * 60 * 60, // 1 hour default garbage collection
        retry: 2,
        refetchOnWindowFocus: false,
      },
    },
  });
}
