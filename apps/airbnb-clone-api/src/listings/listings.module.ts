import { Module } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { ListingsController } from './listings.controller'
import { ListingsService } from './listings.service'

@Module({
  controllers: [ListingsController],
  providers: [ListingsService, PrismaService],
})
export class ListingsModule {}
