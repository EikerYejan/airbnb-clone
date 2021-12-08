import { Controller, Get, HttpException, Query } from '@nestjs/common'
import { GetListingsDto } from './dtos/getListings.dto'
import { ListingsService } from './listings.service'

@Controller('listings')
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}

  @Get()
  async getListings(@Query() query: GetListingsDto) {
    try {
      // TODO: Move this to an util
      const {
        size = 25,
        page = 1,
        bedrooms,
        beds,
        bathrooms,
        minimumNights,
        maximumNights,
        propertyType,
        select,
        name,
      } = query
      const skip = size * (page && page > 0 ? page - 1 : page)
      const filters = {
        bedrooms,
        beds,
        bathrooms,
        minimumNights,
        maximumNights,
        propertyType,
        name,
      }
      const queryFields = select?.split(',').reduce((obj, field) => ({ ...obj, [field]: true }), {})

      const data = await this.listingsService.list({
        take: size,
        skip,
        where: { ...filters, name: { contains: name } },
        select: queryFields,
      })

      return {
        statusCode: 200,
        meta: {
          count: data.length,
          page,
        },
        data,
      }
    } catch (error) {
      throw new HttpException(error, error.status || 500)
    }
  }
}
