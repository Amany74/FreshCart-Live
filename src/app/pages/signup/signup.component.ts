import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { matchValidator } from './confirmPassword';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {

  errorMessage: string = '';
  isLoading:boolean = false;
  isNotValidForm : boolean = false;
  constructor(private _AuthService:AuthService, private _router : Router){

  }

  // Form for register
  registerForm:FormGroup = new FormGroup({
    name:new FormControl("", [Validators.required , Validators.minLength(5),Validators.maxLength(10)]),
    email:new FormControl("" , [Validators.required , Validators.email]),
    password:new FormControl("", [Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/),matchValidator('rePassword', true)]),
    rePassword:new FormControl("",[Validators.required,  matchValidator('password')]),
    phone:new FormControl("",[Validators.required, Validators.minLength(10),Validators.maxLength(13)]),
  });


  // register Function on submit
  register(form:FormGroup){

    console.log("entered");
    if(form.valid){
      this.isLoading = true;
      this._AuthService.registerUser(form.value).subscribe({
        next:(res:any)=>{
          console.log(res);
          this.isLoading = false;
          this._router.navigate(['/login']);
        },
        error:(err)=>{
          this.isLoading = false;
          if (err.error['message'] == 'fail'){
              this.errorMessage = "Email already in use with Different Password !"
            }else{
            this.errorMessage = "Account already exists with same Email"
          }
          form.reset();
        }
      })

    }else{
      this.isNotValidForm =true;
    }

  }
  hideMessage(){
    this.errorMessage='';
  }

}
