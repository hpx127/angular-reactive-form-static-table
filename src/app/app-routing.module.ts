import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RformComponent } from './rform/rform.component';
import { Rform2Component } from './rform2/rform2.component';
import { Rform3Component } from './rform3/rform3.component';


const routes: Routes = [
  {path:'rform',component:RformComponent},
  {path:'rform2',component:Rform2Component},
  {path:'rform3',component:Rform3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
