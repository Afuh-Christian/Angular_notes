import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { CartComponent } from './cart/cart.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
    { path: "", component: ParentComponent },
    {path: "cart", component: CartComponent}
]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }