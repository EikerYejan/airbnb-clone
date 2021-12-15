import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import { ListingsUtilsService } from '../listings/listings-utils.service'
import { ListingsService } from '../listings/listings.service'
import { CreateListing, GetListings, UpdateListing } from './graphql.typings'

@Resolver('Listing')
export class GraphqlService {
  constructor(
    private readonly listings: ListingsService,
    private readonly util: ListingsUtilsService,
  ) {}

  @Query('listings')
  listingsQuery(@Args('where') args: GetListings) {
    return this.listings.list(
      this.util.generateFilters({ ...args, size: args?.size ?? 25, page: args?.page ?? 1 }),
    )
  }

  @Query('listing')
  listSingle(@Args('id') id: string) {
    return this.listings.get({ where: { id } })
  }

  @Mutation('updateListing')
  updateListing(@Args('id') id: string, @Args('data') data?: UpdateListing) {
    return this.listings.update({ data, where: { id } })
  }

  @Mutation('deleteListing')
  deleteListing(@Args('id') id: string) {
    return this.listings.delete({ where: { id } })
  }

  @Mutation('createListing')
  createListing(@Args('data') data: CreateListing) {
    return this.listings.create({ data })
  }
}
