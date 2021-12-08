import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import * as path from 'path'
import { ListingsModule } from '../listings/listings.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'

const envFilePath = path.join(process.cwd(), 'apps/airbnb-clone-api/.env')
@Module({
  imports: [ListingsModule, ConfigModule.forRoot({ isGlobal: true, envFilePath })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
