import { Controller, Get, HttpException, Query, Logger } from '@nestjs/common'
import { GetListingsDto } from './dtos/getListings.dto'
import { ListingsUtilsService } from './listings-utils.service'
import { ListingsService } from './listings.service'

@Controller('listings')
export class ListingsController {
  constructor(
    private readonly listingsService: ListingsService,
    private readonly util: ListingsUtilsService,
  ) {}

  private logger = new Logger('ListingsController')

  @Get()
  async getListings(@Query() query: GetListingsDto) {
    try {
      const data = await this.listingsService.list(
        this.util.generateFilters({ ...query, size: query?.size ?? 25, page: query?.page ?? 1 }),
      )

      return {
        statusCode: 200,
        meta: {
          count: data?.length,
          page: query?.page,
        },
        data,
      }
    } catch (error) {
      this.logger.error(error)

      throw new HttpException(error?.message, error.status || 500)
    }
  }
}
