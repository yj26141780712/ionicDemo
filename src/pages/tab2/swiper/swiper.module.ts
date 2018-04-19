import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwiperPage } from './swiper';

@NgModule({
  declarations: [
    SwiperPage,
  ],
  imports: [
    IonicPageModule.forChild(SwiperPage),
  ],
})
export class SwiperPageModule {}
