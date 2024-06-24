import { Synonym as TSynonym } from "../api/synonym/Synonym";

export const SYNONYM_TITLE_FIELD = "synonym";

export const SynonymTitle = (record: TSynonym): string => {
  return record.synonym?.toString() || String(record.id);
};
