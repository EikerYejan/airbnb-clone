/// <reference types="jest" />

jest.mock('@prisma/client', () => ({
  PrismaClient: function prismaClient() {
    return {
      listing: {
        findMany: jest.fn(() => []),
        findUnique: jest.fn(() => ({})),
        delete: jest.fn(() => ({})),
        create: jest.fn(() => ({})),
        update: jest.fn(() => ({})),
      },
    }
  },
}))
