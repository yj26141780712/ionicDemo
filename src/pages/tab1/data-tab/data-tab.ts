import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DataTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data-tab',
  templateUrl: 'data-tab.html',
})
export class DataTabPage {


  // @ViewChild('dataTabs') tabRef: Tabs;
  tabs: Array<any> = [];
  selectedIndex:Number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabs = [
      { name: "RtdataPage", params: {}, title: "实时数据" },
      { name: "MachineChartPage", params: {}, title: "机器图表" },
      { name: "MachineListPage", params: {}, title: "机器列表" },
      { name: "LubricationInfoPage", params: {}, title: "润滑信息" },
    ];
    let params= this.navParams.get("index");
    this.selectedIndex =params;
    console.log(params);
    //this.selectedIndex=
    //this.tabRef.select(1);
  }
  ionViewDidLoad() {

  }
  goBack(){
    this.navCtrl.pop();
  }

}
