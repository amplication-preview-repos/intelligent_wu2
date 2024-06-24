/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsNumber,
  Min,
  Max,
  ValidateNested,
} from "class-validator";
import { PropertyCreateNestedManyWithoutCompoundsInput } from "./PropertyCreateNestedManyWithoutCompoundsInput";
import { Type } from "class-transformer";
import { ReferenceCreateNestedManyWithoutCompoundsInput } from "./ReferenceCreateNestedManyWithoutCompoundsInput";
import { SynonymCreateNestedManyWithoutCompoundsInput } from "./SynonymCreateNestedManyWithoutCompoundsInput";

@InputType()
class CompoundCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  inChI?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  iupacName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  molecularFormula?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  molecularWeight?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => PropertyCreateNestedManyWithoutCompoundsInput,
  })
  @ValidateNested()
  @Type(() => PropertyCreateNestedManyWithoutCompoundsInput)
  @IsOptional()
  @Field(() => PropertyCreateNestedManyWithoutCompoundsInput, {
    nullable: true,
  })
  properties?: PropertyCreateNestedManyWithoutCompoundsInput;

  @ApiProperty({
    required: false,
    type: () => ReferenceCreateNestedManyWithoutCompoundsInput,
  })
  @ValidateNested()
  @Type(() => ReferenceCreateNestedManyWithoutCompoundsInput)
  @IsOptional()
  @Field(() => ReferenceCreateNestedManyWithoutCompoundsInput, {
    nullable: true,
  })
  references?: ReferenceCreateNestedManyWithoutCompoundsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  smiles?: string | null;

  @ApiProperty({
    required: false,
    type: () => SynonymCreateNestedManyWithoutCompoundsInput,
  })
  @ValidateNested()
  @Type(() => SynonymCreateNestedManyWithoutCompoundsInput)
  @IsOptional()
  @Field(() => SynonymCreateNestedManyWithoutCompoundsInput, {
    nullable: true,
  })
  synonyms?: SynonymCreateNestedManyWithoutCompoundsInput;
}

export { CompoundCreateInput as CompoundCreateInput };