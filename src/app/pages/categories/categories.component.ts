import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/app/core/interfaces/category';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {


  constructor(private _categoriesService: CategoriesService){
  }

  ngOnInit(){
    this.getAllProducts();
  }

  searchKey:any;

  allCat:Category[]=[];

  getAllProducts(){
    this._categoriesService.getCategories().subscribe({
      next:(res)=>{

        this.allCat = res.data;
        console.log(this.allCat);
      }
    })
  }

}
