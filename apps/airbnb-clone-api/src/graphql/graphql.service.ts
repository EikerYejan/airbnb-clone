import { UsePipes } from '@nestjs/common'
import { Resolver, Query, Args } from '@nestjs/graphql'
import { ListingsUtilsService } from '../listings/listings-utils.service'
import { ListingsService } from '../listings/listings.service'
import { GetListings } from './graphql.typings'

@Resolver('Listing')
export class GraphqlService {
  constructor(
    private readonly listings: ListingsService,
    private readonly util: ListingsUtilsService,
  ) {}

  @Query('listings')
  @UsePipes()
  listingsQuery(@Args('where') args: GetListings) {
    return this.listings.list(
      this.util.generateFilters({ ...args, size: args.size ?? 25, page: args.page ?? 1 }),
    )
  }
}
