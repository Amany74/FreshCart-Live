import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { Cart } from 'src/app/core/interfaces/cart';
import { Wishlist } from 'src/app/core/interfaces/wishlist';
import { CartService } from 'src/app/core/services/cart.service';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

loading:boolean=true;
cartItems :number=-1;
// numOfCartItems:BehaviorSubject<number>=new BehaviorSubject(0);

WishDetails:Wishlist ={} as Wishlist;

constructor(private toaster: ToastrService,private _wishlistService: WishlistService,private _router : Router,private _cartService: CartService) { }
ngOnInit(): void {
  this.getWishList()
}
addToWishlist(id: string) {
  this._wishlistService.addProductToWish(id).subscribe({
    next: (res) => {
      console.log("addToWishList Response =>", res);
      this.getWishList();
    },
    error: (err) => {
      console.log("The addToWishList error:", err);
    }
  });
}

getWishList() {
  this._wishlistService.getWishList().subscribe({
    next: (res) => {
      console.log("getWishList", res);
      this.WishDetails = res;
    }
  });
}

deleteProductFromWish(id: string) {
  this._wishlistService.removeProductFromWishlist(id).subscribe({
    next: (res) => {
      this.getWishList();
        }
  });
}
showSuccess(n:any) {
  this.toaster.success(`Product is added to your cart successfully,${n} items in your cart.`);
}


addToCartFromWish(id:string){
  this._cartService.addProductToCart(id).subscribe({
    next: (res:any) =>{
      this.showSuccess(res.numOfCartItems);
      // console.log("adddddddeddd");
      this._cartService.numOfCartItems.next(res.numOfCartItems);
    }
  });
}


}
