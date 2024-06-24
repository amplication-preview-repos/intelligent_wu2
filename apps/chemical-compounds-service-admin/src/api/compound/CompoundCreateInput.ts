import { PropertyCreateNestedManyWithoutCompoundsInput } from "./PropertyCreateNestedManyWithoutCompoundsInput";
import { ReferenceCreateNestedManyWithoutCompoundsInput } from "./ReferenceCreateNestedManyWithoutCompoundsInput";
import { SynonymCreateNestedManyWithoutCompoundsInput } from "./SynonymCreateNestedManyWithoutCompoundsInput";

export type CompoundCreateInput = {
  inChI?: string | null;
  iupacName?: string | null;
  molecularFormula?: string | null;
  molecularWeight?: number | null;
  name?: string | null;
  properties?: PropertyCreateNestedManyWithoutCompoundsInput;
  references?: ReferenceCreateNestedManyWithoutCompoundsInput;
  smiles?: string | null;
  synonyms?: SynonymCreateNestedManyWithoutCompoundsInput;
};
