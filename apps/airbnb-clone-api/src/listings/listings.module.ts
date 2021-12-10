import { Module } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { ListingsUtilsService } from './listings-utils.service'
import { ListingsController } from './listings.controller'
import { ListingsService } from './listings.service'

@Module({
  controllers: [ListingsController],
  providers: [ListingsService, PrismaService, ListingsUtilsService],
})
export class ListingsModule {}
