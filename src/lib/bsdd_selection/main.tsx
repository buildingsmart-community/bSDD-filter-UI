import { Provider } from 'react-redux';

import { store } from '../common/app/store';
import { BsddBridgeData } from '../common/IfcData/bsddBridgeData';
import App from './App';

interface BsddSelectionProps {
  initialData: BsddBridgeData | undefined;
}

function BsddSelection({ initialData }: BsddSelectionProps) {
  return (
    <Provider store={store}>
      <App initialData={initialData} />
    </Provider>
  );
}

export default BsddSelection;
