export interface Product {
  id:string,
  imageCover: string,
  price:string,
  title:string,
  category: Category,
  description?:string,
  ratingsAverage:number,
  images:string[],

}
interface Category
{
  name:string
}
