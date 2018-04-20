import { AppProvider } from './../providers/app/app';
import { Component, ViewChild } from '@angular/core';
import { Platform, IonicApp, Keyboard, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = "LoginPage";
  backButtonPressed: boolean = false;// 返回键是否已触发
  @ViewChild(Nav) nav: Nav;

  constructor(public platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public ap: AppProvider,
    public ionicApp: IonicApp,
    public keyboard: Keyboard) {
    platform.ready().then(() => {
      //statusBar.styleDefault();
      statusBar.hide();
      splashScreen.hide();
      //console.log(this.platform);  
      console.log(this.ionicApp);
      this.registerBackButtonAction();
      console.log(this.nav);
     // console.log(this.nav.getActive());
    });
  }

  registerBackButtonAction(): void {
    this.platform.registerBackButtonAction((): any => {
      //alert(123);
      //按下返回键时，先关闭键盘
      if (this.keyboard.isOpen()) {
        this.keyboard.close();
        return;
      };
      let activePortal = this.ionicApp._modalPortal.getActive() || this.ionicApp._overlayPortal.getActive();
      let loadingPortal = this.ionicApp._loadingPortal.getActive();
      if (activePortal) {
        //其他的关闭
        activePortal.dismiss().catch(() => {
        });
        activePortal.onDidDismiss(() => {
        });
        return;
      }
      if (loadingPortal) {
        //loading的话，返回键无效
        return;
      }
      let activeVC = this.nav.getActive();
      //let isHasChild = this.nav.getActiveChildNavs();
      let page = activeVC.instance;
      if (!(page instanceof TabsPage)) {
        if (!this.nav.canGoBack()) {
          // 当前页面为tabs，退出APP
          return this.showExit();
        }
        // 当前页面为tabs的子页面，正常返回
        return this.nav.pop();
      }
      let tabs = page.myTabs;
      let activeNav = tabs.getSelected();
      if (!activeNav.canGoBack()) {
        // 当前页面为tab栏，退出APP
        return this.showExit();
      }
      // 当前页面为tab栏的子页面，正常返回
      return activeNav.pop();
    }, 101);
  }
  private showExit(): void {
    //如果为true，退出
    if (this.backButtonPressed) {
      this.platform.exitApp();
    } else {
      //第一次按，弹出Toast
      this.ap.toast("再按一次退出应用");
      //标记为true
      this.backButtonPressed = true;
      //两秒后标记为false，如果退出的话，就不会执行了
      setTimeout(() => this.backButtonPressed = false, 2000);
    }
  }
}