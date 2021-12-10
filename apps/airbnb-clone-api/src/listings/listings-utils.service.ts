import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { removeUndefinedEntries } from '../utils'
import { GetListingsDto } from './dtos/getListings.dto'

@Injectable()
export class ListingsUtilsService {
  private allowedSelectFields = [
    'id',
    'listingUrl',
    'name',
    'summary',
    'space',
    'description',
    'propertyType',
    'notes',
    'transit',
    'roomType',
    'bedType',
    'minimumNights',
    'maximumNights',
    'cancellationPolicy',
    'accommodates',
    'bedrooms',
    'beds',
    'reviewsCount',
    'bathrooms',
    'amenities',
    'neighborhoodOverview',
    'access',
    'interaction',
    'houseRules',
  ]

  generatePagination(size: number, page: number) {
    return size * (page && page > 0 ? page - 1 : page)
  }

  generateQueryFilters({
    bedrooms,
    beds,
    bathrooms,
    minimumNights,
    maximumNights,
    propertyType,
    name,
  }: GetListingsDto): Prisma.ListingWhereInput {
    return removeUndefinedEntries({
      bedrooms,
      beds,
      bathrooms,
      minimumNights,
      maximumNights,
      propertyType,
      name,
    })
  }

  generateQuerySelect(fields?: string) {
    if (!fields || fields?.length <= 0) return undefined

    const parsed = fields.split(',')
    // TODO: migrate this validation to the DTO
    const invalidFields = parsed?.filter((field) => !this.allowedSelectFields.includes(field))

    if (invalidFields && invalidFields.length > 0) {
      throw new Error(`Invalid select fields: ${invalidFields.join(', ')}`)
    }

    return parsed.reduce((obj, field) => ({ ...obj, [field]: true }), {})
  }

  generateOrderBy(sortField?: string, sortOrder?: string) {
    if (!sortField || !sortOrder) return undefined

    return { [sortField]: sortOrder }
  }

  generateFilters(query: GetListingsDto): Partial<Prisma.ListingFindManyArgs> {
    const { sort, orderBy } = query

    return removeUndefinedEntries({
      take: query.size,
      skip: this.generatePagination(query.size, query.page),
      where: this.generateQueryFilters(query),
      select: this.generateQuerySelect(query?.select),
      orderBy: this.generateOrderBy(orderBy, sort),
    })
  }
}
