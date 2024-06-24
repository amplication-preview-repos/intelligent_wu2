import { Module } from "@nestjs/common";
import { ReferenceModuleBase } from "./base/reference.module.base";
import { ReferenceService } from "./reference.service";
import { ReferenceController } from "./reference.controller";
import { ReferenceResolver } from "./reference.resolver";

@Module({
  imports: [ReferenceModuleBase],
  controllers: [ReferenceController],
  providers: [ReferenceService, ReferenceResolver],
  exports: [ReferenceService],
})
export class ReferenceModule {}
