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

  myForm: FormGroup;
  start: number;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder,
    public loadingCtrl: LoadingController,
    public cp: CommonProvider,
    public modalCtrl: ModalController) {
    this.myForm = fb.group({
      'username': [''],
      'password': ['']
    });
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `please wait`,
      cssClass: ""
      //showBackdrop:false
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 200000);
  }

  ionViewDidLoad() { //当页面加载时触发
    //this.presentLoadingDefault();
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
    //this.login();
  }

  login() {
    this.navCtrl.push(HomePage, {
      userInfo: this.myForm.value
    });
  }
  forget(event: any) {
    console.log("我点击了密码重置");
  }

  sign(event: any) {
    console.log("我点击了注册");
    this.presentSignModal();
  }

  presentSignModal() {
    let profileModal = this.modalCtrl.create(SignPage, { username: this.myForm.controls["username"].value });
    //console.log(profileModal);
    profileModal.onDidDismiss(data => {
      if (data) {
        console.log(data);
        this.myForm.reset(data);
      }
    });
    profileModal.present();
    console.log("我没有挂");
    // this.navCtrl.push("SignPage", {
    //   userInfo: this.myForm.value
    // });
  }
}
