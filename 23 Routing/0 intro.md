# ...https://angular.io/guide/router/


# ...1 .. Add routing in the app ... 

  "@angular/router": "^14.2.0",           .... was installed at the begining ..

#  2 .... create  a new file .... 

# app-routing.module.ts

import { NgModule } from '@angular/core';

@NgModule({})
export class AppRoutingModule { }

# 3 .... place in the imports in the app.module.ts
    imports: [BrowserModule, FormsModule , ParentModule , AppRoutingModule],
# ....
@NgModule({
    declarations: [AppComponent, BooksComponent, DirectivesComponent, NgforComponent, PipesComponent, HooksComponent, CartComponent], 
    imports: [BrowserModule, FormsModule , ParentModule , AppRoutingModule],
    providers:[ParentService],
    bootstrap : [AppComponent]
})
export class AppModule{ }
# ...

# 4.....

routes = array of all the routes of type Routes
the array will be an array of objects with attributes ... path , component etc .. 
# ...............
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 

const routes: Routes = []; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
# ...............


# 5.....app.component.html 
    We should give the AppRoutingModule the responsibility of display things on this page.... else the routing will not work ... 



# .................................................................................................
# .................................................................................................
# .................................................................................................
# .................................................................................................

# full code ..... 

# app.module.ts
import { AppRoutingModule } from "./app-routing.module";


@NgModule({
    declarations: [AppComponent, BooksComponent, DirectivesComponent, NgforComponent, PipesComponent, HooksComponent, CartComponent], 
# ....
    imports: [BrowserModule, FormsModule , ParentModule , AppRoutingModule],
# ....
    providers:[ParentService],
    bootstrap : [AppComponent]
})
export class AppModule{ }

# app-routing.module.ts

const routes: Routes = [
# ....
    { path: " ", component: ParentComponent },
    {path: "cart", component: CartComponent}
# ....
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

# app.component.html 

<router-outlet></router-outlet>

# ...........

#   /  = routes to the main page which consist of the ParentComponent 
#   /cart = routes to the Cart page consisting of the CartComponent ... 



