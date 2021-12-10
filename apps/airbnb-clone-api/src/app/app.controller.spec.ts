import { TestingModule } from '@nestjs/testing'
import { createTestingModule } from '../../__tests__/testingModule'
import { AppController } from './app.controller'

describe('AppController', () => {
  let app: TestingModule

  beforeAll(async () => {
    app = await createTestingModule().compile()
  })

  describe('getData', () => {
    it('should return "Welcome to airbnb-clone-api!"', () => {
      const appController = app.get<AppController>(AppController)
      expect(appController.getData()).toEqual({
        message: 'Welcome to airbnb-clone-api!',
      })
    })
  })
})
