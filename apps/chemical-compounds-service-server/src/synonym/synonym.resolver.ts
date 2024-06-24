import * as graphql from "@nestjs/graphql";
import { SynonymResolverBase } from "./base/synonym.resolver.base";
import { Synonym } from "./base/Synonym";
import { SynonymService } from "./synonym.service";

@graphql.Resolver(() => Synonym)
export class SynonymResolver extends SynonymResolverBase {
  constructor(protected readonly service: SynonymService) {
    super(service);
  }
}
