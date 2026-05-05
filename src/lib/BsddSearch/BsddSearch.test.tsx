import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';

import { BsddBridgeContext } from '../providers/BsddBridgeContext';
import BsddSearch from './BsddSearch';

const noop = async () => '';

function renderWithProviders(ui: ReactNode) {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false, gcTime: 0 } } });
  return render(
    <QueryClientProvider client={client}>
      <MantineProvider>
        <BsddBridgeContext.Provider
          value={{
            onSave: noop,
            onCancel: () => {},
            onSearch: () => {},
            onSelect: () => {},
            loadSettings: noop,
            loadBridgeData: noop,
          }}
        >
          {ui}
        </BsddBridgeContext.Provider>
      </MantineProvider>
    </QueryClientProvider>,
  );
}

test('renders without crashing', () => {
  renderWithProviders(<BsddSearch />);
});
