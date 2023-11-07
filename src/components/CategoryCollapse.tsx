import React, { useState, useEffect } from 'react';
import {Collapse} from "@mantine/core";
import {BimBasisObjectsResponse, BsddCard, IfcSlabType} from "../pages/Home.page";

interface CategoryCollapseProps {
    category: string;
    opened: Record<string, boolean>;
    data: BimBasisObjectsResponse;
    items: IfcSlabType[];
}

function CategoryCollapse(props: CategoryCollapseProps) {
    const [bsddClasses, setBsddClasses] = useState<any>({});
    const { category, opened, data, items } = props;

    function determineBsddClass(category: string) {
        // if none of the descriptions in data is the same as item.description, then color is red
        // if description is present, orange

        // if ifc type and predefined type are in the found data object, material is the same, nslsfb is the same
        let found;

        data.classes.filter((dataItem: any) => {
            if (dataItem.code === category) {
                found = dataItem
            }
        })


        if (!found) return false

        // let result = fetch(found.referenceCode.location)
        //  console.log(result)

        console.log(found, category)

        return found
    }

    useEffect(() => {
        const fetchData = async () => {

            const found = determineBsddClass(category)
            console.log(found)
            if (!found) return false

            const encodedUri = encodeURIComponent(found.uri);
            const response = await fetch(`https://bs-dd-api-prototype.azurewebsites.net/api/Class/v1?uri=${encodedUri}&includeClassProperties=true&includeChildClassReferences=true&includeClassRelations=true`);

            console.log(response)


            setBsddClasses(response);
        };

        fetchData();
    }, [data, items]);

    return (
        <Collapse in={!opened[category]}>
            {items.map((item) => {
                return (
                    <BsddCard item={item} class={bsddClasses} key={item.name} />
                );
            })}
        </Collapse>
    );
}

export default CategoryCollapse;
