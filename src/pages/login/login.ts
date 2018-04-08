import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  myForm: FormGroup;
  start: number;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder,
    public loadingCtrl: LoadingController) {
    this.myForm = fb.group({
      'username': [''],
      'password': ['']
    });
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }



  ionViewDidLoad() { //当页面加载时触发
    console.log(this.start);
    this.presentLoadingDefault();
    let a = this.setTimeoutByRAF(() => {
      console.log("我是定时器！");
    }, 1000);
    console.log(a);
    window.setInterval(()=>{
      window.cancelAnimationFrame(a);
    },5000)
    console.log("1.0 ionViewDidLoad 当页面加载的时候触发，仅在页面创建的时候触发一次，如果被缓存了，那么下次再打开这个页面则不会触发");
  }

  ionViewWillEnter() {
    console.log("2.0 ionViewWillEnter 顾名思义，当将要进入页面时触发");
  }
  ionViewDidEnter() {
    console.log("3.0 ionViewDidEnter 当进入页面时触发");


  }
  ionViewWillLeave() {
    console.log("4.0 ionViewWillLeave 当将要从页面离开时触发");
  }
  ionViewDidLeave() {
    console.log("5.0 ionViewDidLeave 离开页面时触发");
  }
  ionViewWillUnload() {
    console.log("6.0 ionViewWillUnload 当页面将要销毁同时页面上元素移除时触发");
  }

  ionViewCanEnter() {
    console.log("ionViewCanEnter");
  }

  ionViewCanLeave() {
    console.log("ionViewCanLeave");
  }

  onSubmit() {
    console.log(this.myForm.value);

  }

  login() {
    this.navCtrl.push(HomePage, {
      userInfo: this.myForm.value
    });
  }

  /**
   * 使用requestAnimationFrame包装的类似window.setInterval方法
   * 
   * @param {Function} fun 方法
   * @param {number} time 时间间隔
   * @memberof LoginPage
   */
  setIntervalByRAF(func: Function, time: number = 0) {
    let start = null; 
    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = timestamp - start;
      if (progress < time) {
        window.requestAnimationFrame(step);
      } else {
        func();
      }
    }
    window.requestAnimationFrame(step);
  }

  setTimeoutByRAF(func: Function, time: number = 0) {
    let start = null;
    function step(timestamp) {
      if (!start) start = timestamp;
      let progress = timestamp - start;
      //console.log(progress);
      //console.log(time);

      //let timeDif = progress / time;
      //console.log(progress);
      if (time === 0 || progress >= time) {
        start = timestamp;
        func();
      }
      let b =window.requestAnimationFrame(step);
      console.log(b);
    }
    let a = window.requestAnimationFrame(step);
    console.log(a);
    return a;
  }
}
