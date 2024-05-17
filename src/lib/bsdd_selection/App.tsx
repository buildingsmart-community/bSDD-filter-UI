import '@mantine/core/styles.css';
import '../common/i18n';

import { MantineProvider } from '@mantine/core';

import { BsddBridgeData } from '../common/IfcData/bsddBridgeData';
import { theme } from '../common/theme/theme';
import HomePage from './pages/Home.page';

interface BsddSelectionProps {
  initialData: BsddBridgeData | undefined;
}

function App({ initialData }: BsddSelectionProps) {
  return (
    <MantineProvider theme={theme}>
      <HomePage initialData={initialData} />
    </MantineProvider>
  );
}

export default App;
