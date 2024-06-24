import { Compound } from "../compound/Compound";

export type Reference = {
  authors: string | null;
  compound?: Compound | null;
  createdAt: Date;
  doi: string | null;
  id: string;
  journal: string | null;
  title: string | null;
  updatedAt: Date;
  year: number | null;
};
