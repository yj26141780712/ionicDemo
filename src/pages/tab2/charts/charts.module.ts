import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChartsPage } from './charts';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    ChartsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChartsPage),
    NgxEchartsModule
  ],
})
export class ChartsPageModule {}
