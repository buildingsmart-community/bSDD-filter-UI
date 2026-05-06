import { ClassContractV1 } from '../../../../../shared/bsdd-api/generated/types.gen';
interface PropertySetsProps {
    activeClassifications: ClassContractV1[];
    recursiveMode: boolean;
    mainClassificationUri: string | null;
}
declare function PropertySets({ activeClassifications, recursiveMode, mainClassificationUri }: PropertySetsProps): import("react/jsx-runtime").JSX.Element;
export default PropertySets;
