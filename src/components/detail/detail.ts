import { ViewController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


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
  innerHtml: any;
  ctStyle: any;
  constructor(private vc: ViewController, private params: NavParams, private sanitizer: DomSanitizer) {
    console.log(params);
    let html = this.params.get("html");
    let height = this.params.get("height") / 40 + 'rem';
    let width = this.params.get("width") / 40 + 'rem';
    let style = `height:${height};width:${width}`;
    this.innerHtml = this.sanitizer.bypassSecurityTrustHtml(html);
    this.ctStyle = this.sanitizer.bypassSecurityTrustStyle(style);
    this.text = 'Hello World'; 
  }

  close() {
    console.log("我点击了!");
    this.vc.dismiss();
  }
}
