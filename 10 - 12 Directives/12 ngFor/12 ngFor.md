

Example .... 1  

# .ts 
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


# .html
<ul *ngFor="let book of books; let i = index">
    <li>{{i}} - {{book.name}}</li>
</ul>


lets make the index start from 1 rather ... 
# .html
<ul *ngFor="let book of books ; let i = index">
    <li>{{i + 1}} - {{book.name}}</li>
</ul>








# NB .... we can also use the <ng-container>

# .html  

<ul >
    <ng-container *ngFor="let book of books ; let i = index">
    <li>{{i + 1}} - {{book.name}}</li>
   </ng-container>  
</ul>




