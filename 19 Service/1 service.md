# How to use the service  in the app .... 

# this comand will create a books service inside the books component ... 

ng generate service books/books

# its a normall class ,, to make it a service .... @Injectable({providedIn:"root"})            

-It's provided in the root level ..
-@Injectable ... means it can be used in the service container .... 

#   parent service ....... .... 

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  getBooks() {
    return [
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
  }
  constructor() { }
}


# parent.ts ... 

# we use dependency injection ... inside the contructor ...

import { Component, OnInit } from '@angular/core';
import { Books } from 'src/types/Book';

import { ParentService } from './parent.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
# ........# ..........dependency injection.....
  constructor(private parentService: ParentService) { }
# ..........
   // array............
# ..........
  books: Books[] = [];
# ..........
  // the function that gets called when event is emitted 
  addtoCard(event: any) {
    console.log("event emitted")
    console.log(event)
  }
# ..........
  ngOnInit(): void {
    this.books = this.parentService.getBooks()
  }
# ..........
}

#   
#   
#   
#   
#   
#   
#   