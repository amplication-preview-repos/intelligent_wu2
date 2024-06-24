import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CompoundServiceBase } from "./base/compound.service.base";

@Injectable()
export class CompoundService extends CompoundServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
