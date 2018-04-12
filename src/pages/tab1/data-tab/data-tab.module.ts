import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataTabPage } from './data-tab';

@NgModule({
  declarations: [
    DataTabPage,
  ],
  imports: [
    IonicPageModule.forChild(DataTabPage),
  ],
})
export class DataTabPageModule {}
