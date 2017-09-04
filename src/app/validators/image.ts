import { ValidatorFn, AbstractControl } from '@angular/forms';

export function imageValidator(control: AbstractControl) {
  const urlFormatValid = (/\.(gif|jpg|jpeg|tiff|png)$/i).test(control.value);
  
  return !urlFormatValid ? { 'image': true } : null;
}