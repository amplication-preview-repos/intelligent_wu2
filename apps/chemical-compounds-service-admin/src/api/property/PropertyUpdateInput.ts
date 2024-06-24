import { CompoundWhereUniqueInput } from "../compound/CompoundWhereUniqueInput";

export type PropertyUpdateInput = {
  compound?: CompoundWhereUniqueInput | null;
  propertyType?: string | null;
  value?: string | null;
};
