import { Listing } from '@prisma/client'
import {
  ArrayUnique,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator'

export class CreateListingDto implements Omit<Listing, 'id' | 'createdAt' | 'updatedAt'> {
  @IsString()
  @IsNotEmpty()
  listingUrl: string

  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  summary: string

  @IsString()
  @IsNotEmpty()
  space: string

  @IsString()
  @IsNotEmpty()
  description: string

  @IsString()
  @IsNotEmpty()
  propertyType: string

  @IsString()
  @IsNotEmpty()
  notes: string

  @IsString()
  @IsNotEmpty()
  transit: string

  @IsString()
  @IsNotEmpty()
  roomType: string

  @IsString()
  @IsNotEmpty()
  bedType: string

  @IsNumber()
  minimumNights: number

  @IsNumber()
  maximumNights: number

  @IsString()
  @IsNotEmpty()
  cancellationPolicy: string

  @IsNumber()
  accommodates: number

  @IsNumber()
  bedrooms: number

  @IsNumber()
  beds: number

  @IsNumber()
  bathrooms: number

  @IsArray()
  @ArrayUnique()
  @IsNotEmpty()
  amenities: string[]

  @IsString()
  @IsOptional()
  neighborhoodOverview: string

  @IsString()
  @IsOptional()
  access: string

  @IsString()
  @IsOptional()
  interaction: string

  @IsString()
  @IsOptional()
  houseRules: string

  @IsString()
  @IsOptional()
  lastScraped: Date

  @IsNumber()
  reviewsCount: number

  @IsNumber()
  @Min(1)
  price: number

  @IsNumber()
  @Min(1)
  @IsOptional()
  weeklyPrice: number

  @IsNumber()
  @Min(1)
  @IsOptional()
  monthlyPrice: number

  @IsNumber()
  @Min(1)
  @IsOptional()
  cleaningFee: number
}
