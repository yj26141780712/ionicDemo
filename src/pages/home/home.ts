import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rootPage = "TabsPage";
  constructor(public navCtrl: NavController) {
   // this.navCtrl.setRoot(TabsPage); 
  } 

}
