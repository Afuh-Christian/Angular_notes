# we need to use two way binding here .... 

.html .. 

[(ngModel)]="email" ... 

.ts 


email : String = "";



the email will be a field in a class... a normal variable ... 


#  NB ...1 import the FormModule and use in the auth modul ... 

# auth.module.ts 

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
# ......
  imports: [FormsModule,
    CommonModule
# ......
  ]
})


# NB ...2 import the AuthModule in the app.module.ts .... 

# app.module.ts 


@NgModule({
    declarations: [AppComponent, BooksComponent, DirectivesComponent, NgforComponent, PipesComponent, HooksComponent, CartComponent], 
# ...........
    imports: [BrowserModule, FormsModule , ParentModule , AppRoutingModule ,  AuthModule],
# ...........
    providers:[ParentService],
    bootstrap : [AppComponent]
})




# the two way binding works ... 
