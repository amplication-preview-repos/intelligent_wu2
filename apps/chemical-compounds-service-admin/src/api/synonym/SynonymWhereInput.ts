import { CompoundWhereUniqueInput } from "../compound/CompoundWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SynonymWhereInput = {
  compound?: CompoundWhereUniqueInput;
  id?: StringFilter;
  synonym?: StringNullableFilter;
};
