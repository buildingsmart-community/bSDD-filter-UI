import { createContext, useContext } from 'react';

import { BsddBridgeData } from '../common/IfcData/bsddBridgeData';
import { IfcEntity } from '../common/IfcData/ifc';

export interface BsddBridgeCallbacks {
  onSave?: (data: BsddBridgeData) => Promise<string>;
  onCancel?: () => void;
  onSearch?: (entities: IfcEntity[], key?: keyof IfcEntity) => void;
  onSelect?: (entities: IfcEntity[]) => void;
  loadSettings?: () => Promise<string>;
  loadBridgeData?: () => Promise<string>;
}

export const BsddBridgeContext = createContext<BsddBridgeCallbacks>({});

const notImplemented = (name: string) => () => {
  throw new Error(`${name} is not implemented`);
};

export function useBsddBridge(): Required<BsddBridgeCallbacks> {
  const context = useContext(BsddBridgeContext);
  return {
    onSave: context.onSave ?? notImplemented('onSave'),
    onCancel: context.onCancel ?? notImplemented('onCancel'),
    onSearch: context.onSearch ?? notImplemented('onSearch'),
    onSelect: context.onSelect ?? notImplemented('onSelect'),
    loadSettings: context.loadSettings ?? notImplemented('loadSettings'),
    loadBridgeData: context.loadBridgeData ?? notImplemented('loadBridgeData'),
  };
}
