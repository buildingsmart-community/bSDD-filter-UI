import { Box, ColorSwatch, Group, Select, Text, Button, Tooltip, HoverCard, Space } from '@mantine/core';
import { IconPointer, IconPencil } from '@tabler/icons-react';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../common/app/hooks';
import { IfcEntity } from '../../../common/IfcData/ifc';
import { selectIfcEntities } from '../../../common/slices/ifcDataSlice';
import { MantineReactTable, MRT_ColumnDef, MRT_Row } from 'mantine-react-table';
import { Color, colorMap } from '../../../common/tools/colors';
import '../../../common/theme/styles.css';
import { selectActiveDictionaries } from '../../../common/slices/settingsSlice';
import { getClassUrisFromDictionaries, ClassificationStatus } from '../../../common/tools/checkIfcClassification';
import { BsddDictionary } from '../../../common/IfcData/bsddBridgeData';
import { RowSelectionState } from '@tanstack/table-core';
import { useApiFunctions } from '../../../common/apiFunctionsContext';
import '@mantine/core/styles.css';

interface SelectionProps {
  loading: boolean;
}

interface SubRowEntity {
  color: Color;
  name: string;
  type: string;
  description: string;
  objectType: string;
  predefinedType: string;
  dictionaryValues: Record<string, ClassificationStatus> | undefined;
}

interface GroupRowEntity {
  color: Color;
  groupName: string;
  type: string;
  name: string;
  description: string;
  objectType: string;
  predefinedType: string;
  isExpanded: boolean;
  subRows: SubRowEntity[];
  dictionaryValues: Record<string, ClassificationStatus> | undefined;
}

/**
 * Calculates the color for a sub-row based on the status of dictionary values.
 *
 * @param activeDictionaryValues - A record of dictionary values with their classification status.
 * @returns The color representing the status of the dictionary values
 */
const calculateSubRowColor = (activeDictionaryValues: Record<string, ClassificationStatus>): Color => {
  const values = Object.values(activeDictionaryValues);
  if (values.every((value) => value !== null)) {
    return 'green';
  } else if (values.some((value) => value !== null)) {
    return 'orange';
  } else {
    return 'red';
  }
};

/**
 * Calculates the color for a group row based on the colors of its sub-rows.
 *
 * @param {SubRowEntity[]} subRows - An array of sub-row entities, each containing a color property.
 * @returns {Color} - The calculated color for the group row.
 *
 */
const calculateGroupRowColor = (subRows: SubRowEntity[]): Color => {
  const colors = subRows.map((subRow) => subRow.color);
  if (colors.includes('orange') || (colors.includes('red') && colors.includes('green'))) {
    return 'orange';
  } else if (colors.every((color) => color === 'red')) {
    return 'red';
  } else if (colors.every((color) => color === 'green')) {
    return 'green';
  } else {
    return 'grey';
  }
};

/**
 * Merges a map of colors into a single color.
 *
 * @param colorMap - A record where the keys are strings and the values are colors.
 * @returns The merged color. If all colors are 'red', returns 'red'. If all colors are 'green', returns 'green'. Otherwise, returns 'orange'.
 */
const mergeColors = (colorMap: Record<string, Color>): Color => {
  const colors = Object.values(colorMap);
  if (colors.every((color) => color === 'red')) {
    return 'red';
  } else if (colors.every((color) => color === 'green')) {
    return 'green';
  } else {
    return 'orange';
  }
};

/**
 * Converts an IfcEntity object to a SubRowEntity object.
 *
 * @param entity - The IfcEntity object to be converted.
 * @param activeDictionaryValues - A record of classification statuses keyed by string.
 * @returns A SubRowEntity object with properties derived from the IfcEntity and activeDictionaryValues.
 */
function IfcEntityToRowEntity(
  entity: IfcEntity,
  activeDictionaryValues: Record<string, ClassificationStatus>,
): SubRowEntity {
  return {
    color: calculateSubRowColor(activeDictionaryValues),
    name: entity.name || '',
    type: entity.type || '',
    description: entity.description || '',
    objectType: entity.objectType || '',
    predefinedType: entity.predefinedType || '',
    dictionaryValues: activeDictionaryValues,
  };
}

/**
 * Groups IFC entities by a specified property and returns the grouped entities along with an index map.
 *
 * @param ifcEntities - An array of IFC entities to be grouped.
 * @param property - The property of the IFC entity to group by.
 * @param activeDictionaries - An array of active BSDD dictionaries to retrieve class URIs from.
 * @returns An object containing:
 *   - `groupedEntities`: An array of grouped row entities.
 *   - `entityIndexMap`: A record mapping group and sub-row indices to the original entity indices.
 */
function groupEntitiesBy(
  ifcEntities: IfcEntity[],
  property: keyof IfcEntity,
  activeDictionaries: BsddDictionary[],
): { groupedEntities: GroupRowEntity[]; entityIndexMap: Record<string, number> } {
  const entityIndexMap: Record<string, number> = {};
  const groupIndexMap: Record<string, number> = {};
  let groupCounter = 0;

  const grouped = ifcEntities.reduce((acc, ifcEntity, index) => {
    const activeDictionaryValues = getClassUrisFromDictionaries(ifcEntity, activeDictionaries);
    const key = ifcEntity[property];
    const groupName = key === undefined || typeof key !== 'string' ? '' : key;

    if (!acc[groupName]) {
      acc[groupName] = {
        color: 'grey',
        groupName,
        type: '',
        name: groupName || '',
        description: '',
        objectType: '',
        predefinedType: '',
        isExpanded: false,
        subRows: [],
        dictionaryValues: activeDictionaryValues,
      };
      groupIndexMap[groupName] = groupCounter++;
    }

    const groupIndex = groupIndexMap[groupName];
    const subRowIndex = acc[groupName].subRows.length;
    entityIndexMap[`${groupIndex}.${subRowIndex}`] = index;

    acc[groupName].subRows.push(IfcEntityToRowEntity(ifcEntity, activeDictionaryValues));
    return acc;
  }, {} as Record<string, GroupRowEntity>);

  const groupedEntities = Object.values(grouped).map((group) => ({
    ...group,
    color: calculateGroupRowColor(group.subRows),
  }));

  return { groupedEntities, entityIndexMap };
}

/**
 * Determines the color for each dictionary based on the values in the subRows.
 *
 * @param subRows - Array of subRow entities.
 * @param activeDictionaries - Array of active dictionaries.
 * @returns A record mapping dictionary keys to their respective colors.
 */
const getMergedDictionaryColors = (
  subRows: SubRowEntity[],
  activeDictionaries: BsddDictionary[],
): Record<string, Color> => {
  const dictionaryColors: Record<string, Color> = {};

  activeDictionaries.forEach((dictionary) => {
    const dictionaryKey = dictionary.ifcClassification.location || '';
    const allSubRowsHaveNull = subRows.every((subRow) => subRow.dictionaryValues?.[dictionaryKey] === null);
    const someSubRowsHaveNull = subRows.some((subRow) => subRow.dictionaryValues?.[dictionaryKey] === null);

    if (allSubRowsHaveNull) {
      dictionaryColors[dictionaryKey] = 'red';
    } else if (someSubRowsHaveNull) {
      dictionaryColors[dictionaryKey] = 'orange';
    } else {
      dictionaryColors[dictionaryKey] = 'green';
    }
  });

  return dictionaryColors;
};

/**
 * Renders a color swatch with hover card that displays and a list of dictionaries with their respective colors.
 *
 * @param color - The color to be displayed in the main color swatch.
 * @param dictionaries - An array of `BsddDictionary` objects to be displayed in the hover card dropdown.
 * @param dictionaryColors - A record mapping dictionary keys to their respective colors.
 * @param label - The label to be displayed above the list of dictionaries.
 * @returns A JSX element representing the hover card.
 */
const renderHoverCard = (
  color: string,
  dictionaries: BsddDictionary[],
  dictionaryColors: Record<string, Color>,
  label: string,
  subRowCount?: number | undefined,
) => (
  <HoverCard position="right-start" shadow="md">
    <HoverCard.Target>
      <ColorSwatch color={color}>
        {subRowCount !== undefined && (
          <Text size="xs" c="white">
            {subRowCount}
          </Text>
        )}
      </ColorSwatch>
    </HoverCard.Target>
    <HoverCard.Dropdown>
      <Text>{label}:</Text>
      {dictionaries.map((dictionary, dictionaryIndex) => {
        const dictionaryKey = dictionary.ifcClassification.location || dictionaryIndex.toString();
        const dictionarySwatchColor = colorMap[dictionaryColors[dictionaryKey]] || 'grey';
        return (
          <Group key={dictionaryKey} mt="xs" justify="space-between" className="flexGroup">
            <ColorSwatch size="1em" color={dictionarySwatchColor} />
            <div className="flexTextContainer">
              <Text className="truncate">{dictionary.ifcClassification.name}</Text>
            </div>
          </Group>
        );
      })}
    </HoverCard.Dropdown>
  </HoverCard>
);

/**
 * Renders a hover card for a group row with color-coded dictionary values.
 *
 * @param {SubRowEntity[]} subRows - The sub-rows associated with the group row.
 * @param {BsddDictionary[]} activeDictionaries - The active dictionaries used for the group row.
 * @param {string} label - The label for the group row.
 * @returns {JSX.Element} The rendered hover card component.
 */
const renderGroupRowHoverCard = (subRows: SubRowEntity[], activeDictionaries: BsddDictionary[], label: string) => {
  const activeDictionaryColors = getMergedDictionaryColors(subRows, activeDictionaries);
  const groupRowColor = mergeColors(activeDictionaryColors);
  return renderHoverCard(
    colorMap[groupRowColor] || 'grey',
    activeDictionaries,
    activeDictionaryColors,
    label,
    subRows.length,
  );
};

/**
 * Renders a hover card for a sub-row with color-coded dictionary values.
 *
 * @param row - The row data containing the original dictionary values.
 * @param activeDictionaries - The list of active dictionaries to be used for color coding.
 * @param label - The label to be displayed on the hover card.
 * @returns {JSX.Element} The rendered hover card component.
 */
const renderSubRowHoverCard = (row: MRT_Row<GroupRowEntity>, activeDictionaries: BsddDictionary[], label: string) => {
  const dictionaryValues = row.original.dictionaryValues;
  const dictionaryColors = activeDictionaries.reduce((acc, dictionary, dictionaryIndex) => {
    const dictionaryKey = dictionary.ifcClassification.location || dictionaryIndex.toString();
    const dictionaryValue = dictionaryValues ? dictionaryValues[dictionaryKey] : null;
    acc[dictionaryKey] = dictionaryValue !== null ? 'green' : 'red';
    return acc;
  }, {} as Record<string, Color>);
  return renderHoverCard(colorMap[row.original.color] || 'grey', activeDictionaries, dictionaryColors, label);
};

function Selection({ loading }: SelectionProps) {
  const { t } = useTranslation();
  const ifcEntities = useAppSelector(selectIfcEntities);
  const activeDictionaries = useAppSelector(selectActiveDictionaries);
  const { bsddSearch, bsddSelect } = useApiFunctions();

  const [groupByKey, setGroupByKey] = useState<keyof IfcEntity>('objectType');
  const [entityIndexMap, setEntityIndexMap] = useState<Record<string, number>>({});

  const groupedEntities = useMemo(() => {
    const { groupedEntities, entityIndexMap } = groupEntitiesBy(ifcEntities, groupByKey, activeDictionaries);
    setEntityIndexMap(entityIndexMap);
    return groupedEntities;
  }, [ifcEntities, groupByKey, activeDictionaries]);

  const columns = useMemo<MRT_ColumnDef<GroupRowEntity>[]>(
    () => [
      {
        accessorKey: 'color',
        header: '',
        Cell: ({ row }) => {
          const subRows = row.original.subRows;
          const dictionaryValues = row.original.dictionaryValues;
          const label = t('dictionaryValidationSummaryLabel');

          if (Array.isArray(subRows) && subRows.length > 0) {
            return renderGroupRowHoverCard(subRows, activeDictionaries, label);
          }

          return renderSubRowHoverCard(row, activeDictionaries, label);
        },
        size: 70,
        minSize: 70,
        maxSize: 70,
        enableResizing: false,
      },
      {
        accessorKey: 'name',
        header: t('Name'),
        grow: true,
        filterFn: 'includesString',
        Cell: ({ cell, row }) => (
          <>
            {row.depth > 0 && <Space w={row.depth * 16} />}
            <Tooltip label={cell.getValue<string>()} withArrow>
              <Text className="truncate">{cell.getValue<string>()}</Text>
            </Tooltip>
          </>
        ),
      },
      {
        accessorKey: 'type',
        header: t('Type'),
        grow: true,
        filterFn: 'includesString',
      },
      {
        accessorKey: 'description',
        header: t('Description'),
        grow: true,
        filterFn: 'includesString',
      },
      {
        accessorKey: 'objectType',
        header: t('ObjectType'),
        grow: true,
        filterFn: 'includesString',
      },
      {
        accessorKey: 'predefinedType',
        header: t('PredefinedType'),
        grow: true,
        filterFn: 'includesString',
      },
    ],
    [t, activeDictionaries],
  );

  const getSelectedEntities = (rowSelection: RowSelectionState) => {
    return Object.keys(rowSelection)
      .filter((rowId) => entityIndexMap.hasOwnProperty(rowId)) // Filter out items not found in the map
      .map((rowId) => {
        const entityIndex = entityIndexMap[rowId];
        return ifcEntities[entityIndex];
      });
  };

  const handleSelectEntities = (rowSelection: RowSelectionState) => () => {
    const selectedEntities = getSelectedEntities(rowSelection);
    console.log('Selected Entities:', selectedEntities);
    bsddSelect(selectedEntities);
  };

  const handleEditEntities = (rowSelection: RowSelectionState) => () => {
    const selectedEntities = getSelectedEntities(rowSelection);
    console.log('Edit Entities:', selectedEntities);
    bsddSearch(selectedEntities);
  };

  return (
    <Box pos="relative" style={{ height: '100vh' }}>
      <MantineReactTable
        columns={columns}
        data={groupedEntities}
        enableExpanding
        enableFullScreenToggle={false}
        enablePagination={false}
        enableRowSelection
        enableRowVirtualization={true}
        enableColumnResizing={true}
        enableBatchRowSelection={true}
        positionToolbarAlertBanner="none" 
        initialState={{
          density: 'xs',
          columnVisibility: {
            type: false, // groupByKey == 'type',
            description: false, // groupByKey == 'description',
            objectType: false, // groupByKey == 'objectType',
            predefinedType: false, // groupByKey == 'predefinedType',
          },
        }}
        mantineTableBodyRowProps={( table ) => ({
          style: (theme)=>({
            backgroundColor: table.row.getIsSelected() ?  theme.colors.blue[0] : undefined,
          }
        )})}
        positionExpandColumn="first"
        renderTopToolbarCustomActions={(table) => (
          <Box
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <Button leftSection={<IconPointer />} onClick={handleSelectEntities(table.table.getState().rowSelection)}>
              {t('selectEntities')}
            </Button>
            <Button leftSection={<IconPencil />} onClick={handleEditEntities(table.table.getState().rowSelection)}>
              {t('editEntities')}
            </Button>
            <Select
              placeholder="Select a key"
              data={[
                { value: 'type', label: 'Entity' },
                { value: 'name', label: 'Name' },
                { value: 'description', label: 'Description' },
                { value: 'objectType', label: 'ObjectType' },
                { value: 'predefinedType', label: 'PredefinedType' },
              ]}
              value={groupByKey}
              onChange={(value) => {
                if (value) {
                  setGroupByKey(value as keyof IfcEntity);
                }
              }}
            />
          </Box>
        )}
      />
    </Box>
  );
}

export default Selection;
