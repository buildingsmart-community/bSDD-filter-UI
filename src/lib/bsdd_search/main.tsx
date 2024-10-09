import BsddSearch from './BsddSearch';
import { BsddSearchProps } from './BsddSearchProps';

function Main({ selectedIfcEntity }: BsddSearchProps) {
  return <BsddSearch selectedIfcEntity={selectedIfcEntity} />;
}

export default Main;
