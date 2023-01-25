import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
 products = [
  {id:1, name: 'minialist anlog watch', price: '109', color: 'black', available: 'Available', images: '/assets/products/anlog.jpg'},
  {id:2, name: 'Apple smart watch', price: '109', color: 'black', available: 'Not Available', images: '/assets/products/apple.jpg'},
  {id:3, name: 'Samsung smart watch', price: '109', color: 'black', available: 'Available', images: '/assets/products/smasung.jpg'},
  {id:4, name: 'lg smart TV', price: '109', color: 'black', available: 'Available', images: '/assets/products/lg.jpg'},
  {id:5, name: 'cool gadgets', price: '109', color: 'black', available: 'Available', images: '/assets/products/gadgets.jpg'}
 ];
}
