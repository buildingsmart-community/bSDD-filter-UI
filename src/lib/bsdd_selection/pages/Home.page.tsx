import { Container, Tabs } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '../../common/app/hooks';
import { IfcEntity } from '../../common/IfcData/ifc';
import { selectBsddDictionariesLoaded } from '../../common/slices/bsddSlice';
import { setValidatedIfcData } from '../../common/slices/ifcDataSlice';
import { BsddSelectionProps } from '../BsddSelectionProps';
import Selection from '../features/Selection/Selection';
import Settings from '../features/Settings/Settings';

function HomePage({ initialData }: BsddSelectionProps) {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const bsddDictionariesLoaded = useAppSelector(selectBsddDictionariesLoaded);

  const [ifcData, setIfcData] = useState<IfcEntity[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (bsddDictionariesLoaded) {
      setLoading(false);
    }
  }, [bsddDictionariesLoaded]);

  useEffect(() => {
    if (!loading && ifcData) {
      dispatch(setValidatedIfcData(ifcData));
      setIfcData(null);
    }
  }, [loading, ifcData, dispatch]);

  // Load initial ifcData when present, otherwise set empty array and await push from backend
  useEffect(() => {
    if (!initialData) {
      setIfcData([]);
    } else {
      console.log('initial loadIfcData selection', initialData.ifcData);
      setIfcData(initialData.ifcData);
    }
  }, [initialData]);

  // Backend bridge API functions

  // @ts-ignore
  window.updateSelection = (selectedIfcEntities: IfcEntity[]) => {
    console.log('updateSelection', selectedIfcEntities);
    setIfcData(selectedIfcEntities);
  };

  return (
    <Container size="40rem">
      <Tabs defaultValue="link">
        <Tabs.List grow>
          <Tabs.Tab value="link">{t('linkTabTitle')}</Tabs.Tab>
          <Tabs.Tab value="settings">{t('settingsTabTitle')}</Tabs.Tab>
        </Tabs.List>
        <Selection loading={loading} />
        <Settings />
      </Tabs>
    </Container>
  );
}

export default HomePage;
