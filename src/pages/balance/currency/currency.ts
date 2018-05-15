import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Clipboard } from '@ionic-native/clipboard';
import { MoneyMSG } from '../../../providers/messages/set-moneyB';
import { TranslateService } from 'ng2-translate';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { CommonUtils } from  '../../../providers/common/commonUtils';
import { Buffer } from 'buffer';
import { GalleryModal } from 'ionic-gallery-modal';
/**
 * Generated class for the CurrencyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-currency',
  templateUrl: 'currency.html',
})
export class CurrencyPage {
    currency:any;
    saveImage:string;
    setMoneyMSG:MoneyMSG;
    myAngularxQrCode:string;
    translateObj: any;
    NewCu:any;
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private barcodeScanner:BarcodeScanner,
        private clipboard:Clipboard,
        public translate:TranslateService,
        private photoLibrary: PhotoLibrary,
        private commonUtils:CommonUtils,
        private modalCtr:ModalController
    ) {

        //设置金额返回参数
        console.log(this.navParams.data);
        this.currency = this.navParams.get("currency");
        console.log(this.currency)
        debugger
            if(this.navParams.get("flag") == 1){
                this.myAngularxQrCode=JSON.stringify({Account:localStorage.getItem('account'),currency:this.currency.symbol,money:'',reason:''});
            }else if(this.navParams.get("flag") == 2){
                this.myAngularxQrCode=JSON.stringify({Account:localStorage.getItem('account'),currency:this.currency, money:this.navParams.data.money, reason:this.navParams.data.reason});
                this.NewCu ={money:this.navParams.data.money,reason:this.navParams.data.reason}
            }
            console.log(this.myAngularxQrCode);
            console.log(new Buffer(this.myAngularxQrCode).toString('base64'));//编码
            this.myAngularxQrCode=new Buffer(this.myAngularxQrCode).toString('base64');
            // this.setMoneyMSG= this.navParams.data;
            console.log(new Buffer(this.myAngularxQrCode,'base64').toString());//解码
        this.translate.get('login').subscribe((res: any) => {
            this.translateObj = res;
        });
      }
        //二维码生成 地址 规则
        // this.setMoneyMSG= this.navParams.data;

    // public angularxQrCode: string = '';
    // assign a value anywhere in/below your constructor

    copyAdd(){ //地址拷贝

        let QrImg = document.getElementById('QrcodeRecC')
        console.log(QrImg)
        var canvas = QrImg.children[1];
        this.saveImage = canvas.getAttribute('src');
        console.log(this.saveImage );
        this.photoLibrary.requestAuthorization().then(() => {
            this.photoLibrary.saveImage(this.saveImage , 'NewPayQr', '').then((libraryItem)=>{
                this.commonUtils.alertCommon('','图片保存成功！');
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
            this.commonUtils.alertCommon('','保存图片失败,'+err);
        } );
    }
    setMoney(){
        if(this.navParams.get("flag") == 1){
            this.navCtrl.push('SetCuMoneyPage',{currency:this.currency,flag:1})
        }else if(this.navParams.get("flag") == 2){
            this.navCtrl.push('SetCuMoneyPage',{currency:this.NewCu,flag:2})
        }

    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad receivePage');
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
        this.navCtrl.pop();
    }
    openQR(){
        let QrImg = document.getElementById('QrcodeRecC')
        console.log(QrImg)
        var canvas = QrImg.children[1];
        this.saveImage = canvas.getAttribute('src');
        console.log(this.saveImage );
        let modal = this.modalCtr.create(GalleryModal, {
            photos: [{
                url: this.saveImage,
                type: 'base64Image',
            }],
            initialSlide: 1
        });
        modal.present();
    }
}
