import { IfcClassification, IfcEntity } from './ifc';

// bSDD API environments:
// - test: 'https://test.bsdd.buildingsmart.org'
// - production: 'https://api.bsdd.buildingsmart.org'

type URI = string;
type UUID = string;

export interface BsddDictionary {
  ifcClassification: IfcClassification;
  parameterMapping: string;
}

export interface BsddSettings {
  bsddApiEnvironment: string | null; // default 'production'
  mainDictionary: BsddDictionary | null; // Uri
  filterDictionaries: BsddDictionary[]; // Uri[]
  language: string;
  includeTestDictionaries: boolean;
}

export interface BsddBridgeData {
  name?: string | null;
  settings: BsddSettings;
  ifcData: IfcEntity[];
}
