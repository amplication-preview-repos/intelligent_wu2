import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReferenceServiceBase } from "./base/reference.service.base";

@Injectable()
export class ReferenceService extends ReferenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
