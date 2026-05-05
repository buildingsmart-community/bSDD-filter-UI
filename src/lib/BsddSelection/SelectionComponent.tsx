import { useDictionaries } from '../api/hooks/useDictionaries';
import { useBsddBridge } from '../providers/BsddBridgeContext';
import { useIfcDataStore } from '../stores/ifcDataStore';
import { useSettingsStore } from '../stores/settingsStore';
import Selection from './features/Selection/Selection';

function BsddSelection() {
  const includeTestDictionaries = useSettingsStore((s) => s.includeTestDictionaries);
  const { accessToken } = useBsddBridge();
  const { isSuccess: dictionariesLoaded } = useDictionaries(includeTestDictionaries ?? false, accessToken);
  const loadingEntities = useIfcDataStore((s) => s.loadingEntities);

  return <Selection loading={!dictionariesLoaded || loadingEntities} />;
}

export default BsddSelection;
