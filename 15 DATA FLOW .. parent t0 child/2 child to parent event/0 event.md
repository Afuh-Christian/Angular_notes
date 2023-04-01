# .... 

we will create a button in each component that when clicked ... it will move the information from the child to parent.... 

# @Output
#  new EventEmiter
# <datatype>


# step 1 ..... emit the event ..... 
# ............. Child ...

# .ts
  // sending the data 
  @Output() emitBook = new EventEmitter<Books>()
  AddtoCard() {
    this.emitBook.emit(this.book)
  }

# .html
<li>{{book.name}}</li>

<button (click) = "AddtoCard()">Add to card</button>








NB .... we normally listen for events using the (click)
 .....Now we  will be listening for a custom event we created called (emitBook)

 we will create a function in the Parent.ts ... that will be called when ever the emitBook event get's triggered (it gets triggered from the child component at the point it is created and sent)


NB ... every event has a magic property called "$event" as parameter ...  
we can use this $event to get the data passed into the event from the child ....  
# step 2 ... listen for the event .... 
# ....PARENT....

# .html
<ul>
<ng-container *ngFor="let book of books">
    <!-- passing props  -->
<app-child (emitBook)="addtoCard($event)" [book]="book"></app-child>
</ng-container>
</ul>

# .ts
  // the function that gets called when event is emitted 
  addtoCard(event: any) {
    console.log("event emitted")
    console.log(event)
  }





