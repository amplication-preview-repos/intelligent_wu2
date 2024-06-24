import { CompoundWhereUniqueInput } from "../compound/CompoundWhereUniqueInput";

export type ReferenceUpdateInput = {
  authors?: string | null;
  compound?: CompoundWhereUniqueInput | null;
  doi?: string | null;
  journal?: string | null;
  title?: string | null;
  year?: number | null;
};
