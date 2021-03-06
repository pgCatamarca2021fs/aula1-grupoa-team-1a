import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './forms/dashboard/dashboard.component';
import { LoginComponent } from './forms/login/login.component';
import { RegisterComponent } from './forms/register/register.component';
import { ContactComponent } from './layout/contact/contact.component';
import { LayoutComponent } from './layout/layout/layout.component';

const routes: Routes = [
  {path:"", component:LayoutComponent},
  {path:"home", component:LayoutComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"dashboard",component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
