import { Component, OnInit } from '@angular/core';
import { Books } from 'src/types/Book';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }
  getCart() : Array<Books>{
   return this.cartService.get()
  }
 

  ngOnInit(): void {
  }



}
