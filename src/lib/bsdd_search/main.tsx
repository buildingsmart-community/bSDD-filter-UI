import App from './App';
import { BsddSearchProps } from './BsddSearchProps';

function BsddSearch({ selectedIfcEntity }: BsddSearchProps) {
  return <App selectedIfcEntity={selectedIfcEntity} />;
}

export default BsddSearch;
