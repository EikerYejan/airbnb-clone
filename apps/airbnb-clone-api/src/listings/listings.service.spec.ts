import { createTestingModule } from '../../__tests__/testingModule'
import { ListingsService } from './listings.service'

describe('ListingsService', () => {
  let service: ListingsService

  beforeEach(async () => {
    const module = await createTestingModule().compile()

    service = module.get<ListingsService>(ListingsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
