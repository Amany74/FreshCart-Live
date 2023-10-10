import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cartId: string = '';

  shippingAddress: FormGroup = new FormGroup({
    detials: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(13)]),
    city: new FormControl('', [Validators.required]),
  })



  constructor(private _cartService: CartService, private _activatedRoute: ActivatedRoute) {
    this._cartService.cartId.subscribe(res => {
      this.cartId = res;
    })
  }




  handleOnline() {
    console.log(this.shippingAddress);
    this._cartService.generateOnlinePayment(this.cartId, this.shippingAddress.value).subscribe(
      {
        next: (res) => {
          // console.log("Card res", res);
          if (res.status == "success") {
            console.log("url", res.session.url);
            window.location.href = res.session.url
          }
        }
      })
  }
}
