import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { PropertyListRelationFilter } from "../property/PropertyListRelationFilter";
import { ReferenceListRelationFilter } from "../reference/ReferenceListRelationFilter";
import { SynonymListRelationFilter } from "../synonym/SynonymListRelationFilter";

export type CompoundWhereInput = {
  id?: StringFilter;
  inChI?: StringNullableFilter;
  iupacName?: StringNullableFilter;
  molecularFormula?: StringNullableFilter;
  molecularWeight?: FloatNullableFilter;
  name?: StringNullableFilter;
  properties?: PropertyListRelationFilter;
  references?: ReferenceListRelationFilter;
  smiles?: StringNullableFilter;
  synonyms?: SynonymListRelationFilter;
};
