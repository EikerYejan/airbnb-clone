import { createTestingModule } from '../../__tests__/testingModule'
import { ListingsController } from './listings.controller'

describe('ListingsController', () => {
  let controller: ListingsController

  beforeEach(async () => {
    const app = await createTestingModule().compile()

    controller = app.get<ListingsController>(ListingsController)
  })

  it('Should de defined', async () => {
    expect(controller).toBeDefined()
  })
})
