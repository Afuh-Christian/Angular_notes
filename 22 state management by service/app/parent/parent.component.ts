import { Component, OnInit } from '@angular/core';
import { Books } from 'src/types/Book';

import { ParentService } from './parent.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  private parentService: ParentService;
  constructor() {
    this.parentService = new ParentService()
   }
  
   // array............
  books: Books[] = [];
    

  // the function that gets called when event is emitted 


  ngOnInit(): void {
    this.books = this.parentService.getBooks()
  }

}
