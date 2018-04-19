import { Component, ViewChild } from '@angular/core';
import { IonicPage, Tabs, Platform } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  @ViewChild("myTabs") myTabs:Tabs;
  tab1 = "Tab1Page";
  tab2 = "Tab2Page";
  tab3 = "Tab3Page";

  constructor() {
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
