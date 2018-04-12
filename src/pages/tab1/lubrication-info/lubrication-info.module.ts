import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LubricationInfoPage } from './lubrication-info';

@NgModule({
  declarations: [
    LubricationInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(LubricationInfoPage),
  ],
})
export class LubricationInfoPageModule {}
