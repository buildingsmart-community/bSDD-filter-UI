import {ColorSchemeToggle} from '../components/ColorSchemeToggle/ColorSchemeToggle';
import {Card, Checkbox, Collapse, Container, Group, Indicator, Stack} from "@mantine/core";
import {useEffect, useState} from "react";

type IfcSlabTypeType = 'IfcSlabType';
type IfcClassificationReferenceType = 'IfcClassificationReference';
type IfcClassificationType = 'IfcClassification';
type IfcMaterialType = 'IfcMaterial';

interface IfcSlabType {
    type: string;
    name: string;
    description: string;
    PredefinedType: 'FLOOR';
    hasAssociations?: Association[];
}

type Association = IfcClassificationReference | IfcMaterial;

interface IfcClassificationReference {
    type: 'IfcClassificationReference';
    name: string;
    location: string;
    identification: string;
    referencedSource: IfcClassification;
}

interface IfcClassification {
    type: 'IfcClassification';
    name: string;
}

interface IfcMaterial {
    type: 'IfcMaterial';
    name: string;
    description: string;
}


// response

interface BuildingClass {
    uri: string;
    code: string;
    name: string;
    classType: string;
    referenceCode: string;
}

interface BimBasisObjectsResponse {
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
        "type": "IfcSlabType",
        "name": "Floor:23_FL_AT_breedplaatvloer_260 (C35/45)",
        "description": "breedplaatvloer",
        "PredefinedType": "FLOOR",
        "hasAssociations": [
            {
                "type": "IfcClassificationReference",
                "name": "23.21 vloeren; constructief, vrijdragende vloeren",
                "location": "https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021/class/23.21",
                "identification": "23.21",
                "referencedSource": {
                    "type": "IfcClassification",
                    "name": "DigiBase Demo NL-SfB tabel 1"
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
        "type": "IfcSlabType",
        "name": "Floor:23_FL_AT_breedplaatvloer_200 (C35/45)",
        "description": "breedplaatvloer",
        "PredefinedType": "FLOOR"
    },
    {
        "type": "IfcSlabType",
        "name": "Floor:23_FL_AT_breedplaatvloer_200 (C35/45)",
        "description": "breedplaatvloer - DIT MOET ROOD WORDEN",
        "PredefinedType": "FLOOR"
    },
    {
        "type": "IfcSlabType",
        "name": "Floor:23_FL_AT_breedplaatvloer_400 (C35/45) (oranje)",
        "description": "breedplaatvloer",
        "PredefinedType": "FLOOR",
        "hasAssociations": [
            {
                "type": "IfcClassificationReference",
                "name": "23.21 vloeren; constructief, vrijdragende vloeren",
                "location": "https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021/class/23.21",
                "identification": "23.21",
                "referencedSource": {
                    "type": "IfcClassification",
                    "name": "DigiBase Demo NL-SfB tabel 1"
                }
            },
            {
                "type": "IfcMaterial",
                "name": "beton generiek",
                "description": "https://identifier.buildingsmart.org/uri/bimloket/naakt/0.1/class/betongeneriek"
            }
        ]
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

    function determineColor(item: IfcSlabType) {
        // if none of the descriptions in data is the same as item.description, then color is red
        // if description is present, orange

        // if ifc type and predefined type are in the found data object, material is the same, nslsfb is the same
        let found;

        data?.classes.filter((dataItem: any) => {
            if (dataItem.referenceCode === item.description) {
                found=dataItem
            }
        })


        if (!found) return "red"

        console.log(found, item)

        return "orange"

    }

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
                            <h2 style={{ cursor: 'pointer' }} onClick={() => handleCollapseToggle(category)}>
                                {category} {/* You can add an icon here to indicate open/close state */}
                            </h2>

                            {/* Collapse component that shows/hides the items */}
                            <Collapse in={!opened[category]}>
                                {/* Iterate over items for each category */}
                                {items.map((item) => {

                                    return (
                                        <Card key={item.name} my={"xs"}>
                                            <Group>
                                                <Indicator color={determineColor(item)} size={18} mx={"xs"}/>
                                                <Checkbox/>
                                                <Checkbox/>
                                                <div>
                                                    {item.name}
                                                </div>
                                            </Group>
                                        </Card>
                                    );
                                })}
                            </Collapse>
                        </div>
                    ))}
                </Stack>
            </Container>

            <pre>
                {/*{JSON.stringify(grouped, null, 2)}*/}
                {JSON.stringify(data, null, +2)}
            </pre>
        </>
    );
}
