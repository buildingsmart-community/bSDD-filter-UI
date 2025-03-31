import { Box,  ColorSwatch, Divider, HoverCard, List, Space, Text, Tooltip } from '@mantine/core';
import { MantineReactTable, MRT_Cell, MRT_ColumnDef, MRT_Row } from 'mantine-react-table';
import { Fragment, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  selectFilterDictionaryClassifications,
} from '../../../common/slices/bsddSlice';
import { ClassContractV1, ClassPropertyContractV1 } from '../../../common/BsddApi/BsddApiBase';
import { useAppSelector } from '../../../common/app/hooks';
import { Color } from '../../../common/tools/colors';
import type { IdsClass, IdsPropertyClass, IdsNotification } from "../../types/types";
import { mapToBsddValue } from './IdsPropertyMappings';

interface SubRowEntity {
  color: Color;
  messages: IdsNotification[];
  name: string;
}

interface GroupRowEntity {
  color: Color;
  messages: IdsNotification[];
  name: string;
  value: string;
  isExpanded: boolean;
  subRows: SubRowEntity[];
}

function ValidatePropertyDataType(idsProperty: IdsPropertyClass, bsddProperty: ClassPropertyContractV1) : IdsNotification | undefined {
  const expectedBsddProperty = mapToBsddValue(idsProperty._dataType);
  if(expectedBsddProperty === bsddProperty.dataType){
    return undefined;
  }
  return {
    message: `bSDD datatype mismatch compared to IDS:`,
    properties: [`Expected: ${expectedBsddProperty}, but found: ${bsddProperty.dataType}`],
    withBullets: true } as IdsNotification;
}

function GetGroupedRows(ids: IdsClass, filterDictionaryClassifications: ClassContractV1[]) : GroupRowEntity[]{
  var mappedMatches = new Map(filterDictionaryClassifications.map(obj => [obj.name as string, obj]));
  const entities: GroupRowEntity[] = [];

  ids.ids.specifications.specification.forEach(specification => {
    const match = mappedMatches.get(specification._name);
    const specificationMessages:IdsNotification[] = [];
    const hasMatch = match != undefined;
    const name = specification._name;
    const value = specification.applicability.entity.name.simpleValue;
    const specificationDataTypeMismatchErrors: string[] = [];
    const specificationMissingPropertyErrors: string[] = [];
    const subRows: SubRowEntity[] = [];
    if(!hasMatch){
      specificationMessages.push({
        message: `Could not find defined IDS specification in bSDD for:`,
        properties: [name],
      } as IdsNotification);
    }

    specification.requirements.property.forEach(property => {
      const idsPropertyName = property.baseName.simpleValue;
      let propertyMessage: IdsNotification = {} as IdsNotification;
      const matchingBsddProperty = hasMatch && match.classProperties
        ? match.classProperties.find(item => item.name === idsPropertyName)
        : undefined;
      const hasMatchingBsddProperty = matchingBsddProperty !== undefined;

      if(hasMatch){
        if(match.classProperties){
          if(hasMatchingBsddProperty){
            var dataTypeValidationResult = ValidatePropertyDataType(property, matchingBsddProperty);
            if(dataTypeValidationResult !== undefined){
              propertyMessage = dataTypeValidationResult;
              specificationDataTypeMismatchErrors.push(idsPropertyName);
            }
          }
          else{
            propertyMessage = {
              message : `bSDD is missing the property defined in the IDS:`,
              properties : [idsPropertyName],
            }
            specificationMissingPropertyErrors.push(idsPropertyName);
          }
        }
        else{
          propertyMessage = {
            message : `bSDD is missing the property defined in the IDS:`,
            properties : [idsPropertyName],
          }
          specificationMissingPropertyErrors.push(idsPropertyName);
        }

      }
      else{
        propertyMessage = {
          message : `Could not find defined IDS property in bSDD for:`,
          properties : [`${idsPropertyName}`],
        }
      }

      subRows.push({
        color : hasMatchingBsddProperty
          ? propertyMessage.message === undefined
            ? "green"
            : "orange"
          : "red",
        messages: propertyMessage === undefined
          ? []
          : [propertyMessage],
        name : idsPropertyName,
      } as SubRowEntity);
    })

    if(specificationDataTypeMismatchErrors.length > 0){
      specificationMessages.push(
        {
          message: `Datatype mismatch for properties:`,
          properties: specificationDataTypeMismatchErrors,
        } as IdsNotification)
    }

    if(specificationMissingPropertyErrors.length > 0){
      specificationMessages.push(
        {
          message: `bSDD is missing the properties defined in the IDS:`,
          properties: specificationMissingPropertyErrors,
        } as IdsNotification)
    }

    entities.push({
      color : hasMatch
              ? subRows.every(item => item.color === "green")
                ? "green"
                : "orange"
              : "red",
      messages: specificationMessages,
      name : name,
      value : value,
      isExpanded : false,
      subRows : subRows,
    } as GroupRowEntity)
  });

  return entities;
}

let keyValue = 0;
function GetUniqueKey(prefix: string): string {
  keyValue++;
  var key = `${prefix}_key_${keyValue}`;
  return key;
}

const RenderHoverCard = (
  name: string,
  color: string,
  notifications: IdsNotification[],
  isSubLevel: boolean,
) =>
  (color === "green" && isSubLevel)
    ? (<ColorSwatch color={color} />)
    : (
      <HoverCard position="right-start" shadow="md">
        <HoverCard.Target>
          <ColorSwatch color={color} />
        </HoverCard.Target>
        {notifications.length > 0 && 
          <HoverCard.Dropdown>
            {!isSubLevel && color !== "red" &&
              <Fragment key={GetUniqueKey("fragment")}>
                <Text>Matched IDS specification with bSDD for: {name}</Text>
                <Divider my="sm" />
              </Fragment>
            }
            {notifications.map(notification =>
              <Fragment key={GetUniqueKey("fragment")}>
                <Text key={GetUniqueKey(name)}>{notification.message}</Text>
                {notification.properties && (
                  <List key={GetUniqueKey("list")} size="sm">
                    {notification.properties.map(property =>
                      <List.Item key={GetUniqueKey(property)}>{property}</List.Item>
                    )}
                  </List>
                )}
              </Fragment>
            )}
          </HoverCard.Dropdown>
        }
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
            return RenderHoverCard(row.original.value, row.original.color, row.original.messages, row.original.subRows ? false : true);
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