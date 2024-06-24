import { Compound } from "../compound/Compound";

export type Synonym = {
  compound?: Compound | null;
  createdAt: Date;
  id: string;
  synonym: string | null;
  updatedAt: Date;
};
