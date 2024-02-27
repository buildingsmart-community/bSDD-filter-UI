import React from 'react';
import { Tooltip, Switch } from '@mantine/core';

interface Props {
  recursiveMode: boolean;
  setRecursiveMode: (value: boolean) => void;
}

function RecursiveMode(props: Props) {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setRecursiveMode(e.target.checked);
  };

  return (
    <Tooltip label="show nested classifications" position="bottom">
      <Switch checked={props.recursiveMode} onChange={(e) => handleOnChange(e)} />
    </Tooltip>
  );
}

export default RecursiveMode;
