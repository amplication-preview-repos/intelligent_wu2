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
import { SynonymWhereInput } from "./SynonymWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SynonymOrderByInput } from "./SynonymOrderByInput";

@ArgsType()
class SynonymFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SynonymWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SynonymWhereInput, { nullable: true })
  @Type(() => SynonymWhereInput)
  where?: SynonymWhereInput;

  @ApiProperty({
    required: false,
    type: [SynonymOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SynonymOrderByInput], { nullable: true })
  @Type(() => SynonymOrderByInput)
  orderBy?: Array<SynonymOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SynonymFindManyArgs as SynonymFindManyArgs };
