import React, { createContext, ReactNode, useContext } from 'react';

interface ApiFunctionsContextType {
  loadSettings?: () => Promise<any>;
  bsddSearchClick?: (ifcProduct: any) => void;
  bsddSelect?: (ifcProduct: any) => void;
  bsddSearchSave?: (ifcEntityJson: string) => Promise<string>;
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
    bsddSearchClick: context.bsddSearchClick ?? notImplemented('bsddSearchClick'),
    bsddSelect: context.bsddSelect ?? notImplemented('bsddSelect'),
    bsddSearchSave: context.bsddSearchSave ?? notImplemented('bsddSearchSave'),
    bsddSearchCancel: context.bsddSearchCancel ?? notImplemented('bsddSearchCancel'),
  };
};
