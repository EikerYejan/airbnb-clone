import { Prisma } from '@prisma/client'
import { IsNumber, IsOptional, IsString } from 'class-validator'

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

  @IsString()
  @IsOptional()
  select?: string

  @IsString()
  @IsOptional()
  orderBy?: string

  @IsString()
  @IsOptional()
  sort?: Prisma.SortOrder
}
