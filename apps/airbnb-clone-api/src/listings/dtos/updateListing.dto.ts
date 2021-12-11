import { Listing } from '@prisma/client'
import { ArrayUnique, IsArray, IsNumber, IsOptional, IsString } from 'class-validator'

export class UpdateListingDto implements Partial<Omit<Listing, 'id'>> {
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
  space?: string

  @IsString()
  @IsOptional()
  description?: string

  @IsString()
  @IsOptional()
  propertyType?: string

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

  @IsNumber()
  @IsOptional()
  minimumNights?: number

  @IsNumber()
  @IsOptional()
  maximumNights?: number

  @IsString()
  @IsOptional()
  cancelationPolicy?: string

  @IsNumber()
  @IsOptional()
  accommodates?: number

  @IsNumber()
  @IsOptional()
  bedrooms?: number

  @IsNumber()
  @IsOptional()
  beds?: number

  @IsNumber()
  @IsOptional()
  bathrooms?: number

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

  @IsNumber()
  @IsOptional()
  reviewsCount?: number
}
