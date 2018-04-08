import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppProvider, AppGlobal } from '../../providers/app/app';

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {

  slides: Array<any> = [];
  categories: Array<any> = [];
  products: Array<any> = [];

  spinner1: boolean = true;

  params = {
    favoritesId: 2054400,
    pageNo: 1,
    pageSize: 20
  }

  constructor(public appService: AppProvider, public navCtrl: NavController) {
    this.getSlides();
    this.getCategories();
    this.getProducts();
  }
  //获取幻灯片
  getSlides() {
    var params = {
      favoritesId: 2056439,
      pageNo: 1,
      pageSize: 5
    }
    this.appService.httpGet(AppGlobal.API.getProducts, params, rs => {
      console.debug(rs);
      this.slides = rs.data;
      console.log(rs.data);
      this.spinner1 = false;
    })
  }
  //获取分类
  getCategories() {
    this.appService.httpGet(AppGlobal.API.getCategories, { appTag: 'dress' }, rs => {
      console.debug(rs);
      console.log(rs.data);
      this.categories = rs.data;
    })
  }
  //获取首页推荐列表
  getProducts() {
    this.appService.httpGet(AppGlobal.API.getProducts, this.params, rs => {
      console.debug(rs);
      this.products = rs.data;
    })
  }
  //商品详情
  goDetails(item) {
    console.debug('go details...')
  }
}
