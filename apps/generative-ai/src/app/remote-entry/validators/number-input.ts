import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

// reference to https://javascript.plainenglish.io/how-to-validate-numeric-form-fields-across-all-browsers-in-angular-a1719e8be5d9
export function numberInputValidator(required: boolean, min: number, max: number, zeroAllowed: boolean): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control === undefined || (!required && (control.pristine || control.value === undefined || control.value === null))) {
      return null; // null => Valid
    }

    // Use Number instead of parseInt or parseFloat as it handles both
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    const value: number = Number(control.value);

    // If required, check the original value as it is of type string (per the FormControl type)
    if (required && (control.value === undefined || control.value === null || control.value.length === 0)) {
      return { numberRequired: true };
    } else if (isNaN(value)) {
      return { nan: true };
    } else if (!zeroAllowed && value === 0 && control.value.length !== 0) { // Empty strings parse as zero
      return { noZero: true };
    } else if (value < min && control.value.length !== 0) { // Empty strings parse as zero
      return { numberTooSmall: true };
    } else if (value > max && control.value.length !== 0) { // Empty strings parse as zero
      return { numberTooBig: true };
    }
    return null;
  };
}
