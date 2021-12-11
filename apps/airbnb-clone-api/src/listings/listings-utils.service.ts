import { Injectable } from '@nestjs/common'
import { Listing, Prisma } from '@prisma/client'
import { removeUndefinedEntries } from '../utils'
import { GetListingsDto } from './dtos/getListings.dto'

type ListingKey = keyof Listing

@Injectable()
export class ListingsUtilsService {
  private allowedSelectFields: Array<ListingKey> = [
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
    'lastScraped',
    'createdAt',
    'updatedAt',
    'id',
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

  validateOrderBy(value?: ListingKey) {
    return this.allowedSelectFields.includes(value)
  }

  validateSelectFields(fields: ListingKey[] = []) {
    const invalidFields = fields.filter((field) => !this.allowedSelectFields.includes(field))

    if (invalidFields && invalidFields?.length > 0) return false

    return true
  }

  generateQuerySelect(fields?: ListingKey[]) {
    if (!fields || fields?.length <= 0 || !this.validateSelectFields(fields)) return undefined

    return fields.reduce((obj, field) => ({ ...obj, [field]: true }), {})
  }

  generateOrderBy(sortField?: ListingKey, sortOrder?: string) {
    if (!sortField || !sortOrder || !this.validateOrderBy(sortField)) return undefined

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
