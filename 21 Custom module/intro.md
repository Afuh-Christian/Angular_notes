# ... 
for now  all the books are coming from the parent services 

the books or parent service should only be responsible for  books ...

@Injectable({
  providedIn: 'root'
})


...providedIn makes it  available just in the parent


# To make the service global .... 

app.module.ts 

providers = [ParentService]


# code ..... 

@NgModule({
    declarations: [AppComponent, BooksComponent, DirectivesComponent, NgforComponent, PipesComponent, ParentComponent, ChildComponent, HooksComponent], 
    imports: [BrowserModule, FormsModule],
    providers:[ParentService],
    bootstrap : [AppComponent]
})
export class AppModule{}
# ..........