import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';

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
    public params: NavParams,
    public ap: AppProvider) {
    console.log('username', params.get('username'));
  }

  /**
   * 注册页面关闭
   * @param data 回传数据
   */
  goBack(data: any) {
    console.log(112);
    this.viewCtrl.dismiss(data);
  }

  /**
   * 注册提交
   * @param value 表单值
   */
  onSubmit(form: any) {
    console.log(form);
    let strError = this.ap.formValidate(form.controls);
    if (strError) {
      this.ap.toast(strError);
    } else {
     // this.ap.httpPost("", {}, (data) => {
        this.viewCtrl.dismiss(form.value);
      //}, true);
    }
  }
}
