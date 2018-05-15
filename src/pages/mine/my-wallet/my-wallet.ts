import { Component } from '@angular/core';
import {
    Alert, IonicPage, Loading, Modal, ModalController, NavController, NavParams,
    ToastController
} from 'ionic-angular';
import { ModalPage } from  '../../modal/modal';
import { NewpayInstance } from 'newpay-wallet-js';
import 'rxjs/add/operator/toPromise';
import {RecoveryImportService} from '../../../providers/wallet/recovery-import-service';
import { TranslateService } from 'ng2-translate';
/**
 * Generated class for the MyWalletPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-wallet',
  templateUrl: 'my-wallet.html',
})
export class MyWalletPage {
    opts :Object;
    alert:Alert;
    modal:Modal;
    loading:Loading;
    data: Array<{amount:string,asset_id:string,precision:string,symbol:string}> = [];
    translateObj: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl:ToastController,
              public modalCtrl:ModalController,
              public recoveryImportService:RecoveryImportService,
              public translate:TranslateService) {
      this.translate.get('my_wallet').subscribe((res: any) => {
          this.translateObj = res;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyWalletPage');
      // let  showList=JSON.parse(localStorage.getItem('showList'));
      //
      // if(showList.length!=0){
      //     this.data =showList;
      //     }

  }
    goBack(){
        this.navCtrl.parent.select(1);
    }
    beifenMS(){
        this.navCtrl.push('BackupsKeyPage', {brainKey: NewpayInstance.exportBrainKey()})

    }
    huifuDR(){
      localStorage.setItem('flag','2')
      this.navCtrl.push('RecoveryImportPage')
    }
    ionViewWillLeave(){
        if(this.alert){
            this.alert.dismiss();
        }
        if(this.loading){
            this.loading.dismiss();
        }
        // if(this.actionSheet){
        //     this.actionSheet.dismiss();
        // }
        if(this.modal){
            this.modal.dismiss();
        }
    }

}
