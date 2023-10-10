import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  numOfCartItems:number = 0;
  isLoggedIn:boolean = false;

  constructor(private _cartService: CartService,private _authService:AuthService){
    this._authService.userData.subscribe((res)=>{
      if(this._authService.userData.getValue()){
        this.isLoggedIn = true;
      }else{

        this.isLoggedIn = false;
      }
    });

    this._cartService.numOfCartItems.subscribe(
      (res)=>{
this.numOfCartItems = res;

    })
  }

  logOutFromNav(){
    this._authService.logout();
  }

}
