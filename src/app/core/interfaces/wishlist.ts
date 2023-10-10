export interface Wishlist {
  count: number;
  data: Data[];
}

interface Data {
  description: string;
  id: string;
  imageCover: string;
  price: number;
  ratingsAverage: number;
  title:string;
  category:Category;
}

interface Category {
  _id: string;
  name: string;
}
