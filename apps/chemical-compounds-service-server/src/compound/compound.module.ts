import { Module } from "@nestjs/common";
import { CompoundModuleBase } from "./base/compound.module.base";
import { CompoundService } from "./compound.service";
import { CompoundController } from "./compound.controller";
import { CompoundResolver } from "./compound.resolver";

@Module({
  imports: [CompoundModuleBase],
  controllers: [CompoundController],
  providers: [CompoundService, CompoundResolver],
  exports: [CompoundService],
})
export class CompoundModule {}
