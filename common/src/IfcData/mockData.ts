import { BsddBridgeData } from './bsddBridgeData';
export const mockData: BsddBridgeData = {
  settings: {
    bsddApiEnvironment: 'test',
    mainDictionary: {
      dictionaryUri: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
      dictionaryName: 'Basis bouwproducten',
      parameterName: 'bsdd/digibase/basisbouwproducten',
      parameterId: '14762b7f-3c15-468b-8dad-1f514ff90dc2',
      parameterMapping: 'description',
    },
    filterDictionaries: [
      {
        dictionaryUri: 'https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3',
        dictionaryName: 'IFC',
        parameterName: 'bsdd/buildingsmart/ifc',
        parameterId: '6999e83d-6f2e-4d40-87f9-9dd406d25bcf ',
        parameterMapping: 'IfcExportAs',
      },
      {
        dictionaryUri: 'https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021',
        dictionaryName: 'DigiBase Demo NL-SfB tabel 1',
        parameterName: 'bsdd/digibase/nlsfb',
        parameterId: 'f0c64040-e2c8-4e91-8753-4ab324599edb ',
        parameterMapping: 'assemblycode',
      },
    ],
    language: 'NL',
  },
  ifcData: [
    {
      type: 'IfcSlab',
      name: 'Floor: 23_FL_AT_breedplaatvloer_260 (C35/45)',
      description: 'breedplaatvloer',
      predefinedType: 'FLOOR',
      hasAssociations: [
        {
          type: 'IfcClassificationReference',
          name: 'breedplaatvloer',
          location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0/class/breedplaatvloer',
          identification: 'breedplaatvloer',
          referencedSource: {
            type: 'IfcClassification',
            name: 'Basis bouwproducten',
            location: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
          },
        },
        {
          type: 'IfcClassificationReference',
          name: 'Floor',
          location: 'https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcSlabFLOOR',
          identification: 'IfcSlabFLOOR',
          referencedSource: {
            type: 'IfcClassification',
            name: 'IFC',
            location: 'https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3',
          },
        },
        {
          type: 'IfcClassificationReference',
          name: '23.21 vloeren; constructief, vrijdragende vloeren',
          location: 'https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021/class/23.21',
          identification: '23.21',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021',
          },
        },
        {
          type: 'IfcMaterial',
          name: 'beton generiek',
          description: 'https://identifier.buildingsmart.org/uri/bimloket/naakt/0.1/class/betongeneriek',
        },
      ],
    },
    {
      type: 'IfcSlab',
      name: 'Floor: 23_FL_AT_breedplaatvloer_200 (C35/45)',
      description: 'breedplaatvloer',
      predefinedType: 'FLOOR',
    },
    {
      type: 'IfcSlab',
      name: 'Floor: 23_FL_AT_breedplaatvloer_200 (C35/45)',
      description: 'breedplaatvloer',
      predefinedType: 'FLOOR',
    },
    {
      type: 'IfcSlab',
      name: 'Floor: 23_FL_AT_breedplaatvloer_400 (C35/45) (oranje)',
      description: 'breedplaatvloer',
      predefinedType: 'FLOOR',
      hasAssociations: [
        {
          type: 'IfcClassificationReference',
          name: '23.21 vloeren; constructief, vrijdragende vloeren',
          location: 'https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021/class/23.21',
          identification: '23.21',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021',
          },
        },
        {
          type: 'IfcMaterial',
          name: 'beton generiek',
          description: 'https://identifier.buildingsmart.org/uri/bimloket/naakt/0.1/class/betongeneriek',
        },
      ],
    },
    {
      type: 'IfcSlab',
      name: 'Kanaalplaatvloer 200 VBI',
      description: 'kanaalplaatvloer',
      predefinedType: 'FLOOR',
    },
    {
      type: 'IfcSlab',
      name: 'Kanaalplaatvloer 200 VBI',
      description: 'kanaalplaatvloer',
      predefinedType: 'FLOOR',
    },
    {
      type: 'IfcDoor',
      name: 'Kegro Geïsoleerde voordeur 9155N',
      description: 'buitendeur',
      predefinedType: 'DOOR',
    },
    {
      type: 'IfcWall',
      name: 'wand_gips_metalstud',
      description: 'wand_gips_metalstud',
      hasAssociations: [
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/22.20',
          identification: '22.20',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: 'binnenwanden; constructief, algemeen (verzamelniveau)',
        },
      ],
    },
    {
      name: 'Grid - stramienlijn',
      tag: '13392',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: '',
        },
      ],
    },
    {
      name: 'NLRS_00_SI_nulpunt_vws - nulpunt',
      description: 'Project nulpunt',
      tag: '307327',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: 'Project nulpunt',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: 'Project nulpunt',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/0.0',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: '',
        },
      ],
    },
    {
      name: 'NLRS_52_PF_bakgoot_gen_vws - bakgoot',
      description: 'bakgoot',
      tag: '798190',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: 'bakgoot',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: 'bakgoot',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: '',
        },
      ],
    },
    {
      name: 'NLRS_52_PF_LB_bakgoot_beugel_B44_gen_vws - N47_VWS_beugel_bakgoot_B44',
      description: 'beugel bakgoot',
      tag: '798257',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: 'beugel bakgoot',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: 'beugel bakgoot',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/52.10',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: 'afvoeren; regenwater, algemeen (verzamelniveau)',
        },
      ],
    },
    {
      name: 'NLRS_52_PF_LB_bakgoot_goot_gen_vws - N47_VWS_bakgoot',
      description: 'bakgoot',
      tag: '798256',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: 'bakgoot',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: 'bakgoot',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/52.10',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: 'afvoeren; regenwater, algemeen (verzamelniveau)',
        },
      ],
    },
    {
      name: 'NLRS_52_PF_FB_bakgoot_hwa_gen_vws - N47_VWS_hwa_bakgoot',
      description: 'hwa bakgoot',
      tag: '798259',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: 'hwa bakgoot',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: 'hwa bakgoot',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/52.10',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: 'afvoeren; regenwater, algemeen (verzamelniveau)',
        },
      ],
    },
    {
      name: 'NLRS_52_PF_LB_bakgoot_eindstuk_gen_vws - N47_VWS_eindstuk_bakgoot',
      description: 'bakgoot eindstuk',
      tag: '798258',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: 'bakgoot eindstuk',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: 'bakgoot eindstuk',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/52.10',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: 'afvoeren; regenwater, algemeen (verzamelniveau)',
        },
      ],
    },
    {
      name: 'Basic Wall - NLRS_21_WA_TLB_metselwerk waalformaat_gen_vws',
      description: 'gevelafwerking_baksteen',
      tag: '692064',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: 'gevelafwerking_baksteen',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: 'gevelafwerking_baksteen',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/21.12',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: 'buitenwanden; niet constructief, spouwwanden',
        },
      ],
    },
    {
      name: 'Basic Wall - NLRS_21_WA_TLB_beton prefab 100mm_gen_vws',
      description: 'beton prefab 150mm',
      tag: '692066',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: 'beton prefab 150mm',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: 'beton prefab 150mm',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: '',
        },
      ],
    },
    {
      name: 'Basic Wall - NLRS_21_WA_TLB_isolatie 131mm_gen_vws',
      description: 'isolatie Mupan Ultra Xs 138mm',
      tag: '692068',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: 'isolatie Mupan Ultra Xs 138mm',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: 'isolatie Mupan Ultra Xs 138mm',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: '',
        },
      ],
    },
    {
      name: 'NLRS_31_gevel-sparingsmaker_3HW_vws - raam',
      description: 'gevel-sparingsmaker spouwwand',
      tag: '692070',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: 'gevel-sparingsmaker spouwwand',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: 'gevel-sparingsmaker spouwwand',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/31',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: 'Buitenwandopeningen',
        },
      ],
    },
    {
      name: 'NRLS_30_WI_UN_wandsparing-sam-rechthoek-VW - buitenbladsparing, betonnen waterslag + stalen latei',
      description: 'gevel-sparingsmaker bladsparing',
      tag: '693977',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: 'gevel-sparingsmaker bladsparing',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: 'gevel-sparingsmaker bladsparing',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/31',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: 'Buitenwandopeningen',
        },
      ],
    },
    {
      name: 'NRLS_30_WI_UN_wandsparing-sam-rechthoek-VW - isolatiesparing, stelkozijn',
      description: 'gevel-sparingsmaker bladsparing',
      tag: '693976',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: 'gevel-sparingsmaker bladsparing',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: 'gevel-sparingsmaker bladsparing',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/31',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: 'Buitenwandopeningen',
        },
      ],
    },
    {
      name: 'NRLS_30_WI_UN_wandsparing-sam-rechthoek-VW - binnenbladsparing, vensterbank',
      description: 'gevel-sparingsmaker bladsparing',
      tag: '693978',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: 'gevel-sparingsmaker bladsparing',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: 'gevel-sparingsmaker bladsparing',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/31',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: 'Buitenwandopeningen',
        },
      ],
    },
    {
      name: 'NLRS_30_GS_wand_bui_sparing_omranding_RE_leeg - standaard',
      description: 'gevelsparingsmaker omkadering bladsparing buiten',
      tag: '693969',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: 'gevelsparingsmaker omkadering bladsparing buiten',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: 'gevelsparingsmaker omkadering bladsparing buiten',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: '',
        },
      ],
    },
    {
      name: 'NLRS_00_GM_WPB_LEEG_ISR - std',
      description: 'ISR leeg',
      tag: '693963',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: 'ISR leeg',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: 'ISR leeg',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: '',
        },
      ],
    },
    {
      name: 'NLRS_28_Stalen-latei_vws - NLRS_28_Stalen-latei_vws',
      description: '? ',
      tag: '694001',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: '? ',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: '? ',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: '',
        },
      ],
    },
    {
      name: 'NLRS_41_GM_raamdorpelsteen_beton_vws - RD50/94x160',
      description: '? ',
      tag: '693973',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: '? ',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: '? ',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: '',
        },
      ],
    },
    {
      name: 'NLRS_31_GM_WPB_spouwlat met sponning_gen_vws - kunststof boven',
      description: '? ',
      tag: '693982',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: '? ',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: '? ',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: '',
        },
      ],
    },
    {
      name: 'NLRS_31_GM_WPB_spouwlat met sponning_gen_vws - kunststof onder',
      description: '? ',
      tag: '693980',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: '? ',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: '? ',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: '',
        },
      ],
    },
    {
      name: 'NLRS_31_GM_WPB_spouwlat met sponning_gen_vws - kunststof zijkant',
      description: '? ',
      tag: '693981',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: '? ',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: '? ',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: '',
        },
      ],
    },
    {
      name: 'NLRS_31_GM_WPB_vensterbank_gen_vws - 20x200mm multiplex',
      description: '? ',
      tag: '693960',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: '? ',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: '? ',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/31.20',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: 'buitenwandopeningen; gevuld met ramen, algemeen (verzamelniveau)',
        },
      ],
    },
    {
      name: 'NLRS_31_WI_WPB_kozijn_2vlaks_gen_vws - D2 - transcarbo',
      description: 'JA01-00',
      tag: '692071',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: 'JA01-00',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: 'JA01-00',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/31.31',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: 'buitenwandopeningen; gevuld met deuren, draaideuren',
        },
      ],
    },
    {
      name: 'NLRS_30_WI_WP_kozijn draaideel_vws - kunststof_dubbel',
      tag: '693992',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/31.25',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: 'buitenwandopeningen; gevuld met ramen, combinatieramen',
        },
      ],
    },
    {
      name: 'NLRS_30_WI_WP_kozijn draairichting_gen_vws - kozijn_draairichting',
      description: 'draairichting raamkozijn',
      tag: '693984',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: 'draairichting raamkozijn',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: 'draairichting raamkozijn',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/31.20',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: 'buitenwandopeningen; gevuld met ramen, algemeen (verzamelniveau)',
        },
      ],
    },
    {
      name: 'NLRS_30_WI_WPB_vlakvulling_vast_vws - dubbel',
      description: 'isolerend glas',
      tag: '693989',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: 'isolerend glas',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: 'isolerend glas',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/31.20',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: 'buitenwandopeningen; gevuld met ramen, algemeen (verzamelniveau)',
        },
      ],
    },
    {
      name: 'Floor - NLRS_23_FL_LB_kanaalplaatvloer_200_gen_vws',
      description: 'kanaalplaatvloer 200mm',
      tag: '798289',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: 'kanaalplaatvloer 200mm',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: 'kanaalplaatvloer 200mm',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: '',
        },
      ],
    },
    {
      name: 'Basic Roof - NLRS_47_RO_pannen+panlatten_074_gen_vws',
      description: 'dakpannen en panlatten 74mm',
      tag: '798292',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: 'dakpannen en panlatten 74mm',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: 'dakpannen en panlatten 74mm',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: '',
        },
      ],
    },
    {
      name: 'NLRS_27_GM_LB_knieschot_gen_vws - regels 30x58/spaanplaat 11mm',
      description: 'knieschot',
      tag: '798290',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: 'knieschot',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: 'knieschot',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: '',
        },
      ],
    },
    {
      name: 'NLRS_27_GM_FWB_muurplaat rond_anker_gen_vws - ronde muurplaat',
      description: 'muurplaat',
      tag: '798293',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: 'muurplaat',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: 'muurplaat',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: '',
        },
      ],
    },
    {
      name: 'NLRS_27_GM_FWB_muurplaatanker_gen_vws - h=100 / b=50',
      description: 'muurplaat',
      tag: '798254',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: 'muurplaat',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: 'muurplaat',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/27.22',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: 'daken; constructief, hellende daken',
        },
      ],
    },
    {
      name: 'NLRS_27_GM_FWB_muurplaat_rond_gen_vws - b=70 / h=140',
      description: '',
      tag: '798191',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: '',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: '',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/27.22',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: 'daken; constructief, hellende daken',
        },
      ],
    },
    {
      name: 'Floor - NLRS_43_FL_LB_cementdekvloer_070_gen_vws',
      description: 'cementdekvloer 70mm',
      tag: '798287',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: 'cementdekvloer 70mm',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: 'cementdekvloer 70mm',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: '',
        },
      ],
    },
    {
      name: 'Floor - NLRS_23_FL_LB_kanaalplaatvloer_geïsoleerd_320_gen_vws',
      description: '',
      tag: '1003479',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: '',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: '',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/21.21',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: 'buitenwanden; constructief, massieve wanden',
        },
      ],
    },
    {
      name: 'Basic Roof - NLRS_27_RO_dakplaat_scharnierkap_302_gen_vws',
      description: 'dak_hout_scharnierkap',
      tag: '798291',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: 'dak_hout_scharnierkap',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: 'dak_hout_scharnierkap',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: '',
        },
      ],
    },
    {
      name: 'Basic Wall - NLRS_22_WA_TLB_HSB_070_gen_vws',
      description: 'wand_hout_HSB_opbouw_ntb',
      tag: '1010468',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: 'wand_hout_HSB_opbouw_ntb',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: 'wand_hout_HSB_opbouw_ntb',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/22.20',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: 'binnenwanden; constructief, algemeen (verzamelniveau)',
        },
      ],
    },
    {
      name: 'Basic Wall - NLRS_22_WA_TLB_metal-stud_geïsoleerd_250mm_2x_gips_gen_vws',
      description: 'wand_gips_metalstud',
      tag: '1013164',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: 'wand_gips_metalstud',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: 'wand_gips_metalstud',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/22.20',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: 'binnenwanden; constructief, algemeen (verzamelniveau)',
        },
      ],
    },
    {
      name: 'NLRS_32_DO_WB_reinaerdt_binnendeur_Model 3(bovenlicht_afgeslankte_bovendorpel)_gen_vws - 880x2315 rod=28/wd70/opdek/stijl_hoogte 2600',
      description: 'deurkozijn_staal_bovenlicht_deurblad',
      tag: '1010313',
      hasAssociations: [
        {
          location: 'https://www.volkerwessels.nl',
          identification: 'deurkozijn_staal_bovenlicht_deurblad',
          referencedSource: {
            type: 'IfcClassification',
            name: 'BIM Basis Objecten',
            location: 'https://www.volkerwessels.nl',
          },
          type: 'IfcClassificationReference',
          name: 'deurkozijn_staal_bovenlicht_deurblad',
        },
        {
          location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/32.31',
          referencedSource: {
            type: 'IfcClassification',
            name: 'DigiBase Demo NL-SfB tabel 1',
            location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
          },
          type: 'IfcClassificationReference',
          name: 'binnenwandopeningen; gevuld met deuren, draaideuren',
        },
      ],
    },
  ],
};
