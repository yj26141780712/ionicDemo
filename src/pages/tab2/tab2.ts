import { Component,ViewChild,ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DetailComponent } from '../../components/detail/detail';

/**
 * Generated class for the Tab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//declare var echarts;//js echarts全局对象  

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {


  @ViewChild('container') container: ElementRef;

  chart: any;
  echartOption:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
  }

  ionViewDidEnter(){
    this.echartBind();
    // let ctx = this.container.nativeElement;
    // this.chart = echarts.init(ctx);
    // console.log(this.chart);
    // this.chart.setOption({
    //   color: ['#3398DB'],
    //   tooltip : {
    //     trigger: 'axis',
    //     axisPointer : {
    //       type : 'shadow'
    //     }
    //   },
    //   grid: {
    //     left: '3%',
    //     right: '4%',
    //     bottom: '3%',
    //     width: '100%',
    //     height: '100%',
    //     containLabel: true
    //   },
    //   xAxis : [
    //     {
    //       type : 'category',
    //       data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    //       axisTick: {
    //         alignWithLabel: true
    //       }
    //     }
    //   ],
    //   yAxis : [
    //     {
    //       type : 'value'
    //     }
    //   ],
    //   series : [
    //     {
    //       name:'直接访问',
    //       type:'bar',
    //       // barWidth: '60%',
    //       data:[10, 52, 200, 334, 390, 330, 220]
    //     }
    //   ]
    // });
  }
   
  testModal(){
    console.log("我点击了");
    let detail=this.modalCtrl.create(DetailComponent);
    detail.present();
  }

  echartBind(){
    this.echartOption = {
      color: ['#3398DB'],
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        width: '100%',
        height: '100%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : [
        {
          name:'直接访问',
          type:'bar',
          // barWidth: '60%',
          data:[10, 52, 200, 334, 390, 330, 220]
        }
      ]
    }
  }
}
