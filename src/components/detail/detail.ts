import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core';

/**
 * Generated class for the DetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'detail',
  templateUrl: 'detail.html'
})
export class DetailComponent {

  text: string;

  constructor(private vc: ViewController) {
    console.log('Hello DetailComponent Component');
    this.text = 'Hello World';
  }

  close(){
    console.log("我点击了!");
    this.vc.dismiss();
  }
}
