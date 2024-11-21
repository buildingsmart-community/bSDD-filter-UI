export interface BsddBridge {
    bsddSearch?: (ifcEntitiesJson: string) => void;
    bsddSelect?: (ifcEntitiesJson: string) => void;
    save?: (bsddBridgeDataJson: string) => Promise<string>;
    cancel?: () => void;
    loadSettings: () => Promise<string>;
    saveSettings?: (settings: string) => void;
    loadBridgeData: () => Promise<string>;
}
