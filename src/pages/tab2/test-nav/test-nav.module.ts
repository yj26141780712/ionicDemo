import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestNavPage } from './test-nav';

@NgModule({
  declarations: [
    TestNavPage,
  ],
  imports: [
    IonicPageModule.forChild(TestNavPage),
  ],
})
export class TestNavPageModule {}
