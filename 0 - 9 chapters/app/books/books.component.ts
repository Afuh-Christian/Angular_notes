import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  author: string = "Afuh Christian "
  isEnabled: boolean = true
 
  
  handleclick(): void{
   console.log("click funciton.....")
  }

 // part 1  two way binding ... 
  inputValue: string = ""
  handleInput(e: any): void{
    this.inputValue = e.target.value
  }

  // part 2 two way binding ... 
  inputBindiingValue: string = ""
 
  constructor() { }

  ngOnInit(): void {
  }
}


