/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Synonym as PrismaSynonym,
  Compound as PrismaCompound,
} from "@prisma/client";

export class SynonymServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SynonymCountArgs, "select">): Promise<number> {
    return this.prisma.synonym.count(args);
  }

  async synonyms(args: Prisma.SynonymFindManyArgs): Promise<PrismaSynonym[]> {
    return this.prisma.synonym.findMany(args);
  }
  async synonym(
    args: Prisma.SynonymFindUniqueArgs
  ): Promise<PrismaSynonym | null> {
    return this.prisma.synonym.findUnique(args);
  }
  async createSynonym(args: Prisma.SynonymCreateArgs): Promise<PrismaSynonym> {
    return this.prisma.synonym.create(args);
  }
  async updateSynonym(args: Prisma.SynonymUpdateArgs): Promise<PrismaSynonym> {
    return this.prisma.synonym.update(args);
  }
  async deleteSynonym(args: Prisma.SynonymDeleteArgs): Promise<PrismaSynonym> {
    return this.prisma.synonym.delete(args);
  }

  async getCompound(parentId: string): Promise<PrismaCompound | null> {
    return this.prisma.synonym
      .findUnique({
        where: { id: parentId },
      })
      .compound();
  }
}
