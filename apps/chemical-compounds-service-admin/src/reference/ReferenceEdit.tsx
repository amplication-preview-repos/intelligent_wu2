import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { CompoundTitle } from "../compound/CompoundTitle";

export const ReferenceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Authors" multiline source="authors" />
        <ReferenceInput
          source="compound.id"
          reference="Compound"
          label="Compound"
        >
          <SelectInput optionText={CompoundTitle} />
        </ReferenceInput>
        <TextInput label="DOI" source="doi" />
        <TextInput label="Journal" source="journal" />
        <TextInput label="Title" source="title" />
        <NumberInput step={1} label="Year" source="year" />
      </SimpleForm>
    </Edit>
  );
};
