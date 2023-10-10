import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  token:string | null='';

  constructor(private _httpClient: HttpClient) {
    this.token=localStorage.getItem("userToken")
    this.getWishList().subscribe(
      {
        next:(res)=>{
          console.log("constructor from get cart :",res);

        }
      }
    )
  }

  addProductToWish(id: string): Observable<any> {
    return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/wishlist',
      {
        productId: id
      },{headers: {token: `${localStorage.getItem("userToken")}`}})
  }


  getWishList(): Observable<any> {
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/wishlist',{
      headers: {token: `${localStorage.getItem("userToken")}`,
    }})
  }


  updateProductCount(count: number, id: string): Observable<any> {
    return this._httpClient.put(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
      {
        count: `${count}`
      },{headers: {token: `${localStorage.getItem("userToken")}`,
    }})
  }



  removeProductFromWishlist(id: string): Observable<any> {
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{headers: {token: `${localStorage.getItem("userToken")}`,
  }})
  }


}
