import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import { Listing } from '@prisma/client'
import { ListingsUtilsService } from '../listings/listings-utils.service'
import { ListingsService } from '../listings/listings.service'
import { CreateListing, GetListings } from './graphql.typings'

type CreateListingData = Omit<CreateListing, 'images' | 'address'> & {
  images: Listing['images']
  address: Listing['address']
}
type UpdateListingData = Partial<CreateListingData>

@Resolver('Listing')
export class GraphqlService {
  constructor(
    private readonly listings: ListingsService,
    private readonly util: ListingsUtilsService,
  ) {}

  @Query('listings')
  async listingsQuery(@Args('where') args: GetListings) {
    const page = args?.page ?? 1
    const { data: edges, pageInfo } = await this.listings.list(
      this.util.generateFilters({ ...args, size: args?.size ?? 25, page }),
      page,
    )

    return { pageInfo, edges }
  }

  @Query('listing')
  listSingle(@Args('id') id: string) {
    return this.listings.get({ where: { id } })
  }

  // TODO: Validate address.location.coordinates length and type
  @Mutation('updateListing')
  updateListing(@Args('id') id: string, @Args('data') data?: UpdateListingData) {
    return this.listings.update({ data, where: { id } })
  }

  @Mutation('deleteListing')
  deleteListing(@Args('id') id: string) {
    return this.listings.delete({ where: { id } })
  }

  // TODO: Validate address.location.coordinates length and type
  @Mutation('createListing')
  createListing(@Args('data') data: CreateListingData) {
    return this.listings.create({ data })
  }
}
