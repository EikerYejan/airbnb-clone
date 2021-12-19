import { Listing, Prisma } from '@prisma/client'
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
import { ListingOrderBy, Order } from '../../graphql/graphql.typings'
import { IsValidFilter } from './isValidFilter'
import { IsValidOrderByField } from './validateOrderByFields'
import { IsValidSelectField } from './validateSelectFields'

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

type Transformer = (v: string) => unknown

// TODO: move to a separate file
export function transformFilter<T extends Transformer>(
  filter?: string,
  transformer?: T,
): Prisma.IntFilter | Prisma.StringFilter | string | number {
  if (!filter || filter.length < 0) return undefined
  const [a, b] = filter.split('_')

  if (!b && !!a) return transformer ? transformer(a) : a

  const parsedB = transformer ? transformer(b) : b

  return { [a]: parsedB }
}

type DTOFields = Partial<Pick<Listing, 'propertyType' | 'createdAt' | 'updatedAt'>>
export class GetListingsDto implements DTOFields {
  @IsString()
  @IsOptional()
  name?: string | Prisma.StringFilter

  @IsNumber()
  @IsOptional()
  size?: number

  @IsNumber()
  @IsOptional()
  page?: number

  @Transform(({ value }) => transformFilter(value, Number))
  @Validate(IsValidFilter)
  @IsOptional()
  minimumNights?: Prisma.IntFilter | number

  @Transform(({ value }) => transformFilter(value, Number))
  @Validate(IsValidFilter)
  @IsOptional()
  maximumNights?: Prisma.IntFilter | number

  @Transform(({ value }) => transformFilter(value, Number))
  @Validate(IsValidFilter)
  @IsOptional()
  bedrooms?: Prisma.IntFilter | number

  @Transform(({ value }) => transformFilter(value, Number))
  @Validate(IsValidFilter)
  @IsOptional()
  beds?: Prisma.IntFilter | number

  @Transform(({ value }) => transformFilter(value, Number))
  @Validate(IsValidFilter)
  @IsOptional()
  bathrooms?: Prisma.IntFilter | number

  @IsString()
  @IsOptional()
  propertyType?: string

  @Transform(({ value }) => transformFilter(value, Number))
  @Validate(IsValidFilter)
  @IsOptional()
  price?: Prisma.IntFilter | number

  @Transform(({ value }) => transformFilter(value, Number))
  @Validate(IsValidFilter)
  @IsOptional()
  weeklyPrice?: Prisma.IntFilter | number

  @Transform(({ value }) => transformFilter(value, Number))
  @Validate(IsValidFilter)
  @IsOptional()
  monthlyPrice?: Prisma.IntFilter | number

  @Transform(({ value }) => transformFilter(value, Number))
  @Validate(IsValidFilter)
  @IsOptional()
  cleaningFee?: Prisma.IntFilter | number

  @Transform(({ value }) => value?.split(','))
  @IsArray()
  @ArrayUnique()
  @IsOptional()
  @Validate(IsValidSelectField)
  select?: Array<keyof Listing>

  @IsString()
  @IsOptional()
  @Validate(IsValidOrderByField)
  orderBy?: keyof Listing | ListingOrderBy

  @IsString()
  @IsOptional()
  @IsEnum(SortOrder)
  order?: SortOrder | Order

  @IsString()
  @IsOptional()
  createdAt?: Date

  @IsString()
  @IsOptional()
  updatedAt?: Date

  @Transform(({ value }) => transformFilter(value))
  @Validate(IsValidFilter)
  @IsOptional()
  address?: Prisma.StringFilter | string

  @Transform(({ value }) => transformFilter(value))
  @Validate(IsValidFilter)
  @IsOptional()
  country?: Prisma.StringFilter | string
}
