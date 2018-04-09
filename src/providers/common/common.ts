import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CommonProvider Provider');
  }

  /**
  * 使用requestAnimationFrame包装的类似window.setInterval方法
  * 
  * @param {Function} fun 方法
  * @param {number} time 时间间隔
  * @memberof LoginPage
  */
  setIntervalByRAF(func: Function, time: number = 0) {
    let start = null;
    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = timestamp - start;
      if (progress < time) {
        window.requestAnimationFrame(step);
      } else {
        func();
      }
    }
    window.requestAnimationFrame(step);
  }

  /**
   * 使用requestAnimationFrame包装的类似window.setTimeout方法
   * @param func 
   * @param time 
   */
  setTimeoutByRAF(func: Function, time: number = 0) {
    let start = null;
    function step(timestamp) {
      if (!start) start = timestamp;
      let progress = timestamp - start;
      if (time === 0 || progress >= time) {
        start = timestamp;
        func();
      }
      window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }
}
