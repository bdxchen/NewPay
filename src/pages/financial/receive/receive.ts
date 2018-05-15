import {Component, ViewChild, ElementRef} from '@angular/core';
import {
    IonicPage, NavController, NavParams, ModalController, Events, Alert, Modal, ActionSheet,
    Loading, AlertController
} from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Clipboard } from '@ionic-native/clipboard';
import { MoneyMSG } from '../../../providers/messages/set-moneyB';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { CommonUtils } from  '../../../providers/common/commonUtils'
import { Buffer } from 'buffer';
import { TranslateService } from 'ng2-translate';
import { GalleryModal } from 'ionic-gallery-modal';
import  html2canvas from 'html2canvas';
import { SocialSharing } from '@ionic-native/social-sharing';
// declare const html2canvas: any;//声明
 /**
 * Generated class for the TopupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-receive',
  templateUrl: 'receive.html',
})
export class receivePage {
    alert:Alert;
    modal:Modal;
    actionSheet:ActionSheet;
    loading:Loading;
  setMoneyMSG:MoneyMSG;
     imageData:string;
     canvasImg:any;
     params:any;
  // assign a value anywhere in/below your constructor
  @ViewChild('container') container: ElementRef;
  myAngularxQrCode:string;
  saveImage:string;
  translateObj: any;
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private barcodeScanner:BarcodeScanner,
      private clipboard:Clipboard,
      private alertCtrl:AlertController,
      private photoLibrary: PhotoLibrary,
      private commonUtils:CommonUtils,
      public translate:TranslateService,
      private modalCtrl:ModalController,
      private events:Events,
      private socialSharing: SocialSharing,
  ) {
      //设置金额返回参数
      console.log("navParams",this.navParams.data);
      this.params =this.navParams.data;

      //二维码生成 地址 规则
      console.log("params",this.params);

      let account = localStorage.getItem('account')
      console.log(account)
      if(JSON.stringify(this.params) == "{}"){
          this.myAngularxQrCode=JSON.stringify({Account:account,currency:'',money:'',reason:''});
      }else{
          this.myAngularxQrCode=JSON.stringify({Account:account,currency:this.params.currency, money:this.params.money, reason:this.params.reason});
      }
      // console.log(new Buffer('YWRtaW4=','base64').toString());//解码
      console.log(new Buffer(this.myAngularxQrCode).toString('base64'));//编码
      this.myAngularxQrCode=new Buffer(this.myAngularxQrCode).toString('base64');
      // this.setMoneyMSG= this.navParams.data;
      console.log(new Buffer(this.myAngularxQrCode,'base64').toString());//解码
      this.translate.get('receive').subscribe((res: any) => {
          this.translateObj = res;
      });
  }
     alertCommon(title,subT){
         this.alert = this.alertCtrl.create({
             title: title,
             subTitle: subT,
             buttons: [
                 {
                     text: this.translateObj.ok,
                     handler: data => {

                     }
                 }
             ]
         });
         this.alert.present();
     }
    // public angularxQrCode: string = '';
    // assign a value anywhere in/below your constructor
    copyAdd(){ //地址拷贝
        // let QrImg = document.getElementById('QrcodeRec')
        // console.log(QrImg)
        // var canvas = QrImg.children[1];
        // this.saveImage = canvas.getAttribute('src');
        // console.log(this.saveImage );
        //要转换为图片的dom对象
        let  element = document.querySelector(".qrcode_receive");
        //要显示图片的img标签
        let image:any = document.querySelector('#img');
        //调用html2image方法
        html2canvas(element).then( canvas=> {
            // canvas.style.width = "";
            this.canvasImg = canvas.toDataURL("image/png");
            // console.log(this.canvasImg);
            this.photoLibrary.requestAuthorization().then(() => {
                this.photoLibrary.saveImage(this.canvasImg , 'NewPayQr', '').then((libraryItem)=>{
                    this.alertCommon('', this.translateObj.saveImgSucc);
                    // alert(JSON.stringify(libraryItem));
                    console.log(libraryItem.id);          // ID of the photo
                    console.log(libraryItem.photoURL);    // Cross-platform access to photo
                    console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
                    console.log(libraryItem.fileName);
                    console.log(libraryItem.width);
                    console.log(libraryItem.height);
                    console.log(libraryItem.creationDate);
                    console.log(libraryItem.latitude);
                    console.log(libraryItem.longitude);
                    console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
                });
            }).catch(err =>{
                console.log('permissions weren\'t granted')
                this.alertCommon('',this.translateObj.saveImgFail+','+err);
            } );
        });

    }
    setMoney(){
      this.navCtrl.push('SetMoneyPage')
    }
     ionViewWillEnter() {
      console.log('ionViewWillLoad receivePage');
         this.events.subscribe('custom-user-events', (paramsVar) => {
             // Do stuff with "paramsVar"
             console.log("receiveParamsVar",paramsVar);
             if(JSON.stringify(paramsVar) != "{}"){
                 this.params = paramsVar;
             }
             let account = localStorage.getItem('account')
             console.log(account)
             if(JSON.stringify(this.params) == "{}"){
                 this.myAngularxQrCode=JSON.stringify({Account:account,currency:'',money:'',reason:''});
             }else{
                 this.myAngularxQrCode=JSON.stringify({Account:account,currency:this.params.currency, money:this.params.money, reason:this.params.reason});
             }
             // console.log(new Buffer('YWRtaW4=','base64').toString());//解码
             console.log(new Buffer(this.myAngularxQrCode).toString('base64'));//编码
             this.myAngularxQrCode=new Buffer(this.myAngularxQrCode).toString('base64');
             // this.setMoneyMSG= this.navParams.data;
             console.log(new Buffer(this.myAngularxQrCode,'base64').toString());//解码
             this.translate.get('receive').subscribe((res: any) => {
                 this.translateObj = res;
             });
             this.events.unsubscribe('custom-user-events'); // unsubscribe this event
         })
    }
  requestReceive(){
    this.navCtrl.push("requestReceivePage")
    console.log('go requestReceivePage');
  }
  saveSettting(){
    this.navCtrl.push("requestSettingPage");
    console.log('go requestSettingPage');
  }
  goBack(){
     // this.navCtrl.pop();
      this.navCtrl.popToRoot();
  }
  testYY(){
      let  element = document.querySelector(".qrcode_receive");
      //要显示图片的img标签
      let image:any = document.querySelector('#img');
      //调用html2image方法
      html2canvas(element).then( canvas=> {
          // canvas.style.width = "";
          this.canvasImg = canvas.toDataURL("image/png");
          // console.log("AAAAAA",this.canvasImg);
          this.socialSharing.share("二维码", "我的二维码", this.canvasImg, "www.baidu.com").then(res=>{
              console.log(res);
          }).catch(err=>{
              console.log(err);
          })
      });
  }
  openQR(){
      debugger;
      //要转换为图片的dom对象
      let  element = document.querySelector(".qrcode_receive");
      //要显示图片的img标签
      let image:any = document.querySelector('#img');
      //调用html2image方法
      html2canvas(element).then( canvas=> {
          // canvas.style.width = "";
          this.canvasImg = canvas.toDataURL("image/png");
          // console.log("AAAAAA",this.canvasImg);
          this.modal = this.modalCtrl.create(GalleryModal, {
              photos: [{
                  url: this.canvasImg,
                  type: 'base64Image',
              }],
              initialSlide: 1
          });
          this.modal.present();
      });

      // 使用html2canvas插件，将数据源中的数据转换成画布。

      // let QrImg = document.getElementById('QrcodeRec')
      // console.log(QrImg)
      // var canvas = QrImg.children[1];
      // this.saveImage = canvas.getAttribute('src');
      // console.log(this.saveImage );

  }
     ionViewWillLeave(){
         if(this.alert){
             this.alert.dismiss();
         }
         if(this.loading){
             this.loading.dismiss();
         }
         if(this.actionSheet){
             this.actionSheet.dismiss();
         }
         if(this.modal){
             this.modal.dismiss();
         }
     }
}
