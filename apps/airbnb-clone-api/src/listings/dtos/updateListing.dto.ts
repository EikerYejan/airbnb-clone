import { Listing } from '@prisma/client'
import { ArrayUnique, IsArray, IsNumber, IsOptional, IsString } from 'class-validator'

export class UpdateListingDto implements Partial<Omit<Listing, 'id'>> {
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
  listingUrl?: string

  @IsString()
  @IsOptional()
  name?: string

  @IsString()
  @IsOptional()
  summary?: string

  @IsString()
  @IsOptional()
  description?: string

  @IsString()
  @IsOptional()
  notes?: string

  @IsString()
  @IsOptional()
  transit?: string

  @IsString()
  @IsOptional()
  roomType?: string

  @IsString()
  @IsOptional()
  bedType?: string

  @IsString()
  @IsOptional()
  cancelationPolicy?: string

  @IsNumber()
  @IsOptional()
  acommodates?: number

  @IsArray()
  @ArrayUnique()
  @IsOptional()
  amenities?: string[]

  @IsString()
  @IsOptional()
  neighborhoodOverview?: string

  @IsString()
  @IsOptional()
  access?: string

  @IsString()
  @IsOptional()
  interaction?: string

  @IsString()
  @IsOptional()
  houseRules: string
}
