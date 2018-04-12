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

  constructor(public navCtrl: NavController, public navParams: NavParams,private event:Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab3Page');
  }

  goLogin(){
    this.event.publish("tologin");
  }
}
