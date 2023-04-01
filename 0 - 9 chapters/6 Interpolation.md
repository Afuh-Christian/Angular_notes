# 6 What is interpolation ..... 

Embedding expressions into markup text .. 



# by default , it uses 
    {{variable}}    

# these variables have to be properties of their component .... 

.js
export class BooksComponent implements OnInit {

  author: string = "Afuh Christian "
  

  constructor() { }

  ngOnInit(): void {
  }
}

.html 
<p>books works!</p>

<div>The author of this book is ... <h1>{{author}}    </h1></div>


<img src="" alt="{{author}}  has no image here">


