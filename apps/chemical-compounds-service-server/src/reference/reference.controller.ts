import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReferenceService } from "./reference.service";
import { ReferenceControllerBase } from "./base/reference.controller.base";

@swagger.ApiTags("references")
@common.Controller("references")
export class ReferenceController extends ReferenceControllerBase {
  constructor(protected readonly service: ReferenceService) {
    super(service);
  }
}
