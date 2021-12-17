import { Prisma } from '@prisma/client'
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator'
import { ListingsUtilsService } from '../listings-utils.service'

@ValidatorConstraint({ async: false, name: 'IsValidOrderByField' })
export class IsValidIntFilter implements ValidatorConstraintInterface {
  private validatorService = new ListingsUtilsService()

  validate(value: Prisma.IntFilter | number) {
    if (typeof value === 'number') return true
    const key = Object.keys(value)?.[0]
    const val = value?.[key]

    if (!key || !val) return false

    return typeof val === 'number' && this.validatorService.validateIntFilterOperator(key)
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return `parameter ${Object.keys(validationArguments?.value)?.join(', ')} is not a valid ${
      validationArguments.property
    } value`
  }
}
