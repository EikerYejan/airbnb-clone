import { Listing } from '@prisma/client'
import { Transform } from 'class-transformer'
import {
  ArrayUnique,
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  Validate,
  IsEnum,
} from 'class-validator'
import { IsValidOrderByField } from './validateOrderByFields'
import { IsValidSelectField } from './validateSelectFields'

enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export class GetListingsDto {
  @IsString()
  @IsOptional()
  name?: string

  @IsNumber()
  @IsOptional()
  size?: number

  @IsNumber()
  @IsOptional()
  page?: number

  @IsNumber()
  @IsOptional()
  minimumNights?: number

  @IsNumber()
  @IsOptional()
  maximumNights?: number

  @IsNumber()
  @IsOptional()
  bedrooms?: number

  @IsNumber()
  @IsOptional()
  beds?: number

  @IsNumber()
  @IsOptional()
  bathrooms?: number

  @IsString()
  @IsOptional()
  propertyType?: string

  @Transform(({ value }) => value?.split(','))
  @IsArray()
  @ArrayUnique()
  @IsOptional()
  @Validate(IsValidSelectField)
  select?: string[]

  @IsString()
  @IsOptional()
  @Validate(IsValidOrderByField)
  orderBy?: keyof Listing

  @IsString()
  @IsOptional()
  @IsEnum(SortOrder)
  sort?: SortOrder
}
