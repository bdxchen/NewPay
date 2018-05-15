import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams,Alert,Loading,Modal,ActionSheet,Events} from 'ionic-angular';
import { NewpayInstance } from 'newpay-wallet-js';
import { TranslateService } from 'ng2-translate';
import { CommonUtils} from '../../../../providers/common/commonUtils'
/**
 * Generated class for the SetMoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set-money',
  templateUrl: 'set-money.html',
})
export class SetMoneyPage {
    paramInfo:any;
  data:any;
  currency:string="";// 币种
    alert:Alert;
    modal:Modal;
    actionSheet:ActionSheet;
    loading:Loading
    flagMO:string;
    showBIZ:boolean;
    symbolT:string;
  bzMoney:any='';  //收款金额
  skreason:string=''; //收款理由
  showReason:boolean=false;
  translateObj: any;
    selectOptionsQT:any;
    ShowReasonflag:string;
  constructor(public navCtrl: NavController,
              private events: Events,
              private commonUtils:CommonUtils,
              public navParams: NavParams,public alertCtrl:AlertController, public translate:TranslateService) {
      this.translate.get('set_money').subscribe((res: any) => {
          this.translateObj = res;
      });
  }
  ReasonsCollection(){
   this.showReason= !this.showReason;
  }
  ionViewDidLoad() {
      this.selectOptionsQT = {
          title:  '',
          mode: 'ios'
      };
      console.log(this.currency)
      this.paramInfo =this.navParams.get('paramInfo');
      console.log(this.paramInfo);
      this.flagMO = this.navParams.get('flagMO');
      if(JSON.stringify(this.navParams.data.paramInfo) != "{}"){
              NewpayInstance.getAccountBalances(localStorage.getItem("account")).then((resQ) => {
                  this.commonUtils.HideLoading();
                  console.log("res", resQ);
                  this.currency ="aaaa"
                  this.data =resQ;
              }).catch((err) => {
                  this.commonUtils.HideLoading();
                  console.log(err);
              })
              // this.paramInfo=this.paramInfo;
              // // {Account:account,currency:'', money:this.navParams.data.money, reason:this.navParams.data.reason}
              // this.currency = this.paramInfo.currency;
              // this.skreason=   this.paramInfo.reason;
              // this.bzMoney = this.paramInfo.money;
          }
          console.log("BBBBB","BBBBBBB")
          this.showBIZ = true;
      if(this.skreason!=''){
          this.showReason=true;
      }

    console.log('ionViewDidLoad SetMoneyPage');
  }
  goBack(){
    this.navCtrl.pop();
  }
  setmoneyC(){  //确定按钮
    console.log(this.currency);
    if(this.currency==""){
        this.alertCommon(this.translateObj.warningInfo, this.translateObj.assetEmpty,);
        return false;
    }
    if(this.bzMoney==""){
        this.alertCommon(this.translateObj.warningInfo, this.translateObj.amountEmpty);
        return false;
    }else{
        if (isNaN(Number(this.bzMoney))) {
            this.alertCommon(this.translateObj.warningInfo, this.translateObj.inputEmpty);
            return false;
        }
    }

    console.log(this.bzMoney);
    console.log(this.skreason);
    let opts ={
        currency:this.currency,money:this.bzMoney,reason:this.skreason
    }
    this.navCtrl.pop().then(() => {
          console.log("set-money")
          // Trigger custom event and pass data to be send back
          this.events.publish('custom-user-events', opts);
      });
    // this.navCtrl.pop()
  }
  alertCommon(title,message){
      this.alert = this.alertCtrl.create({
          title: title,
          message: message,
          buttons: [
              {
                  text:  this.translateObj.confrim,
                  handler: () => {
                      console.log('Buy clicked');
                  }
              }
          ]
      });
      this.alert.present();
  }
    setmoneyJT(bzMoney){

      if(bzMoney!=""){
          this.bzMoney = bzMoney.toString();
          if(this.bzMoney>50000){
              this.bzMoney = 50000;
              return;
          }
          if(this.bzMoney.split(".")[0]==""){
              this.bzMoney = this.bzMoney.substring(0,0)
          }
          // this.submitOrder.amount = Math.floor(amount * 100) / 100;
          console.log(bzMoney)
          this.bzMoney = this.bzMoney.replace(/[^\d.]/g, "");  //清除“数字”和“.”以外的字符
          this.bzMoney = this.bzMoney.replace(/\.{2,}/g,""); //只保留第一个. 清除多余的
          if(this.bzMoney.indexOf(".")> -1 && this.bzMoney !="") {
              this.bzMoney=this.bzMoney.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
              this.bzMoney= this.bzMoney.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');//只能输入两个小数
          }
          if(this.bzMoney.indexOf(".")< 0 && this.bzMoney !=""){//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
              this.bzMoney = parseFloat(this.bzMoney);
          }
      }

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
