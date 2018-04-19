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

  containerHtml: any;
  style: any;
  constructor(private vc: ViewController, private params: NavParams, private sanitizer: DomSanitizer) {
    let html = this.params.get("html");
    let height = this.params.get("height") / 40 + 'rem';
    let width = this.params.get("width") / 40 + 'rem';
    console.log(html);
    this.containerHtml = this.sanitizer.bypassSecurityTrustHtml(html);
    this.style = this.sanitizer.bypassSecurityTrustStyle(`height:${height};width:${width}`);
  }

  close() {
    this.vc.dismiss();
  }


}
