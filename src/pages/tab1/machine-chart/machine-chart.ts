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

  machineList: Array<any>=[];
  constructor(private ap: AppProvider) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad MachineChartPage');
    this.getMachineChart();
  }

  getMachineChart() {
    let url = "api/machine";
    this.ap.httpGet(url, {}, (data) => {
      // this.machineList = [
      //   [{ name: "1" }, { name: "1" }, { name: "1" }],
      //   [{ name: "2" }, { name: "4" }, { name: "6" }],
      //   [{ name: "3" }, { name: "5" }, { name: "7" }],
      // ]
      //let arr = [];
      console.log(data,1);
      //data=data.push(data);
      for (let i = 0; i < data.length; i += 3) {
        this.machineList.push(data.slice(i,i+3));
      }
      console.log(this.machineList); 
      for (let i = 0; i < data.length; i += 3) {
        this.machineList.push(data.slice(i,i+3));
      }
      console.log(this.machineList);  
      //console.log(data);
    }, true);
  }
}
