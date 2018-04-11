import { Component, Input } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {


  slides: Array<any> = [];
  spinner1: boolean;
  functions: Array<any> = [];
  constructor(public ap: AppProvider, public navCtrl: NavController) {
    this.getSlides();
    this.getFunctions();
    //this.getProducts();
  }
  //获取幻灯片
  getSlides() {
    this.slides = [
      {
        pictUrl: "../../assets/imgs/slider1.jpg",
        title: "标题一"
      },
      {
        pictUrl: "../../assets/imgs/slider2.jpg",
        title: "标题二"
      },
      {
        pictUrl: "../../assets/imgs/slider3.jpg",
        title: "标题三"
      }
    ];
    this.spinner1 = false;
  }
  getFunctions() {
    let url = "api/function";
    this.functions=[
      {  },
      {},
      {},
    ]
    // this.ap.httpGet(url, {}, (data) => {
    //   this.functions = data
    //   console.log(data);
    // }, true);
  }
  goDetails() {
    console.log("go to Details");
  }
  goFunctions() {
    console.log("go to Functions");
  }

}
