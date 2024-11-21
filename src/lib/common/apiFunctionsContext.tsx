import { createContext, ReactNode, useContext } from 'react';

import { IfcEntity } from './IfcData/ifc';
import { BsddBridgeData } from './IfcData/bsddBridgeData';

interface ApiFunctionsContextType {
  loadSettings?: () => Promise<string>;
  loadBridgeData?: () => Promise<string>;
  bsddSearch?: (bsddBridgeData: BsddBridgeData) => void;
  bsddSelect?: (ifcEntities: IfcEntity[]) => void;
  bsddSearchSave?: (bsddBridgeData: BsddBridgeData) => Promise<string>;
  bsddSearchCancel?: () => void;
}

const ApiFunctionsContext = createContext<ApiFunctionsContextType | undefined>(undefined);

interface ApiFunctionsProviderProps {
  value: ApiFunctionsContextType;
  children: ReactNode;
}

export function ApiFunctionsProvider({ value, children }: ApiFunctionsProviderProps) {
  return <ApiFunctionsContext.Provider value={value}>{children}</ApiFunctionsContext.Provider>;
}

const notImplemented = (functionName: string) => () => {
  throw new Error(`${functionName} is not implemented`);
};

export const useApiFunctions = (): Required<ApiFunctionsContextType> => {
  const context = useContext(ApiFunctionsContext);
  if (!context) {
    throw new Error('useApiFunctions must be used within an ApiFunctionsProvider');
  }
  return {
    loadSettings: context.loadSettings ?? notImplemented('bsddSearchLoadSettings'),
    loadBridgeData: context.loadBridgeData ?? notImplemented('bsddSearchLoadBridgeData'),
    bsddSearch: context.bsddSearch ?? notImplemented('bsddSearch'),
    bsddSelect: context.bsddSelect ?? notImplemented('bsddSelect'),
    bsddSearchSave: context.bsddSearchSave ?? notImplemented('bsddSearchSave'),
    bsddSearchCancel: context.bsddSearchCancel ?? notImplemented('bsddSearchCancel'),
  };
};
