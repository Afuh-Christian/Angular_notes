# 2 Create new project 

# https://www.angular.io/docs

-Getting started 
-Setup 



-npm install -g @angular/cli

ng    .. now works .. 

-ng new my-app


#  A ............ Every angular app starts in the main.ts 
if (environment.production) {
  enableProdMode();
}
    -checks the evironments 
        -evironments folder 
            -contains 2 different environments 
                -environment.prod.ts 
                    -thing that should work only in production 
                -environment.ts
                    -things that should work only during developement


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
    
        - how we can innitiate the angular project
            -it starts with the AppModule ... ( Angular is a modular framework (everything in agular is a module)) 

#  B ............app.module.ts ..........
    -this is the file that is first loaded .. 
    -
# .....
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
# ...........
# @NgModule({})
    -Is a decorator 
    -Is added ontop a normal js class to make it a module 
        -It adds the meta data information to the class (telling angular the rules of the new module created)

# NgModule({}) ... parameter ... 
    -Takes an object .... object contains info 
        -declarations
        -imports 
        -providers 
        -boostrap


# a ...........declarations ....
    -Consist of the component to be used [AppComponent] .... from app.component.ts

# B ...........app.component.ts ....... 
    @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
# @Component({})
    -is added to a normal class to make it a component 
        -adds meta data to the class 
        -tells angular the role of that class ... 

# @Component({})
    -selector : 'app-root'       =   <app-root></app-root>  from the index.html in the src directory
    -templateurl 
    -styleurl

# the name must not by app-root ... 
     -src/app/app.component.ts
     selector : 'app-my-root' 

     -src/index.html 
      <app-my-root></app-my-root>
      
      
# OR .....      
      or 
      selector : '#app-my-root'

      <div id="app-my-root"></div>



# C .........app.component.html ..
    -Building UI 
# D .........app.component.css ..
    -For styling
# E .........app.component.specs.ts ..
    -For testing




# NB .... 

# app.component.ts

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bankname = 'ChrisBank';
}

# app.component.html

<h1>World Bank {{bankname}}</h1>


# ...........................................





# b ..... imports ....... 

 imports: [
    BrowserModule,
    AppRoutingModule
  ],

# .... F ......app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


# c ... boostrap ... 

    we define the boostrap only on the AppModule because it's the first every module .... 

    bootstrap: [AppComponent]




# src.style.css
    -global styling 

# src/tests.ts 
    -for testing 

# polyfills.ts 
    -For browser info ... 





# How does a  project starts
    -main.ts ... load the AppModule
    -app.module

















