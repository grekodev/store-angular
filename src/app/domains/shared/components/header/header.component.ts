import {Component, inject, Input, signal, SimpleChanges} from '@angular/core';
import {Product} from "../../models/product.model";

import {CartService} from "../../services/cart.service";
import {RouterLinkWithHref,RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLinkWithHref,
    RouterLinkActive
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  // @Input({required:true}) cart: Product[] = [];
  // total = signal(0);
  private cartService = inject(CartService);

  cart = this.cartService.cart;
  total = this.cartService.total;

  toogleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState);
  }

  /*ngOnChanges(changes: SimpleChanges) {
    const cart = changes['cart'];
    if(cart){
      this.total.set(this.calcularTotal());
    }
  }

  calcularTotal(){
   return this.cart.reduce((total, producto) => total+producto.price, 0);
  }*/
}
