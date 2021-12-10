import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator'
import { ListingsUtilsService } from '../listings-utils.service'

@ValidatorConstraint({ async: false, name: 'IsValidOrderByField' })
export class IsValidOrderByField implements ValidatorConstraintInterface {
  private validatorService = new ListingsUtilsService()

  validate(value: string) {
    return this.validatorService.validateOrderBy(value)
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return `Invalid ${validationArguments?.property} value, recieved ${validationArguments?.value}`
  }
}
