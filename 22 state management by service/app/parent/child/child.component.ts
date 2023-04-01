import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Books } from 'src/types/Book';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  

  // recieve props .... 
  @Input() book: Books = {} as Books;


  constructor(private cartService: CartService) { }
 
  notadded: boolean = true;

  addtoCard(): void {
    this.cartService.add(this.book)
    this.notadded = false;
  }
  removefromCard(): void {
    this.cartService.remove(this.book)
    this.notadded = true
  }
  ngOnInit(): void {
  

  }
}
