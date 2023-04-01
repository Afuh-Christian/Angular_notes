
# Method 1 .... 
# .ts
      //method 1 
  isShowing: boolean = false
  toggleshow = (): void => {
    this.isShowing = ! this.isShowing
  }

# .html 
    <h1>NgIf</h1>
<button (click)="toggleshow()">toggle books</button>

<ul *ngIf="isShowing">
    <li>When you click the button ....all the contents of the tag where the ngIf will be toggled</li>
    <li>asdfadfadfadf</li>
</ul>




# ... METHOD 2 ... notice the funciton was defined in the html ... 

# .ts 
 isVisible: boolean = false
# .html 
<button (click)="isVisible = !isVisible">Aonther method</button>

<ul *ngIf="isVisible">
    <li>When you click the button ....all the contents of the tag where the ngIf will be toggled</li>
    <li>asdfadfadfadf</li>
</ul>






# 3 ...  another example .... 


# .ts 
 showTextA:boolean = false 

# .html
<button (click) = "showTextA = !showTextA">show text</button>

<div *ngIf="showTextA">Text A </div>
<div *ngIf="!showTextA">Text B </div>






# NB .... we can use <ng-container> if we don't want an empty tag to exist in our html if the condition does not favour it ..... 



<ng-container *ngIf=""></ng-container> .... will just hold the condition for what every is to be displayed ... 
<ng-container> is like the <Fragment> (<>) in react 



# redo the exammple ... 

<button (click) = "showTextA = !showTextA">show text</button>

<ng-container *ngIf="showTextA">Text A </ng-container>
<ng-container *ngIf="!showTextA">Text B </ng-container>




NB ... ng-container is very usefull ..try using it as many times as possible ..... 
