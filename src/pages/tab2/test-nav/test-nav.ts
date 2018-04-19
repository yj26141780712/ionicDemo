import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

/**
 * Generated class for the TestNavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-nav',
  templateUrl: 'test-nav.html',
})
export class TestNavPage {

  //@ViewChild(Nav) nav:Nav;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestNavPage');
   
  }

  ionViewDidEnter(){
     //console.log(this.nav);
  }

}
