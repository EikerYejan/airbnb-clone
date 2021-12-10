import {
  Controller,
  Get,
  HttpException,
  Query,
  Logger,
  Param,
  Delete,
  Patch,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { GetListingsDto } from './dtos/getListings.dto'
import { UpdateListingDto } from './dtos/updateListing.dto'
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
  @UsePipes(
    new ValidationPipe({ transform: true, transformOptions: { enableImplicitConversion: true } }),
  )
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

  @Get('/:id')
  async getListing(@Param('id') id: string) {
    try {
      const data = await this.listingsService.get({ where: { id } })

      if (!data) throw new HttpException('Listing not found', 404)

      return {
        statusCode: 200,
        data,
      }
    } catch (error) {
      this.logger.error(error)

      throw new HttpException(error?.message, error.status || 500)
    }
  }

  @Patch('/:id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateListing(@Body() listing: UpdateListingDto, @Param('id') id: string) {
    try {
      const response = await this.listingsService.update({ data: listing, where: { id } })

      return {
        statusCode: 200,
        response,
      }
    } catch (error) {
      this.logger.error(error)

      throw new HttpException(error?.message, error.status || 500)
    }
  }

  @Delete('/:id')
  async deleteListing(@Param('id') id: string) {
    try {
      const data = await this.listingsService.delete({ where: { id } })

      return {
        statusCode: 200,
        data,
      }
    } catch (error) {
      this.logger.error(error)

      throw new HttpException(error, error.status || 500)
    }
  }
}
