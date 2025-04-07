import { BsddBridgeData } from '../lib/common/IfcData/bsddBridgeData';

// eslint-disable-next-line import/prefer-default-export
export const mockData: BsddBridgeData = {
  settings: {
    mainDictionary: {
      ifcClassification: {
        type: 'IfcClassification',
        source: 'waternet',
        edition: '0.8',
        editionDate: '0001-01-01T00:00:00',
        name: 'Waternet OTL',
        description: '',
        location: 'https://otl.waternet.nl',
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
          name: 'volkerwesselsbvgo Demo NL-SfB tabel 1',
        },
        parameterMapping: 'Assembly Code',
      },
    ],
    language: 'nl-NL',
    includeTestDictionaries: true,
  },
  propertyIsInstanceMap: {
    'Attributes/Name': true,
    'IsExternal': false,
    'Omvang/Bouwnummer': true,
    'FireRating': true,
    'ObjectType': false,
    'ILS O&E/Kleur': true,
  },
  ifcData: [
  ],
};
