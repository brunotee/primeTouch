import { Directive } from '@angular/core';
import { ValidatorFn , ValidationErrors} from '@angular/forms';
import { AbstractControl } from '@angular/forms';

/** verifier si  saisie est un nombre premier */
export function isPrimaryValidator(nombre: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
  //const forbidden = nameRe.test(control.value);
    const estDivisible= nombre % 2 == 0 || nombre % 3 == 0 || nombre % 5 == 0 || nombre % 7 == 0;
    /* si la reponse est oui */
    if (estDivisible && (control.value=="O"||control.value=="o"))
        return {estPremier: {value: control.value}};
      return null

    //return estPremier ? {estPremier: {value: control.value}} : null;
    
  //  return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}
@Directive({
  selector: '[appIsPrimary]'
})
export class IsPrimaryDirective {

  constructor() { }

}
