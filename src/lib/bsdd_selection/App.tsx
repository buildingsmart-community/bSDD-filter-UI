import '@mantine/core/styles.css';
import '../common/i18n';

import { MantineProvider } from '@mantine/core';

import { theme } from '../common/theme/theme';
import { BsddSelectionProps } from './BsddSelectionProps';
import HomePage from './pages/Home.page';

function App({ initialData }: BsddSelectionProps) {
  return (
    <MantineProvider theme={theme}>
      <HomePage initialData={initialData} />
    </MantineProvider>
  );
}

export default App;
