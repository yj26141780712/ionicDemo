import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tab2Page } from './tab2';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    Tab2Page,
  ],
  imports: [
    IonicPageModule.forChild(Tab2Page),
    NgxEchartsModule
  ],
})
export class Tab2PageModule {}
