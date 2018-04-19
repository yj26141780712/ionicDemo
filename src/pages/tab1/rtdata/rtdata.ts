import { AppProvider } from './../../../providers/app/app';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

/**
 * Generated class for the RtdataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rtdata',
  templateUrl: 'rtdata.html',
})
export class RtdataPage {

  rtData: any;
  machineInfo:any;
  constructor(private ap: AppProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RtdataPage');
    // let url="api/rtdata";
    // this.ap.httpGet(url,{},data=>{
    //    console.log();
    // },true);
    this.rtData = {
      machineInfo: {
        icon: "list-box",
        title:"机器详情",
        datas:[
          {name:"serialNumber",title:"机器编号",value:"ty-00001"},
          {name:"name",title:"机器名称",value:"1"},
          {name:"prouctionDate",title:"出厂日期",value:"2018-04-16"},
          {name:"position",title:"所在位置",value:"宁波"},
        ]
      }
    }
    this.machineInfo=this.rtData.machineInfo;
    console.log(this.rtData);
  }


}
