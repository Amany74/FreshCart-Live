import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/app/core/interfaces/category';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-main-categories',
  templateUrl: './main-categories.component.html',
  styleUrls: ['./main-categories.component.css']
})
export class MainCategoriesComponent {
// Crousel
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  margin:10,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 8
    }
  },
  nav: true
};

constructor(private _productsService:ProductsService){

}

ngOnInit() {
  this.getCategories();
}

allCategories:Category[] = [] ;
getCategories(){
  this._productsService.getCategories().subscribe({
    next:(res)=>{
      // console.log(res);
      this.allCategories = res.data;
    }
  })
}
}
