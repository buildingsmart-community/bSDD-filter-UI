import { Checkbox, Group, Tooltip } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../../common/app/hooks';
import {
  IfcProperty,
  IfcPropertyEnumeratedValue,
  IfcPropertySet,
  IfcPropertySingleValue,
} from '../../../common/IfcData/ifc';
import { setPropertyIsInstance } from '../../../common/slices/ifcDataSlice';
import { t } from 'i18next';
import PropertyInput from './PropertyInput';

const ALLOWED_ATTRIBUTES = ['Name', 'Description', 'ObjectType', 'PredefinedType'];

interface PropertyProps {
  propertySet: IfcPropertySet;
  property: IfcProperty | IfcPropertyEnumeratedValue | IfcPropertySingleValue;
  propertyNaturalLanguageName: string;
}

const getIsInstance = (propertyIsInstanceMap: any, propertySetName: string, propertyName: string) => {
  if (propertySetName === 'Attributes' && !ALLOWED_ATTRIBUTES.includes(propertyName)) {
    return true;
  }
  const propertyKey = `${propertySetName}/${propertyName}`;
  return propertyIsInstanceMap[propertyKey] || propertyIsInstanceMap[propertyName] || false;
};

function Property({ propertySet, property, propertyNaturalLanguageName }: PropertyProps) {
  const dispatch = useAppDispatch();
  const propertyIsInstanceMap = useAppSelector((state) => state.ifcData.propertyIsInstanceMap);
  const savedPropertyIsInstanceMap = useAppSelector((state) => state.ifcData.savedPropertyIsInstanceMap);
  const instanceEnabled = propertySet.name !== 'Attributes';
  const propertyKey = `${propertySet.name}/${property.name}`;
  const isSwitchDisabled =
    savedPropertyIsInstanceMap.hasOwnProperty(propertyKey) || savedPropertyIsInstanceMap.hasOwnProperty(property.name);
  const isInstance = getIsInstance(propertyIsInstanceMap, propertySet.name || '', property.name);

  const inputContainer = (children: React.ReactNode) =>
    instanceEnabled && isInstance ? (
      <Tooltip label={t('bsddSearch.property.tooltipEditInstance')} withArrow>
        {children}
      </Tooltip>
    ) : (
      children
    );

  return (
    <Group>
      <div style={{ flex: 1 }}>
        <PropertyInput
          propertySet={propertySet}
          property={property}
          propertyNaturalLanguageName={propertyNaturalLanguageName}
          isInstance={isInstance}
          inputContainer={inputContainer}
        />
      </div>
      {instanceEnabled && (
        <Tooltip label={t('bsddSearch.property.setAsInstanceCheckboxTooltip')} withArrow>
          <Checkbox
            style={{ marginTop: '2rem' }}
            disabled={isSwitchDisabled}
            checked={isInstance}
            onChange={(event) => {
              if (!isSwitchDisabled) {
                dispatch(setPropertyIsInstance({ propertyName: propertyKey, value: event.currentTarget.checked }));
              }
            }}
          />
        </Tooltip>
      )}
    </Group>
  );
}

export default Property;
