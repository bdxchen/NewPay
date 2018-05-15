import { Component } from '@angular/core';
import {ActionSheet, Alert, IonicPage, Loading, Modal, NavController, NavParams} from 'ionic-angular';
import {ReqSubmitTransInfo,ReqCheckPayee} from "../../../providers/messages/account-transfer-msg";
import { TranslateService } from 'ng2-translate';
/**
 * Generated class for the TransferreceiptPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transferreceipt',
  templateUrl: 'transferreceipt.html',
})
export class TransferreceiptPage {
    alert:Alert;
    modal:Modal;
    actionSheet:ActionSheet;
    loading:Loading;
    transferTime:string;
    flag:string;
    title:string;
    reqsubmittransinfo: any = {amount: '', fee: '', comment: "", coin_type: "",
        to_userid: localStorage.getItem('account'),
        coin_account:"",
        txid: ""};
	currency : string;
	account : string;
	amount : string;
    translateObj: any;
    backImg:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public translate:TranslateService) {
  	this.reqsubmittransinfo = navParams.get("reqsubmittransinfo");
  	this.transferTime = navParams.get('transferTime')
  	console.log(this.reqsubmittransinfo)
     this.flag = navParams.get('flag') //1 充值 2 转账 3 提现
      
      this.translate.get('transferreceipt').subscribe((res: any) => {
          this.translateObj = res;
          // "transferCoinInfo": "提币信息",
          //     "transferInfo": "转账信息",
          //     "getCashInfo": "提现信息",
          //     "payInfo": "支付信息"
          debugger
          if(this.flag=='1'){
              this.title= this.translateObj.transferCoinInfo;
              this.backImg = 'skfinish.png'
          }else if(this.flag=='2'){
              this.title= this.translateObj.transferInfo;
              this.backImg = 'skfinish.png'
          }else if(this.flag =='3'){
              this.title= this.translateObj.payInfo;
              this.backImg = 'zffinish.png'
          }else if(this.flag =='4'){
              this.title= this.translateObj.transferInfo;
              this.backImg = 'zffinish.png'
          }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferreceiptPage');
  }
  backBal(){
  	// this.navCtrl.push("BalanceDetailPage", { });
      this.navCtrl.parent.select(0);
  }
  goBack(){
      this.navCtrl.pop();
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
