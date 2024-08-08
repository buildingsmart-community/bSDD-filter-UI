import { Provider } from 'react-redux';

import { store } from '../common/app/store';
import App from './App';
import { BsddSelectionProps } from './BsddSelectionProps';

function BsddSelection({ initialData = undefined }: BsddSelectionProps) {
  return (
    <Provider store={store}>
      <App initialData={initialData} />
    </Provider>
  );
}

export default BsddSelection;
