import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from './../pages/home/home';
import { AppProvider } from '../providers/app/app';
import { HttpModule } from '@angular/http';
import { CommonProvider } from '../providers/common/common';
import { HttpClientModule } from '@angular/common/http';
import { SignPageModule } from '../pages/sign/sign.module';
import { IonicStorageModule } from '@ionic/storage';
import { FunctionProvider } from '../providers/function/function';
import { BackButtonComponent } from '../components/back-button/back-button';
import { ComponentsModule } from '../components/components.module';
import { NgxEchartsModule} from 'ngx-echarts';


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      iconMode:'ios',//  在整个应用程序中为所有图标使用的模式。可用选项："ios"，"md"
      mode:'ios',//在整个应用程序中使用的模式。
      backButtonText:''
    }),
    HttpModule,
    HttpClientModule,
    SignPageModule,
    IonicStorageModule.forRoot({
      name: 'MyApp',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppProvider,
    CommonProvider,
    FunctionProvider,
  ]
})
export class AppModule {}
