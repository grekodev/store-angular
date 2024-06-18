import {Category} from "@shared/models/category.model";

export interface Product {
  id:number;
  title: string;
  description: string;
  price: number;
  images: string[];
  creationAt: string;
  category: Category;
}
