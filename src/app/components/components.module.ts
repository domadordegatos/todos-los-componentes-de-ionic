import { PopinfoComponent } from './popinfo/popinfo.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent,MenuComponent,PopinfoComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    MenuComponent,
    PopinfoComponent
  ]
})
export class ComponentsModule { }
