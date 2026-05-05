import { useEffect, useMemo } from 'react';

import { useAuthToken } from './auth/useAuthToken';
import { setBsddAccessToken } from './lib/api/bsddApiInstance';
import BsddSearch from './lib/BsddSearch';
import useCefSharpBridge from './lib/common/bsddBridge/useCefSharpBridge';
import { BsddBridgeContext } from './lib/providers/BsddBridgeContext';

function BsddSearchLoader() {
  const callbacks = useCefSharpBridge();
  const accessToken = useAuthToken();
  const bridge = useMemo(() => ({ ...callbacks, accessToken }), [callbacks, accessToken]);

  useEffect(() => {
    setBsddAccessToken(accessToken);
  }, [accessToken]);

  return (
    <BsddBridgeContext.Provider value={bridge}>
      <BsddSearch />
    </BsddBridgeContext.Provider>
  );
}

export default BsddSearchLoader;
