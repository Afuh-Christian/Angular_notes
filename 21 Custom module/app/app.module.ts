import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { BooksComponent } from './books/books.component'
import { FormsModule } from "@angular/forms";
import { DirectivesComponent } from './directives/directives.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { PipesComponent } from './pipes/pipes.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { HooksComponent } from './hooks/hooks.component';
import { ParentService } from "./parent/parent.service";
import { ParentModule } from "./parent/parent.module";

@NgModule({
    declarations: [AppComponent, BooksComponent, DirectivesComponent, NgforComponent, PipesComponent, HooksComponent], 
    imports: [BrowserModule, FormsModule , ParentModule],
    providers:[ParentService],
    bootstrap : [AppComponent]
})
export class AppModule{ }






