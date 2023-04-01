import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit {

  constructor() {
    console.log("constructor")
   }
 
  ngOnInit(): void {
    console.log("OnInit")
  }

}
