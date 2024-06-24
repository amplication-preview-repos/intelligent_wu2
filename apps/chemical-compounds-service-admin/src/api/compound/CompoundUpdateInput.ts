import { PropertyUpdateManyWithoutCompoundsInput } from "./PropertyUpdateManyWithoutCompoundsInput";
import { ReferenceUpdateManyWithoutCompoundsInput } from "./ReferenceUpdateManyWithoutCompoundsInput";
import { SynonymUpdateManyWithoutCompoundsInput } from "./SynonymUpdateManyWithoutCompoundsInput";

export type CompoundUpdateInput = {
  inChI?: string | null;
  iupacName?: string | null;
  molecularFormula?: string | null;
  molecularWeight?: number | null;
  name?: string | null;
  properties?: PropertyUpdateManyWithoutCompoundsInput;
  references?: ReferenceUpdateManyWithoutCompoundsInput;
  smiles?: string | null;
  synonyms?: SynonymUpdateManyWithoutCompoundsInput;
};
