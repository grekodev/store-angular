import {Component, inject, Input, signal, SimpleChanges} from '@angular/core';
import {ProductComponent} from "@products/components/product/product.component";
import {Product} from "@shared/models/product.model";

import {HeaderComponent} from "@shared/components/header/header.component";
import {CartService} from "@shared/services/cart.service";
import {ProductService} from "@shared/services/product.service";
import {CategoriesService} from "@shared/services/categories.service";
import {Category} from "@shared/models/category.model";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {
  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  // cart = signal<Product[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoriesService = inject(CategoriesService);

  @Input() category_id? : string;

  ngOnInit(){
    // this.getProducts();
    this.getCategories();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.getProducts()
    // const category_id = changes["category_id"];
    // if(category_id){
    //   this.getProducts()
    // }
  }

  addToCart(product: Product){
    console.log('estamos en el padre');
    console.log(product);
    this.cartService.addToCart(product);
  }

  private getProducts(){
    this.productService.getProducts(this.category_id)
      .subscribe({
        next: (products) => {
          this.products.set(products);
        },
        error: ()=>{

        }
      });
  }

  private getCategories(){
    this.categoriesService.getAll()
      .subscribe({
        next: (data) => {
          this.categories.set(data);
        },
        error: ()=>{

        }
      });
  }
}
