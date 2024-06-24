import { CompoundWhereInput } from "./CompoundWhereInput";
import { CompoundOrderByInput } from "./CompoundOrderByInput";

export type CompoundFindManyArgs = {
  where?: CompoundWhereInput;
  orderBy?: Array<CompoundOrderByInput>;
  skip?: number;
  take?: number;
};
