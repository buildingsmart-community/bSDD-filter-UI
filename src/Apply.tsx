import React, { useState } from 'react';

interface Props {
    callback: (value: any) => void;
}

const testObject = {
    type: "IfcWall",
    IsDefinedBy: [],
    HasAssociations: [
        {
            type: "IfcClassificationReference",
            Location: "https://...",
            ItemReference: "x",
            Name: "x"
        }
    ]
}

function Apply(props: Props) {
    const [selectOptions, setSelectOptions] = useState<any[]>([]);

    const handleOnChange = (e: any) => {
        props.callback(testObject);
    }

    return (
        <div>
            <button
                type="button"
                className="btn btn-secondary w-100"
                onClick={(e) => handleOnChange(e)}
            >Apply</button>
        </div>
    )
}

export default Apply;