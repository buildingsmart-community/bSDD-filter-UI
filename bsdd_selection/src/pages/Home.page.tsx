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
import {ClassContractV1} from '../../../common/src/BsddApi/BsddApi';
import {BsddBridgeData} from '../../../common/src/IfcData/bsddBridgeData';
import {MainUriSelect} from "../components/MainUriSelect";

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
    bsddApiEnvironment: 'test',
    mainDictionaryUri: 'https://identifier.buildingsmart.org/uri/digibase/bim-basis-objecten',
    filterDictionaryUris: [
        'https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3',
        'https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021',
    ],
    ifcData: [
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
            hasAssociations: [
                {
                    location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
                    referencedSource: {
                        type: 'IfcClassification',
                        name: 'DigiBase Demo NL-SfB tabel 1',
                        location: 'https://search-test.bsdd.buildingsmart.org/uri/digibase/bim-basis-objecten',
                    },
                    type: 'IfcClassificationReference',
                },
            ],
        },
    ],
};

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
                            <MainUriSelect/>

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
