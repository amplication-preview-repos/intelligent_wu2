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

export const SynonymEdit = (props: EditProps): React.ReactElement => {
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
        <TextInput label="Synonym" source="synonym" />
      </SimpleForm>
    </Edit>
  );
};
