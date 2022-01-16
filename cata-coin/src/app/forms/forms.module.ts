import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ]
})
export class FormsModule { }
