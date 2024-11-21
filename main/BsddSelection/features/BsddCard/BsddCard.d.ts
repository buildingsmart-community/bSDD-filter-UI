import { IfcEntity } from '../../../common/IfcData/ifc';
import { Color } from '../../../common/tools/colors';
interface BsddCardProps {
    item: IfcEntity;
    index: number;
    setCardColor: (index: number, color: Color) => void;
}
/**
 * Renders a card component for displaying information about a bSDD entity.
 *
 * @param item - The bSDD entity to display.
 * @param bsddClass - The bSDD class associated with the entity.
 * @param setCardColor - A function to add color to the card.
 * @returns The rendered card component.
 */
declare function BsddCard({ item: ifcEntity, index, setCardColor: setCategoryColor }: BsddCardProps): import("react/jsx-runtime").JSX.Element;
export default BsddCard;
