import { PrismaService } from './prisma.service'

describe('PrismaService', () => {
  it('Should create service', () => {
    const prisma = new PrismaService()

    expect(prisma).toBeDefined()
  })
})
