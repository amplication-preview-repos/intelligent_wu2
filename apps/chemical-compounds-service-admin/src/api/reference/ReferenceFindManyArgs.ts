import { ReferenceWhereInput } from "./ReferenceWhereInput";
import { ReferenceOrderByInput } from "./ReferenceOrderByInput";

export type ReferenceFindManyArgs = {
  where?: ReferenceWhereInput;
  orderBy?: Array<ReferenceOrderByInput>;
  skip?: number;
  take?: number;
};
