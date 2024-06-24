import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CompoundWhereUniqueInput } from "../compound/CompoundWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ReferenceWhereInput = {
  authors?: StringNullableFilter;
  compound?: CompoundWhereUniqueInput;
  doi?: StringNullableFilter;
  id?: StringFilter;
  journal?: StringNullableFilter;
  title?: StringNullableFilter;
  year?: IntNullableFilter;
};
