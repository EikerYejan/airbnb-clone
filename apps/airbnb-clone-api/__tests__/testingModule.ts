import { Test } from '@nestjs/testing'
import { AppController } from '../src/app/app.controller'
import { AppService } from '../src/app/app.service'
import { ListingsModule } from '../src/listings/listings.module'

export const createTestingModule = () => {
  return Test.createTestingModule({
    imports: [ListingsModule],
    controllers: [AppController],
    providers: [AppService],
  })
}
