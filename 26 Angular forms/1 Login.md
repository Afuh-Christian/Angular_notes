# create and interface of type loginform ... so we get the user input as an object ... 

# types/auth.ts ... 


export interface LoginForm  {

    email: String, 
    password : String 
}


export interface RegisterForm  {

    email: String, 
    password : String 
}



# app/auth/login ..............

# component.ts 

  form: LoginForm = {
    email: "",
    password: ""
  }


# component.html 

        <input type="email" name="email" id="password" class="p-2 rounded w-full" placeholder="Email Address"
# .............
        [(ngModel)]="form.email"
# .............
        />
     
       
        <input type="password" name="password" id="password" class="p-2 rounded w-full" placeholder="Password "
# ............. 
        [(ngModel)]="form.password"
# .............
        />
      






# ............................NOW TO SUBMIT ............................

<form> has a hook(listerner..)         =    (ngSubmit)  , 


# .html 

 <form action=""   (ngSubmit)="submit()">

 <input type="submit">

 </form>


# .ts 

  submit():void {
    alert("Form submitted")
  }




  






