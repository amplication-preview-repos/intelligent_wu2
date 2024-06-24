import { SortOrder } from "../../util/SortOrder";

export type ReferenceOrderByInput = {
  authors?: SortOrder;
  compoundId?: SortOrder;
  createdAt?: SortOrder;
  doi?: SortOrder;
  id?: SortOrder;
  journal?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  year?: SortOrder;
};
