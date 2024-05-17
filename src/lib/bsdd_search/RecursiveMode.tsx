import { Switch, Tooltip } from '@mantine/core';
import React from 'react';

interface RecursiveModeProps {
  recursiveMode: boolean;
  setRecursiveMode: (value: boolean) => void;
}

function RecursiveMode({ recursiveMode, setRecursiveMode }: RecursiveModeProps) {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecursiveMode(e.target.checked);
  };

  return (
    <Tooltip label="show nested classifications" position="bottom">
      <Switch checked={recursiveMode} onChange={(e) => handleOnChange(e)} />
    </Tooltip>
  );
}

export default RecursiveMode;
