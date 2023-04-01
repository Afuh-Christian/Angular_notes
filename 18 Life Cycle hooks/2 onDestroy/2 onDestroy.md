# we will use the example where we toggled between  mounting and onmounting the child component ...



the child component will implement the onDestroy interface and it's function will be called when it unmounts .....




# hooksparent 
.ts 

  visible: boolean = true 
  onVisibleC(): void {
    this.visible = !this.visible
  }

# hookchild ...... OnDestroy will be in here..
.ts

import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hookchild',
  templateUrl: './hookchild.component.html',
  styleUrls: ['./hookchild.component.css']
})
export class HookchildComponent implements OnInit ,OnDestroy{

  constructor() { }

  ngOnInit(): void {
    console.log("child mounted")
  }
  
  ngOnDestroy(): void {
      console.log("child unmounted")
  }

}





# let's set a time that starts when we initialize the child component and stops when we destroy it ..... 


 
# child .....

.ts


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

