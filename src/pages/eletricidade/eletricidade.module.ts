import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EletricidadePage } from './eletricidade';

@NgModule({
  declarations: [
    EletricidadePage,
  ],
  imports: [
    IonicPageModule.forChild(EletricidadePage),
  ],
})
export class EletricidadePageModule {}
