import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare let Swiper: any; //申明全局变量
/**
 * Generated class for the SwiperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage() 
@Component({
  selector: 'page-swiper',
  templateUrl: 'swiper.html',
})
export class SwiperPage { 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SwiperPage');
    let mySwiper = new Swiper('.swiper-container', {
      // autoplay:true,//等同于以下设置
      // autoplay: {
      //   delay: 3000,
      //   stopOnLastSlide: false,
      //   disableOnInteraction: true,
      //   },
    });
  }

}
