import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TeamComponent } from './team/team.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TeamComponent,
    NavComponent
  ],
  imports: [
    CommonModule
  ],  
  exports:[
    HeaderComponent,
    TeamComponent,
    NavComponent
  ]
})


export class LayoutModule { }
