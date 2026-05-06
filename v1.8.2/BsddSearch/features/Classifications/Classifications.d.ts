import { MouseEventHandler } from 'react';
import { ClassContractV1 } from '../../../../../shared/bsdd-api/generated/types.gen';
interface ClassificationsProps {
    height: number;
    handleMouseDown: MouseEventHandler<HTMLDivElement>;
    mainDictionaryClassification: ClassContractV1 | null;
    mainClassificationUri: string | null;
    onMainClassificationChange: (uri: string | null) => void;
}
declare function Classifications({ height, handleMouseDown, mainDictionaryClassification, mainClassificationUri, onMainClassificationChange, }: ClassificationsProps): import("react/jsx-runtime").JSX.Element;
export default Classifications;
