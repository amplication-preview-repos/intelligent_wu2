import { SortOrder } from "../../util/SortOrder";

export type CompoundOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  inChI?: SortOrder;
  iupacName?: SortOrder;
  molecularFormula?: SortOrder;
  molecularWeight?: SortOrder;
  name?: SortOrder;
  smiles?: SortOrder;
  updatedAt?: SortOrder;
};
