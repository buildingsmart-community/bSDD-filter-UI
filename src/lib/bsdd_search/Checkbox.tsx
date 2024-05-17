import { Checkbox } from '@mantine/core';
import React, { useEffect, useState } from 'react';

interface Props {
  label: string;
  value: true | false | undefined;
  setValue: (value: true | false | undefined) => void;
  disabled: boolean;
}

function Check(props: Props) {
  const { label, value, setValue, disabled } = props;
  const [checked, setChecked] = useState<boolean>();
  const [indeterminate, setIndeterminate] = useState<boolean | undefined>(undefined);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.indeterminate = false;
    setValue(e.target.checked);
  };

  useEffect(() => {
    if (value === true) {
      setChecked(true);
      setIndeterminate(false);
    } else if (value === false) {
      setChecked(false);
      setIndeterminate(false);
    } else if (value === undefined) {
      setChecked(false);
      setIndeterminate(true);
    }
  }, [value]);

  return (
    <Checkbox
      label={label}
      checked={checked}
      indeterminate={indeterminate}
      type="checkbox"
      onChange={(e) => handleOnChange(e)}
      disabled={disabled}
    />
  );
}

export default Check;
