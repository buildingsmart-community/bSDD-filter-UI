// bSDD API environments:
// - test: 'https://test.bsdd.buildingsmart.org'
// - production: 'https://api.bsdd.buildingsmart.org'

export interface BsddBridgeData {
  name?: string;
  bsddApiEnvironment: string = 'production'; // default 'production'
  mainDictionaryUri: string; // Uri
  filterDictionaryUris: string[]; // Uri[]
  ifcData: IfcEntity[];
}