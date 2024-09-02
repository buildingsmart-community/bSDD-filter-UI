import { BsddSettings } from '../IfcData/bsddBridgeData';

const defaultSettings: BsddSettings = {
  mainDictionary: {
    ifcClassification: {
      type: 'IfcClassification',
      source: 'VolkerWessels BVGO',
      edition: '0.1',
      editionDate: '0001-01-01T00:00:00',
      name: 'Basis bouwproducten O&E',
      description: '',
      location: 'https://identifier.buildingsmart.org/uri/digibase/basis_bouwproducten_oene/0.1',
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
        location: 'https://identifier.buildingsmart.org/uri/nlsfb/nlsfb2005/2.2',
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
