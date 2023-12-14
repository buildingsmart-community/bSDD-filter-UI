import { ActionIcon, Card, Group, HoverCard, Indicator, Text, Tooltip } from '@mantine/core';
import { IfcClassificationReference, IfcEntity } from '../../../../common/src/IfcData/ifc';
import { IconCheck, IconInfoCircle, IconSearch } from '@tabler/icons-react';
import { ClassContractV1 } from '../../../../common/src/BsddApi/BsddApiBase';
import { useEffect, useState } from 'react';

interface BsddCardProps {
  item: IfcEntity;
  bsddClass: ClassContractV1;
  addColor: (addColor: string) => void;
}

function BsddCard({ item, bsddClass, addColor }: BsddCardProps) {
  const [color, setColor] = useState<string>('green');
  const [descriptionStatus, setDescriptionStatus] = useState<boolean>(false);
  const [classificationStatus, setClassificationStatus] = useState<boolean>(false);
  // const [materialStatus, setMaterialStatus] = useState<boolean>(false);

  useEffect(() => {
    if (classificationStatus) {
      setColor('green');
    } else if (descriptionStatus) {
      setColor('orange');
    } else {
      setColor('red');
    }
    addColor(color);
  }, [descriptionStatus, classificationStatus]);

  // (?) Isn't this always the case?
  useEffect(() => {
    if (bsddClass && item) {
      setDescriptionStatus(item.description === bsddClass.description);
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
        setClassificationStatus(ifcClassificatonReferenceUris.some((it) => bsddClassRelationUris.includes(it)));
      } else {
        setClassificationStatus(false);
      }
    }
  }, [item, bsddClass]);

  function truncateText(text: string | null, maxLength: number): string {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }

  function bsddSearchClick(ifcProduct: IfcEntity) {
    // const ifcObjectTest: string =
    //   "{type: 'IfcSlab', name: 'Floor: 23_FL_AT_breedplaatvloer_200 (C35/45)', description: 'breedplaatvloer',predefinedType:'FLOOR'}";

    const ifcEntityJson = JSON.stringify(ifcProduct);

    // @ts-ignore
    bsddBridge.bsddSearch(ifcEntityJson);
  }

  return (
    <Card key={item.name}>
      <Group align={'flex-start'} justify={'space-between'}>
        <Group my={'auto'}>
          <HoverCard>
            <HoverCard.Target>
              <Indicator color={color} size={'1.8em'} mx={'xs'} />
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Text>
                <span>{color}</span>
              </Text>
            </HoverCard.Dropdown>
          </HoverCard>
          {/* <Text truncate="end">{props.item.name || ''}</Text> */}
          <Text>
            <span>{truncateText(item.name || '', 40)}</span>
          </Text>
        </Group>

        <Group>
          <HoverCard>
            <HoverCard.Target>
              <Group>
                <IconInfoCircle />
              </Group>
            </HoverCard.Target>
            <HoverCard.Dropdown>{item.name}</HoverCard.Dropdown>
          </HoverCard>
          <Tooltip label={'Select all instances'}>
            <ActionIcon radius={'xl'} onClick={() => bsddSearchClick(item)} color={'blue'}>
              <IconSearch size={20} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label={'Attach to type'}>
            <ActionIcon radius={'xl'} color={'green'}>
              <IconCheck size={20} />
            </ActionIcon>
          </Tooltip>
        </Group>

        {/*<pre>*/}
        {/*{JSON.stringify(props.class, null, 2)}*/}
        {/*</pre>*/}

        {/*<pre>*/}
        {/*{JSON.stringify(props.item, null, 2)}*/}
        {/*</pre>*/}
      </Group>
    </Card>
  );
}

export default BsddCard;
