import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MachineChartPage } from './machine-chart';

@NgModule({
  declarations: [
    MachineChartPage,
  ],
  imports: [
    IonicPageModule.forChild(MachineChartPage),
  ],
})
export class MachineChartPageModule {}
