import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DetailComponent } from '../../components/detail/detail';

/**
 * Generated class for the Tab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
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
}
