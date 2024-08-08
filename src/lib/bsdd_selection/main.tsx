import App from './App';
import { BsddSelectionProps } from './BsddSelectionProps';

function BsddSelection({ initialData = undefined }: BsddSelectionProps) {
  return <App initialData={initialData} />;
}

export default BsddSelection;
