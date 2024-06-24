/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Reference } from "./Reference";
import { ReferenceCountArgs } from "./ReferenceCountArgs";
import { ReferenceFindManyArgs } from "./ReferenceFindManyArgs";
import { ReferenceFindUniqueArgs } from "./ReferenceFindUniqueArgs";
import { CreateReferenceArgs } from "./CreateReferenceArgs";
import { UpdateReferenceArgs } from "./UpdateReferenceArgs";
import { DeleteReferenceArgs } from "./DeleteReferenceArgs";
import { Compound } from "../../compound/base/Compound";
import { ReferenceService } from "../reference.service";
@graphql.Resolver(() => Reference)
export class ReferenceResolverBase {
  constructor(protected readonly service: ReferenceService) {}

  async _referencesMeta(
    @graphql.Args() args: ReferenceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Reference])
  async references(
    @graphql.Args() args: ReferenceFindManyArgs
  ): Promise<Reference[]> {
    return this.service.references(args);
  }

  @graphql.Query(() => Reference, { nullable: true })
  async reference(
    @graphql.Args() args: ReferenceFindUniqueArgs
  ): Promise<Reference | null> {
    const result = await this.service.reference(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Reference)
  async createReference(
    @graphql.Args() args: CreateReferenceArgs
  ): Promise<Reference> {
    return await this.service.createReference({
      ...args,
      data: {
        ...args.data,

        compound: args.data.compound
          ? {
              connect: args.data.compound,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Reference)
  async updateReference(
    @graphql.Args() args: UpdateReferenceArgs
  ): Promise<Reference | null> {
    try {
      return await this.service.updateReference({
        ...args,
        data: {
          ...args.data,

          compound: args.data.compound
            ? {
                connect: args.data.compound,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Reference)
  async deleteReference(
    @graphql.Args() args: DeleteReferenceArgs
  ): Promise<Reference | null> {
    try {
      return await this.service.deleteReference(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Compound, {
    nullable: true,
    name: "compound",
  })
  async getCompound(
    @graphql.Parent() parent: Reference
  ): Promise<Compound | null> {
    const result = await this.service.getCompound(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
