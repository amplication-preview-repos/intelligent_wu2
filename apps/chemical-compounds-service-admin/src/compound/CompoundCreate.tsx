import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PropertyTitle } from "../property/PropertyTitle";
import { ReferenceTitle } from "../reference/ReferenceTitle";
import { SynonymTitle } from "../synonym/SynonymTitle";

export const CompoundCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="InChI" source="inChI" />
        <TextInput label="IUPACName" source="iupacName" />
        <TextInput label="MolecularFormula" source="molecularFormula" />
        <NumberInput label="MolecularWeight" source="molecularWeight" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="properties"
          reference="Property"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PropertyTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="references"
          reference="Reference"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReferenceTitle} />
        </ReferenceArrayInput>
        <TextInput label="SMILES" source="smiles" />
        <ReferenceArrayInput
          source="synonyms"
          reference="Synonym"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SynonymTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
