import { BsddBridgeData } from './bsddBridgeData';

// eslint-disable-next-line import/prefer-default-export
export const mockData: BsddBridgeData = {
  settings: {
    bsddApiEnvironment: 'test',
    mainDictionary: {
      ifcClassification: {
        type: 'IfcClassification',
        source: 'digibase',
        edition: '0.1',
        editionDate: '0001-01-01T00:00:00',
        name: 'VolkerWessels Bouw & vastgoed',
        description: '',
        location: 'https://identifier.buildingsmart.org/uri/digibase/volkerwesselsbv/0.1',
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
    language: 'en-GB',
    includeTestDictionaries: false,
  },
  ifcData: [
    {
      type: 'IfcObject',
      name: 'NLRS_00_SI_nulpunt_vws - nulpunt',
      description: 'Project nulpunt',
      tag: '307327',
      hasAssociations: [
        {
          identification: 'Project nulpunt',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: 'Project nulpunt',
        },
        {
          identification: '0-.0',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021',
          },
          type: 'IfcClassificationReference',
          name: '0.0',
        },
      ],
      isDefinedBy: [
        {
          type: 'IfcPropertySet',
          name: 'CPset_Sample_Door_Manufacturer',
          hasProperties: [
            {
              type: 'IfcPropertyEnumeratedValue',
              name: 'brandwerendheid',
              enumerationValues: [
                {
                  type: 'IfcText',
                  value: '30 min',
                },
              ],
            },
            {
              type: 'IfcPropertySingleValue',
              name: 'kozijnmerk',
              nominalValue: {
                type: 'IfcLabel',
                value: 'A',
              },
            },
            {
              type: 'IfcPropertySingleValue',
              name: 'rookklasse',
              nominalValue: {
                type: 'IfcLabel',
                value: 'S200',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'IfcWasteTerminal',
      name: 'NLRS_52_PF_bakgoot_gen_vws - bakgoot',
      description: 'bakgoot',
      tag: '798190',
      hasAssociations: [
        {
          identification: 'bakgoot',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: 'bakgoot',
        },
      ],
    },
    {
      type: 'IfcWasteTerminal',
      name: 'NLRS_52_PF_LB_bakgoot_beugel_B44_gen_vws - N47_VWS_beugel_bakgoot_B44',
      description: 'beugel bakgoot',
      tag: '798257',
      hasAssociations: [
        {
          identification: 'beugel bakgoot',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: 'beugel bakgoot',
        },
        {
          identification: '52.10',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021',
          },
          type: 'IfcClassificationReference',
          name: '52.10',
        },
      ],
    },
    {
      type: 'IfcWasteTerminal',
      name: 'NLRS_52_PF_LB_bakgoot_goot_gen_vws - N47_VWS_bakgoot',
      description: 'bakgoot',
      tag: '798256',
      hasAssociations: [
        {
          identification: 'bakgoot',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: 'bakgoot',
        },
        {
          identification: '52.10',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021',
          },
          type: 'IfcClassificationReference',
          name: '52.10',
        },
      ],
    },
    {
      name: 'NLRS_52_PF_FB_bakgoot_hwa_gen_vws - N47_VWS_hwa_bakgoot',
      description: 'hwa bakgoot',
      tag: '798259',
      hasAssociations: [
        {
          identification: 'hwa bakgoot',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: 'hwa bakgoot',
        },
        {
          identification: '52.10',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021',
          },
          type: 'IfcClassificationReference',
          name: '52.10',
        },
      ],
    },
    {
      name: 'NLRS_52_PF_LB_bakgoot_eindstuk_gen_vws - N47_VWS_eindstuk_bakgoot',
      description: 'bakgoot eindstuk',
      tag: '798258',
      hasAssociations: [
        {
          identification: 'bakgoot eindstuk',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: 'bakgoot eindstuk',
        },
        {
          identification: '52.10',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021',
          },
          type: 'IfcClassificationReference',
          name: '52.10',
        },
      ],
    },
    {
      type: 'IfcWall',
      name: 'gevelafwerking_baksteen - NLRS_21_WA_TLB_metselwerk waalformaat_gen_vws',
      description: 'gevelafwerking_baksteen',
      tag: '692064',
      hasAssociations: [
        {
          identification: 'gevelafwerking_baksteen',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: 'gevelafwerking_baksteen',
        },
        {
          identification: '21.12',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021',
          },
          type: 'IfcClassificationReference',
          name: '21.12',
        },
      ],
    },
    {
      type: 'IfcWall',
      name: 'Basic Wall - NLRS_21_WA_TLB_beton prefab 100mm_gen_vws',
      description: 'beton prefab 150mm',
      tag: '692066',
      hasAssociations: [
        {
          identification: 'beton prefab 150mm',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: 'beton prefab 150mm',
        },
      ],
    },
    {
      type: 'IfcWall',
      name: 'Basic Wall - NLRS_21_WA_TLB_isolatie 131mm_gen_vws',
      description: 'isolatie Mupan Ultra Xs 138mm',
      tag: '692068',
      hasAssociations: [
        {
          identification: 'isolatie Mupan Ultra Xs 138mm',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: 'isolatie Mupan Ultra Xs 138mm',
        },
      ],
    },
    {
      type: 'IfcElementAssembly',
      name: 'NLRS_31_gevel-sparingsmaker_3HW_vws - raam',
      description: 'gevel-sparingsmaker spouwwand',
      tag: '692070',
      hasAssociations: [
        {
          identification: 'gevel-sparingsmaker spouwwand',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: 'gevel-sparingsmaker spouwwand',
        },
        {
          identification: '31',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021',
          },
          type: 'IfcClassificationReference',
          name: '31',
        },
      ],
    },
    {
      type: 'IfcElementAssembly',
      name: 'NRLS_30_WI_UN_wandsparing-sam-rechthoek-VW - buitenbladsparing, betonnen waterslag + stalen latei',
      description: 'gevel-sparingsmaker bladsparing',
      tag: '693977',
      hasAssociations: [
        {
          identification: 'gevel-sparingsmaker bladsparing',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: 'gevel-sparingsmaker bladsparing',
        },
        {
          identification: '31',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021',
          },
          type: 'IfcClassificationReference',
          name: '31',
        },
      ],
    },
    {
      type: 'IfcElementAssembly',
      name: 'NRLS_30_WI_UN_wandsparing-sam-rechthoek-VW - isolatiesparing, stelkozijn',
      description: 'gevel-sparingsmaker bladsparing',
      tag: '693976',
      hasAssociations: [
        {
          identification: 'gevel-sparingsmaker bladsparing',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: 'gevel-sparingsmaker bladsparing',
        },
        {
          identification: '31',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021',
          },
          type: 'IfcClassificationReference',
          name: '31',
        },
      ],
    },
    {
      type: 'IfcElementAssembly',
      name: 'NRLS_30_WI_UN_wandsparing-sam-rechthoek-VW - binnenbladsparing, vensterbank',
      description: 'gevel-sparingsmaker bladsparing',
      tag: '693978',
      hasAssociations: [
        {
          identification: 'gevel-sparingsmaker bladsparing',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: 'gevel-sparingsmaker bladsparing',
        },
        {
          identification: '31',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021',
          },
          type: 'IfcClassificationReference',
          name: '31',
        },
      ],
    },
    {
      type: 'IfcElementAssembly',
      name: 'NLRS_30_GS_wand_bui_sparing_omranding_RE_leeg - standaard',
      description: 'gevelsparingsmaker omkadering bladsparing buiten',
      tag: '693969',
      hasAssociations: [
        {
          identification: 'gevelsparingsmaker omkadering bladsparing buiten',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: 'gevelsparingsmaker omkadering bladsparing buiten',
        },
      ],
    },
    {
      name: 'NLRS_00_GM_WPB_LEEG_ISR - std',
      description: 'ISR leeg',
      tag: '693963',
      hasAssociations: [
        {
          identification: 'ISR leeg',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: 'ISR leeg',
        },
      ],
    },
    {
      name: 'NLRS_28_Stalen-latei_vws - NLRS_28_Stalen-latei_vws',
      description: '? ',
      tag: '694001',
      hasAssociations: [
        {
          identification: '? ',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: '? ',
        },
      ],
    },
    {
      name: 'NLRS_41_GM_raamdorpelsteen_beton_vws - RD50/94x160',
      description: '? ',
      tag: '693973',
      hasAssociations: [
        {
          identification: '? ',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: '? ',
        },
      ],
    },
    {
      name: 'NLRS_31_GM_WPB_spouwlat met sponning_gen_vws - kunststof boven',
      description: '? ',
      tag: '693982',
      hasAssociations: [
        {
          identification: '? ',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: '? ',
        },
      ],
    },
    {
      name: 'NLRS_31_GM_WPB_spouwlat met sponning_gen_vws - kunststof onder',
      description: '? ',
      tag: '693980',
      hasAssociations: [
        {
          identification: '? ',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: '? ',
        },
      ],
    },
    {
      name: 'NLRS_31_GM_WPB_spouwlat met sponning_gen_vws - kunststof zijkant',
      description: '? ',
      tag: '693981',
      hasAssociations: [
        {
          identification: '? ',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: '? ',
        },
      ],
    },
    {
      name: 'NLRS_31_GM_WPB_vensterbank_gen_vws - 20x200mm multiplex',
      description: '? ',
      tag: '693960',
      hasAssociations: [
        {
          identification: '? ',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: '? ',
        },
        {
          identification: '31.20',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021',
          },
          type: 'IfcClassificationReference',
          name: '31.20',
        },
      ],
    },
    {
      type: 'IfcWindow',
      name: 'NLRS_31_WI_WPB_kozijn_2vlaks_gen_vws - D2 - transcarbo',
      description: 'JA01-00',
      tag: '692071',
      hasAssociations: [
        {
          identification: 'JA01-00',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: 'JA01-00',
        },
        {
          identification: '31.31',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021',
          },
          type: 'IfcClassificationReference',
          name: '31.31',
        },
      ],
    },
    {
      name: 'NLRS_30_WI_WP_kozijn draaideel_vws - kunststof_dubbel',
      tag: '693992',
      hasAssociations: [
        {
          identification: '31.25',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021',
          },
          type: 'IfcClassificationReference',
          name: '31.25',
        },
      ],
    },
    {
      name: 'NLRS_30_WI_WP_kozijn draairichting_gen_vws - kozijn_draairichting',
      description: 'draairichting raamkozijn',
      tag: '693984',
      hasAssociations: [
        {
          identification: 'draairichting raamkozijn',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: 'draairichting raamkozijn',
        },
        {
          identification: '31.20',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021',
          },
          type: 'IfcClassificationReference',
          name: '31.20',
        },
      ],
    },
    {
      name: 'NLRS_30_WI_WPB_vlakvulling_vast_vws - dubbel',
      description: 'isolerend glas',
      tag: '693989',
      hasAssociations: [
        {
          identification: 'isolerend glas',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: 'isolerend glas',
        },
        {
          identification: '31.20',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021',
          },
          type: 'IfcClassificationReference',
          name: '31.20',
        },
      ],
    },
    {
      name: 'Floor - NLRS_23_FL_LB_kanaalplaatvloer_200_gen_vws',
      description: 'kanaalplaatvloer 200mm',
      tag: '798289',
      hasAssociations: [
        {
          identification: 'kanaalplaatvloer 200mm',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: 'kanaalplaatvloer 200mm',
        },
      ],
    },
    {
      name: 'Basic Roof - NLRS_47_RO_pannen+panlatten_074_gen_vws',
      description: 'dakpannen en panlatten 74mm',
      tag: '798292',
      hasAssociations: [
        {
          identification: 'dakpannen en panlatten 74mm',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: 'dakpannen en panlatten 74mm',
        },
      ],
    },
    {
      type: 'IfcRoof',
      name: 'NLRS_27_GM_LB_knieschot_gen_vws - regels 30x58/spaanplaat 11mm',
      description: 'knieschot',
      tag: '798290',
      hasAssociations: [
        {
          identification: 'knieschot',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: 'knieschot',
        },
      ],
    },
    {
      type: 'IfcRoof',
      name: 'NLRS_27_GM_FWB_muurplaat rond_anker_gen_vws - ronde muurplaat',
      description: 'muurplaat',
      tag: '798293',
      hasAssociations: [
        {
          identification: 'muurplaat',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: 'muurplaat',
        },
      ],
    },
    {
      type: 'IfcRoof',
      name: 'NLRS_27_GM_FWB_muurplaatanker_gen_vws - h=100 / b=50',
      description: 'muurplaat',
      tag: '798254',
      hasAssociations: [
        {
          identification: 'muurplaat',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: 'muurplaat',
        },
        {
          identification: '27.22',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021',
          },
          type: 'IfcClassificationReference',
          name: '27.22',
        },
      ],
    },
    {
      name: 'NLRS_27_GM_FWB_muurplaat_rond_gen_vws - b=70 / h=140',
      tag: '798191',
      hasAssociations: [
        {
          identification: '27.22',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021',
          },
          type: 'IfcClassificationReference',
          name: '27.22',
        },
      ],
    },
    {
      name: 'Floor - NLRS_43_FL_LB_cementdekvloer_070_gen_vws',
      description: 'cementdekvloer 70mm',
      tag: '798287',
      hasAssociations: [
        {
          identification: 'cementdekvloer 70mm',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: 'cementdekvloer 70mm',
        },
      ],
    },
    {
      type: 'IfcSlab',
      name: 'Floor - NLRS_23_FL_LB_kanaalplaatvloer_geïsoleerd_320_gen_vws',
      tag: '1003479',
      hasAssociations: [
        {
          identification: '21.21',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021',
          },
          type: 'IfcClassificationReference',
          name: '21.21',
        },
      ],
    },
    {
      type: 'IfcRoof',
      name: 'Basic Roof - NLRS_27_RO_dakplaat_scharnierkap_302_gen_vws',
      description: 'dak_hout_scharnierkap',
      tag: '798291',
      hasAssociations: [
        {
          identification: 'dak_hout_scharnierkap',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: 'dak_hout_scharnierkap',
        },
      ],
    },
    {
      type: 'IfcWall',
      name: 'wand_hout_HSB_opbouw_ntb - NLRS_22_WA_TLB_HSB_070_gen_vws',
      description: 'wand_hout_HSB_opbouw_ntb',
      tag: '1010468',
      hasAssociations: [
        {
          identification: 'wand_hout_HSB_opbouw_ntb',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: 'wand_hout_HSB_opbouw_ntb',
        },
        {
          identification: '22.20',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021',
          },
          type: 'IfcClassificationReference',
          name: '22.20',
        },
      ],
    },
    {
      type: 'IfcWall',
      name: 'wand_gips_metalstud - NLRS_22_WA_TLB_metal-stud_geïsoleerd_250mm_2x_gips_gen_vws',
      description: 'wand_gips_metalstud',
      tag: '1013164',
      hasAssociations: [
        {
          identification: 'wand_gips_metalstud',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: 'wand_gips_metalstud',
        },
        {
          identification: '22.20',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021',
          },
          type: 'IfcClassificationReference',
          name: '22.20',
        },
      ],
    },
    {
      type: 'IfcDoor',
      name: 'NLRS_32_DO_WB_reinaerdt_binnendeur_Model 3(bovenlicht_afgeslankte_bovendorpel)_gen_vws - 880x2315 rod=28/wd70/opdek/stijl_hoogte 2600',
      description: 'deurkozijn_staal_bovenlicht_deurblad',
      tag: '1010313',
      hasAssociations: [
        {
          identification: 'deurkozijn_staal_bovenlicht_deurblad',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
          type: 'IfcClassificationReference',
          name: 'deurkozijn_staal_bovenlicht_deurblad',
        },
        {
          identification: '32.31',
          referencedSource: {
            type: 'IfcClassification',
            editionDate: '0001-01-01T00:00:00',
            location: 'https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021',
          },
          type: 'IfcClassificationReference',
          name: '32.31',
        },
      ],
    },
  ],
};
