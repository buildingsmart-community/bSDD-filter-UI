import './styles.css';

import { Checkbox, createTheme, MantineTheme } from '@mantine/core';
import { IconCheck, IconDots } from '@tabler/icons-react';

type CheckboxIconProps = {
  indeterminate: boolean | undefined;
  [key: string]: any;
};

function CheckboxIcon({ indeterminate, ...others }: CheckboxIconProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return indeterminate ? <IconDots {...others} /> : <IconCheck {...others} />;
}

const theme = createTheme({
  components: {
    Checkbox: Checkbox.extend({
      defaultProps: {
        icon: CheckboxIcon,
        variant: 'outline',
      },
      classNames: {
        input: 'checkBox',
      },
    }),
    InputWrapper: {
      styles: (mantineTheme: MantineTheme) => ({
        description: {
          display: 'inline-block',
        },
        label: {
          display: 'inline-block',
        },
      }),
    },
  },
});

// eslint-disable-next-line import/prefer-default-export
export { theme };
