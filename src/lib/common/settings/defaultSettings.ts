import { BsddSettings } from '../IfcData/bsddBridgeData';

const defaultSettings: BsddSettings = {
  mainDictionary: {
    ifcClassification: {
      type: 'IfcClassification',
      location: 'https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3.0',
      editionDate: '0001-01-01T00:00:00',
      name: 'IFC',
    },
    parameterMapping: 'Description',
  },
  ifcDictionary: {
    ifcClassification: {
      type: 'IfcClassification',
      location: 'https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3',
      editionDate: '0001-01-01T00:00:00',
      name: 'IFC',
    },
    parameterMapping: 'Export Type to IFC As',
  },
  filterDictionaries: [
    {
      ifcClassification: {
        type: 'IfcClassification',
        location: 'https://data.ketenstandaard.nl/publications/nlsfb/2021',
        editionDate: '0001-01-01T00:00:00',
        name: 'NL-SfB 2005',
      },
      parameterMapping: 'Assembly Code',
    },
  ],
  language: 'nl-NL',
  includeTestDictionaries: false,
};

export default defaultSettings;
