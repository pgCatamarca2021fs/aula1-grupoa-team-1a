import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TeamComponent } from './team/team.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TeamComponent,
    NavComponent,
    ContactComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule
  ],  
  exports:[
    LayoutComponent,
    NavComponent
  ]
})


export class LayoutModule { }
