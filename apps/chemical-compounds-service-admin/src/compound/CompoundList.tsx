import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CompoundList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Compounds"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="InChI" source="inChI" />
        <TextField label="IUPACName" source="iupacName" />
        <TextField label="MolecularFormula" source="molecularFormula" />
        <TextField label="MolecularWeight" source="molecularWeight" />
        <TextField label="Name" source="name" />
        <TextField label="SMILES" source="smiles" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
