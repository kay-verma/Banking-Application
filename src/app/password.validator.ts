import { AbstractControl } from "@angular/forms";

export function PasswordValidator(control:AbstractControl):{[key:string]:boolean} | null{
const newPassword= control.get('newPassword');
const confirmPassword= control.get('confirmPassword');
if (newPassword?.pristine || confirmPassword?.pristine){
    return null;
}
return newPassword && confirmPassword && newPassword.value != confirmPassword.value ?{'misMatch':true}:null;
}
