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
    return Object.keys(value).every((key) => {
      const val = value?.[key]

      if (!key || !val) return false

      return this.validatorService.validateFilterOperator(key)
    })
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return `parameter ${Object.keys(validationArguments?.value)
      .filter((key) => !this.validatorService.validateFilterOperator(key))
      ?.join(', ')} is not a valid ${validationArguments.property} filter`
  }
}
