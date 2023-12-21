import { ActionIcon, Group, HoverCard, Indicator, Text, Tooltip } from '@mantine/core';
import { IfcClassificationReference, IfcEntity } from '../../../../common/src/IfcData/ifc';
import { IconCheck, IconInfoCircle, IconSearch } from '@tabler/icons-react';
import { ClassContractV1 } from '../../../../common/src/BsddApi/BsddApiBase';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../../../common/src/theme/styles.css';

interface BsddCardProps {
  item: IfcEntity;
  bsddClass: ClassContractV1;
  addColor: (addColor: string) => void;
}

function BsddCard({ item, bsddClass, addColor }: BsddCardProps) {
  const { t } = useTranslation();
  const [color, setColor] = useState<string>('green');
  const [mainClassificationStatus, setMainClassificationStatus] = useState<boolean>(false);
  const [descriptionStatus, setDescriptionStatus] = useState<boolean>(false);
  const [ifcClassStatus, setIfcClassStatus] = useState<boolean>(false);
  const [nlsfbClassStatus, setNlsfbClassStatus] = useState<boolean>(false);
  // const [materialStatus, setMaterialStatus] = useState<boolean>(false);

  useEffect(() => {
    if (mainClassificationStatus) {
      setColor('green');
    } else if (descriptionStatus) {
      setColor('orange');
    } else {
      setColor('red');
    }
    addColor(color);
  }, [descriptionStatus, mainClassificationStatus]);

  // TODO: item.description === bsddClass.code always true
  useEffect(() => {
    if (bsddClass && item) {
      setDescriptionStatus(item.description === bsddClass.code);
    }
  }, [item, bsddClass]);

  useEffect(() => {
    if (item.hasAssociations) {
      const ifcClassificatonReferenceUris: string[] = item.hasAssociations
        .filter((it) => it.type === 'IfcClassificationReference')
        .map((it) => (it as IfcClassificationReference).location)
        .filter((it) => it !== undefined) as string[];
      const bsddClassRelationUris = bsddClass?.classRelations
        ?.map((it) => it.relatedClassUri)
        .filter((it) => it !== undefined) as string[];

      if (ifcClassificatonReferenceUris && bsddClassRelationUris) {
        setMainClassificationStatus(ifcClassificatonReferenceUris.some((it) => bsddClassRelationUris.includes(it)));
      } else {
        setMainClassificationStatus(false);
      }
    }
  }, [item, bsddClass]);

  useEffect(() => {
    if (bsddClass && item) {
      if (!item.type) return;
      setIfcClassStatus(bsddClass.relatedIfcEntityNames?.includes(item.type) || false);
    }
  }, [item, bsddClass]);

  useEffect(() => {
    if (item.hasAssociations) {
      const ifcClassificatonReferenceUris: string[] = item.hasAssociations
        .filter(
          (it) =>
            it.type === 'IfcClassificationReference' &&
            it.referencedSource?.location === 'https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021',
        )
        .map((it) => (it as IfcClassificationReference).location)
        .filter((it) => it !== undefined) as string[];

      const bsddClassRelationUris = bsddClass?.classRelations
        ?.map((it) => it.relatedClassUri)
        .filter((it) => it !== undefined) as string[];

      if (ifcClassificatonReferenceUris && bsddClassRelationUris) {
        setNlsfbClassStatus(ifcClassificatonReferenceUris.some((it) => bsddClassRelationUris.includes(it)));
      } else {
        setNlsfbClassStatus(false);
      }
    }
  }, [item, bsddClass]);

  function bsddSearchClick(ifcProduct: IfcEntity) {
    const ifcEntityJson = JSON.stringify(ifcProduct);

    // @ts-ignore
    bsddBridge.bsddSearch(ifcEntityJson);
  }

  function selectInstances(ifcProduct: IfcEntity) {
    throw new Error('Function not implemented');
  }

  return (
    <Group mt="xs" justify="space-between" className="flexGroup">
      <Indicator color={color} size={'1.8em'} mx={'xs'} />
      <div className="flexTextContainer">
        <Text title={item.name} className="truncate">
          {item.name}
        </Text>
      </div>
      <HoverCard>
        <HoverCard.Target>
          <Group>
            <IconInfoCircle />
          </Group>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Group mt="xs" justify="space-between" className="flexGroup">
            <Indicator mx="sm" color={descriptionStatus ? 'green' : 'red'} size={'1.8em'} />
            <div className="flexTextContainer">
              <Text className="truncate">Description</Text>
            </div>
          </Group>
          <Group mt="xs" justify="space-between" className="flexGroup">
            <Indicator mx="sm" color={mainClassificationStatus ? 'green' : 'red'} size={'1.8em'} />
            <div className="flexTextContainer">
              <Text className="truncate">bSDD classification</Text>
            </div>
          </Group>
          <Group mt="xs" justify="space-between" className="flexGroup">
            <Indicator mx="sm" color={ifcClassStatus ? 'green' : 'red'} size={'1.8em'} />
            <div className="flexTextContainer">
              <Text className="truncate">IFC class</Text>
            </div>
          </Group>
          <Group mt="xs" justify="space-between" className="flexGroup">
            <Indicator mx="sm" color={nlsfbClassStatus ? 'green' : 'red'} size={'1.8em'} />
            <div className="flexTextContainer">
              <Text className="truncate">NL/SfB tabel 1</Text>
            </div>
          </Group>
        </HoverCard.Dropdown>
      </HoverCard>
      <Tooltip label={t('Select objects')}>
        <ActionIcon radius={'xl'} onClick={() => selectInstances(item)} color={'blue'}>
          <IconSearch size={20} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label={t('Attach to type')}>
        <ActionIcon radius={'xl'} onClick={() => bsddSearchClick(item)} color={'green'}>
          <IconCheck size={20} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}

export default BsddCard;
