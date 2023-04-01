import { Component, OnInit } from '@angular/core';
import { Books } from 'src/types/Book';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

   // array............
   books: Books[] = [
    {
     name: "afuh"
   },
    {
     name: "afuh"
   },
    {
     name: "chris"
   },
    {
     name: "forkoum"
   },
    {
     name: "dele"
   },
    {
     name: "ali"
   },
    {
     name: "osman"
   }
 ]

  // the function that gets called when event is emitted 
  addtoCard(event: any) {
    console.log("event emitted")
    console.log(event)
  }

  ngOnInit(): void {
  }

}
