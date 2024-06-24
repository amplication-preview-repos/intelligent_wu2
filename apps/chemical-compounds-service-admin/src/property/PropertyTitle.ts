import { Property as TProperty } from "../api/property/Property";

export const PROPERTY_TITLE_FIELD = "propertyType";

export const PropertyTitle = (record: TProperty): string => {
  return record.propertyType?.toString() || String(record.id);
};
