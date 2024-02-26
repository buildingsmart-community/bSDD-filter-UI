import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from '../../common/src/theme/theme';
import { HomePage } from './pages/Home.page';
import '../../common/src/i18n';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <HomePage />
    </MantineProvider>
  );
}
