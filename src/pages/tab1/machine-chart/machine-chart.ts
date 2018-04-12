import { AppProvider } from './../../../providers/app/app';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

/**
 * Generated class for the MachineChartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-machine-chart',
  templateUrl: 'machine-chart.html',
})
export class MachineChartPage {

  constructor(private ap:AppProvider) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad MachineChartPage');
    this.getMachineChart();
  }

  getMachineChart(){
     let url="api/machine";
     this.ap.httpGet(url,{},(data)=>{
        console.log(data);
     },true);
  }
}
