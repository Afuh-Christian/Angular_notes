import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CartComponent } from './cart/cart.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
    { path: "", component: ParentComponent },
  { path: "cart", component: CartComponent },
  { path: "login", component: LoginComponent }, 
    {path: "register", component: RegisterComponent}
]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }