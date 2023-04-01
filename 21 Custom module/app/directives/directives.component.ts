import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }




  //method 1 
  isShowing: boolean = false
  toggleshow = (): void => {
    this.isShowing = ! this.isShowing
  }


  // method 2 
  isVisible: boolean = false


   // example ... 
  showTextA:boolean = false 



  ngOnInit(): void {
  }

}
