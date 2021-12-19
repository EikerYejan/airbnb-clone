import { ArgumentMetadata, ValidationPipe } from '@nestjs/common'
import { GetListingsDto, transformFilter } from './getListings.dto'
import { IsValidFilter } from './isValidFilter'
import { IsValidOrderByField } from './validateOrderByFields'
import { IsValidSelectField } from './validateSelectFields'

describe('Validation DTOs', () => {
  const selectFieldsValidator = new IsValidSelectField()
  const orderByFieldsValidator = new IsValidOrderByField()
  const intFilterValidator = new IsValidFilter()

  it('Should allow correct select values (id,name)', () => {
    expect(selectFieldsValidator.validate(['id', 'name'])).toBeTruthy()
  })

  it('Should deny invalid select values (listing_id,listing_name)', () => {
    const message = selectFieldsValidator.defaultMessage()

    // eslint-disable-next-line
    // @ts-ignore
    expect(selectFieldsValidator.validate(['listing_id', 'listing_name'])).toBeFalsy()
    expect(message).toEqual('Invalid select fields')
  })

  it('Should allow correct orderBy value (beds)', () => {
    expect(orderByFieldsValidator.validate('beds')).toBeTruthy()
  })

  it('Should deny invalid orderBy value (listing_date)', () => {
    const message = orderByFieldsValidator.defaultMessage({
      value: 'listing_date',
      property: 'orderBy',
      constraints: [],
      object: {},
      targetName: 'orderBy',
    })

    // eslint-disable-next-line
    // @ts-ignore
    expect(orderByFieldsValidator.validate('listing_date')).toBeFalsy()
    expect(message).toEqual('parameter listing_date is not a valid orderBy value')
  })

  describe('Transform int filter', () => {
    it('Should return undefined', () => {
      expect(transformFilter('')).toBeUndefined()
    })

    it('Should return 500', () => {
      expect(transformFilter('500', Number)).toEqual(500)
    })

    it('Should return int filter', () => {
      expect(transformFilter('lt_5', Number)).toEqual({ lt: 5 })
    })

    it('Should return raw string', () => {
      expect(transformFilter('string')).toEqual('string')
    })

    it('Should return string filter', () => {
      expect(transformFilter('equals_USA')).toEqual({ equals: 'USA' })
    })
  })

  describe('Validate int filter', () => {
    it('Should return true when recieving a number', () => {
      expect(intFilterValidator.validate(5)).toBeTruthy()
    })

    it('Should return true when recieving a logic filter', () => {
      expect(intFilterValidator.validate({ lt: 5 })).toBeTruthy()
    })

    it('Should return false', () => {
      const message = intFilterValidator.defaultMessage({
        value: { lt: 5 },
        property: 'beds',
        constraints: [],
        object: {},
        targetName: 'testDto',
      })

      expect(intFilterValidator.validate({})).toBeFalsy()
      expect(message).toEqual('parameter lt is not a valid beds filter')
    })

    it('Should return false when recieving an invalid int filter', () => {
      expect(intFilterValidator.validate({ not: 4 })).toBeFalsy()
    })
  })

  describe('getListingsDTO', () => {
    let target: ValidationPipe
    const metadata: ArgumentMetadata = { type: 'body', metatype: GetListingsDto }

    beforeEach(() => {
      target = new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      })
    })

    it('Should validate and transform', async () => {
      try {
        const expected = {
          beds: { lt: 45 },
          minimumNights: { gt: 2 },
          maximumNights: { lt: 10 },
          bedrooms: { lte: 15 },
          bathrooms: { gte: 2 },
          price: { gt: 100 },
          weeklyPrice: { gt: 100 },
          monthlyPrice: { gt: 100 },
          cleaningFee: { gt: 10 },
          address: { contains: '123' },
          country: 'USA',
          select: ['id', 'name'],
        }
        const data = {
          beds: 'lt_45',
          minimumNights: 'gt_2',
          maximumNights: 'lt_10',
          bedrooms: 'lte_15',
          bathrooms: 'gte_2',
          price: 'gt_100',
          weeklyPrice: 'gt_100',
          monthlyPrice: 'gt_100',
          cleaningFee: 'gt_10',
          address: 'contains_123',
          country: 'USA',
          select: 'id,name',
        }

        const result = await target.transform(data, metadata)

        expect(result).toMatchObject(expected)
      } catch (error) {
        expect(error).toBeUndefined()
      }
    })

    it('Should fail validation', async () => {
      try {
        await target.transform({ size: 'size', page: 'page', name: 454545 }, metadata)
      } catch (error) {
        expect(error.response).toBeDefined()
      }
    })
  })
})
