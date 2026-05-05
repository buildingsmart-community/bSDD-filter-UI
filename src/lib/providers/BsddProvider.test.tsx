import { render, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useSettingsStore } from '../stores/settingsStore';
import { BsddProvider } from './BsddProvider';

const dict = (location: string) => ({
  parameterMapping: '',
  ifcClassification: { type: 'IfcClassification' as const, location, name: location },
});

describe('BsddProvider', () => {
  it('renders children', () => {
    const { getByText } = render(
      <BsddProvider>
        <div>child</div>
      </BsddProvider>,
    );
    expect(getByText('child')).toBeTruthy();
  });

  it('initializes settings from props', async () => {
    const main = dict('https://example.org/main');
    render(
      <BsddProvider
        settings={{
          mainDictionary: main,
          ifcDictionary: null,
          filterDictionaries: [],
          language: 'en-GB',
          includeTestDictionaries: false,
        }}
      >
        <div>x</div>
      </BsddProvider>,
    );
    await waitFor(() => {
      expect(useSettingsStore.getState().mainDictionary).toEqual(main);
    });
  });

  it('initializes the locale through setLanguage', async () => {
    render(
      <BsddProvider locale="nl-NL">
        <div>x</div>
      </BsddProvider>,
    );
    await waitFor(() => {
      expect(useSettingsStore.getState().language).toBe('nl-NL');
    });
  });
});
