import { Provider } from 'react-redux';

import { store } from '../common/app/store';
import App from './App';
import { BsddSearchProps } from './BsddSearchProps';

function BsddSearch(bsddSearchProps: BsddSearchProps) {
  return (
    <Provider store={store}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <App {...bsddSearchProps} />
    </Provider>
  );
}

export default BsddSearch;
