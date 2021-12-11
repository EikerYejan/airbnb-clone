import { IsValidOrderByField } from './validateOrderByFields'
import { IsValidSelectField } from './validateSelectFields'

describe('Validation DTOs', () => {
  const selectFieldsValidator = new IsValidSelectField()
  const orderByFieldsValidator = new IsValidOrderByField()

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
})
