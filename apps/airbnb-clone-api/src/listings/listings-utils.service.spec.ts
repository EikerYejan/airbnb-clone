import { Test, TestingModule } from '@nestjs/testing'
import { ListingsUtilsService } from './listings-utils.service'

describe('ListingsUtilsService', () => {
  let service: ListingsUtilsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListingsUtilsService],
    }).compile()

    service = module.get<ListingsUtilsService>(ListingsUtilsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
