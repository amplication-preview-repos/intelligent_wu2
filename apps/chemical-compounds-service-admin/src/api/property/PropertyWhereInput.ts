import { CompoundWhereUniqueInput } from "../compound/CompoundWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PropertyWhereInput = {
  compound?: CompoundWhereUniqueInput;
  id?: StringFilter;
  propertyType?: StringNullableFilter;
  value?: StringNullableFilter;
};
