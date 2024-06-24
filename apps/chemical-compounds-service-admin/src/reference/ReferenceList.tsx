import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COMPOUND_TITLE_FIELD } from "../compound/CompoundTitle";

export const ReferenceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"References"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
