
export interface Cart {
  numOfCartItems:number,
  data:Data,

}
interface Data{
  totalCartPrice:number,
  products:Product[],
  _id:string,
}

interface Product{
  count:number,
  price:number,
  product:innerProduct,
}

  interface innerProduct{
  title:string,
  imageCover:string,
  id:string,
  category: Category,
}
interface Category{
  name:string,
}
