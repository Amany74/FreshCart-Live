import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { Category } from 'src/app/core/interfaces/category';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent {

  constructor(private _categoriesService: CategoriesService,private _activatedRoute: ActivatedRoute){}

  id:string ='' ;
  CategoryDetails:Category={} as Category;
  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((p:any) =>{
      this.id = p.params.id;
      console.log(this.id);
    })
    this._categoriesService.getCategoryById(this.id).subscribe({
      next:product=>{
        // console.log(product.data);
        this.CategoryDetails= product.data;
      }
    })
  }

}
