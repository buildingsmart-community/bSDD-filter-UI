import { useEffect, useState } from 'react';

import { useAppSelector } from '../common/app/hooks';
import { selectBsddDictionariesLoaded } from '../common/slices/bsddSlice';
import Selection from './features/Selection/Selection';

function BsddSelection() {
  const bsddDictionariesLoaded = useAppSelector(selectBsddDictionariesLoaded);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (bsddDictionariesLoaded) {
      setLoading(false);
    }
  }, [bsddDictionariesLoaded]);

  return <Selection loading={loading} />;
}

export default BsddSelection;
