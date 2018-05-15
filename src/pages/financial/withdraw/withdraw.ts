import { Component } from '@angular/core';
import {ActionSheet, Alert, IonicPage, Loading, Modal, NavController, NavParams, ToastController} from 'ionic-angular';
import {  ActionSheetController } from 'ionic-angular';
import {  ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import {BankModalPage} from  '../../bank-modal/bank-modal';
import { ModalPage } from '../../modal/modal';
import { WithdrawbaModel } from '../../../providers/messages/account-withdraw-msg';

import {DigitalCurrency, Withdrawal} from "../../../providers/messages/account-transfer-msg";
import {TransferService} from "../../../providers/financial-service/account-transfer-service";
import {Searchd} from "../../../providers/messages/account-transfer-msg";
import { bankModel } from '../../../providers/messages/bankModel'
import {BankModelProvider } from  '../../../providers/bank-model/bank-model';
import { WithdrawService } from '../../../providers/financial-service/account-withdraw-service';

import {NewpayInstance} from 'newpay-wallet-js';
import  { RecoveryImportService } from '../../../providers/wallet/recovery-import-service';
import {StorageService} from  '../../../providers/util-service/storage-service';
import {CommonUtils } from '../../../providers/common/commonUtils'
import { TranslateService } from 'ng2-translate';
import {FeelActionrateService} from  '../../../providers/feelActionrate/feel-actionrate-service'
/**
 * Generated class for the TopupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-withdraw',
  templateUrl: 'withdraw.html',
})
export class WithdrawPage {
    alert:Alert;
    modal:Modal;
    actionSheet:ActionSheet;
    loading:Loading;
    opts:object;
    remarks:string='';
    account:string="";
    feel:any=0;
    transferTime:string;
    feelrequest:any;
    accountName:string;
    coin_account:string;//BA 账号
    money:any ="";
    feelrate:any;
    financial_account_type:string;
    Lzjaccount:string;
    bankData:bankModel={account:'',name:'',bankname:'',branchName:''};
  currency: Searchd={amount:0,asset_id:'',precision:0,symbol:''};
  balance : string ="200.00";
  withdrawInfo: any = {};
  withdrawbaModel:any={ channelType:'',account_no:'',accountName:'' ,accountAlias:'',amount:'',coin_type:'',comment:''};
    // "channelType":"2", //类型 1微信 2支付 3银行卡
    // "account_no":"12313",   //账号
    // "accountName":"accountAlias",   // 名字
    // "accountAlias":"fcc@alipay.com", //别名渠道 比如银行ICBC
    // "amount":"1.00",    //提现金额
    // "coin_type":"BitCNY", //数字货币类型
    // "comment":"还款"

    digitalCurrency: DigitalCurrency = {coin_type:''};
  withdraw: any = {txid:'',orderNo:"",payStatus:'',fromaddress:''};
  createSuccess = false;
    translateObj: any;
    precision:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController,
              public modalCtrl:  ModalController,
              public alertCtrl: AlertController,
              private transfer: TransferService,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public bankModelservice:BankModelProvider,
              public withdrawService:WithdrawService,
              public recoveryImportService:RecoveryImportService,
              public storageService:StorageService,
              public commonUtils:CommonUtils,
              public translate:TranslateService,
              private feelService:FeelActionrateService
                ) {
    this.currency = navParams.get("currency");
    console.log("currency:", this.currency);
    this.digitalCurrency.coin_type = this.currency.symbol
      this.precision =this.currency.precision;
    // this.getDigitalCurrency();
      this.translate.get('withdraw').subscribe((res: any) => {
          this.translateObj = res;
          console.log(res)
      });
  }

  ionViewDidLoad() {

    this.Lzjaccount =this.storageService.read('userid') ;
    console.log('ionViewDidLoad withdrawPage');
      this.feelrequest =  {
          "coinid":this.digitalCurrency.coin_type,//币种类型
          "actiontype":"4" //类型1 topupcoin 2topup 3withdrawcoin 4 withdraw
      }

      this.feelService.getActionrate(this.feelrequest).then((res)=>{
          console.log(res)
          if(res.ret_code =='1'){
              this.feelrate =res;
          }else{
              this.feelrate =res;
              this.commonUtils.alertCommon('',res.ret_msg);
              return;
          }
          // console.log("fell",res.minfee);
      },error => {
          this.commonUtils.alertCommon('','网络连接错误，请稍后重试！')
      })

      // this.commonUtils.showLoading();
      // this.bankModelservice.getbankM().then((res) => {
      //     this.commonUtils.HideLoading();
      //     console.log(res);
      //     if(res.data){
      //         debugger
      //         this.bankData = res.data[0];
      //         console.log(this.bankData.account.substr(this.bankData.account.length-4));
      //         this.account =   this.bankData.account.substr(this.bankData.account.length-4)
      //     }else{
      //
      //     }
      //
      // },(err)=>{
      //     this.commonUtils.HideLoading();
      // })
      this.bankModelservice.getThirdpart().then((res)=>{
          console.log(res);
          if(res.data){
              if(res.data.length>0){
                  debugger
                  this.bankData = res.data[0];
                  this.account =   this.bankData.account;
              }

          }

      })
  }


  optionBank(){
     let madal =   this.modalCtrl.create(BankModalPage);
        madal.onDidDismiss((data,role) => {
            console.log(data);
            console.log(role)
            if( role=='2'){
                this.financial_account_type ='2'// 支付宝
                if(data){
                    this.bankData=data;
                    console.log(data);
                    this.accountName=data.name;
                    this.account = data.account;
                }

            }else if( role=='3'){
                this.financial_account_type ='3';//银行卡
                if(data){
                    this.bankData=data;
                    this.account = data.account.substr(data.account.length-4);
                }
            }



        });
     madal.present();
    }
  goBack(){
    this.navCtrl.pop();
    }
  choosebindAccount(){
    console.log('goto goComfirmPassword');
  }

  chooseWithdrawAccount(){
    console.log('goto goComfirmPassword');
  }


  goComfirmPassword(amount){
   //密码正确进行 提现操作
      let account ='';
      let orderNo= '';
      console.log(this.money);
      console.log(this.remarks);
      //金额加手续费 大于 余额 不能进行提现操作
      if(this.money+Number( this.feel) >Number(this.currency.amount) ){
          //余额不足，不能实现提现操作！
          this.alertCommon(this.translateObj.warning, this.translateObj.balanceNotEnough)
          return false;
      }
      if(this.money===""){
          this.alertCommon(this.translateObj.warning, this.translateObj.ifnull)
          return false;
      }
      /*if(this.money===0){
          this.alertCommon(this.translateObj.warning, this.translateObj.isNoZero)
          return false;
      }*/
      if(Number(this.money)<100){
          this.alertCommon(this.translateObj.warning, this.translateObj.balanceMin)
          return false;
      }
      if(Number(this.money)>50000){
          this.alertCommon(this.translateObj.warning, this.translateObj.balanceMax)
          return false;
      }
      if(this.account==""){
          this.alertCommon(this.translateObj.warning, this.translateObj.pushZFB)
          return false;
      }

      this.openModel();
  }
    Generatingrder(){
        console.log(this.coin_account)
        this.withdrawbaModel.coin_type = this.currency.symbol;
        this.withdrawbaModel.amount=this.money;
        this.withdrawbaModel.comment=this.remarks;
        this.withdrawbaModel.accountAlias='';
        this.withdrawbaModel.channelType='2';
        this.withdrawbaModel.accountName=this.bankData.name;
        this.withdrawbaModel.account_no=this.account;
        this.withdrawService.getwithdrawBa(this.withdrawbaModel).then((res)=>{
            console.log(res.success)
            if(res.ret_code=='1'){

                this.coin_account =  res.account;
                let orderNo =res.orderNo;
               this.transferW(orderNo);
                return;
            }else{
                console.log(res)
                this.commonUtils.HideLoading();
                this.commonUtils.alertCommon('提示',res.ret_msg);
                return;
            }
        }).catch((err)=>{
            this.commonUtils.HideLoading();
            console.log(err)
            return
        })
    }
    transferW(orderNo){
        let accountname  = localStorage.getItem("account")
        console.log("accountname",accountname)
        console.log("account",this.coin_account)
        console.log("money",this.money)
        console.log("asset_id",this.currency.asset_id)
        console.log("this.remarks",this.remarks)
        //密码输入正确 后，生成订单

        NewpayInstance.transfer(
            accountname,
            this.coin_account,
            Number(this.money)  * Math.pow(10, this.currency.precision),
            this.currency.asset_id,
            this.remarks
        ).then((result) => {
            debugger
            //转账成功。生成时间戳 获取当前时间

            this.transferTime = this.getRangeDate();
            console.log(this.transferTime);
            console.log("txid", result);
            //如果转账成功以后，那么去中心化提交 转账信息。
            // 密码输入正确的时候，请求提现

            this.withdraw.fee=result.fee.amount/Math.pow(10, this.currency.precision);//手续费
            this.withdraw.orderNo=orderNo; //
            this.withdraw.payStatus=true;
            this.withdraw.txid=result.txid;
            this.withdraw.fromaddress =localStorage.getItem("account");
            this.transfer.withdrawal(this.withdraw).then(success => {
                    this.commonUtils.HideLoading();
                    if (success.ret_code=="1") {
                        this.navCtrl.push("TransferreceiptPage", {
                            reqsubmittransinfo: this.withdrawbaModel,
                            transferTime: this.transferTime,
                            flag:'3'
                        });
                    } else {
                        this.showPopup("Error", this.translateObj.withdrawErr);
                    }
                },
                error => {
                    this.commonUtils.HideLoading();
                    this.showPopup("Error", error);
                });
        }).catch(error => {
            this.commonUtils.HideLoading();
            if(error =="connection closed"){
                this.commonUtils.showToast("网络连接失败,请重试!");
                return;
            }else{
                this.withdraw.fee='0';//手续费
                this.withdraw.orderNo=orderNo; //
                this.withdraw.payStatus=false;
                this.withdraw.txid='';
                this.withdraw.fromaddress=localStorage.getItem("account");

                this.transfer.withdrawal(this.withdraw).then(success => {
                        if (success.ret_code=="1") {

                        }else {
                            // this.showPopup("Error", this.translateObj.withdrawErr);
                        }
                    },
                    error => {
                        this.showPopup(this.translateObj.warning, '提现失败!')
                    }).catch(err=>{

                });
                console.log("[AccountActions.js:90] ----- transfer error ----->", error);
            }

            //弹出错误信息
        })
    }
  openModel(){
      this.modal = this.modalCtrl.create(ModalPage);
      this.modal.onDidDismiss(data => {
          if(data.flag ==='forgot'){
              this.navCtrl.push('ResetZJpsdPage');
          }else {
              if (data.pwd) {
                  console.log(data);
                  //密码查询 查询后的密码正确的话， 那么进行 转账处理。
                  debugger
                  this.commonUtils.showLoading();
                  this.recoveryImportService.recImport(data.pwd).then((res) => {
                      console.log(res)
                      if (res.ret_code == "1") { //密码正确
                          debugger
                          this.Generatingrder();

                      } else if (res.ret_code == "0") {
                          this.commonUtils.HideLoading();
                          const toast = this.toastCtrl.create({
                              message: this.translateObj.passwordWrong,
                              duration: 2000,
                              position: 'bottom'
                          });

                          toast.onDidDismiss(() => {
                              console.log('Dismissed toast');
                          });

                          toast.present();
                      } else {
                          this.commonUtils.HideLoading();
                      }


                  }, (err) => {
                      console.log(err);
                      this.commonUtils.HideLoading();
                  });


              }
          }
      })
      this.modal.present();
  }

    showPopup(title, text) {
        this.alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: this.translateObj.confirm,
                    handler: data => {

                    }
                }
            ]
        });
        this.alert.present();
    }


    getRangeDate() {

        const formatDate = ( time: any ) => {
            // 格式化日期，获取今天的日期
            const Dates = new Date( time );
            const year: number = Dates.getFullYear();
            const month: any = ( Dates.getMonth() + 1 ) < 10 ? '0' + ( Dates.getMonth() + 1 ) : ( Dates.getMonth() + 1 );
            const day: any = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
            var hours = Dates.getHours()<10? '0' + Dates.getHours() : Dates.getHours();
            var mins = Dates.getMinutes()<10? '0' + Dates.getHours() : Dates.getHours();
            return year + '-' + month + '-' + day+' '+ hours+":"+mins;
        };
        const now = formatDate( new Date().getTime() ); // 当前时间
        return now;
    }
    getDigitalCurrency(){
        // this.commonUtils.showLoading();
        // this.transfer.digitalCurrency(this.digitalCurrency).subscribe(success => {
        //         // this.commonUtils.HideLoading();
        //         if (success !=null) {
        //             this.createSuccess = true;
        //         }
        //     },
        //     error => {
        //         this.showPopup("Error", error);
        //     });


    }
    presentLoading() {
        this.loading = this.loadingCtrl.create({
            content: this.translateObj.transfering,
        });
        this.loading.present();
    }
    hidePresentLoading(){
        this.loading.dismiss();
    }
    alertCommon(title,subT){
        this.alert = this.alertCtrl.create({
            title: title,
            subTitle: subT,
            buttons: [this.translateObj.confirm]
        });
        this.alert.present();
    }
    tofix(money){
        console.log(money.toString());
        this.money = money.toString()
        if(this.money.split(".")[0]==""){
            this.money = this.money.substring(0,0)
        }
        this.money =  this.money.replace(/[^\d.]/g, "");  //清除“数字”和“.”以外的字符
        if( this.money.indexOf(".")> -1 && this.money  !="") {

            this.money =  this.money.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
            // this.money = this.money.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
            // this.money=  this.money.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');//只能输入两个小数
            var newstr;
            if(this.money.indexOf(".")!=-1){
                var pos = this.money.indexOf(".");
                newstr = this.money.substring(pos+1);
                var yong = this.money.substring(0,pos+1);
                newstr = newstr.replace(/[^0-9]/ig,"");
                if(this.precision==""){
                    this.precision=2;
                }
                if(newstr.length>=this.precision+1){
                    newstr = newstr.substring(0,(newstr.length-1));
                }
                this.money = yong + newstr;
            }else{
                this.money = this.money.replace(/[^0-9\.]/ig,"");
            }
        }
        if( this.money.indexOf(".")< 0 &&  this.money !=""){//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
            this.money = parseFloat( this.money);

        }
        // this.money = Math.floor(money * 100) / 100;
        if(money>50000){
            this.money =50000;
            this.feel =50000*this.feelrate.normalrate;
        }

    }
    changAmount(e) {
        console.log(e)
        e =  e.replace(/[^\d.]/g, "");
        var re = /^[0-9]+.?[0-9]*$/;   //判断字符串是否为数字     //判断正整数 /^[1-9]+[0-9]*]*$/
        if(e==""){
            this.feel =0;
        }
        if (!re.test(e)) {
            // alert("请输入数字");
            return false;
        }else {
            console.log(this.feelrate);
            if (this.feelrate.ret_code == '0') {
                this.feel = 0;
            } else {
                // 手续费分 最大 和最小 值，  当超出指定范围 按最大最小值算
                if (e * this.feelrate.normalrate < this.feelrate.minfee) {
                    this.feel = this.feelrate.minfee;
                } else if (e * this.feelrate.normalrate > this.feelrate.maxfee) {
                    this.feel = this.feelrate.maxfee;
                } else {
                    this.feel = e * this.feelrate.normalrate;
                }
            }


            this.feel = this.feel.toFixed(2);
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
