import { Component } from '@angular/core';
    import {
        FormGroup, 
        FormBuilder,
        FormControl, 
        Validators,
        AbstractControl 
} from '@angular/forms';
    
    @Component({
      selector: 'change_password',
      templateUrl:'./changePassword.component.html'
    })
    
    export class ChangePasswordComponent {
    
        changePasswordForm:FormGroup;

        constructor(fb: FormBuilder){
            this.changePasswordForm = fb.group({
                'old_password': [null, Validators.required],
                'new_password': [null, Validators.required],
                'confirm_new_password': [null, [Validators.required, this.passwordMatch]] 
            });
        }
    
        passwordMatch(control: AbstractControl){
            let paswd = control.root.get('new_password');
            if(paswd && control.value != paswd.value){
             return {
                 passwordMatch: false
             };   
            }
            return null;
        }
    
        changePassword(value){
            if(this.changePasswordForm.valid){
                console.log("Change password form valid");
            }
        }
    
    }
    