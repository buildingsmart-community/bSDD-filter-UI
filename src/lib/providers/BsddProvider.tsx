import '@mantine/core/styles.css';
import 'mantine-react-table/styles.css';

import { MantineProvider } from '@mantine/core';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, StrictMode, useEffect, useMemo } from 'react';

import { BsddBridgeData, BsddSettings } from '../common/IfcData/bsddBridgeData';
import { IfcEntity } from '../common/IfcData/ifc';
import { theme } from '../common/theme/theme';
import { createBsddQueryClient } from '../api/queryClient';
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
  syncToUrl?: boolean;
  locale?: string;
  children: ReactNode;
}

export function BsddProvider({
  settings,
  onSave,
  onCancel,
  onSearch,
  onSelect,
  loadSettings,
  loadBridgeData,
  syncToUrl = false,
  locale,
  children,
}: BsddProviderProps) {
  const queryClient = useMemo(() => createBsddQueryClient(), []);

  // Initialize settings from props
  useEffect(() => {
    if (settings) {
      useSettingsStore.getState().setSettings(settings as BsddSettings);
    }
  }, [settings]);

  // Initialize locale
  useEffect(() => {
    if (locale) {
      useSettingsStore.getState().setLanguage(locale);
    }
  }, [locale]);

  const bridgeCallbacks = useMemo<BsddBridgeCallbacks>(
    () => ({ onSave, onCancel, onSearch, onSelect, loadSettings, loadBridgeData }),
    [onSave, onCancel, onSearch, onSelect, loadSettings, loadBridgeData],
  );

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <StrictMode>
          <BsddBridgeContext.Provider value={bridgeCallbacks}>
            {syncToUrl && <UrlSyncManager />}
            {children}
          </BsddBridgeContext.Provider>
        </StrictMode>
      </MantineProvider>
    </QueryClientProvider>
  );
}
