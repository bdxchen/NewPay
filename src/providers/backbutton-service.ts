import { Injectable } from '@angular/core';
import {Platform, ToastController, App, NavController, Tabs, Alert, AlertController,IonicApp,Keyboard} from 'ionic-angular';
import { AppMinimize } from '@ionic-native/app-minimize';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
@Injectable()
export class BackbuttonService{

    //控制硬件返回按钮是否触发，默认false
    backButtonPressed: boolean = false;
    alert:Alert

    //构造函数 依赖注入
    constructor(public platform: Platform,
                public appCtrl: App,
                public toastCtrl: ToastController,
                private appMinimize:AppMinimize,
                private keyboard:Keyboard,
                private alertCtr:AlertController,
                private statusbar:StatusBar,
                private splashscreen:SplashScreen
                // private ionicApp:IonicApp
                ) {

                platform.ready().then(()=>{
                    this.statusbar.styleDefault();
                    this.splashscreen.hide();
                }).catch()

    }

    //注册方法registerBackButtonAction
    registerBackButtonAction(tabRef: Tabs): void {
        this.platform.registerBackButtonAction(() => {
            localStorage.getItem("flagBack")
            //获取NavController
            debugger;
            if(this.keyboard.isOpen()){
                this.keyboard.close();
                return;
            }

            let activeNav: NavController = this.appCtrl.getActiveNav();
            console.log(this.appCtrl);
            console.log(activeNav)

            //如果可以返回上一页，则执行pop
            if(localStorage.getItem("flagBack")=="1"){
                if (tabRef == null || tabRef._selectHistory[tabRef._selectHistory.length - 1] === tabRef.getByIndex(0).id) {
                    //执行退出
                    this.showExit();
                } else {
                    //选择首页第一个的标签
                    // this.alert.dismiss();
                    tabRef.select(0);
                }
            }else{
                if (activeNav.canGoBack()) {
                    activeNav.pop();
                } else {
                    if (tabRef == null || tabRef._selectHistory[tabRef._selectHistory.length - 1] === tabRef.getByIndex(0).id) {
                        //执行退出
                        this.showExit();
                    } else {
                        //选择首页第一个的标签
                        // this.alert.dismiss();
                        tabRef.select(0);
                    }
                }
            }

        });
    }
    private alertT(content){

        this.alert = this.alertCtr.create({
            // spinner: 'hide',
            title:''  ,
            enableBackdropDismiss:false,
            // duration: 3000
        });
        this.alert.present();
    }
    //退出应用方法
    private showExit(): void {
        //如果为true，退出
        if (this.backButtonPressed) {
            // this.platform.exitApp();
                this.appMinimize.minimize();

        } else {
            //第一次按，弹出Toast
            this.toastCtrl.create({
                message: '再按一次退出应用',
                duration: 2000,
                position: 'bottom'
            }).present();
            //标记为true
            this.backButtonPressed = true;
            //两秒后标记为false，如果退出的话，就不会执行了
            setTimeout(() => this.backButtonPressed = false, 2000);
        }
    }
}
