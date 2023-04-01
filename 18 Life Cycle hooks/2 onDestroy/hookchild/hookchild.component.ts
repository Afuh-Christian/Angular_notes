import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hookchild',
  templateUrl: './hookchild.component.html',
  styleUrls: ['./hookchild.component.css']
})
export class HookchildComponent implements OnInit ,OnDestroy{

  constructor() { }

  timeValue: any = null
  
  ngOnInit(): void {
    console.log("child mounted")
    this.timeValue = setInterval(() => {
       
       console.log("timer on and going")
     }, 1000)
  }
  
  ngOnDestroy(): void {
    console.log("child unmounted")
    clearInterval(this.timeValue)
  }

}
