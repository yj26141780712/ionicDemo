import { AppProvider } from './../../providers/app/app';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the Tab3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab3',
  templateUrl: 'tab3.html',
})
export class Tab3Page {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private event: Events,
    private ap: AppProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab3Page');
  }

  goLogin() {
    this.ap.alert("确定要退出!", () => {
      this.event.publish("tologin");
    })
  }
}
