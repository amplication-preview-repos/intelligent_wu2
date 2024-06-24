import * as graphql from "@nestjs/graphql";
import { CompoundResolverBase } from "./base/compound.resolver.base";
import { Compound } from "./base/Compound";
import { CompoundService } from "./compound.service";

@graphql.Resolver(() => Compound)
export class CompoundResolver extends CompoundResolverBase {
  constructor(protected readonly service: CompoundService) {
    super(service);
  }
}
