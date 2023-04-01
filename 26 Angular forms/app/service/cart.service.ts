import { Injectable } from '@angular/core';
import { Books } from 'src/types/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Array<Books> = []  // or Books[]
   
  constructor() { }


  add(book: Books): void{
    this.cart.push(book)
  }
  remove(book: Books): void{
   this.cart = this.cart.filter(c => c.name !== book.name)
  }

  get(): Books[] {
  return  this.cart
  }
}






