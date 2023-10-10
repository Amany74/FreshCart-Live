import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { matchValidator } from '../signup/confirmPassword';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  errorMessage: string = '';
  isLoading:boolean = false;
  isNotValidForm : boolean = false;
  constructor(private _AuthService:AuthService, private _router : Router){

  }

  // Form for register
  loginForm:FormGroup = new FormGroup({
    email:new FormControl("" , [Validators.required , Validators.email]),
    password:new FormControl("", [Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/),matchValidator('rePassword', true)]),
  });


  // register Function on submit
  login(form:FormGroup){


    if(form.valid){
      this.isLoading = true;
      this._AuthService.login(form.value).subscribe({
        next:(res:any)=>{
          // console.log(res);
          this.isLoading = false;
          // console.log(res.token);
          localStorage.setItem("userToken",res.token);
          this._AuthService.getUserData();
          this._router.navigate(['/home']);
        },
        error:(err)=>{
          this.isLoading = false;
          this.errorMessage = err.error['message'];
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
