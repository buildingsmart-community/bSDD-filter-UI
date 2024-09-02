import { Checkbox, Input } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface CheckProps {
  label: string | null;
  description: string | null;
  value: true | false | undefined;
  setValue: (value: true | false | undefined) => void;
  disabled: boolean;
}

function Check({ label, description, value, setValue, disabled }: CheckProps) {
  const { t } = useTranslation();
  const [checked, setChecked] = useState<boolean>(false);
  const [indeterminate, setIndeterminate] = useState<boolean>(true);

  const getDescription = () => {
    if (indeterminate) {
      return t('checkbox.indeterminate');
    }
    return checked ? t('checkbox.true') : t('checkbox.false');
  };

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
    <Input.Wrapper label={label} description={description}>
      <Checkbox
        description={getDescription()}
        checked={checked}
        indeterminate={indeterminate}
        type="checkbox"
        onChange={(e) => handleOnChange(e)}
        disabled={disabled}
      />
    </Input.Wrapper>
  );
}

export default Check;
