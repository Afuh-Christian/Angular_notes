
import { Component } from "@angular/core"

@Component({
    selector: "app-root",
    // template: '<h1>Hello</h1>',
    // styles : ["h1{color:blue}"]
    templateUrl: './app.component.html', 
    styleUrls: ['./app.component.css']
})
export class AppComponent{
    value = "Books"
}