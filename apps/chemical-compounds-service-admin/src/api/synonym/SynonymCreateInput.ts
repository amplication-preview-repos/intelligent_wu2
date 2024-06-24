import { CompoundWhereUniqueInput } from "../compound/CompoundWhereUniqueInput";

export type SynonymCreateInput = {
  compound?: CompoundWhereUniqueInput | null;
  synonym?: string | null;
};
