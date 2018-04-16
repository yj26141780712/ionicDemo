import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';

/**
 * Generated class for the MachineListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-machine-list',
  templateUrl: 'machine-list.html',
})
export class MachineListPage {


  keyword:string;
  keywordFilter:FormControl= new FormControl();
  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
      // this.keywordFilter.valueChanges.debounceTime(500).subscribe(       
      //   value => {this.keyword = value;console.log()}
      // );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MachineListPage');
  }

  getItems(){
    //
  
  }
}
