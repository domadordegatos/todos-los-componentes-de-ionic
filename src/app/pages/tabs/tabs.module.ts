import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { Routes, RouterModule } from '@angular/router';

  const routes:Routes = [
    {path:'', redirectTo:'red'},
    {path:'', component: TabsPage, 
    children: [
      {path:'account', loadChildren:'../avatar/avatar.module#AvatarPageModule'},
      {path:'red', loadChildren:'../grid/grid.module#GridPageModule'},
      {path:'searching', loadChildren:'../search/search.module#SearchPageModule'}
    ]}
  ];  

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
