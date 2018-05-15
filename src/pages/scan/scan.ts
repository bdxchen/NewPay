import { Component, OnInit } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController, Events, AlertController, Alert} from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import {CommonUtils} from '../../providers/common/commonUtils'
import { Buffer } from 'buffer';
import { TranslateModule,TranslateService} from 'ng2-translate';
import { NativeService } from '../../providers/updateApp/NativeService'
/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {
  protected light: boolean = false;
  protected frontCamera: boolean = false;
    translateObj:any;
    alert:Alert;
    animate:any;
  constructor(
    public navCtrl: NavController,
    public commonUtils:CommonUtils,
    private translate:TranslateService,
    public navParams: NavParams,
    private nativeService:NativeService,
    private qrScanner: QRScanner,
    public viewCtrl: ViewController,
    private event: Events,
    private alertCtrl:AlertController
  ) {
      if(this.nativeService.isIos()){
          this.animate = false;
      }else{
          this.animate = true;
      }
      translate.get('home').subscribe((res: string) => {
          this.translateObj = res;
      });
  }
  ionViewDidEnter(){
        //页面可见时才执行
        this.showCamera();
        this.ngOnInitDid();
  }


ngOnInitDid() {
      // let text = "eyJBY2NvdW50IjoibnAxODgxMTQ0NDc1NiIsImN1cnJlbmN5IjoiYml0Q05ZIiwibW9uZXkiOiIxMCIsInJlYXNvbiI6IueMqiJ9"
      //  let text='eyJBY2NvdW50Ijoid3AzMzQ0IiwiY3VycmVuY3kiOiJZVFNVU0QiLCJtb25leSI6MywicmVhc29uIjoiIn0='
      // console.log(new Buffer(text,'base64').toString());//解码
      // let QQ =  new Buffer(text,'base64').toString();
      // console.log(this.isContains(QQ,'Account'))
      // if(this.isContains(QQ,'Account') && this.isContains(QQ,'currency') && this.isContains(QQ,'money')){
      //     // alert("正确")
      //     // this.qrScanner.hide(); // hide camera preview
      //     // scanSub.unsubscribe(); // stop scanning
      //     this.navCtrl.push('accountPayPage',{barcodeData:QQ});
      //
      // }else {
      //      this.commonUtils.alertCommon( this.translateObj.warning, this.translateObj.scanErr);
      //      this.navCtrl.pop();
      // }
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        console.log(status)
        if (status.authorized) {
          // camera permission was granted
          window.document.querySelector('body').classList.add('transparent-body');
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
                  // "eyJBY2NvdW50IjoibnAxODgxMTQ0NDc1NiIsImN1cnJlbmN5IjoiYml0Q05ZIiwibW9uZXkiOiIxMCIsInJlYXNvbiI6IueMqiJ9"
                  //  let text='eyJBY2NvdW50IjoibW8xMTAyMDIiLCJjdXJyZW5jeSI6IllUUyIsIm1vbmV5IjoxMCwicmVhc29uIjoiIn0'
                   console.log(new Buffer(text,'base64').toString());//解码
                   let QQ =  new Buffer(text,'base64').toString();
                   console.log(this.isContains(QQ,'Account'))
                   if(this.isContains(QQ,'Account') && this.isContains(QQ,'currency') && this.isContains(QQ,'money')){
                       // alert("正确")
                       this.qrScanner.hide(); // hide camera preview
                       scanSub.unsubscribe(); // stop scanning
                       if(JSON.parse(QQ).Account === localStorage.getItem("account")){
                           this.showPopup(this.translateObj.warning,this.translateObj.scanSelf);
                           return;
                       }else{
                           this.navCtrl.push('accountPayPage',{barcodeData:QQ});
                       }

                   }else {
                       this.showPopup(this.translateObj.warning,this.translateObj.scanErr);
                   }


          });
          // show camera preview
          this.qrScanner.show();

          // wait for user to scan something, then the observable callback will be called
        } else if (status.denied) {
            // this.qrScanner.openSettings();
            this.commonUtils.alertCommon( this.translateObj.warning, '调用扫码权限失败')
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
            // permission was denied, but not permanently. You can ask for permission again at a later time.
            // this.commonUtils.alertCommon( this.translateObj.warning, '调用扫码权限失败');
            // this.navCtrl.pop();
            this.qrScanner.openSettings();
        }
      })
      .catch((e: any) =>
      {   console.log('Error is', e);
          this.showPopup(this.translateObj.warning,this.translateObj.scanfail);
      });
  }
    showPopup(title, text) {
       this.alert = this.alertCtrl.create({
            cssClass:'projectList',
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: this.translateObj.confrim,
                    handler: data => {
                        this.navCtrl.pop();
                        // this.navCtrl.push('accountPayPage',{barcodeData:'{"Account":"npqp18811444000","currency":"","money":"","reason":""}'});
                    }
                }
            ]
        });
        this.alert.present();
    }
    isContains(str, substr) {
        return str.indexOf(substr) >= 0;
    }
  public dismiss(): void {
      console.log("关闭二维码扫码")
    // this.viewCtrl.dismiss();
      this.navCtrl.pop({animate:this.animate});
  }
  toggleLight() {
      console.log(this.light)
    this.light = !this.light;
    if (this.light) {
        this.qrScanner.enableLight();
    } else {
        this.qrScanner.disableLight();
    }
  }
  toggleCamera() {
      console.log(this.frontCamera)
    this.frontCamera = !this.frontCamera;
    if (this.frontCamera) {
        this.qrScanner.useFrontCamera();
    } else {
        this.qrScanner.useBackCamera();
    }
  }

    showCamera() {
        (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
    }
    hideCamera() {
        this.qrScanner.hide();//需要关闭扫描，否则相机一直开着
        // (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
    }


    ionViewWillEnter() {
        let elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map((key) => {
                elements[key].style.display = 'none';
            });
        }
    }
    ionViewWillLeave() {
      this.hideCamera();
        let elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map((key) => {
                elements[key].style.display = 'flex';
            });
        }
    }
}
