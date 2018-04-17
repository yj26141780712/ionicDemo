import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  constructor( public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    this.presentLoadingDefault(); //加载loading页面 
    this.navCtrl.setRoot("LoginPage");
    console.log('ionViewDidLoad LoadingPage');
  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: ``,
      cssClass: "loginLoadingPage",
      showBackdrop: false
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
      console.log("我销毁了");
    }, 2000);
  }
}
