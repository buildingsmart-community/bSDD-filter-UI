import '@mantine/core/styles.css';
import 'mantine-react-table/styles.css';

import { MantineProvider } from '@mantine/core';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { ReactNode, Suspense, useEffect, useMemo } from 'react';

import { createBsddQueryClient } from '../api/queryClient';
import { bsddPersister } from '../api/persister';
import i18n from '../common/i18n';
import { BsddBridgeData, BsddSettings } from '../common/IfcData/bsddBridgeData';
import { IfcEntity } from '../common/IfcData/ifc';
import { theme } from '../common/theme/theme';
import defaultSettings from '../common/settings/defaultSettings';
import { useSettingsStore } from '../stores/settingsStore';
import { BsddBridgeCallbacks, BsddBridgeContext } from './BsddBridgeContext';
import UrlSyncManager from './UrlSyncManager';

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
  syncToUrl?: boolean;
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
  syncToUrl = false,
  locale,
  children,
}: BsddProviderProps) {
  const queryClient = useMemo(() => createBsddQueryClient(), []);
  const persistOptions = useMemo(() => ({ persister: bsddPersister, maxAge: 1000 * 60 * 60 * 24 }), []);

  useI18nLanguageSubscription();

  // Initialise settings from props once — merge with defaults so required fields are never undefined.
  useEffect(() => {
    if (settings) useSettingsStore.getState().setSettings({ ...defaultSettings, ...settings });
  }, [settings]);

  // External-locale override (e.g. host's UI language).
  useEffect(() => {
    if (locale) useSettingsStore.getState().setLanguage(locale);
  }, [locale]);

  const bridgeCallbacks = useMemo<BsddBridgeCallbacks>(
    () => ({ onSave, onCancel, onSearch, onSelect, loadSettings, loadBridgeData, accessToken }),
    [onSave, onCancel, onSearch, onSelect, loadSettings, loadBridgeData, accessToken],
  );

  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={persistOptions}>
      <MantineProvider theme={theme}>
        <BsddBridgeContext.Provider value={bridgeCallbacks}>
          {syncToUrl && <UrlSyncManager />}
          <Suspense fallback={null}>{children}</Suspense>
        </BsddBridgeContext.Provider>
      </MantineProvider>
    </PersistQueryClientProvider>
  );
}
