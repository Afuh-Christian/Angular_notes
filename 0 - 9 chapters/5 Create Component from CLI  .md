# 5 Create Component from CLI  




ng generate component books   




take the selector in the books.module.ts ... and place as a dom element in the app.component.html ..... 

like a child component in react .... 

app.component.html

<h1>Hello Chris the {{value}} man </h1>

<app-books></app-books>

# Nb .. this can be done because both components are defined on thesame module .... 

app.module.ts
    declarations: [AppComponent, BooksComponent], 
# ..................................


