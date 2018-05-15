import { Component } from '@angular/core';
import {
    ActionSheet, Alert,
    AlertController, IonicPage, Loading, LoadingController, Modal, ModalController, NavController, NavParams,
    ToastController
} from 'ionic-angular';
import  { ModalPage } from '../../../modal/modal'
import { NewpayInstance } from 'newpay-wallet-js';
import { ReceiveData} from '../../../../providers/messages/account-pay-msg'
import {TransferService} from "../../../../providers/financial-service/account-transfer-service";
import { ReqSubmitTransInfo ,ReqCheckPayee,receiveData} from "../../../../providers/messages/account-transfer-msg";
import  { RecoveryImportService } from '../../../../providers/wallet/recovery-import-service';
import { CommonUtils} from "../../../../providers/common/commonUtils";
import { TranslateService } from 'ng2-translate';
import { SearchAccService }  from '../../../../providers/home/searchAcc-service';
import { PincodeController } from  'ionic2-pincode-input/dist/pincode'
/**
 * Generated class for the TopupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-request-receive',
  templateUrl: 'account-pay.html',
})
export class accountPayPage {
    tempObj:Array<ReqCheckPayee>;
    reqCheckPayee:any={asset_id:"",precision:"",coin_type:"",symbol:""};
    transferTime:string;
    reqsubmittransinfo: ReqSubmitTransInfo = {amount: 0, fee: 0, comment: "", coin_type: "",
    to_userid: "",
    coin_account: "",
    txid: ""};
    // this.textJson ='{"Account":"np12345","currency":"","money":"","reason":""}'
    receiveData:any={Account:'',currecy:'',money:'',remark:''}
    AccountTemp:any ="";
    flagB:boolean=false;
    conType:string;
    alert:Alert;
    loading:Loading;
    actionSheet:ActionSheet
    modal:Modal;
    remarkMemo:string="";
    selectOptionsQT:any;
    opts :Object;
    translateObj: any;
    flagC:number;
    resQ:any;
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private transfer: TransferService,
      public alertCtrl:AlertController,
      public toastCtrl:ToastController,
      public loadingCtrl:LoadingController,
      public modalCtrl:ModalController,
      public searchAcc:SearchAccService,
      public recoveryImportService:RecoveryImportService,
      public commonUtils:CommonUtils,
      public translate:TranslateService,public pincodeCtrl: PincodeController,
  ) {
      this.selectOptionsQT = {
          title:  '',
          mode: 'ios'
      };
      this.translate.get('account_pay').subscribe((res: any) => {
          this.translateObj = res;
      });

      let account = localStorage.getItem('account')

      // alert(this.navParams.get("barcodeData"));
      let  obj =JSON.parse(this.navParams.get("barcodeData"));
      console.log("obj",obj)
      // {"Account":"mo110202","currency":"YTS","money":10,"reason":""}
      this.receiveData.money =obj.money;
      console.log(this.receiveData.money);
      this.receiveData.Account =obj.Account;
      this.reqCheckPayee.symbol =obj.currency;
      console.log(this.receiveData.currecy);
      console.log(this.receiveData.Account);
      if(this.receiveData.currecy ==""){
       this.flagC=1;
      }else{
          this.flagC=2;
      }
  }

  ionViewDidLoad() {

      NewpayInstance.getAccountBalances(localStorage.getItem("account")).then((resQ) => {
          this.commonUtils.HideLoading();
          console.log("res", resQ);
          this.resQ =resQ
          // for(let i=0; i<resQ.length;i++){
          //     if(this.receiveData.currecy== resQ[i].symbol){
          //         this.reqCheckPayee =resQ[i];
          //     }
          // }

      }).catch((err) => {
          this.commonUtils.HideLoading();
          console.log(err);
      })

      }

  cancelPay(){
    this.navCtrl.push("HomePage")
  }
  goTransfer(){
      if(this.conType==""){
          this.showPopup('', this.translateObj.chooseAsset)
          return;
      }
      console.log(this.receiveData.money)
      //验证账户有效性
      if(this.receiveData.money===""){
          this.showPopup("",this.translateObj.emptyMoney);
          return;
      }
      if(Number(this.receiveData.money)===0){
          this.showPopup("",this.translateObj.isNoZero);
          return;
      }
      let pinCode =  this.pincodeCtrl.create({
          title:'输入密码'
      });

      pinCode.present();
      pinCode.onDidDismiss( (code,status) => {
          if (NewpayInstance.validatePassword(code)) {
              //密码查询 查询后的密码正确的话， 那么进行 转账处理。
              let accountname = localStorage.getItem('account');
              NewpayInstance.getAccountBalances(localStorage.getItem("account")).then((resQ) => {
                  this.commonUtils.HideLoading();
                  console.log("res", resQ);
                  this.resQ =resQ
                  for(let i=0; i<resQ.length;i++){
                      if(this.reqCheckPayee.symbol== resQ[i].symbol){
                          this.reqCheckPayee =resQ[i];
                      }
                  }

              }).catch((err) => {
                  this.commonUtils.HideLoading();
                  console.log(err);
              })
              this.commonUtils.showLoading();
              NewpayInstance.transfer(
                  accountname,
                  this.receiveData.Account,
                  Number(this.receiveData.money) * Math.pow(10, this.reqCheckPayee.precision),
                  this.reqCheckPayee.asset_id,
                  this.remarkMemo
              ).then((result) => {
                  this.commonUtils.HideLoading();
                  debugger
                  console.log(result);
                  //转账成功。生成时间戳 获取当前时间
                  this.transferTime = this.getRangeDate();
                  console.log("txid", result.txid);
                  //如果转账成功以后，那么去中心化提交 转账信息。

                  this.reqsubmittransinfo.txid = result.txid;//txid
                  //如果转账成功以后，那么去中心化提交 转账信息。

                  this.navCtrl.push("TransferreceiptPage", {
                      flag: '4', reqsubmittransinfo: this.reqsubmittransinfo,
                      transferTime: this.transferTime
                  });
              }).catch(error => {
                  this.commonUtils.HideLoading();
                  console.log("[AccountActions.js:90] ----- transfer error ----->", error);
                  if (error == "connection closed") {
                      this.commonUtils.showToast("网络连接失败,请重试!");
                      return;
                  }else{
                      this.showPopup("提示", this.translateObj.transferFail);
                  }
                  // this.showPopup(this.translateObj.warning, error.message)


              })
          }else{
              this.commonUtils.alertCommon("提示","密码错误,请重新输入.")
          }
      })
  }

    getRangeDate() {

        const formatDate = ( time: any ) => {
            // 格式化日期，获取今天的日期
            const Dates = new Date( time );
            const year: number = Dates.getFullYear();
            const month: any = ( Dates.getMonth() + 1 ) < 10 ? '0' + ( Dates.getMonth() + 1 ) : ( Dates.getMonth() + 1 );
            const day: any = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
            return year + '-' + month + '-' + day;
        };
        const now = formatDate( new Date().getTime() ); // 当前时间
        return now;
    }
    presentLoading() {
        this.loading = this.loadingCtrl.create({
            content: this.translateObj.transfering,
            duration: 1000
        });
        this.loading.present();
    }
    goBack(){
     this.navCtrl.pop();
    }

    showPopup(title, text) {
        this.alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
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
    accPayValid(amount){
        console.log(amount);
        this.receiveData.money = amount.toString();
        if(amount>50000){
            this.receiveData.money="50000";
        }
        console.log(amount)
        if(this.receiveData.money.split(".")[0]==""){
            this.receiveData.money = this.receiveData.money.substring(0,0)
        }
        this.receiveData.money =this.receiveData.money.replace(/[^\d.]/g, "");  //清除“数字”和“.”以外的字符
        this.receiveData.money= this.receiveData.money.replace(/\.{2,}/g,"."); //只保留第一个. 清除多余的
        if(this.receiveData.money.indexOf(".")> -1 && this.receiveData.money !="") {
                        this.receiveData.money =this.receiveData.money.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
            this.receiveData.money = this.receiveData.money.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');//只能输入两个小数
        }
        if(this.receiveData.money.indexOf(".")< 0 && this.receiveData.money !=""){//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
            this.receiveData.money = parseFloat(this.receiveData.money);
        }


    }
    accountPvalid(remarks){
        if(remarks.length>25){
            //截取前10个字符
            console.log(remarks.length)
            this.remarkMemo = remarks.substring(0,25);
            return;
        }
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
