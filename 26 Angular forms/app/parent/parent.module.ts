import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentService } from './parent.service';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [ParentComponent,ChildComponent],
  providers : [ParentService],
  imports: [
    CommonModule
  ],
  exports:[ParentComponent]
})
export class ParentModule { }
