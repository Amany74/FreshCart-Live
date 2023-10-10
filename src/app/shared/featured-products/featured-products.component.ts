import { Component } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent {

  searchKey :string='';
  allProduct:Product[] = [];

  constructor(private _productsService: ProductsService){
  }

  ngOnInit(){
    this.getAllProducts();
  }
  getAllProducts(){
    this._productsService.getProducts().subscribe({
      next:(res)=>{
        // console.log(res);
      
        this.allProduct = res.data;
      }
    })
  }
}
