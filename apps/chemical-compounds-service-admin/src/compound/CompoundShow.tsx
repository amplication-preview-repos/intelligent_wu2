import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COMPOUND_TITLE_FIELD } from "./CompoundTitle";

export const CompoundShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="InChI" source="inChI" />
        <TextField label="IUPACName" source="iupacName" />
        <TextField label="MolecularFormula" source="molecularFormula" />
        <TextField label="MolecularWeight" source="molecularWeight" />
        <TextField label="Name" source="name" />
        <TextField label="SMILES" source="smiles" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Property"
          target="compoundId"
          label="Properties"
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
            <TextField label="PropertyType" source="propertyType" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Value" source="value" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Reference"
          target="compoundId"
          label="References"
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="Synonym"
          target="compoundId"
          label="Synonyms"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
