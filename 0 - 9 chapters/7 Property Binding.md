# 
 Help to set properties of html elements or directives .. 

 - Toggle button
# - set paths programmatically 
    .html
     <img src="" [alt]="author">


# example ....  button .. ..

    .ts 

     isEnabled: boolean = true

    .html 

    <button style="height:100px;font-size:30px;" [disabled]=isEnabled>Enabled or disabled</button>



 - share values btw components 



# code .... 

# .ts 

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  author: string = "Afuh Christian "
  isEnabled: boolean = true

  constructor() { }

  ngOnInit(): void {
  }
}


# .html ..... 


<p>books works!</p>

<div>The author of this book is ... <h1>{{author}}    </h1></div>


<img src="" [alt]="author">

<button style="height:100px;font-size:30px;" [disabled]=isEnabled>Enabled or disabled</button>
