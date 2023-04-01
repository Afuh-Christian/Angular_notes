# ........................................................................................................
# ........................................................................................................
# ........................................................................................................
# ........................................................................................................
# create a global service called cart  .... in the folder service

ng generate service service/cart



# 1 ... cart service ....
@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Array<Books> = []  // or Books[]
   
  constructor() { }


  add(book: Books) {
    this.cart.push(book)
    console.log(book)
  }
   get(): Books[] {
    return  this.cart
    }

}


# ....we wish to add book .... 
# inject this into the child component and call the add(book) function ....    

# parent/child/child.component.ts

constructor(private cartService: CartService) { }
 
  addtoCard() {
    this.cartService.add(this.book)
    console.log(this.book)
  }

# ..... Now this adds to the cart array created in the cart service ... let's create a cart component to view how the items are being added ....   


# cart.component
# .ts... 

  constructor(private cartService: CartService) { }
  getCart() : Array<Books>{
   return this.cartService.get()
  }
 
# .html

<p>cart works!</p>

<div>{{ getCart().length}}</div>

<ng-container *ngIf="getCart().length === 0 ">No cart </ng-container>
<ng-container *ngIf="getCart().length > 0 ">

<ul>
    <ng-container *ngFor="let item of getCart()">
        <li>{{item.name}}</li>
    </ng-container>
</ul>

</ng-container>



# ........................................................................................................
# ........................................................................................................
# ........................................................................................................
# ........................................................................................................
# ........................................................................................................
# ........................................................................................................
# ........................................................................................................

# .... Now let's create a remove from cart button .... 

# cart service
  remove(book: Books): void{
   this.cart = this.cart.filter(c => c.name !== book.name)
  }


# child.ts
    constructor(private cartService: CartService) { }
 
  notadded: boolean = true;

  addtoCard(): void {
    this.cartService.add(this.book)
    this.notadded = false;
  }
  removefromCard(): void {
    this.cartService.remove(this.book)
    this.notadded = true
  }
# child.html

<li>{{book.name}}</li>
<ng-container *ngIf="notadded">
    <button (click) = "addtoCard()">Add to card</button>
</ng-container>
<ng-container  *ngIf="!notadded">
    <button (click) = "removefromCard()">remove from card</button>
</ng-container>



# ........................................................................................................
# ........................................................................................................
# ........................................................................................................
# ........................................................................................................








