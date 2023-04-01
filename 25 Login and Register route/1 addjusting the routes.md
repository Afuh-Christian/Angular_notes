# app-routing.module.ts

const routes: Routes = [
    { path: "", component: ParentComponent },
  { path: "cart", component: CartComponent },
# .....
  { path: "login", component: LoginComponent }, 
    {path: "register", component: RegisterComponent}
# .....
]; 



# we can go to app and add links to the login and register component ... 

# app.component.html ... 







<nav class="flex justify-between p-8 bg-purple-900 text-white">
    <div>
        <a routerLink="/">Book Shop</a>
    </div>
    <div>
        
        <a  class="mx-4" routerLink="/cart">My Cart</a>
        <a  class="mx-4" routerLink="/login">login</a>
        <a  class="mx-4" routerLink="/register">register</a>

    </div>
</nav>

<div class="p-4">
    
<router-outlet></router-outlet>
</div>











