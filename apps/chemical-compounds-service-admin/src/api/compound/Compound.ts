import { Property } from "../property/Property";
import { Reference } from "../reference/Reference";
import { Synonym } from "../synonym/Synonym";

export type Compound = {
  createdAt: Date;
  id: string;
  inChI: string | null;
  iupacName: string | null;
  molecularFormula: string | null;
  molecularWeight: number | null;
  name: string | null;
  properties?: Array<Property>;
  references?: Array<Reference>;
  smiles: string | null;
  synonyms?: Array<Synonym>;
  updatedAt: Date;
};
