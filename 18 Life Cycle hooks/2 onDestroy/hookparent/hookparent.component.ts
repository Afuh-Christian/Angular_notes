import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hookparent',
  templateUrl: './hookparent.component.html',
  styleUrls: ['./hookparent.component.css']
})
export class HookparentComponent implements OnInit {

  constructor() { }

  visible: boolean = true 
  onVisibleC(): void {
    this.visible = !this.visible
  }

  ngOnInit(): void {
  }

}
