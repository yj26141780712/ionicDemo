import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign',
  templateUrl: 'sign.html',
})
export class SignPage {

  constructor(public viewCtrl: ViewController,
    public params:NavParams) {
    console.log('username', params.get('username'));
  }

  goBack(){
    this.viewCtrl.dismiss();
  }
  signUp(event:any){
     console.log("注册完成!");
     let data = { username: 'yangjie',password:"Aa123" };
     console.log(data);
     this.viewCtrl.dismiss(data);
  }
}
