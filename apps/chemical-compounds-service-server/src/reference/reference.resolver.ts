import * as graphql from "@nestjs/graphql";
import { ReferenceResolverBase } from "./base/reference.resolver.base";
import { Reference } from "./base/Reference";
import { ReferenceService } from "./reference.service";

@graphql.Resolver(() => Reference)
export class ReferenceResolver extends ReferenceResolverBase {
  constructor(protected readonly service: ReferenceService) {
    super(service);
  }
}
