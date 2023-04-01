import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Books } from 'src/types/Book';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  // recieve props .... 
  @Input() book: Books = {} as Books;

  // sending the data ....emitting the event .... 
  @Output() emitBook = new EventEmitter<Books>()
  addtoCard() {
    this.emitBook.emit(this.book)
  }

  ngOnInit(): void {
  }

}
