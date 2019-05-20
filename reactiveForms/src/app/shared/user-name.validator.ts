import { AbstractControl, ValidatorFn } from "@angular/forms";

// custom validation.
// This validator method has 1- drawback that it accepts only 1-param that is the control.
// export function forbiddenNameValidator(controltoValidate: AbstractControl) : {[key: string]: any} | null {
//   const forbidden = /admin/.test(controltoValidate.value);
//   return forbidden ? {'forbiddenName': {value: controltoValidate.value}} : null;
// }

// Create factory fn and returns a validator fn.
export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
    return (controltoValidate: AbstractControl) : {[key: string]: any} | null  => {
        const forbidden = forbiddenName.test(controltoValidate.value);
        return forbidden ? {'forbiddenName': {value: controltoValidate.value}} : null;
    }

}