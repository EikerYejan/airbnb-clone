import { Prisma } from '@prisma/client'
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator'
import { ListingsUtilsService } from '../listings-utils.service'

@ValidatorConstraint({ async: false, name: 'IsValidOrderByField' })
export class IsValidFilter implements ValidatorConstraintInterface {
  private validatorService = new ListingsUtilsService()

  validate(value: Prisma.IntFilter | Prisma.StringFilter | string | number) {
    if (['string', 'number'].includes(typeof value)) return true
    if (Object.keys(value)?.length <= 0) return false

    return Object.keys(value).every((key) => {
      const val = value?.[key]

      if (!key || !val) return false

      return this.validatorService.validateFilterOperator(key)
    })
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return `parameter ${Object.keys(validationArguments?.value)?.join(', and')} is not a valid ${
      validationArguments.property
    } filter`
  }
}
