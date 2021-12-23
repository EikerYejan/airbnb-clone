import { Listing } from '@prisma/client'
import { Transform, Type } from 'class-transformer'
import {
  ArrayUnique,
  IsArray,
  IsDate,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator'
import { ListingAddressDto } from './listingAddress.dto'
import { ListingImagesDto } from './listingImages.dto'
import { ListingAvailabilityDto } from './listingAvailability.dto'

type DTOFields = Omit<
  Listing,
  'id' | 'createdAt' | 'updatedAt' | 'addressJson' | 'availability'
> & {
  availability: ListingAvailabilityDto
}
export class CreateListingDto implements DTOFields {
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

  @IsDate()
  @IsOptional()
  @Transform(({ value }) => new Date(value))
  lastScraped: Date

  @IsNumber()
  reviewsCount: number

  @IsNumber()
  @Min(1)
  price: number

  @IsNumber()
  @Min(1)
  @IsOptional()
  weeklyPrice: number | null

  @IsNumber()
  @Min(1)
  @IsOptional()
  monthlyPrice: number | null

  @IsNumber()
  @Min(1)
  @IsOptional()
  cleaningFee: number | null

  @IsString()
  @IsNotEmpty()
  address: string

  @IsString()
  @IsNotEmpty()
  country: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ListingAddressDto)
  addressJson: Listing['address']

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ListingImagesDto)
  images: Listing['images']

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ListingAvailabilityDto)
  availability: ListingAvailabilityDto
}
