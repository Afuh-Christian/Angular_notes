import { Component, OnInit } from '@angular/core';

  
  // type ...........
interface Books{
  name: string;
  }

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
}) 
export class NgforComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
