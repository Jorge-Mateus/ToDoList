import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//pages -> home
import { HomeComponent } from './modules/home/pages/home/home.component';

const routes: Routes = [
  //pages -> home
  {path: "", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
