import { Provider } from 'react-redux';

import { store } from '../common/app/store';
import { BsddBridgeData } from '../common/IfcData/bsddBridgeData';
import App from './App';

interface BsddSearchProps {
  initialData: BsddBridgeData | undefined;
}

function BsddSearch({ initialData }: BsddSearchProps) {
  return (
    <Provider store={store}>
      <App initialData={initialData} />
    </Provider>
  );
}

export default BsddSearch;
