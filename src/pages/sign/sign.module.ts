import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignPage } from './sign';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    SignPage,
  ],
  imports: [
    IonicPageModule.forChild(SignPage),
    DirectivesModule
  ],
})
export class SignPageModule {} 
