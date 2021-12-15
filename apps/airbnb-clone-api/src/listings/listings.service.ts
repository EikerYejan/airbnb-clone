import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class ListingsService {
  constructor(private readonly db: PrismaService) {}

  async list(args: Prisma.ListingFindManyArgs) {
    const [data, count] = await this.db.$transaction([
      this.db.listing.findMany(args),
      this.db.listing.count({ where: args.where }),
    ])

    return { data, count }
  }

  get(args: Prisma.ListingFindUniqueArgs) {
    return this.db.listing.findUnique(args)
  }

  update(args: Prisma.ListingUpdateArgs) {
    return this.db.listing.update(args)
  }

  create(args: Prisma.ListingCreateArgs) {
    return this.db.listing.create(args)
  }

  delete(args: Prisma.ListingDeleteArgs) {
    return this.db.listing.delete(args)
  }
}
