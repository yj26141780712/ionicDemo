import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides, App } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {

  @ViewChild(Slides) myslide: Slides;
  state: boolean = false;
  slides: Array<any> = [];
  spinner1: boolean;
  functions: Array<any> = [];
  constructor(public ap: AppProvider, public app:App,) {
    this.getSlides();
    this.getFunctions();
  }

  ionViewDidLoad() {
    // console.log("我开启了自动!");
    //this.myslide.startAutoplay();
  }
  ionViewDidEnter() {
    this.myslide.autoplayDisableOnInteraction = false;
    this.myslide.startAutoplay();
  }
  ionViewDidLeave() {
    this.myslide.stopAutoplay();
  }
  //获取幻灯片
  getSlides() {
    this.slides = [
      {
        pictUrl: "./assets/imgs/slider1.png",
        title: "标题一"
      },
      {
        pictUrl: "./assets/imgs/slider2.png",
        title: "标题二"
      },
      {
        pictUrl: "./assets/imgs/slider3.png",
        title: "标题三"
      }
    ];
    this.spinner1 = false;

  }

  getFunctions() {
    // this.functions = [ 
    //   [
    //     [{ moduleName: "实时数据", page: "RtdataPage", index: 0, icon: "globe" }],
    //     [{ moduleName: "机器图表", page: "MachineChartPage", index: 1, icon: null }, { moduleName: "润滑信息", page: "LubricationInfoPage", index: 3, icon: null }],
    //     [{ moduleName: "机器列表", page: "MachineListPage", index: 2, icon: null }, { moduleName: "", page: "", index: null, icon: null }]
    //   ],
    //   [
    //     [{ moduleName: "实时数据", page: "", index: 1, icon: "laptop" }],
    //     [{ moduleName: "实时数据", page: "", index: 1, icon: "" }, { moduleName: "实时数据", page: "", index: 1, icon: "" }],
    //     [{ moduleName: "实时数据", page: "", index: 1, icon: "" }, { moduleName: "", page: "", index: 1, icon: "" }]
    //   ],
    //   [
    //     [{ moduleName: "实时数据", page: "", index: 1, icon: "construct" }],
    //     [{ moduleName: "实时数据", page: "", index: 1, icon: "" }, { moduleName: "实时数据", page: "", index: 1, icon: "" }],
    //     [{ moduleName: "实时数据", page: "", index: 1, icon: "" }, { moduleName: "实时数据", page: "", index: 1, icon: "" }]
    //   ]
    // ]  
    let url = "api/function";
    this.ap.httpGet(url, {}, (data) => {
      this.functions = data
      //this.ap.alert(data);
      //console.log(data);
    }, true);
  }
  goDetails(item: any) {
    //console.log(item);
    this.ap.alert(item.pictUrl);
    //this.myslide.slideTo(2, 500);
  }
  goPage(page: string, index: Number) {
    //console.log(page, index); 
    if (page && typeof index === "number") {
      //this.app.getRootNav().push(page,{ index: index });
      console.log(this.app);
      console.log(this.app.getRootNavs());
      this.app.getRootNavs()[0].push(page,{ index: index });
    }
    //this.navCtrl.push(page, { index: index });
  }
}
