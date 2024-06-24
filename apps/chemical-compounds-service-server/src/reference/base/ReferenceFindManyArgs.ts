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
import { ReferenceWhereInput } from "./ReferenceWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ReferenceOrderByInput } from "./ReferenceOrderByInput";

@ArgsType()
class ReferenceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ReferenceWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ReferenceWhereInput, { nullable: true })
  @Type(() => ReferenceWhereInput)
  where?: ReferenceWhereInput;

  @ApiProperty({
    required: false,
    type: [ReferenceOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ReferenceOrderByInput], { nullable: true })
  @Type(() => ReferenceOrderByInput)
  orderBy?: Array<ReferenceOrderByInput>;

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

export { ReferenceFindManyArgs as ReferenceFindManyArgs };
