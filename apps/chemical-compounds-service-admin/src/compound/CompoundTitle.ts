import { Compound as TCompound } from "../api/compound/Compound";

export const COMPOUND_TITLE_FIELD = "iupacName";

export const CompoundTitle = (record: TCompound): string => {
  return record.iupacName?.toString() || String(record.id);
};
