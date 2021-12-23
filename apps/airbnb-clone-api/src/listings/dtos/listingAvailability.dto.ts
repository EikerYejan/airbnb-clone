import { IsNumber, Min } from 'class-validator'

export class ListingAvailabilityDto {
  @IsNumber()
  @Min(1)
  availability_30: number

  @IsNumber()
  @Min(1)
  availability_60: number

  @IsNumber()
  @Min(1)
  availability_90: number

  @IsNumber()
  @Min(1)
  availability_365: number
}
