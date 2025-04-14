import { Box, ColorSwatch, Divider, HoverCard, List, Space, Text, Tooltip } from '@mantine/core';
import { MantineReactTable, MRT_Cell, MRT_ColumnDef, MRT_Row } from 'mantine-react-table';
import { Fragment, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { selectFilterDictionaryClassifications } from '../../../common/slices/bsddSlice';
import { ClassContractV1, ClassPropertyContractV1 } from '../../../common/BsddApi/BsddApiBase';
import { useAppSelector } from '../../../common/app/hooks';
import { Color } from '../../../common/tools/colors';
import type { IdsClass, IdsPropertyClass, IdsNotification } from '../../types/types';
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

function Validator() {
  const { t } = useTranslation();
  const ids = useAppSelector((state) => state.ids.idsFile);
  const filterDictionaryClassifications = useAppSelector(selectFilterDictionaryClassifications);

  let uniqueKeyValue = 0;
  const GetUniqueKey = (prefix: string): string => {
    uniqueKeyValue++;
    var key = `${prefix}_key_${uniqueKeyValue}`;
    return key;
  };

  const CellComponent = ({ cell, row }: { cell: MRT_Cell<GroupRowEntity, unknown>; row: MRT_Row<GroupRowEntity> }) => {
    return (
      <>
        {row.depth > 0 && <Space w={row.depth * 16} />}
        <Tooltip label={cell.getValue<string>()} withArrow>
          <Text className="truncate">{cell.getValue<string>()}</Text>
        </Tooltip>
      </>
    );
  };

  const ValidatePropertyDataType = (
    idsProperty: IdsPropertyClass,
    bsddProperty: ClassPropertyContractV1,
  ): IdsNotification | undefined => {
    const expectedBsddProperty = mapToBsddValue(idsProperty._dataType);
    if (expectedBsddProperty === bsddProperty.dataType) {
      return undefined;
    }
    return {
      message: t('idsComponent.validator.dataTypeMismatch'),
      properties: [`Expected: ${expectedBsddProperty}, but found: ${bsddProperty.dataType}`],
    } as IdsNotification;
  };

  const GetGroupedRows = (ids: IdsClass, filterDictionaryClassifications: ClassContractV1[]): GroupRowEntity[] => {
    var mappedMatches = new Map(filterDictionaryClassifications.map((obj) => [obj.name as string, obj]));
    const entities: GroupRowEntity[] = [];

    ids.ids.specifications.specification.forEach((specification) => {
      const match = mappedMatches.get(specification._name);
      const specificationMessages: IdsNotification[] = [];
      const hasMatch = match != undefined;
      const name = specification._name;
      const value = specification.applicability.entity.name.simpleValue;
      const specificationDataTypeMismatchErrors: string[] = [];
      const specificationMissingPropertyErrors: string[] = [];
      const subRows: SubRowEntity[] = [];
      if (!hasMatch) {
        specificationMessages.push({
          message: t('idsComponent.validator.couldNotFindSpecification'),
          properties: [name],
        } as IdsNotification);
      }

      specification.requirements.property.forEach((property) => {
        const idsPropertyName = property.baseName.simpleValue;
        let propertyMessage: IdsNotification = {} as IdsNotification;
        const matchingBsddProperty =
          hasMatch && match.classProperties
            ? match.classProperties.find((item) => item.name === idsPropertyName)
            : undefined;
        const hasMatchingBsddProperty = matchingBsddProperty !== undefined;

        if (hasMatch) {
          if (match.classProperties) {
            if (hasMatchingBsddProperty) {
              var dataTypeValidationResult = ValidatePropertyDataType(property, matchingBsddProperty);
              if (dataTypeValidationResult !== undefined) {
                propertyMessage = dataTypeValidationResult;
                specificationDataTypeMismatchErrors.push(idsPropertyName);
              }
            } else {
              propertyMessage = {
                message: t('idsComponent.validator.missingBsddProperty'),
                properties: [idsPropertyName],
              };
              specificationMissingPropertyErrors.push(idsPropertyName);
            }
          } else {
            propertyMessage = {
              message: t('idsComponent.validator.missingBsddProperty'),
              properties: [idsPropertyName],
            };
            specificationMissingPropertyErrors.push(idsPropertyName);
          }
        } else {
          propertyMessage = {
            message: t('idsComponent.validator.couldNotFindProperty'),
            properties: [`${idsPropertyName}`],
          };
        }

        subRows.push({
          color: hasMatchingBsddProperty ? (propertyMessage.message === undefined ? 'green' : 'orange') : 'red',
          messages: propertyMessage === undefined || !hasMatch ? [] : [propertyMessage],
          name: idsPropertyName,
        } as SubRowEntity);
      });

      if (specificationDataTypeMismatchErrors.length > 0) {
        specificationMessages.push({
          message: t('idsComponent.validator.dataTypeMismatchForProperties'),
          properties: specificationDataTypeMismatchErrors,
        } as IdsNotification);
      }

      if (specificationMissingPropertyErrors.length > 0) {
        specificationMessages.push({
          message: t('idsComponent.validator.bsddMissingProperties'),
          properties: specificationMissingPropertyErrors,
        } as IdsNotification);
      }

      entities.push({
        color: hasMatch ? (subRows.every((item) => item.color === 'green') ? 'green' : 'orange') : 'red',
        messages: specificationMessages,
        name: name,
        value: value,
        isExpanded: false,
        subRows: subRows,
      } as GroupRowEntity);
    });

    return entities;
  };

  const RenderHoverCard = (name: string, color: string, notifications: IdsNotification[], isSubLevel: boolean) =>
    color === 'green' && isSubLevel ? (
      <ColorSwatch color={color} />
    ) : (
      <HoverCard position="right-start" shadow="md">
        <HoverCard.Target>
          <ColorSwatch color={color} size={isSubLevel ? "20" : ""} />
        </HoverCard.Target>
        {notifications.length > 0 && (
          <HoverCard.Dropdown>
            {!isSubLevel && color !== 'red' && (
              <Fragment key={GetUniqueKey('fragment')}>
                <Text>
                  {t('idsComponent.validator.matchFound')}: {name}
                </Text>
                <Divider my="sm" />
              </Fragment>
            )}
            {notifications.map((notification) => (
              <Fragment key={GetUniqueKey('fragment')}>
                <Text key={GetUniqueKey(name)}>{notification.message}</Text>
                {notification.properties && (
                  <List key={GetUniqueKey('list')} size="sm">
                    {notification.properties.map((property) => (
                      <List.Item key={GetUniqueKey(property)}>{property}</List.Item>
                    ))}
                  </List>
                )}
              </Fragment>
            ))}
          </HoverCard.Dropdown>
        )}
      </HoverCard>
    );

  const groupedEntities = GetGroupedRows(ids!, filterDictionaryClassifications);
  const columns = useMemo<MRT_ColumnDef<GroupRowEntity>[]>(
    () => [
      {
        accessorKey: 'color',
        header: '',
        Cell: ({ row }) => {
          return RenderHoverCard(
            row.original.value,
            row.original.color,
            row.original.messages,
            row.original.subRows ? false : true,
          );
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

  return (
    <Box pos="relative" style={{ height: '100vh' }}>
      {ids && columns && groupedEntities && (
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
      )}
    </Box>
  );
}

export default Validator;
