import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompoundService } from "./compound.service";
import { CompoundControllerBase } from "./base/compound.controller.base";

@swagger.ApiTags("compounds")
@common.Controller("compounds")
export class CompoundController extends CompoundControllerBase {
  constructor(protected readonly service: CompoundService) {
    super(service);
  }
}
