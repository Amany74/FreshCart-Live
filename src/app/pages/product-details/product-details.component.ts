import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/core/interfaces/product';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductsService } from 'src/app/core/services/products.service';
import { WishlistService } from 'src/app/core/services/wishlist.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
// Crousel
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    }
  },
  nav: true
};

  productID:string='';
  productDetails:Product ={}as Product;
  constructor(private _wishlistService:WishlistService,private toaster: ToastrService,private _activatedRoute: ActivatedRoute,private _productService: ProductsService,private _cartService:CartService,private _router:Router){

  }
  showSuccess(n:any) {
    this.toaster.success(`Product is added to your cart successfully,${n} items in your cart.`);
  }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((p:any) =>{
      this.productID = p.params.id;
      // console.log(this.productID);
    })
    this._productService.getProductById(this.productID).subscribe({
      next:product=>{
        // console.log(product.data);
        this.productDetails= product.data;
      }
    })
  }

  addToCart(id:string){
    this._cartService.addProductToCart(id).subscribe({
      next: (e:any) =>{
        this.showSuccess(e.numOfCartItems);
      }
    });
  }

  goToCart(){
    this._router.navigate(['/cart']);
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
    this.toaster.warning(`Product is added to your wishlist`);
  }

}
