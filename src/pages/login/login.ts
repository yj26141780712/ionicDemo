import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  myForm:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,private fb:FormBuilder) {
       this.myForm = fb.group({
         'username':[''],
         'password':['']  
       });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  onSubmit(){
    console.log(this.myForm.value);
     this.navCtrl.push(HomePage, {
      userInfo: this.myForm.value
    });
  }

}
