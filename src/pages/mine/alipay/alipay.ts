import { Component } from '@angular/core';
import {ActionSheetController, Alert, AlertController, IonicPage, Loading, NavController} from 'ionic-angular';
import { MineService } from '../../../providers/user-service/mine-service';
import { ReqGetAliAcc,AckGetAliAcc} from '../../../providers/messages/mine-msg';
import {StorageService} from  '../../../providers/util-service/storage-service';
import {DeleteAlipay} from "../../../providers/messages/user-auth-msg";
import { CommonUtils} from  '../../../providers/common/commonUtils';
import { TranslateService } from 'ng2-translate';
import { NewpayInstance } from 'newpay-wallet-js';
@IonicPage()
@Component({
  selector: 'page-alipay',
  templateUrl: 'alipay.html'
})
export class MyAlipayPage {
  loading:Loading;
  alert:Alert;
  indexTags: Array<{name: string, account: string ,time:string}>;
  flag:number =0;
  mdeleteAlipay : DeleteAlipay = {account:'',name:''};
    translateObj: any;
    data:any;
  constructor(public navCtrl: NavController,
              public mineser:MineService,
              public actionSheetCtrl: ActionSheetController,
              private storageService:StorageService,
              public alertCtrl:AlertController,
              public commonUtils:CommonUtils,
              public translate:TranslateService) {
  //请求服务器
      this.translate.get('alipay').subscribe((res: any) => {
          this.translateObj = res;
      });
      NewpayInstance.getAccountBalances(localStorage.getItem("account")).then((resQ) => {
          this.commonUtils.HideLoading();
          console.log("res", resQ);
          this.data =resQ;
      }).catch((err) => {
          this.commonUtils.HideLoading();
          console.log(err);
      })
  }


  goBack(){
      this.navCtrl.parent.select(1);
  }
  goAlipayAddPage(){
    this.navCtrl.push("AlipayAddPage")
  }

   deleteAlipay(tag){

      this.mdeleteAlipay.account = tag.account;
      this.mdeleteAlipay.name = tag.name;
      this.showConfirm(tag)

    }
    showConfirm(tag) {
        this.alert= this.alertCtrl.create({
            title: '',
            message: this.translateObj.unbindWarning,
            enableBackdropDismiss:false,
            buttons: [
                {
                    text: this.translateObj.cancel,
                    handler: () => {
                        console.log('Disagree clicked');

                    }
                },
                {
                    text: this.translateObj.confirm,
                    handler: () => {
                    }
                }
            ]
        });
        this.alert.present();
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
        // if(this.modal){
        //     this.modal.dismiss();
        // }
    }
}

 