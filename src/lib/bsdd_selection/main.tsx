import { BsddSelectionProps } from './BsddSelectionProps';
import BsddSelection from './pages/Home.page';

function Main({ initialData = undefined }: BsddSelectionProps) {
  return <BsddSelection initialData={initialData} />;
}

export default Main;
