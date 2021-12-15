import { Injectable } from '@nestjs/common'
import { Listing, Prisma } from '@prisma/client'
import { ListingOrderBy } from '../graphql/graphql.typings'
import { removeUndefinedEntries } from '../utils'
import { GetListingsDto } from './dtos/getListings.dto'

type ListingKey = keyof Listing

@Injectable()
export class ListingsUtilsService {
  private allowedSelectFields: Array<ListingKey | ListingOrderBy> = [
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
      name: { contains: name },
    })
  }

  validateOrderBy(value?: ListingKey | ListingOrderBy) {
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

  generateOrderBy(sortField?: ListingKey | ListingOrderBy, order?: string) {
    if (!sortField || !order || !this.validateOrderBy(sortField)) return undefined

    return { [sortField]: order }
  }

  generateFilters(query: GetListingsDto): Partial<Prisma.ListingFindManyArgs> {
    const { order, orderBy } = query

    return removeUndefinedEntries({
      take: query.size,
      skip: this.generatePagination(query.size, query.page),
      where: this.generateQueryFilters(query),
      select: this.generateQuerySelect(query?.select),
      orderBy: this.generateOrderBy(orderBy, order),
    })
  }

  generateQueryPageInfo(pageItemsCount: number, allItemsCount: number, size: number, page: number) {
    const totalPages = Math.ceil(allItemsCount / size)

    return {
      page,
      totalPages,
      count: pageItemsCount,
      totalItems: allItemsCount,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    }
  }
}
