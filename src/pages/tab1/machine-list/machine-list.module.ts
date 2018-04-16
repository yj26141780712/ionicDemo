import { ComponentsModule } from './../../../components/components.module';
import { PaginationComponent } from './../../../components/pagination/pagination';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MachineListPage } from './machine-list';

@NgModule({
  declarations: [
    MachineListPage
  ],
  imports: [
    IonicPageModule.forChild(MachineListPage),
    ComponentsModule
  ],
})
export class MachineListPageModule {}
