import { Controller, Get } from '@nestjs/common'
import { ListingsService } from './listings.service'

@Controller('listings')
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}

  @Get()
  async getListings() {
    const data = await this.listingsService.list({ take: 10 })

    return data
  }
}
