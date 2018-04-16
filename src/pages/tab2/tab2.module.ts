import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tab2Page } from './tab2';
import { DetailComponent } from '../../components/detail/detail';
import { ComponentsModule } from '../../components/components.module';
import { BackButtonComponent } from '../../components/back-button/back-button';

@NgModule({
  declarations: [
    Tab2Page,BackButtonComponent
  ],
  imports: [
    IonicPageModule.forChild(Tab2Page),
    //ComponentsModule
  ],
})
export class Tab2PageModule {}
