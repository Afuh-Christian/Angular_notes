# 4 Create Root Module  


app 
    app.module.ts

# you need the BrowserModule  for this to work .... .... 
# boostrap is also needed .... .
import { BrowserModule } from "@angular/platform-browser"
@NgModule({
    declarations: [AppComponent], 
    imports: [BrowserModule],
    // providers: [], 
     bootstrap : [AppComponent]
})





# Now continue with everything else ..... 







# full basic ...... ......................................................................................

# app.module.ts

import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser"
@NgModule({
    declarations: [AppComponent], 
    imports: [BrowserModule],
   
    bootstrap : [AppComponent]
})
export class AppModule{}

# app.component.ts

import { Component } from "@angular/core"

@Component({
    selector: "app-root",
    // template : '<h1>Hello</h1>',
    templateUrl: './app.component.html', 
    styleUrls: ['./app.component.css']
})
export class AppComponent{
    value = "Books"
}
# app.component.html
<h1>Hello Chris the {{value}} man </h1>

# app.component.css
h1{
    font-size: 30px;
    color: blue;
}
# full basic ...... ......................................................................................





# we can do inline template and css ..... 

# app.component.ts ... 

import { Component } from "@angular/core"

@Component({
    selector: "app-root",
    template: '<h1>Hello</h1>',
    styles : ["h1{color:blue}"]
})
export class AppComponent{
    value = "Books"
}

# ..................................