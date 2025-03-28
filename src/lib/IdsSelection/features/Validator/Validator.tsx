import { Box, Tooltip, Space, Text, HoverCard, ColorSwatch } from '@mantine/core';
import { MantineReactTable, MRT_Cell, MRT_ColumnDef, MRT_Row } from 'mantine-react-table';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  selectFilterDictionaryClassifications,
} from '../../../common/slices/bsddSlice';
import { ClassContractV1 } from '../../../common/BsddApi/BsddApiBase';
import { useAppSelector } from '../../../common/app/hooks';
import { Color } from '../../../common/tools/colors';
import type { IdsClass } from "../../types/types";

interface SubRowEntity {
  color: Color;
  name: string;
}

interface GroupRowEntity {
  color: Color;
  name: string;
  value: string;
  isExpanded: boolean;
  subRows: SubRowEntity[];
}


function GetGroupedRows(ids: IdsClass, filterDictionaryClassifications: ClassContractV1[]) : GroupRowEntity[]{

  var mappedMatches = new Map(filterDictionaryClassifications.map(obj => [obj.name as string, obj]));
  // var result = "";

  const entities: GroupRowEntity[] = [];

  ids.ids.specifications.specification.forEach(specification => {
    const match = mappedMatches.get(specification._name);
    const hasMatch = match != undefined;
    const name = specification._name;
    const value = specification.applicability.entity.name.simpleValue;
    const subRows: SubRowEntity[] = [];

    specification.requirements.property.forEach(property => {
      subRows.push({
        color : (hasMatch && match.classProperties?.some(item => item.name === property.baseName.simpleValue)) ? "green" : "red",
        name : property.baseName.simpleValue,
      } as SubRowEntity);
    })

    entities.push({
      color : hasMatch
              ? subRows.every(item => item.color === "green")
                ? "green"
                : "orange"
              : "red",
      name : name,
      value : value,
      isExpanded : false,
      subRows : subRows,
    } as GroupRowEntity)
  });

  return entities;
}

const renderHoverCard = (
  color: string,
) => (
  <HoverCard position="right-start" shadow="md">
    <HoverCard.Target>
      <ColorSwatch color={color} />
    </HoverCard.Target>
  </HoverCard>
);



function CellComponent({ cell, row }: { cell: MRT_Cell<GroupRowEntity, unknown>; row: MRT_Row<GroupRowEntity> }) {
  return (
    <>
      {row.depth > 0 && <Space w={row.depth * 16} />}
      <Tooltip label={cell.getValue<string>()} withArrow>
        <Text className="truncate">{cell.getValue<string>()}</Text>
      </Tooltip>
    </>
  );
}

function Validator() {
  const ids = useAppSelector((state) => state.ids.idsFile);
  const filterDictionaryClassifications = useAppSelector(selectFilterDictionaryClassifications);
  const { t } = useTranslation();

  const groupedEntities = GetGroupedRows(ids!, filterDictionaryClassifications);
  const columns = useMemo<MRT_ColumnDef<GroupRowEntity>[]>(
      () => [
        {
          accessorKey: 'color',
          header: '',
          Cell: ({ row }) => {
            return renderHoverCard(row.original.color);
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
          Cell: CellComponent,
        },
      ],
      [],
    );

  return(
    <Box pos="relative" style={{ height: '100vh' }}>
      {ids && columns && groupedEntities &&
        <MantineReactTable
          columns={columns}
          data={groupedEntities}
          enableExpanding
          enableFullScreenToggle={false}
          enablePagination={false}
          enableRowSelection
          enableRowVirtualization
          enableColumnResizing
          enableBatchRowSelection
          enableColumnFilters={false}
          enableDensityToggle={false}
          enableHiding={false}
          positionToolbarAlertBanner="bottom"
          initialState={{
            density: 'xs',
            columnVisibility: {
              type: false, // groupByKey == 'type',
              description: false, // groupByKey == 'description',
              objectType: false, // groupByKey == 'objectType',
              predefinedType: false, // groupByKey == 'predefinedType',
            },
          }}
          mantineTableBodyRowProps={(table) => ({
            style: (theme) => ({
              backgroundColor: table.row.getIsSelected() ? theme.colors.blue[0] : undefined,
            }),
          })}
          positionExpandColumn="first"
        />
      }
    </Box>
  );
}

export default Validator;