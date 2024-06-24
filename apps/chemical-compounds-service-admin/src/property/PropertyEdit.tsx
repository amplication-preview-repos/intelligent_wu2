import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CompoundTitle } from "../compound/CompoundTitle";

export const PropertyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="compound.id"
          reference="Compound"
          label="Compound"
        >
          <SelectInput optionText={CompoundTitle} />
        </ReferenceInput>
        <TextInput label="PropertyType" source="propertyType" />
        <TextInput label="Value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
