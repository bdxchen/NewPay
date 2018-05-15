import { Component } from '@angular/core';
import {Platform, IonicApp, ToastController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from 'ng2-translate';
import { AppMinimize } from '@ionic-native/app-minimize';
import { AppVersion } from '@ionic-native/app-version';
//import { TabsPage } from '../pages/tabs/tabs';
//import { LoginPage } from '../pages/auth/login/login';
import { NewpayInstance } from 'newpay-wallet-js';
import 'rxjs/add/operator/toPromise';
import { NativeService } from  '../providers/updateApp/NativeService'
import { AuthService} from  '../providers/user-service/user-auth-service';
import { CommonUtils } from '../providers/common/commonUtils';
import { ConfService } from '../providers/util-service/conf-service';
import {LoginPage} from "../pages/auth/login/login";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any="LoginPage";

  constructor(public platform: Platform,
              public statusBar: StatusBar, splashScreen: SplashScreen,
              public translate:TranslateService
              ,private appMinimize: AppMinimize,private nativeService:NativeService,
                private  appVersion:AppVersion,private authService:AuthService,
              private commonUtils:CommonUtils,private ionicApp:IonicApp,
              private toastCtrl:ToastController,
              private confservice:ConfService) {

      if(localStorage.getItem('brainKey')){
          this.translate.setDefaultLang('zh');
          this.rootPage ='TabsPage';
      }else
      {
          this.translate.setDefaultLang('zh');
          this.rootPage ='LoginPage';
      }
      // this.assertNetwork();//检测网络
      NewpayInstance.init(this.confservice.initWS).then(()=>{
      }).catch((err)=>{
          console.log(err);
          this.commonUtils.alertCommon('','网络链接错误,请重试!');
      });
    platform.ready().then(() => {
        // if(localStorage.getItem("token")){
        //     this.nativeService.detectionUpgrade();
        // statusBar.styleDefault();
        this.statusBarStyle();

        // }
        // this.nativeService.detectionUpgrade();
        if (this.platform.is('cordova')) {
            // watch network for a disconnect
            // stop disconnect watch
        } else {
            // Cordova not accessible, add mock data if necessary
            localStorage.setItem('regid','xx');
            console.log("Browser浏览器cordova处理")
        }

    });

  }
    /**
     * 是否真机环境
     */
    isMobile(): boolean {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    }

    /**
     * 是否android真机环境
     */
    isAndroid(): boolean {
        return this.isMobile() && this.platform.is('android');
    }

    /**
     * 是否ios真机环境
     */
    isIos(): boolean {
        return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
    }


    /**
     * 状态栏
     */
    statusBarStyle(): void {
        if (this.isMobile()) {
            this.statusBar.overlaysWebView(false);
            this.statusBar.styleLightContent();
            this.statusBar.backgroundColorByHexString('#f9c215');//3261b3
        }
    }

}
