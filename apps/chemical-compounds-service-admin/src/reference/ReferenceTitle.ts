import { Reference as TReference } from "../api/reference/Reference";

export const REFERENCE_TITLE_FIELD = "title";

export const ReferenceTitle = (record: TReference): string => {
  return record.title?.toString() || String(record.id);
};
