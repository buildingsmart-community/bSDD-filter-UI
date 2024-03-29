import '@mantine/core/styles.css';
import '../../common/src/i18n';

import { MantineProvider } from '@mantine/core';

import { theme } from '../../common/src/theme/theme';
import HomePage from './pages/Home.page';

function App() {
  return (
    <MantineProvider theme={theme}>
      <HomePage />
    </MantineProvider>
  );
}

export default App;
