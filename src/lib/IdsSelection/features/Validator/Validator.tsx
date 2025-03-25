import { Box } from '@mantine/core';
import { useAppSelector } from '../../../common/app/hooks';
import { IdsClass } from "../../types/types";

function ToString(ids: IdsClass){
  var result = "";

  ids.ids.specifications.specification.forEach(specification => {
    result = result + specification.applicability.entity.name.simpleValue + "\n";
    specification.requirements.property.forEach(property => {
      result = result + "\t > " + property.baseName.simpleValue + "\n";
      console.log(property.value);
      console.log(property.value?.xs_restriction);
      if(property.value?.xs_restriction && property.value?.xs_restriction.xs_enumeration.length > 0){
        property.value.xs_restriction.xs_enumeration.forEach(enumeration =>{
          result = result + "\t\t - " + enumeration._value + "\n";
        })
      }
    })
  });
  return result;
}

function Validator() {
  const ids = useAppSelector((state) => state.ids.idsFile);

  return(
    <Box pos="relative" style={{ height: '100vh' }}>
      {ids &&
        <div style={{ whiteSpace: "pre" }}>{ToString(ids)}</div>
      }
    </Box>
  );
}

export default Validator;