import { Component, Input, OnInit } from '@angular/core';
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




  
  ngOnInit(): void {
  }

}
