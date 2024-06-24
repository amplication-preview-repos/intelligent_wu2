import { CompoundWhereUniqueInput } from "../compound/CompoundWhereUniqueInput";

export type SynonymUpdateInput = {
  compound?: CompoundWhereUniqueInput | null;
  synonym?: string | null;
};
