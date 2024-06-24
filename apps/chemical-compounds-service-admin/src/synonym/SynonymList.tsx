import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COMPOUND_TITLE_FIELD } from "../compound/CompoundTitle";

export const SynonymList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Synonyms"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="Compound"
          source="compound.id"
          reference="Compound"
        >
          <TextField source={COMPOUND_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Synonym" source="synonym" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
