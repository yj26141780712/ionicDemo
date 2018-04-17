import { Http } from '@angular/http';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DetailComponent } from '../../components/detail/detail';
import { AppProvider, AppGlobal } from '../../providers/app/app';

/**
 * Generated class for the Tab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//declare var echarts;//js echarts全局对象  

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {


  @ViewChild('container') container: ElementRef;

  items: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public http: Http,
    public ap: AppProvider) {
    this.items = [
      { name: "模态框", action: "testModal" },
      { name: "Echart表格", action: "testEchart" },
      { name: "测试http链式", action: "http" },
      { name: "测试Post接口", action: "httpPost" },
      { name: "测试Swiper", action: "testSwiper" }
    ]
    console.log(this.items);
  }

  click(action: string) {
    //console.log("我执行了？",action);
    switch (action) {
      case "testModal":
        this.testModal();
        break;
      case "testEchart":
        this.testEchart();
        break;
      case "http":
        this.testHttp();
        break;
      case "httpPost":
        this.testPost();
        break;
      case "testSwiper":
        this.testSwiper();
        break;
      default: ""
        break;
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
  }

  testModal() {
    console.log("我点击了");
    let html = `<div>我是一个div12123131231231<button>123<botton><div>`;
    let detail = this.modalCtrl.create(DetailComponent,
      {
        html: html,
        height: 200,
        width: 100
      }
    );
    detail.present();
  }

  testEchart() {
    //this.navCtrl.popAll();
    this.navCtrl.push("ChartsPage");
  }
  testHttp() {
    // this.a().then(res=>{
    //     return this.b(res.json());
    // }).then(res=>{
    //     return this.c(res.json());
    // }).then(res=>{
    //   console.log(res.json());
    // })
    this.http.get(AppGlobal.domain + "api/role").toPromise()
      .then(res => {
        console.log(res.json());
        return this.http.get(AppGlobal.domain + "/api/role/1").toPromise();
      })
      .then(res => {
        console.log(res.json());
        return this.http.get(AppGlobal.domain + "api/role/1/users/1").toPromise();
      })
      .then(res => {
        //console.log(res.json());
        this.ap.httpGet("api/machine", {}, data => {
          console.log(data);
        }, true);
      }).catch(err => {
        console.log("errorUrl:", err.url);
      })
  }
  testPost() {
    let url = AppGlobal.domain + "api/role";
    this.http.post(url, { name: "123", des: "1213" }).toPromise()
      .then(res => {
        console.log(res.json());
        this.ap.alert(res);
      });
  }

  testSwiper(){
    this.navCtrl.push("SwiperPage");
  }
}
