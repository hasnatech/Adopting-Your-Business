import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkFrameComponent } from './link-frame/link-frame.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [

  {path:'link-frame',component:LinkFrameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
