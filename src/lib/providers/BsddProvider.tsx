import '@mantine/core/styles.css';
import 'mantine-react-table/styles.css';

import { MantineProvider } from '@mantine/core';
import { type PersistQueryClientOptions, PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { type ReactNode, Suspense, useEffect, useMemo } from 'react';

import { setBsddAccessToken } from '../api/bsddApiInstance';
import { bsddPersister } from '../api/persister';
import { createBsddQueryClient } from '../api/queryClient';
import { isPersistableQueryKey } from '../api/queryKeys';
import type { BsddBridgeData, BsddSettings } from '../common/IfcData/bsddBridgeData';
import type { IfcEntity } from '../common/IfcData/ifc';
import i18n from '../common/i18n';
import defaultSettings from '../common/settings/defaultSettings';
import { theme } from '../common/theme/theme';
import { useSettingsStore } from '../stores/settingsStore';
import { type BsddBridgeCallbacks, BsddBridgeContext } from './BsddBridgeContext';

export interface BsddProviderProps {
  settings?: Partial<BsddSettings>;
  onSave?: (data: BsddBridgeData) => Promise<string>;
  onCancel?: () => void;
  onSearch?: (entities: IfcEntity[], key?: keyof IfcEntity) => void;
  onSelect?: (entities: IfcEntity[]) => void;
  loadSettings?: () => Promise<string>;
  loadBridgeData?: () => Promise<string>;
  /** bSDD bearer token. Hosts compute via `useAuthToken()`; library reads via `useBsddBridge()`. */
  accessToken?: string;
  locale?: string;
  children: ReactNode;
}

/**
 * Subscribe i18next to the settings store at boot. Replaces the side-effect
 * that used to live inside `setLanguage()` on the store — keeping the setter
 * a pure state mutation and language ↔ i18n a one-way bind.
 */
function useI18nLanguageSubscription() {
  useEffect(() => {
    const lang = useSettingsStore.getState().language;
    if (lang && i18n.language !== lang) {
      void i18n.changeLanguage(lang);
    }
    return useSettingsStore.subscribe((state, prev) => {
      if (state.language !== prev.language && state.language) {
        void i18n.changeLanguage(state.language);
      }
    });
  }, []);
}

export function BsddProvider({
  settings,
  onSave,
  onCancel,
  onSearch,
  onSelect,
  loadSettings,
  loadBridgeData,
  accessToken,
  locale,
  children,
}: BsddProviderProps) {
  const queryClient = useMemo(() => createBsddQueryClient(), []);
  const persistOptions = useMemo<Omit<PersistQueryClientOptions, 'queryClient'>>(
    () => ({
      persister: bsddPersister,
      maxAge: 1000 * 60 * 60 * 24,
      dehydrateOptions: {
        // status check = defaultShouldDehydrateQuery, inlined because the
        // persist-client's nested query-core copy makes the import type-incompatible
        shouldDehydrateQuery: (query) => query.state.status === 'success' && isPersistableQueryKey(query.queryKey),
      },
    }),
    [],
  );

  useI18nLanguageSubscription();

  // Initialise settings from props once — merge with defaults so required fields are never undefined.
  useEffect(() => {
    if (settings) useSettingsStore.getState().setSettings({ ...defaultSettings, ...settings });
  }, [settings]);

  // External-locale override (e.g. host's UI language).
  useEffect(() => {
    if (locale) useSettingsStore.getState().setLanguage(locale);
  }, [locale]);

  // Keep the transport interceptor in sync with the current token.
  useEffect(() => {
    setBsddAccessToken(accessToken);
    return () => setBsddAccessToken(undefined);
  }, [accessToken]);

  const bridgeCallbacks = useMemo<BsddBridgeCallbacks>(
    () => ({ onSave, onCancel, onSearch, onSelect, loadSettings, loadBridgeData, accessToken }),
    [onSave, onCancel, onSearch, onSelect, loadSettings, loadBridgeData, accessToken],
  );

  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={persistOptions}>
      <MantineProvider theme={theme}>
        <BsddBridgeContext.Provider value={bridgeCallbacks}>
          <Suspense fallback={null}>{children}</Suspense>
        </BsddBridgeContext.Provider>
      </MantineProvider>
    </PersistQueryClientProvider>
  );
}
