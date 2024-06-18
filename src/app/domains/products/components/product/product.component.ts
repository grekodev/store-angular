import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "@shared/models/product.model";
import {CurrencyPipe, DatePipe, UpperCasePipe} from "@angular/common";
import {ReversePipe} from "@shared/pipes/reverse.pipe";
import {TimeAgoPipe} from "@shared/pipes/time-ago.pipe";
import {RouterLinkWithHref} from "@angular/router";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    UpperCasePipe,
    CurrencyPipe,
    DatePipe,
    ReversePipe,
    TimeAgoPipe,
    RouterLinkWithHref
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  // img = 'https://picsum.photos/640/640?r=' + Math.random();
  @Input({required:true}) product!: Product;

  @Output() addTocart = new EventEmitter();

  addToCartHandler(){
    console.log("click desde el hijo");
    this.addTocart.emit(this.product);
  }
}
