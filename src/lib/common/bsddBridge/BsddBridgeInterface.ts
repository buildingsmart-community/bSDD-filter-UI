export interface BsddBridge {
  bsddSearch?: (ifcEntityJson: string) => void;
  bsddSelect?: (ifcEntityJson: string) => void;
  save?: (ifcEntityJson: string) => Promise<string>;
  cancel?: () => void;
  loadSettings: () => Promise<string>;
  saveSettings?: (settings: string) => void;
  loadBridgeData: () => Promise<string>;
}
