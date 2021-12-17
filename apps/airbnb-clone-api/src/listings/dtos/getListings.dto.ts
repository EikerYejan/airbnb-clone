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
import { IsValidIntFilter } from './validateIntFilter'
import { IsValidOrderByField } from './validateOrderByFields'
import { IsValidSelectField } from './validateSelectFields'

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

// TODO: move to a separate file
export function transformIntFilter(filter?: string): Prisma.IntFilter | number {
  if (!filter || filter.length < 0) return undefined

  const [a, b] = filter.split('_')
  const parsedA = Number(a)

  if (Number.isNaN(parsedA)) return { [a]: Number(b) }

  return parsedA
}

type DTOFields = Partial<Pick<Listing, 'propertyType' | 'createdAt' | 'updatedAt'>>
export class GetListingsDto implements DTOFields {
  @IsString()
  @IsOptional()
  name?: string

  @IsNumber()
  @IsOptional()
  size?: number

  @IsNumber()
  @IsOptional()
  page?: number

  @Transform(({ value }) => transformIntFilter(value))
  @Validate(IsValidIntFilter)
  @IsOptional()
  minimumNights?: Prisma.IntFilter | number

  @Transform(({ value }) => transformIntFilter(value))
  @Validate(IsValidIntFilter)
  @IsOptional()
  maximumNights?: Prisma.IntFilter | number

  @Transform(({ value }) => transformIntFilter(value))
  @Validate(IsValidIntFilter)
  @IsOptional()
  bedrooms?: Prisma.IntFilter | number

  @Transform(({ value }) => transformIntFilter(value))
  @Validate(IsValidIntFilter)
  @IsOptional()
  beds?: Prisma.IntFilter | number

  @Transform(({ value }) => transformIntFilter(value))
  @Validate(IsValidIntFilter)
  @IsOptional()
  bathrooms?: Prisma.IntFilter | number

  @IsString()
  @IsOptional()
  propertyType?: string

  @Transform(({ value }) => transformIntFilter(value))
  @Validate(IsValidIntFilter)
  @IsOptional()
  price?: Prisma.IntFilter | number

  @Transform(({ value }) => transformIntFilter(value))
  @Validate(IsValidIntFilter)
  @IsOptional()
  weeklyPrice?: Prisma.IntFilter | number

  @Transform(({ value }) => transformIntFilter(value))
  @Validate(IsValidIntFilter)
  @IsOptional()
  monthlyPrice?: Prisma.IntFilter | number

  @Transform(({ value }) => transformIntFilter(value))
  @Validate(IsValidIntFilter)
  @IsOptional()
  cleaningFee?: Prisma.IntFilter | number

  @Transform(({ value = [] }) => value?.split(','))
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
}
