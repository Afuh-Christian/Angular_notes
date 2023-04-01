# Every component implements the oninit interface .... 

export class HooksComponent implements OnInit {

  constructor() {
    console.log("constructor")
   }
 
  ngOnInit(): void {
    console.log("OnInit")
  }

}

-the contructor runs before the oninit .... 
-the oninit runs when the component is ready to mount ..

-You can use this onInit to load external api's 