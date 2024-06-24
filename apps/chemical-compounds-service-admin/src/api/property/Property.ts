import { Compound } from "../compound/Compound";

export type Property = {
  compound?: Compound | null;
  createdAt: Date;
  id: string;
  propertyType: string | null;
  updatedAt: Date;
  value: string | null;
};
