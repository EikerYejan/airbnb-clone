import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class ListingsService {
  constructor(private readonly db: PrismaService) {}

  list(args: Prisma.listingsFindManyArgs) {
    return this.db.listings.findMany(args)
  }
}
