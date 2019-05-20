import { AbstractControl } from "@angular/forms";

//custom cross-field validation.
// here controlToValidate is not a particular control but the actual formGroup that
//  has the controls to validate.
export function PasswordValidator(controlToValidate: AbstractControl) : {[key: string]: boolean} | null {

    const password = controlToValidate.get('password');
    const confirmPassword = controlToValidate.get('confirmPassword');

    if(password.pristine || confirmPassword.pristine) {
        return null;
    }

    return password && confirmPassword && password.value !== confirmPassword.value ? {'misMatch': true} : null;

}