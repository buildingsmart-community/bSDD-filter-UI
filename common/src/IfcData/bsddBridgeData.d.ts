import {IfcEntity} from "./ifc";


// bSDD API environments:
// - test: 'https://test.bsdd.buildingsmart.org'
// - production: 'https://api.bsdd.buildingsmart.org'

type URI = string;
type UUID = string;

export interface BsddDictionary {
  dictionaryUri: URI;
  dictionaryName: string;
  parameterName: string;
  parameterId: UUID;
  parameterMapping: string;
}

export interface BsddSettings {
  bsddApiEnvironment: string = 'production'; // default 'production'
  mainDictionary: BsddDictionary; // Uri
  filterDictionaries: BsddDictionary[]; // Uri[]
  language: string;
}

export interface BsddBridgeData {
  name?: string;
  settings: BsddSettings;
  ifcData: IfcEntity[];
}
