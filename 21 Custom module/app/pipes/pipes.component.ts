import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }


  titlevar:string = "pipes are capital"
  amount:number = 500

  ngOnInit(): void {
  }

}
