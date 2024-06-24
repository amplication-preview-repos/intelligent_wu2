import { CompoundWhereUniqueInput } from "../compound/CompoundWhereUniqueInput";

export type PropertyCreateInput = {
  compound?: CompoundWhereUniqueInput | null;
  propertyType?: string | null;
  value?: string | null;
};
