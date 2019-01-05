import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuCampusPage } from './menu-campus';

import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [
    MenuCampusPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuCampusPage),
    CommonModule,    
  ],
})
export class MenuCampusPageModule {}
