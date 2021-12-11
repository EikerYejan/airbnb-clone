import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class ListingsService {
  constructor(private readonly db: PrismaService) {}

  list(args: Prisma.ListingFindManyArgs) {
    return this.db.listing.findMany(args)
  }

  get(args: Prisma.ListingFindUniqueArgs) {
    return this.db.listing.findUnique(args)
  }

  update(args: Prisma.ListingUpdateArgs) {
    return this.db.listing.update(args)
  }

  async create(args: Prisma.ListingCreateArgs) {
    return this.db.listing.create(args)
  }

  delete(args: Prisma.ListingDeleteArgs) {
    return this.db.listing.delete(args)
  }
}
