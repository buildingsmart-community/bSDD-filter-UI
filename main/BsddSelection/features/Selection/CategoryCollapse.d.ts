import { IfcEntity } from '../../../common/IfcData/ifc';
interface CategoryCollapseProps {
    category: string;
    items: IfcEntity[];
    index: string;
}
declare function CategoryCollapse({ category, items, index }: CategoryCollapseProps): import("react/jsx-runtime").JSX.Element;
export default CategoryCollapse;
