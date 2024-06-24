import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CompoundTitle } from "../compound/CompoundTitle";

export const SynonymCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
