import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SynonymServiceBase } from "./base/synonym.service.base";

@Injectable()
export class SynonymService extends SynonymServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
