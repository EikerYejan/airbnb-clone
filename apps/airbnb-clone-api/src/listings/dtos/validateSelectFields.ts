import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { ListingsUtilsService } from '../listings-utils.service'

@ValidatorConstraint({ name: 'isValidSelect', async: false })
export class IsValidSelectField implements ValidatorConstraintInterface {
  private validatorService = new ListingsUtilsService()

  validate(values: string[]) {
    return this.validatorService.validateSelectFields(values)
  }

  defaultMessage() {
    return 'Invalid select fields'
  }
}
