import React, { useState } from 'react';
import { Form, OverlayTrigger, Tooltip } from 'react-bootstrap';


interface Props {
    recursiveMode: boolean;
    setRecursiveMode: (value: boolean) => void;
}

function RecursiveMode(props: Props) {
    const [selectOptions, setSelectOptions] = useState<any[]>([]);

    const handleOnChange = (e: any) => {
        props.setRecursiveMode(!(props.recursiveMode));
    }

    return (

        <OverlayTrigger
            overlay={<Tooltip>toggle recursive mode</Tooltip>}
            placement="bottom"
        >
            <Form.Check
                type="switch"
                id="custom-switch"
                checked={props.recursiveMode}
                onChange={(e) => handleOnChange(e)}
            />
        </OverlayTrigger>
    )
}
export default RecursiveMode;