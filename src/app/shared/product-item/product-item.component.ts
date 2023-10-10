import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product';
import { CartService } from 'src/app/core/services/cart.service';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  constructor(private toastr: ToastrService,private _cartService: CartService,private _wishlistService: WishlistService){

  }

  @Input() product:Product ={} as Product;

  addToCart(id:string) {
    console.log(" added to cart");

      this._cartService.addProductToCart(id).subscribe({
        next: (e:any) => {
          this._cartService.numOfCartItems.next(e.numOfCartItems);
          this.showSuccess(e.numOfCartItems);
        }
      });
    }

    showSuccess(n:any) {
      this.toastr.success(`Product is added to your cart successfully,${n} items in your cart.`);
    }


    addToWishlist(id:string) {
      console.log(" added to wishlist");
        this._wishlistService.addProductToWish(id).subscribe({
          next: (e:any) => {
            console.log(e);
            this.showWish();
          }
        });
    }

    showWish() {
      this.toastr.warning(`Product is added to your wishlist`);
    }

    }

