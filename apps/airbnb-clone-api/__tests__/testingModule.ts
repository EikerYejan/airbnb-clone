import { HttpModule } from '@nestjs/axios'
import { ConfigModule } from '@nestjs/config'
import { TerminusModule } from '@nestjs/terminus'
import { Test } from '@nestjs/testing'
import { AppController } from '../src/app/app.controller'
import { AppService } from '../src/app/app.service'
import { ListingsModule } from '../src/listings/listings.module'

export const createTestingModule = () => {
  return Test.createTestingModule({
    imports: [ListingsModule, HttpModule, TerminusModule, ConfigModule.forRoot({ isGlobal: true })],
    controllers: [AppController],
    providers: [AppService],
  })
}
