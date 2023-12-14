import {
    ActionIcon,
    Badge,
    Card,
    Checkbox,
    Collapse,
    Container,
    Group,
    HoverCard,
    Indicator,
    Stack,
    Table,
    Tabs,
    Text,
    Tooltip,
} from '@mantine/core';
import React, {useEffect, useState} from 'react';
import {IconArrowDown, IconArrowUp, IconCheck, IconInfoCircle, IconSearch} from '@tabler/icons-react';
import {ColorSchemeToggle} from '../components/ColorSchemeToggle/ColorSchemeToggle';
import {IfcClassificationReference, IfcEntity} from '../../../common/src/IfcData/ifc';
import {BsddBridgeData} from '../../../common/src/IfcData/bsddBridgeData';
import {MainUriSelect} from "../components/MainUriSelect";
import {ClassContractV1} from "../../../common/src/BsddApi/BsddApiBase";

type IfcProductType = 'IfcEntity';
type IfcClassificationReferenceType = 'IfcClassificationReference';
type IfcClassificationType = 'IfcClassification';
type IfcMaterialType = 'IfcMaterial';

let CefSharp: any;

// response

export interface BuildingClass {
    uri: string;
    code: string;
    name: string;
    classType: string;
    referenceCode: string;
}

export interface BimBasisObjectsResponse {
    classes: BuildingClass[];
    classesTotalCount: number;
    classesOffset: number;
    classesCount: number;
    uri: string;
    name: string;
    version: string;
    organizationCodeOwner: string;
    organizationNameOwner: string;
    defaultLanguageCode: string;
    license: string;
    qualityAssuranceProcedure: string;
    status: string;
    releaseDate: string;
    lastUpdatedUtc: string;
}

const mockData: BsddBridgeData = {
    "name": "testIFC",
    "mainDictionaryUri": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten",
    "filterDictionaryUris": [
        "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten",
        "https://identifier.buildingsmart.org/uri/digibase/nlsfb"
    ],
    "ifcData": [
        {
            "type": null,
            "typename": null,
            "name": "Grid - stramienlijn",
            "description": null,
            "tag": "13392",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": null
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": ""
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "NLRS_00_SI_nulpunt_vws - nulpunt",
            "description": "Project nulpunt",
            "tag": "307327",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "Project nulpunt",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "Project nulpunt"
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/0.0",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": ""
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "NLRS_52_PF_bakgoot_gen_vws - bakgoot",
            "description": "bakgoot",
            "tag": "798190",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "bakgoot",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "bakgoot"
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": ""
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "NLRS_52_PF_LB_bakgoot_beugel_B44_gen_vws - N47_VWS_beugel_bakgoot_B44",
            "description": "beugel bakgoot",
            "tag": "798257",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "beugel bakgoot",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "beugel bakgoot"
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/52.10",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": "afvoeren; regenwater, algemeen (verzamelniveau)"
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "NLRS_52_PF_LB_bakgoot_goot_gen_vws - N47_VWS_bakgoot",
            "description": "bakgoot",
            "tag": "798256",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "bakgoot",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "bakgoot"
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/52.10",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": "afvoeren; regenwater, algemeen (verzamelniveau)"
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "NLRS_52_PF_FB_bakgoot_hwa_gen_vws - N47_VWS_hwa_bakgoot",
            "description": "hwa bakgoot",
            "tag": "798259",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "hwa bakgoot",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "hwa bakgoot"
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/52.10",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": "afvoeren; regenwater, algemeen (verzamelniveau)"
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "NLRS_52_PF_LB_bakgoot_eindstuk_gen_vws - N47_VWS_eindstuk_bakgoot",
            "description": "bakgoot eindstuk",
            "tag": "798258",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "bakgoot eindstuk",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "bakgoot eindstuk"
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/52.10",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": "afvoeren; regenwater, algemeen (verzamelniveau)"
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "Basic Wall - NLRS_21_WA_TLB_metselwerk waalformaat_gen_vws",
            "description": "gevelafwerking_baksteen",
            "tag": "692064",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "gevelafwerking_baksteen",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "gevelafwerking_baksteen"
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/21.12",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": "buitenwanden; niet constructief, spouwwanden"
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "Basic Wall - NLRS_21_WA_TLB_beton prefab 100mm_gen_vws",
            "description": "beton prefab 150mm",
            "tag": "692066",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "beton prefab 150mm",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "beton prefab 150mm"
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": ""
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "Basic Wall - NLRS_21_WA_TLB_isolatie 131mm_gen_vws",
            "description": "isolatie Mupan Ultra Xs 138mm",
            "tag": "692068",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "isolatie Mupan Ultra Xs 138mm",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "isolatie Mupan Ultra Xs 138mm"
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": ""
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "NLRS_31_gevel-sparingsmaker_3HW_vws - raam",
            "description": "gevel-sparingsmaker spouwwand",
            "tag": "692070",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "gevel-sparingsmaker spouwwand",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "gevel-sparingsmaker spouwwand"
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/31",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": "Buitenwandopeningen"
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "NRLS_30_WI_UN_wandsparing-sam-rechthoek-VW - buitenbladsparing, betonnen waterslag + stalen latei",
            "description": "gevel-sparingsmaker bladsparing",
            "tag": "693977",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "gevel-sparingsmaker bladsparing",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "gevel-sparingsmaker bladsparing"
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/31",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": "Buitenwandopeningen"
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "NRLS_30_WI_UN_wandsparing-sam-rechthoek-VW - isolatiesparing, stelkozijn",
            "description": "gevel-sparingsmaker bladsparing",
            "tag": "693976",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "gevel-sparingsmaker bladsparing",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "gevel-sparingsmaker bladsparing"
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/31",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": "Buitenwandopeningen"
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "NRLS_30_WI_UN_wandsparing-sam-rechthoek-VW - binnenbladsparing, vensterbank",
            "description": "gevel-sparingsmaker bladsparing",
            "tag": "693978",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "gevel-sparingsmaker bladsparing",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "gevel-sparingsmaker bladsparing"
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/31",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": "Buitenwandopeningen"
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "NLRS_30_GS_wand_bui_sparing_omranding_RE_leeg - standaard",
            "description": "gevelsparingsmaker omkadering bladsparing buiten",
            "tag": "693969",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "gevelsparingsmaker omkadering bladsparing buiten",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "gevelsparingsmaker omkadering bladsparing buiten"
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": ""
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "NLRS_00_GM_WPB_LEEG_ISR - std",
            "description": "ISR leeg",
            "tag": "693963",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "ISR leeg",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "ISR leeg"
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": ""
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "NLRS_28_Stalen-latei_vws - NLRS_28_Stalen-latei_vws",
            "description": "? ",
            "tag": "694001",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "? ",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "? "
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": ""
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "NLRS_41_GM_raamdorpelsteen_beton_vws - RD50/94x160",
            "description": "? ",
            "tag": "693973",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "? ",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "? "
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": ""
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "NLRS_31_GM_WPB_spouwlat met sponning_gen_vws - kunststof boven",
            "description": "? ",
            "tag": "693982",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "? ",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "? "
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": ""
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "NLRS_31_GM_WPB_spouwlat met sponning_gen_vws - kunststof onder",
            "description": "? ",
            "tag": "693980",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "? ",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "? "
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": ""
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "NLRS_31_GM_WPB_spouwlat met sponning_gen_vws - kunststof zijkant",
            "description": "? ",
            "tag": "693981",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "? ",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "? "
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": ""
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "NLRS_31_GM_WPB_vensterbank_gen_vws - 20x200mm multiplex",
            "description": "? ",
            "tag": "693960",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "? ",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "? "
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/31.20",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": "buitenwandopeningen; gevuld met ramen, algemeen (verzamelniveau)"
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "NLRS_31_WI_WPB_kozijn_2vlaks_gen_vws - D2 - transcarbo",
            "description": "JA01-00",
            "tag": "692071",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "JA01-00",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "JA01-00"
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/31.31",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": "buitenwandopeningen; gevuld met deuren, draaideuren"
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "NLRS_30_WI_WP_kozijn draaideel_vws - kunststof_dubbel",
            "description": null,
            "tag": "693992",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": null
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/31.25",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": "buitenwandopeningen; gevuld met ramen, combinatieramen"
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "NLRS_30_WI_WP_kozijn draairichting_gen_vws - kozijn_draairichting",
            "description": "draairichting raamkozijn",
            "tag": "693984",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "draairichting raamkozijn",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "draairichting raamkozijn"
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/31.20",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": "buitenwandopeningen; gevuld met ramen, algemeen (verzamelniveau)"
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "NLRS_30_WI_WPB_vlakvulling_vast_vws - dubbel",
            "description": "isolerend glas",
            "tag": "693989",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "isolerend glas",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "isolerend glas"
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/31.20",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": "buitenwandopeningen; gevuld met ramen, algemeen (verzamelniveau)"
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "Floor - NLRS_23_FL_LB_kanaalplaatvloer_200_gen_vws",
            "description": "kanaalplaatvloer 200mm",
            "tag": "798289",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "kanaalplaatvloer 200mm",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "kanaalplaatvloer 200mm"
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": ""
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "Basic Roof - NLRS_47_RO_pannen+panlatten_074_gen_vws",
            "description": "dakpannen en panlatten 74mm",
            "tag": "798292",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "dakpannen en panlatten 74mm",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "dakpannen en panlatten 74mm"
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": ""
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "NLRS_27_GM_LB_knieschot_gen_vws - regels 30x58/spaanplaat 11mm",
            "description": "knieschot",
            "tag": "798290",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "knieschot",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "knieschot"
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": ""
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "NLRS_27_GM_FWB_muurplaat rond_anker_gen_vws - ronde muurplaat",
            "description": "muurplaat",
            "tag": "798293",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "muurplaat",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "muurplaat"
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": ""
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "NLRS_27_GM_FWB_muurplaatanker_gen_vws - h=100 / b=50",
            "description": "muurplaat",
            "tag": "798254",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "muurplaat",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "muurplaat"
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/27.22",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": "daken; constructief, hellende daken"
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "NLRS_27_GM_FWB_muurplaat_rond_gen_vws - b=70 / h=140",
            "description": "",
            "tag": "798191",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": ""
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/27.22",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": "daken; constructief, hellende daken"
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "Floor - NLRS_43_FL_LB_cementdekvloer_070_gen_vws",
            "description": "cementdekvloer 70mm",
            "tag": "798287",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "cementdekvloer 70mm",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "cementdekvloer 70mm"
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": ""
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "Floor - NLRS_23_FL_LB_kanaalplaatvloer_geïsoleerd_320_gen_vws",
            "description": "",
            "tag": "1003479",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": ""
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/21.21",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": "buitenwanden; constructief, massieve wanden"
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "Basic Roof - NLRS_27_RO_dakplaat_scharnierkap_302_gen_vws",
            "description": "dak_hout_scharnierkap",
            "tag": "798291",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "dak_hout_scharnierkap",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "dak_hout_scharnierkap"
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": ""
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "Basic Wall - NLRS_22_WA_TLB_HSB_070_gen_vws",
            "description": "wand_hout_HSB_opbouw_ntb",
            "tag": "1010468",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "wand_hout_HSB_opbouw_ntb",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "wand_hout_HSB_opbouw_ntb"
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/22.20",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": "binnenwanden; constructief, algemeen (verzamelniveau)"
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "Basic Wall - NLRS_22_WA_TLB_metal-stud_geïsoleerd_250mm_2x_gips_gen_vws",
            "description": "wand_gips_metalstud",
            "tag": "1013164",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "wand_gips_metalstud",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "wand_gips_metalstud"
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/22.20",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": "binnenwanden; constructief, algemeen (verzamelniveau)"
                }
            ],
            "isDefinedBy": null
        },
        {
            "type": null,
            "typename": null,
            "name": "NLRS_32_DO_WB_reinaerdt_binnendeur_Model 3(bovenlicht_afgeslankte_bovendorpel)_gen_vws - 880x2315 rod=28/wd70/opdek/stijl_hoogte 2600",
            "description": "deurkozijn_staal_bovenlicht_deurblad",
            "tag": "1010313",
            "predefinedType": null,
            "hasAssociations": [
                {
                    "location": "https://www.volkerwessels.nl",
                    "identification": "deurkozijn_staal_bovenlicht_deurblad",
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "BIM Basis Objecten",
                        "location": "https://www.volkerwessels.nl"
                    },
                    "type": "IfcClassificationReference",
                    "name": "deurkozijn_staal_bovenlicht_deurblad"
                },
                {
                    "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/32.31",
                    "identification": null,
                    "referencedSource": {
                        "type": "IfcClassification",
                        "name": "DigiBase Demo NL-SfB tabel 1",
                        "location": "https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten"
                    },
                    "type": "IfcClassificationReference",
                    "name": "binnenwandopeningen; gevuld met deuren, draaideuren"
                }
            ],
            "isDefinedBy": null
        }
    ]
}

function groupEntitiesBy(array: IfcEntity[], property: keyof IfcEntity) {
    const grouped = array.reduce((acc, item) => {
        const key = item[property];

        if (key === undefined || typeof key !== 'string') {
            if (!acc['']) {
                acc[''] = [];
            }
            acc[''].push(item);
        } else {
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(item);
        }

        return acc;
    }, {} as Record<string, IfcEntity[]>);

    // Sort the keys alphabetically and create a new sorted object
    return Object.keys(grouped)
        .sort()
        .reduce((acc, key) => {
            acc[key] = grouped[key];
            return acc;
        }, {} as Record<string, IfcEntity[]>);
}

export function BsddCard(props: { item: IfcEntity; class: any }) {
    let color = 'blue';

    if (!props.class) color = 'red';

    function determineColor(item: IfcEntity, found: any) {
        const ifcClassificatonReferences = item.hasAssociations?.filter((it) => it.type === 'IfcClassificationReference');

        if (!ifcClassificatonReferences) return 'orange';
        const ifcClassificatonReference = ifcClassificatonReferences[0] as IfcClassificationReference;

        for (let classRelation in found.classRelations) {
            // @ts-ignore
            // console.log(
            //   classRelation.relatedClassUri,
            //   ifcClassificatonReference.location,
            //   classRelation.relatedClassUri === ifcClassificatonReference.location,
            // );
            // @ts-ignore
            if (classRelation.relatedClassUri === ifcClassificatonReference.location) return 'green';
        }

        return 'red';
    }

    if (props.class) color = determineColor(props.item, props.class);

    function truncateText(text: string | null, maxLength: number): string {
        if (!text) return '';
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    }

    function bsddSearchClick(ifcProduct: IfcEntity) {
        const ifcEntityJson = JSON.stringify(ifcProduct);
        // @ts-ignore
        bsddBridge.bsddSearch(ifcEntityJson);
    }

    return (
        <Card key={props.item.name}>
            <Group align={'flex-start'} justify={'space-between'}>
                <Group my={'auto'}>
                    <HoverCard>
                        <HoverCard.Target>
                            <Indicator color={color} size={18} mx={'xs'}/>
                        </HoverCard.Target>
                        <HoverCard.Dropdown>
                            <Text>
                                <span>{color}</span>
                            </Text>
                        </HoverCard.Dropdown>
                    </HoverCard>
                    <Text>
                        <span>{truncateText(props.item.name || '', 50)}</span>
                    </Text>
                </Group>

                <Group>
                    <HoverCard>
                        <HoverCard.Target>
                            <Group>
                                <IconInfoCircle/>
                            </Group>
                        </HoverCard.Target>
                        <HoverCard.Dropdown>{props.item.name}</HoverCard.Dropdown>
                    </HoverCard>
                    <Tooltip label={'Select all instances'}>
                        <ActionIcon radius={'xl'} onClick={() => bsddSearchClick(props.item)} color={'blue'}>
                            <IconSearch size={18}/>
                        </ActionIcon>
                    </Tooltip>
                    <Tooltip label={'Attach to type'}>
                        <ActionIcon radius={'xl'} color={'green'}>
                            <IconCheck size={18}/>
                        </ActionIcon>
                    </Tooltip>
                </Group>

                {/*<pre>*/}
                {/*{JSON.stringify(props.class, null, 2)}*/}
                {/*</pre>*/}

                {/*<pre>*/}
                {/*{JSON.stringify(props.item, null, 2)}*/}
                {/*</pre>*/}
            </Group>
        </Card>
    );
}

interface CategoryCollapseProps {
    category: string;
    opened: Record<string, boolean>;
    bbbr: BimBasisObjectsResponse | undefined;
    items: IfcEntity[];
}

function CategoryCollapse({category, opened, bbbr, items}: CategoryCollapseProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<ClassContractV1>();
    const [error, setError] = useState(null);

    useEffect(() => {
        if (bbbr) {
            // Function to fetch data
            const fetchData = async () => {
                try {
                    // Start by setting loading to true
                    setIsLoading(true);

                    const found = determineBsddClass(category, bbbr);

                    if (found === false) return false;
                    // console.log(found)
                    // @ts-ignore
                    const encodedUri = encodeURIComponent(found.uri);
                    const targetUrl = `https://bs-dd-api-prototype.azurewebsites.net/api/Class/v1?uri=${encodedUri}&includeClassProperties=true&includeChildClassReferences=true&includeClassRelations=true`;

                    // Fetch data from the API
                    const response = await fetch(targetUrl);

                    // If the response is not ok, throw an error
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    // Parse the JSON data
                    const result: ClassContractV1 = await response.json();

                    // console.log(result)

                    // Update state with the fetched data
                    setData(result);
                } catch (e: any) {
                    // If an error occurred, set the error state
                    setError(e.message);
                } finally {
                    // Set loading to false when loading is complete
                    setIsLoading(false);
                }
            };

            // Call the fetchData function
            fetchData();
        }
    }, []); // The empty array ensures this effect runs only once after initial render

    if (isLoading) {
        return <div>Loading...</div>;
    }

    // If there was an error, show an error message
    if (error) {
        return <div>Error: {error}</div>;
    }

    function determineBsddClass(category: string, bbbr: BimBasisObjectsResponse) {
        // if none of the descriptions in data is the same as item.description, then color is red
        // if description is present, orange

        // if ifc type and predefined type are in the found data object, material is the same, nslsfb is the same
        let found;

        bbbr.classes.filter((dataItem: any) => {
            if (dataItem.code === category) {
                found = dataItem;
            }
        });

        if (!found) return false;

        return found;
    }

    return (
        <Collapse in={!opened[category]}>
            {items.map((item, index) => {
                return <BsddCard item={item} class={data} key={index}/>;
            })}
        </Collapse>
    );
}

export function HomePage() {
    const [state, setState] = useState<BsddBridgeData>(mockData);
    const [selectedSubdomains, setSelectedSubdomains] = useState<string[]>([]);
    const [mainUrl, setMainUrl] = useState<string>("https://identifier.buildingsmart.org/uri/digibase/bim-basis-objecten/0.1");

    // @ts-ignore
    window.updateSelection = (bsddBridgeData: BsddBridgeData) => {
        // console.log('state',state);
        // console.log('jsonString',jsonString)
        // const newState = JSON.parse(jsonString);
        console.log('bsddBridgeData', bsddBridgeData);
        const data = bsddBridgeData as BsddBridgeData;
        if (data.ifcData.length > 0) {
            setState(data);
        }
    };

    // State for the fetched data
    const [data, setData] = useState<BimBasisObjectsResponse>();
    // State to handle loading status
    const [isLoading, setIsLoading] = useState(true);
    // State to handle any errors
    const [error, setError] = useState(null);
    const [opened, setOpened] = useState({});

    const handleCollapseToggle = (category: string) => {
        setOpened((prevOpened) => ({
            ...prevOpened,
            // @ts-ignore
            [category]: !prevOpened[category],
        }));
    };

    // useEffect(() => {
    //   // Set up BsddBridge connection
    //   const connectToBsddBridge = async () => {
    //     try {
    //       if (CefSharp) {
    //         await CefSharp.BindObjectAsync('bsddBridge');
    //       }
    //     } catch (e: any) {
    //       // If an error occurred, set the error state
    //       setError(e.message);
    //     }
    //   };
    //   connectToBsddBridge();
    // }, []);

    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {
                // Start by setting loading to true
                setIsLoading(true);

                // Fetch data from the API
                const response = await fetch(
                    'https://bs-dd-api-prototype.azurewebsites.net/api/Dictionary/v1/Classes?Uri=https%3A%2F%2Fidentifier.buildingsmart.org%2Furi%2Fdigibase%2Fbim-basis-objecten%2F0.1',
                );

                // If the response is not ok, throw an error
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                // Parse the JSON data
                const result = await response.json();

                // Update state with the fetched data
                // @ts-ignore
                setData(result);
            } catch (e: any) {
                // If an error occurred, set the error state
                setError(e.message);
            } finally {
                // Set loading to false when loading is complete
                setIsLoading(false);
            }
        };

        // Call the fetchData function
        fetchData();
    }, []); // The empty array ensures this effect runs only once after initial render

    // If still loading, show a loading message
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // If there was an error, show an error message
    if (error) {
        return <div>Error: {error}</div>;
    }
    // Assuming you want to group by 'PredefinedType'
    const grouped = groupEntitiesBy(state.ifcData, 'description');

    const subDomains = [
        "https:google.com",
        "lalala"
    ]

    // const subDomainData = async () => fetch('https://bs-dd-api-prototype.azurewebsites.net/api/Dictionary/v1/Classes?Uri=' + encodeURI(mainUrl))


    // @ts-ignore
    return (
        <>
            <Container size={'40rem'}>
                <Tabs defaultValue={"koppelen"}>
                    <Tabs.List grow>
                        <Tabs.Tab value={"koppelen"}>
                            Koppelen
                        </Tabs.Tab>
                        <Tabs.Tab value={"settings"}>
                            Settings
                        </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value={"koppelen"}>
                        <Stack gap={'xs'} pt={'md'}>
                            {/* Iterate over grouped object */}
                            {Object.entries(grouped).map(([category, items]) => (
                                <Stack key={category} gap={'xs'}>
                                    <Group grow justify={'space-between'}>
                                        <Text fw={600} fs={'xl'} style={{cursor: 'pointer'}}
                                              onClick={() => handleCollapseToggle(category)}>
                                            {category.length > 0 ? `Description: ${category}` : 'No description'}
                                        </Text>

                                        {/* show arrow to see if collapsed or not */}
                                        <ActionIcon variant="outline" color="gray" radius="xl"
                                                    onClick={() => handleCollapseToggle(category)}>
                                            {/*@ts-ignore*/}
                                            {opened[category] ? <IconArrowDown size={18}/> : <IconArrowUp size={18}/>}
                                        </ActionIcon>
                                    </Group>

                                    <CategoryCollapse category={category} items={items} opened={opened} bbbr={data}/>
                                </Stack>
                            ))}
                        </Stack>
                    </Tabs.Panel>
                    <Tabs.Panel value={"settings"}>
                        <Stack gap={'xs'} pt={'md'}>
                            <Text>Selecteer hoofddomein</Text>
                            <MainUriSelect
                            mainUrl={mainUrl}
                            setMainUrl={setMainUrl}
                            />

                            <Text>Selecteer subdomein(en)</Text>
                            {subDomains.map((subDomain) => (
                                <Checkbox label={subDomain}
                                          onClick={
                                              (event) => {
                                                  if (event.currentTarget.checked) {
                                                      setSelectedSubdomains([...selectedSubdomains, subDomain])
                                                  } else {
                                                      setSelectedSubdomains(selectedSubdomains.filter(it => it != subDomain))
                                                  }
                                              }
                                          }>{subDomain}</Checkbox>
                            ))}

                            <Table>
                                <Table.Thead>
                                    <Table.Tr>
                                        <Table.Th>
                                            <Text>
                                                <span>Settings</span>
                                            </Text>
                                        </Table.Th>
                                        <Table.Th>
                                            <Text>
                                                <span>Value</span>
                                            </Text>
                                        </Table.Th>
                                    </Table.Tr>
                                </Table.Thead>
                                <Table.Tbody>
                                    <Table.Tr>
                                        <Table.Td>
                                            <Text>
                                                <span>Name</span>
                                            </Text>
                                        </Table.Td>
                                        <Table.Td>
                                            <Text>
                                                <span>{state.name ?? "no name supplied"}</span>
                                            </Text>
                                        </Table.Td>
                                    </Table.Tr>

                                    <Table.Tr>
                                        <Table.Td>
                                            <Text>
                                                <span>bsdd api environment</span>
                                            </Text>
                                        </Table.Td>
                                        <Table.Td>
                                            <Text>
                                                <span>{state.bsddApiEnvironment ?? "no bsdd api environment supplied"}</span>
                                            </Text>
                                        </Table.Td>
                                    </Table.Tr>

                                    <Table.Tr>
                                        <Table.Td>
                                            <Text>
                                                <span>main dictionary url</span>
                                            </Text>
                                        </Table.Td>
                                        <Table.Td>
                                            <Text>
                                                <span>{state.mainDictionaryUri ?? "no main dictionary url supplied"}</span>
                                            </Text>
                                        </Table.Td>
                                    </Table.Tr>

                                    <Table.Tr>
                                        <Table.Td>
                                            <Text>
                                                <span>filter dictionary urls</span>
                                            </Text>
                                        </Table.Td>
                                        <Table.Td>
                                            <Text>
                                                <span>{state.filterDictionaryUris.join(", ") ?? "no filter dictionary urls supplied"}</span>
                                            </Text>
                                        </Table.Td>
                                    </Table.Tr>

                                    <Table.Tr>
                                        <Table.Td>
                                            <Text>
                                                Selected subdomains
                                            </Text>

                                        </Table.Td>

                                        <Table.Td>
                                            <Group>
                                                {selectedSubdomains.map((subDomain) => (
                                                    <Badge>{subDomain}</Badge>
                                                ))}
                                            </Group>
                                        </Table.Td>
                                    </Table.Tr>


                                </Table.Tbody>

                            </Table>

                        </Stack>
                    </Tabs.Panel>

                </Tabs>
            </Container>

            {/*<pre>*/}
            {/*    {JSON.stringify(data, null, 2)}*/}
            {/*</pre>*/}
            <ColorSchemeToggle/>
        </>
    );
}
