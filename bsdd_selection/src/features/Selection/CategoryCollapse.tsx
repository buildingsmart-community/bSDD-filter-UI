import { Accordion, ActionIcon, Text, Collapse, Group, HoverCard, Indicator, Tooltip } from '@mantine/core';
import { useEffect, useState } from 'react';
import { IfcEntity } from '../../../../common/src/IfcData/ifc';
import { ClassContractV1, ClassListItemContractV1 } from '../../../../common/src/BsddApi/BsddApiBase';
import BsddCard from '../BsddCard/BsddCard';
import { BsddApi } from '../../../../common/src/BsddApi/BsddApi';
import { bsddEnvironments } from '../../../../common/src/BsddApi/BsddApiEnvironments';
import { IconCheck, IconInfoCircle, IconSearch } from '@tabler/icons-react';

interface CategoryCollapseProps {
  bsddApiEnvironment: string;
  category: string;
  opened: Record<string, boolean>;
  bbbr: ClassListItemContractV1[];
  items: IfcEntity[];
  index: string;
}

function CategoryCollapse({ bsddApiEnvironment, category, opened, bbbr, items, index }: CategoryCollapseProps) {
  const [bsddClass, setBsddClass] = useState<ClassContractV1>();
  const bsddEnvironment = bsddEnvironments[bsddApiEnvironment];
  const [categoryColor, setCategoryColor] = useState<string>();
  const [colors, setColors] = useState<string[]>([]);

  function addColor(color: string) {
    setColors([...colors, color]);
  }

  useEffect(() => {
    const found = determineBsddClass(category, bbbr);

    if (found) {
      const classContract = found as ClassContractV1;
      const api = new BsddApi(bsddEnvironment);
      api.api
        .classV1List({
          uri: classContract.uri,
          includeClassProperties: true,
          includeChildClassReferences: true,
          includeClassRelations: true,
        })
        .then((response) => {
          console.log('response', response);
          // If the response is not ok, throw an error
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          // Update state with the fetched data
          if (response.data) {
            setBsddClass(response.data);
          }
        })
        .catch((error) => {
          throw new Error(`bSDD API error! status: ${error}`);
        });
    }
  }, [category, bbbr]);

  useEffect(() => {
    if (colors.length > 0) {
      if (colors.includes('red') && colors.includes('green')) {
        setCategoryColor('orange');
      } else if (!colors.includes('red')) {
        setCategoryColor('red');
      } else if (!colors.includes('green')) {
        setCategoryColor('green');
      }
    }
  }, [colors, setCategoryColor]);

  function determineBsddClass(category: string, bbbr: ClassListItemContractV1[]): ClassListItemContractV1 | false {
    // console.log('category',category);
    // console.log('bbbr',bbbr);
    // if none of the descriptions in data is the same as item.description, then color is red
    // if description is present, orange

    // if ifc type and predefined type are in the found data object, material is the same, nslsfb is the same
    let found;

    bbbr.filter((dataItem: any) => {
      if (dataItem.code === category) {
        found = dataItem;
      }
    });

    if (!found) return false;

    return found;
  }

  function truncateText(text: string | null, maxLength: number): string {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }

  function bsddSearchClick() {
    throw new Error('Function not implemented');
  }

  return (
    <Accordion.Item key={category} value={index}>
      <Accordion.Control>
        <Group align={'flex-start'} justify={'space-between'}>
          <Group my={'auto'}>
            <HoverCard>
              <HoverCard.Target>
                <Indicator color={categoryColor} size={'20'} mx={'xs'} />
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Text>
                  <span>{categoryColor}</span>
                </Text>
              </HoverCard.Dropdown>
            </HoverCard>
            {/* <Text truncate="end">{props.item.name || ''}</Text> */}
            <Text>
              <span>{truncateText(category.length > 0 ? category : 'No description', 40)}</span>
            </Text>
          </Group>
          <Group>
            <HoverCard>
              <HoverCard.Target>
                <Group>
                  <IconInfoCircle />
                </Group>
              </HoverCard.Target>
              <HoverCard.Dropdown>{category}</HoverCard.Dropdown>
            </HoverCard>
            <Tooltip label={'Select all instances'}>
              <ActionIcon radius={'xl'} onClick={() => bsddSearchClick()} color={'blue'}>
                <IconSearch size={18} />
              </ActionIcon>
            </Tooltip>
            <Tooltip label={'Attach to type'}>
              <ActionIcon radius={'xl'} color={'green'}>
                <IconCheck size={18} />
              </ActionIcon>
            </Tooltip>
          </Group>
        </Group>
      </Accordion.Control>
      <Accordion.Panel>
        <Collapse in={!opened[category]}>
          {items.map((item, index) => {
            return <BsddCard item={item} bsddClass={bsddClass as ClassContractV1} key={index} addColor={addColor} />;
          })}
        </Collapse>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export default CategoryCollapse;
