import BsddSearch from './lib/bsdd_search/main';
import { ApiFunctionsProvider } from './lib/common/apiFunctionsContext';
import useCefSharpBridge from './lib/common/bsddBridge/useCefSharpBridge';

function BsddSearchLoader() {
  const apiFunctions = useCefSharpBridge();

  return (
    <ApiFunctionsProvider value={apiFunctions}>
      <BsddSearch />
    </ApiFunctionsProvider>
  );
}

export default BsddSearchLoader;
