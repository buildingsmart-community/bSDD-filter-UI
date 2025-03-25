import { useAppSelector } from '../common/app/hooks';
import Importer from './features/Importer/Importer';
import Validator from './features/Validator/Validator';

function IdsComponent() {
  const ids = useAppSelector((state) => state.ids.idsFile);
  
  return (
    <div>
    <Importer/>
      {ids && (
        <Validator />
      )}
    </div>
  );
}

export default IdsComponent;
