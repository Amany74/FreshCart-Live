import { HtmlTagDefinition } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/core/interfaces/cart';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  loading:boolean=true;
  cartItems :number=-1;
  cartDetails:Cart ={} as Cart;

  constructor(private _cartService: CartService,private _router : Router) { }
  ngOnInit(): void {
    this.getCart()
  }

  getCart() {
    this._cartService.getCart().subscribe(
      {
        next:(res)=>{
          console.log("user Cart products : ",res);
          this.cartDetails=res;
          this.loading=false;
          this.cartItems=res.numOfCartItems;
        },
        error:(err)=>{
          let parent = document.querySelector(".custom-append");
          parent?.append("Nothing in cart yet !")
        }
      }
    )
  }

  updateProductCount(count:number,id:string){
    this._cartService.updateProductCount(count,id).subscribe(
      {
        next:(res)=>{
          // console.log("get updateProductCount",res);
          this.cartDetails=res;
          this.cartItems=res.numOfCartItems;
          this._cartService.numOfCartItems.next(res.numOfCartItems);
          if(count == 0){
            this.deleteItem(id);

          }
        }
      }
    )
  }


  deleteItem(id:string){
    this._cartService.removeProduct(id).subscribe(
      {
        next:(res)=>{
          // console.log("get updateProductCount",res);
          this.cartDetails=res;
          this.cartItems=res.numOfCartItems;
          this._cartService.numOfCartItems.next(res.numOfCartItems);
        }
      }
    )
  }

  NavigateToHome(){
    this._router.navigate(['/home']);
  }

}
