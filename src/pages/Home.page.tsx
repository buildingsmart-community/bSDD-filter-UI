import {ColorSchemeToggle} from '../components/ColorSchemeToggle/ColorSchemeToggle';
import {Button, Card, Collapse, Container, Group, Indicator, Stack} from "@mantine/core";
import React, {useEffect, useState} from "react";
import {IconCheck, IconStereoGlasses} from "@tabler/icons-react";
// import CategoryCollapse from "../components/CategoryCollapse";

type IfcSlabTypeType = 'IfcSlabType';
type IfcClassificationReferenceType = 'IfcClassificationReference';
type IfcClassificationType = 'IfcClassification';
type IfcMaterialType = 'IfcMaterial';

export interface IfcSlabType {
    type: string;
    name: string;
    description: string;
    predefinedType: 'FLOOR' | 'DOOR';
    hasAssociations?: Association[];
}

export type Association = IfcClassificationReference | IfcMaterial;

export interface IfcClassificationReference {
    type: 'IfcClassificationReference';
    name: string;
    location: string;
    identification: string;
    referencedSource: IfcClassification;
}

interface IfcClassification {
    type: 'IfcClassification';
    name: string;
    location?: string;
}

interface IfcMaterial {
    type: 'IfcMaterial';
    name: string;
    description: string;
}


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

const mockData: IfcSlabType[] = [
    {
        "type": "IfcSlab",
        "name": "Floor: 23_FL_AT_breedplaatvloer_260 (C35/45)",
        "description": "breedplaatvloer",
        "predefinedType": "FLOOR",
        "hasAssociations": [
            {
                "type": "IfcClassificationReference",
                "name": "23.21 vloeren; constructief, vrijdragende vloeren",
                "location": "https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021/class/23.21", // object url (detail)
                "identification": "23.21",
                "referencedSource": {
                    "type": "IfcClassification",
                    "name": "DigiBase Demo NL-SfB tabel 1",
                    "location": "https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021" // domain
                }
            },
            {
                "type": "IfcMaterial",
                "name": "beton generiek",
                "description": "https://identifier.buildingsmart.org/uri/bimloket/naakt/0.1/class/betongeneriek"
            }
        ]
    },
    {
        "type": "IfcSlab",
        "name": "Floor: 23_FL_AT_breedplaatvloer_200 (C35/45)",
        "description": "breedplaatvloer 3",
        "predefinedType": "FLOOR"
    },
    {
        "type": "IfcSlab",
        "name": "Floor: 23_FL_AT_breedplaatvloer_200 (C35/45)",
        "description": "breedplaatvloer",
        "predefinedType": "FLOOR"
    },
    {
        "type": "IfcSlab",
        "name": "Floor: 23_FL_AT_breedplaatvloer_400 (C35/45) (oranje)",
        "description": "breedplaatvloer",
        "predefinedType": "FLOOR",
        "hasAssociations": [
            {
                "type": "IfcClassificationReference",
                "name": "23.21 vloeren; constructief, vrijdragende vloeren",
                "location": "https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021/class/23.21",
                "identification": "23.21",
                "referencedSource": {
                    "type": "IfcClassification",
                    "name": "DigiBase Demo NL-SfB tabel 1",
                    "location": "https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021"
                }
            },
            {
                "type": "IfcMaterial",
                "name": "beton generiek",
                "description": "https://identifier.buildingsmart.org/uri/bimloket/naakt/0.1/class/betongeneriek"
            }
        ]
    },
    {
        "type": "IfcSlab",
        "name": "Kanaalplaatvloer 200 VBI",
        "description": "kanaalplaatvloer",
        "predefinedType": "FLOOR"
    },
    {
        "type": "IfcSlab",
        "name": "Kanaalplaatvloer 200 VBI",
        "description": "kanaalplaatvloer",
        "predefinedType": "FLOOR"
    },
    {
        "type": "IfcDoor",
        "name": "Kegro Geïsoleerde voordeur 9155N",
        "description": "buitendeur",
        "predefinedType": "DOOR"
    }
]

function groupBy(array, property) {
    return array.reduce((acc, item) => {
        // Get the property value we want to group by
        const key = item[property];

        // If the key doesn't exist yet, create it
        if (!acc[key]) {
            acc[key] = [];
        }

        // Add the current item to the group
        acc[key].push(item);

        // Return the updated accumulator
        return acc;
    }, {}); // Initial value is an empty object
}

export function BsddCard(props: { item: IfcSlabType, class: any }) {
    let color = "blue"

    if (!props.class) color = "red"

    function determineColor(item: IfcSlabType, found: any) {
        const ifcClassificatonReference =  item.hasAssociations?.filter(it => it.type === "IfcClassificationReference")

        if (!ifcClassificatonReference) return "orange"

        for(let classRelation in found.classRelations) {
            // @ts-ignore
            console.log(classRelation.relatedClassUri, ifcClassificatonReference.location, classRelation.relatedClassUri === ifcClassificatonReference.location)
            // @ts-ignore
            if (classRelation.relatedClassUri === ifcClassificatonReference.location) return "green"
        }

        return "red"


        // if (found.)

    }

    if (props.class) color = determineColor(props.item, props.class)

    return <Card key={props.item.name} my={"xs"}>
        <Group>
            <Indicator color={color} size={18} mx={"xs"}/>
            <Button color={"blue"} leftSection={<IconStereoGlasses/>}>View</Button>
            <Button color={"red"} leftSection={<IconCheck/>}>
                Apply
            </Button>
            <div>
                {props.item.name}
            </div>


            {/*<pre>*/}
            {/*{JSON.stringify(props.class, null, 2)}*/}
            {/*</pre>*/}

            {/*<pre>*/}
            {/*{JSON.stringify(props.item, null, 2)}*/}
            {/*</pre>*/}
        </Group>
    </Card>
}

// function CategoryCollap2se(props: { category: string, opened: any, data: BimBasisObjectsResponse, items: any[] }) {
//
//     function determineBsddClass(item: IfcSlabType) {
//         // if none of the descriptions in data is the same as item.description, then color is red
//         // if description is present, orange
//
//         // if ifc type and predefined type are in the found data object, material is the same, nslsfb is the same
//         let found;
//
//         props.data?.classes.filter((dataItem: any) => {
//             if (dataItem.referenceCode === item.description) {
//                 found = dataItem
//             }
//         })
//
//
//         if (!found) return false
//
//         // let result = fetch(found.referenceCode.location)
//         //  console.log(result)
//
//         console.log(found, item)
//
//         return found
//     }
//
//     // fetch category uri
//
//     const {opened, category} = props;
//
//     return <Collapse in={!opened[category]}>
//         {/* Iterate over items for each category */}
//         {props.items.map((item) => {
//             return (
//                 <BsddCard item={item} class={determineBsddClass(item)} key={item.id}/>
//             );
//         })}
//     </Collapse>
// }

interface CategoryCollapseProps {
    category: string;
    opened: Record<string, boolean>;
    bbbr: BimBasisObjectsResponse;
    items: IfcSlabType[];
}

function CategoryCollapse(props: CategoryCollapseProps) {
    const {category, opened, items} = props;
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<any>();
    const [error, setError] = useState(null);


    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {
                // Start by setting loading to true
                setIsLoading(true);

                const found = determineBsddClass(category, props.bbbr)

                if (found === false) return false
                // console.log(found)
                const encodedUri = encodeURIComponent(found.uri);
                const targetUrl = `https://bs-dd-api-prototype.azurewebsites.net/api/Class/v1?uri=${encodedUri}&includeClassProperties=true&includeChildClassReferences=true&includeClassRelations=true`;

                // Fetch data from the API
                const response = await fetch(targetUrl);


                // If the response is not ok, throw an error
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                // Parse the JSON data
                const result = await response.json();

                // console.log(result)

                // Update state with the fetched data
                setData(result);
            } catch (e) {
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
                found = dataItem
            }
        })

        if (!found) return false

        return found
    }


    return (
        <Collapse in={!opened[category]}>
            {items.map((item, index) => {
                return (
                    <BsddCard item={item} class={data} key={index}/>
                );
            })}
        </Collapse>
    );
}


export function HomePage() {
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
            [category]: !prevOpened[category]
        }));
    };

    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {
                // Start by setting loading to true
                setIsLoading(true);

                // Fetch data from the API
                const response = await fetch('https://bs-dd-api-prototype.azurewebsites.net/api/Dictionary/v1/Classes?Uri=https%3A%2F%2Fidentifier.buildingsmart.org%2Furi%2Fdigibase%2Fbim-basis-objecten%2F0.1');

                // If the response is not ok, throw an error
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                // Parse the JSON data
                const result = await response.json();

                // Update state with the fetched data
                setData(result);
            } catch (e) {
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
    const grouped = groupBy(mockData, 'description');


    return (
        <>
            <ColorSchemeToggle/>
            <Container size={"40rem"}>
                <Stack>
                    <h1>IFC Slab Types</h1>
                    {/* Iterate over grouped object */}
                    {Object.entries(grouped).map(([category, items]) => (
                        <div key={category}>
                            {/* Clickable header to toggle the Collapse component */}
                            <h2 style={{cursor: 'pointer'}} onClick={() => handleCollapseToggle(category)}>
                                {category} {/* You can add an icon here to indicate open/close state */}
                            </h2>

                            {/* Collapse component that shows/hides the items */}

                            {/*@ts-ignore*/}
                            <CategoryCollapse category={category} items={items} opened={opened} bbbr={data}/>
                        </div>
                    ))}
                </Stack>
            </Container>

            {/*<pre>*/}
            {/*    {JSON.stringify(data, null, 2)}*/}
            {/*</pre>*/}
        </>
    );
}
