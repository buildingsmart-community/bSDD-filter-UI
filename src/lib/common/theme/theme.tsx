import './styles.css';

import { Checkbox, type MantineTheme, type MantineThemeOverride, createTheme } from '@mantine/core';
import { IconCheck, IconDots } from '@tabler/icons-react';

type CheckboxIconProps = {
  indeterminate: boolean | undefined;
  [key: string]: any;
};

function CheckboxIcon({ indeterminate, ...others }: CheckboxIconProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return indeterminate ? <IconDots {...others} /> : <IconCheck {...others} />;
}

// Scaling for plugin contexts (Revit, Tekla, SketchUp) is handled via CSS zoom on <html>,
// applied by applyDisplayScale() before React renders. The theme itself uses Mantine defaults
// so it looks correct in both plugin panels and standalone webapp mode.
const theme: MantineThemeOverride = createTheme({
  // Use the OS system font stack so text matches the host application (Revit uses Segoe UI,
  // SketchUp on macOS uses SF Pro — system-ui resolves to the correct font automatically).
  fontFamily: 'system-ui, Segoe UI, -apple-system, Roboto, sans-serif',

  defaultRadius: 'sm',

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
      styles: (_mantineTheme: MantineTheme) => ({
        description: { display: 'inline-block' },
        label: { display: 'inline-block' },
      }),
    },
  },
});

// eslint-disable-next-line import/prefer-default-export
export { theme };
