- Event binding let's you listen to keystrokes such as mouse or touches .... 


# Example ... 
    (click) = target event name 
    onSave() = template statement ... 


    .ts

 handleclick(): void{
   console.log("click funciton.....")
 }


    .html .. 

    <button style="height:100px;font-size:30px;" (click)="handleclick()">Click event</button>

