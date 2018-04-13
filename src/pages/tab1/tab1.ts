import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {


  state: boolean = false;
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
    // let url = "api/function";
    this.functions = [
      {
        id: 1, name: "模块1",
        pageChild: [
          {
            id: 11, name: "模块11",
            pageChild: [
              {
                id: 111,
                name: "实时数据",
              }
            ]
          }, {
            id: 12, name: "模块12",
            pageChild: [
              {
                id: 121,
                name: "机器图标",
              },
              {
                id: 122,
                name: "润滑信息",
              }
            ]
          }, {
            id: 13, name: "模块13",
            pageChild: [
              {
                id: 131,
                name: "机器",
              },
              {
                id: 132,
                name: "",
              }
            ]
          }]
      },
    ]
    // this.ap.httpGet(url, {}, (data) => {
    //   this.functions = data
    //   console.log(data);
    // }, true);
  }
  goDetails(item:any){
      console.log(item);
  }
  goPage(page:string,index:Number) {
    this.navCtrl.push(page, { index: index });
  }
}
