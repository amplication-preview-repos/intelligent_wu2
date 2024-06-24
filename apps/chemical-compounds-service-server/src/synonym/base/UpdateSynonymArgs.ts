/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SynonymWhereUniqueInput } from "./SynonymWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SynonymUpdateInput } from "./SynonymUpdateInput";

@ArgsType()
class UpdateSynonymArgs {
  @ApiProperty({
    required: true,
    type: () => SynonymWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SynonymWhereUniqueInput)
  @Field(() => SynonymWhereUniqueInput, { nullable: false })
  where!: SynonymWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SynonymUpdateInput,
  })
  @ValidateNested()
  @Type(() => SynonymUpdateInput)
  @Field(() => SynonymUpdateInput, { nullable: false })
  data!: SynonymUpdateInput;
}

export { UpdateSynonymArgs as UpdateSynonymArgs };