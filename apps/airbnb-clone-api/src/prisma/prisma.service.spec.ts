import { PrismaService } from './prisma.service'

jest.mock('@prisma/client')

describe('PrismaService', () => {
  it('Should create service', () => {
    const prisma = new PrismaService()

    expect(prisma).toBeDefined()
  })
})
