/**
 * Created by wupeng88163@163.com on 12-19.
 */
import {Injectable} from '@angular/core';
import {Platform, AlertController, Loading, LoadingController} from 'ionic-angular';
import {AppVersion} from '@ionic-native/app-version';
import {File} from '@ionic-native/file';
import {Transfer, TransferObject} from '@ionic-native/transfer';
import {ConfService, APP_DOWNLOAD, APK_DOWNLOAD} from "../util-service/conf-service";
import {Http} from "@angular/http";
import { HttpUtils} from  '../util-service/http-utils'
import { Observable } from 'rxjs/Observable';
import { CommonUtils } from  '../common/commonUtils'

@Injectable()
export class NativeService {
    appId:string="";
    downloadUrl:string;
    nowDate:string;
    alert:any;
    text:string='下载进度：0% ';
    constructor(private platform: Platform,
                private alertCtrl: AlertController,
                private transfer: Transfer,
                private appVersion: AppVersion,
                private file: File,
                private confService:ConfService,
                private httpUtils:HttpUtils,
                private commonUtils:CommonUtils,
                private loadingCtrl:LoadingController
                ) {
                // Schedule a single notification
                // this.localNotifications.schedule({
                //     id: 1,
                //     text: 'Single ILocalNotification',
                //     sound: null,
                //     data: { secret: '1011010101' }
                // });
    }


    /**
     * 检查app是否需要升级
     */
    detectionUpgrade() {
        //这里连接后台获取app最新版本号,然后与当前app版本号(this.getVersionNumber())对比
        //版本号不一样就需要申请,不需要升级就return
       // console.log(this.achieveNewVersion());
       //  let appId = this.confService.app_Android_id;
        if(!this.isMobile()){
            this.appId =this.confService.app_Android_id;
        }
        if (this.isAndroid()) {
            this.appId =this.confService.app_Android_id;
        }
        if(this.isIos()){
            this.appId =this.confService.app_IOS_id;
        }
        let date =   new Date();
        this.nowDate =this.formatDate(date);
        console.log(this.nowDate)
        let  req:any = {"app_id":this.appId}
        this.achieveNewVersion(req).subscribe(res=>{
            console.log(JSON.parse(res).data.version_no );
            this.downloadUrl =  JSON.parse(res).data.url
            console.log(this.downloadUrl)
            if(this.isMobile()){
                this.downloadUrl =  JSON.parse(res).data.url
                console.log(this.getVersionNumber())
                this.getVersionNumber().then(version=>{
                    if(JSON.parse(res).data.version_no != version){
                        // this.getVersionNumber()
                       this.alert = this.alertCtrl.create({
                            title: '升级',
                            subTitle: '发现新版本,是否立即升级？',
                            buttons: [{text: '取消'},
                                {
                                    text: '更新',
                                    handler: () => {
                                        this.downloadApp();
                                    }
                                }
                            ]
                        }).present();
                    }else{
                        return;
                    }
                })

            }

        },err=>{
            console.log(err);
            // this.commonUtils.alertCommon("提示","读取版本信息失败！")
        })

    }
    achieveNewVersion(req): Observable<any>{
        return this.httpUtils.httppost(this.confService.baseUrl + '/app/version',JSON.stringify(req)).map(res=>{
            console.log(res);
           return res._body;
        },err=>{
            console.log(err);
        })
    }

    /**
     * 下载安装app
     */
    downloadApp() {
        if (this.isAndroid()) {
            // this.alert = this.alertCtrl.create({
            //     title: '下载进度：0%',
            //     enableBackdropDismiss: false,
            //     buttons: [
            //         {
            //             text: '后台下载',
            //             handler: () => {
            //                 // this.localNotifications.schedule({
            //                 //     id: 10000,
            //                 //     text: this.text,
            //                 //     sound: this.isAndroid() ? 'file://sound1.mp3': 'file://beep1.caf'
            //                 // });
            //             }
            //         }
            //     ]
            //     // buttons: ['后台下载']
            // });
            // this.alert.present();

            const fileTransfer: TransferObject = this.transfer.create();
            let date =   new Date();
            this.nowDate =this.formatDate(date);
            const apk = this.file.externalRootDirectory + 'newPay'+this.nowDate+'.apk'; //apk保存的目录

            let loading = this.loadingCtrl.create({
                content: '下载进度：0%',
                dismissOnPageChange: false
            });
            loading.present();
            let no:number = 1;
            fileTransfer.onProgress((event: ProgressEvent) => {
                if (event.lengthComputable) {
                    no = Math.floor(event.loaded / event.total * 100);
                }
                // let num = Math.floor(event.loaded / event.total * 100);
                // if (num === 100) {
                //     // this.alert.dismiss();
                //     loading.dismiss();
                // } else {
                //     let title = document.getElementsByClassName('alert-title')[0];
                //     title && (title.innerHTML = '下载进度：' + num + '%');
                // }

            });
            let timer = setInterval(() => {
                loading.setContent("下载进度：" + Math.floor(no) + "%");
                if (no >= 99) {
                    clearInterval(timer);
                }
            }, 300);
            fileTransfer.download(APK_DOWNLOAD+this.downloadUrl, apk).then((entry) => {
                // window['install'].install(apk.replace('file://', ''));
                if(timer)clearInterval(timer);
                loading.dismiss();
                // 打开下载下来的APP
                // this.fileOpener.open(apk, 'application/vnd.android.package-archive')
                //     .then(() => console.log('File is opened')).catch(err=>{
                //     console.log("打开apk")
                // })
            }).catch(err=>{
                console.log(err);
                if(timer)clearInterval(timer);
                loading.dismiss();
                this.loadingCtrl.create({spinner: 'hide',content: '出错了，请尝试从应用市场安装更新！', duration: 2000}).present();
            });
        }
        if (this.isIos()) {
            // this.openUrlByBrowser(APP_DOWNLOAD);
        }
    }
   formatDate(date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '-' + m + '-' + d;
    };
    /**
     * 是否真机环境
     * @return {boolean}
     */
    isMobile(): boolean {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    }

    /**
     * 是否android真机环境
     * @return {boolean}
     */
    isAndroid(): boolean {
        return this.isMobile() && this.platform.is('android');
    }

    /**
     * 是否ios真机环境
     * @return {boolean}
     */
    isIos(): boolean {
        return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
    }

    /**
     * 获得app版本号,如0.01
     * @description  对应/config.xml中version的值
     * @returns {Promise<string>}
     */
    getVersionNumber(): Promise<string> {
        return new Promise((resolve) => {
            this.appVersion.getVersionNumber().then((value: string) => {
                console.log(value)
                resolve(value);
            }).catch(err => {
                console.log('getVersionNumber:' + err);
            });
        });
    }
    //js判断是否是苹果设备
    checkIsAppleDevice() {
        var u = navigator.userAgent, app = navigator.appVersion;
        var ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        var iPad = u.indexOf('iPad') > -1;
        var iPhone = u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1;
        if (ios || iPad || iPhone) {
            return true;
        } else {
            return false;
        }
    }
    /**
     * 获取网络类型 如`unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
     */
    getNetworkType(): string {
        if (!this.isMobile()) {
            return 'wifi';
        }
        // return this.network.type;
    }

    /**
     * 判断是否有网络
     */
    isConnecting(): boolean {
        return this.getNetworkType() != 'none';
    }

//js判断是否为Android设备
    checkIsAndroidDevice(){
        var u = navigator.userAgent;
        if ( u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 ){
            return true;
            }else{
            return false;
        }
     }



// if (checkIsAppleDevice()) {
//     window.location.href = "https://itunes.apple.com/us/app/998dian-wan-cheng/id1135278767?mt=8";//跳转到AppStore或者Android应用市场
// } else {
//     window.location.href = "http://mbdownload.998dw.net/998dwcPackage/android/DWC_GW.apk";//打开apk
// }





//js判断终端访问

 checkIsTerminal(){
     var u = navigator.userAgent;

     let trident = u.indexOf('Trident') > -1;//IE内核

    let presto = u.indexOf('Presto') > -1;//opera内核

    let webkit = u.indexOf('AppleWebKit') > -1;//苹果。谷歌内核


     let gecko = u.indexOf('Gecko') > -1;//火狐内核

     let mobile= !!u.match(/AppleWebjit.*Mobile,*/);//移动终端

     let android = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;//Android终端

     let ios = !!u.match(/\(i[^;]( U;)? CPU.+Mac OS X/);//ios终端

     let iphone = u.indexOf('iPhone') > -1;//iPhone或者QQHD浏览器

     let  ipad = u.indexOf('iPad') > -1;//iPad

     let webapp = u.indexOf('Safari') == -1;//web应用程序没有头部与底部

     let  weixin = u.indexOf('MicroMessenger') > -1;//微信

     // let qq = u.match(/\sQQ/i) == "qq";//QQ

 }




//使用方法

    // if(browser.versions.trident){ alert("Is IE"); }//判断是否为IE内核
    //
    // if(browser.versions.webkit){ alert(Is Webkit); }//判断是否为webKit内核
    //
    // if(browser.versions.mobile || browser.versions.android || browser.versions.ios){ alert("移动端"); }//判断是否为移动端



//检测浏览器语音

    // currentLang = naviagtor.language;//判断除ie外其他浏览器使用语音
    //
    // if(!currentLang){//判断IE浏览器语音
    //
    //     currentLang = navigator.browserLanguage;
    //
    // }

// //ios调转
//     if (checkIsAppleDevice()) {
//         window.location.href = "https://itunes.apple.com/us/app/998dian-wan-cheng/id1135278767?mt=8";//跳转到AppStore
//     } else {
//         window.location.href = "http://mbdownload.998dw.net/998dwcPackage/android/DWC_GW.apk";//打开apk
//     }
// //ios调转
//     if (checkIsAppleDevice()) {
//         window.location.href = "https://itunes.apple.com/us/app/998dian-wan-cheng/id1135278767?mt=8";//跳转到AppStore
//     } else {
//         window.location.href = "http://mbdownload.998dw.net/998dwcPackage/android/DWC_GW.apk";//打开apk
//     }
//
//
//
//
//     if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
// //alert(navigator.userAgent);
//         window.location.href ="iPhone.html";
//     } else if (/(Android)/i.test(navigator.userAgent)) {
// //alert(navigator.userAgent);
//         window.location.href ="Android.html";
//     } else {
//         window.location.href ="pc.html";
//     }
//     //ios调转
//     if (checkIsAppleDevice()) {
//         window.location.href = "https://itunes.apple.com/us/app/998dian-wan-cheng/id1135278767?mt=8";//跳转到AppStore
//     } else {
//         window.location.href = "http://mbdownload.998dw.net/998dwcPackage/android/DWC_GW.apk";//打开apk
//     }
// //ios调转
//     if (checkIsAppleDevice()) {
//         window.location.href = "https://itunes.apple.com/us/app/998dian-wan-cheng/id1135278767?mt=8";//跳转到AppStore
//     } else {
//         window.location.href = "http://mbdownload.998dw.net/998dwcPackage/android/DWC_GW.apk";//打开apk
//     }





}
