import { AppProvider } from './../../providers/app/app';
import { Storage } from '@ionic/storage';
import { CommonProvider } from './../../providers/common/common';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HomePage } from '../home/home';
import { SignPage } from '../sign/sign';

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

  loginForm: FormGroup;
  start: number;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder,
    public loadingCtrl: LoadingController,
    public ap: AppProvider,
    public modalCtrl: ModalController,
    public storage: Storage) {
    this.loginForm = fb.group({
      'username': [''],
      'password': ['']
    });
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `加载中`,
      cssClass: "loginLoadingPage",
      showBackdrop: false
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }

  ionViewDidLoad() { //当页面加载时触发
    this.presentLoadingDefault(); //加载loading页面 
    this.storage.get('userinfo').then((value) => {
      if (value) this.loginForm.reset(value);
    });
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
    this.login();
  }

  /**
   * 登陆
   */
  login() {
    let url = "api/role/1/user";
    this.ap.httpGet(url, 
      {
        username:this.loginForm.value.username,
        password:this.loginForm.value.password
      }, 
      (data) => {
      console.log(data);
      if(data=="[]"){
        this.ap.toast('用户名或密码错误!');
      }else{
        this.storage.set('userinfo', this.loginForm.value);
        this.navCtrl.setRoot(HomePage, {
          userInfo: this.loginForm.value
        });
      }
    }, true);
  }

  /**
   * 忘记密码
   * @param event 事件对象
   */
  forget(event: any) {
    console.log("我点击了密码重置");
  }

  /**
   * 注册按钮点击时间
   * @param event 事件对象
   */
  sign(event: any) {
    this.presentSignModal();
  }
  /**
   * 打开注册页面
   */
  presentSignModal() {
    let profileModal = this.modalCtrl.create(SignPage, { username: this.loginForm.controls["username"].value });
    profileModal.onDidDismiss(data => {
      if (data) {
        console.log(data);
        if (data) this.loginForm.reset(data);
      }
    });
    profileModal.present();
  }
}
