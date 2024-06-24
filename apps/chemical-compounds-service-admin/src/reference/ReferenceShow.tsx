import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { COMPOUND_TITLE_FIELD } from "../compound/CompoundTitle";

export const ReferenceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Authors" source="authors" />
        <ReferenceField
          label="Compound"
          source="compound.id"
          reference="Compound"
        >
          <TextField source={COMPOUND_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="DOI" source="doi" />
        <TextField label="ID" source="id" />
        <TextField label="Journal" source="journal" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Year" source="year" />
      </SimpleShowLayout>
    </Show>
  );
};
