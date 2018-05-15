import { Component } from '@angular/core';
import {
    AlertController,
    IonicPage, LoadingController, ModalController, NavController, NavParams,
    ToastController,Alert,ActionSheet,Loading,Modal
} from 'ionic-angular';
import {TransferService} from "../../../providers/financial-service/account-transfer-service";
import {ReqSubmitTransInfo,ReqCheckPayee} from "../../../providers/messages/account-transfer-msg";
import { ModalPage } from '../../modal/modal'
import {RecoveryImportService} from  '../../../providers/wallet/recovery-import-service';
import {NewpayInstance} from 'newpay-wallet-js';
import {CommonUtils} from '../../../providers/common/commonUtils'
import { TranslateService } from 'ng2-translate';
import {FeelActionrateService} from '../../../providers/feelActionrate/feel-actionrate-service'
/**
 * Generated class for the ChargingMoneyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-charging-money',
  templateUrl: 'charging-money.html',
})
export class ChargingMoneyPage {
    alert:Alert;
    modal:Modal;
    actionSheet:ActionSheet;
    loading:Loading
    opts :Object;
    remarks:string='';
    money:string='';
    feelrequest:any;
    feelRate:any;
    feel:any=0;
    amount:string;
    transferTime:string;
    amountOfMoney:string;
    loader:Loading;
    reqsubmittransinfo:any={from:'',to:'',amount:'',fee:'',coin_code:'',txid:'',hash:''};
    reqsubmittransinfoTemp:any={from:'',to:'',amount:'',fee:'',coin_type:'',txid:'',hash:''};
    currency: string;
    reqCheckPyee:ReqCheckPayee;
    account: string="";
    translateObj: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalCtrl:ModalController,
              public toastCtrl: ToastController,
              public alertCtrl:AlertController,
              public transfer:TransferService,
              public commonUtils:CommonUtils,
              public loadingCtrl:LoadingController,
              public recoveryImportService:RecoveryImportService,
              public translate:TranslateService,
              public feelService:FeelActionrateService
              ) {
              this.reqCheckPyee = navParams.get("SearchD");
              console.log(this.reqCheckPyee)
              this.translate.get('charging_money').subscribe((res: any) => {
                  this.translateObj = res;
              });
        }
  //现在手续费 有问题
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChargingMoneyPage');
      this.feelrequest =  {
          "coinid":this.reqCheckPyee.symbol,//币种类型
          "actiontype":"3" //类型1 topupcoin 2topup 3withdrawcoin 4 withdraw
      }

      this.feelService.getActionrate(this.feelrequest).then((res)=>{
          console.log(res)
          if(res.ret_code=='1'){
            this.feelRate = res;
          }else if(res.ret_code=='0'){
              this.commonUtils.alertCommon('',res.ret_msg);
          }
          // console.log("fell",res.minfee);
      },error => {
          this.commonUtils.alertCommon('this.translateObj.warning',this.translateObj.fellVali);
      })
  }
  goBack(){
    this.navCtrl.pop();
  }
    nextFinPwd(amount) {
        let characterNum =1;
        console.log(this.account)
        if(this.account==""){
            this.commonUtils.alertCommon(this.translateObj.warning, this.translateObj.accountEmpty);
            return;
        }
        if(this.money==""){
            this.commonUtils.alertCommon(this.translateObj.warning, this.translateObj.amountEmpty);
            return;
        }

        NewpayInstance.checkAccountExists(this.account).then((res)=>{
            console.log(res)
            let q=0;
            for(let i=0;i<res.length;i++){
                console.log(res[i][0])
                if(res[i][0]==this.account){
                    q++;
                }
            }
            if(q==0){
                this.commonUtils.alertCommon(this.translateObj.warning, this.translateObj.accountNotExists);
                return;
            }else{
                console.log( this.remarks)
                this.opts={showBackdrop:true,enableBackdropDismiss:true,cssClass:'modalCssQ'};
                let modal = this.modalCtrl.create(ModalPage);
                modal.onDidDismiss(data => {
                    if(data.flag ==='forgot'){
                        this.navCtrl.push('ResetZJpsdPage');
                    }else {
                        if (data.pwd) {
                            console.log(data);
                            //转账成功。生成时间戳 获取当前时间
                            this.commonUtils.showLoading()
                            this.recoveryImportService.recImport(data.pwd).then((res) => {
                                if (res.ret_code == "1") { //密码正确
                                    let accountname = localStorage.getItem("account");
                                    NewpayInstance.transfer(
                                        accountname,
                                        this.account,//
                                        Number(this.money) * Math.pow(10, this.reqCheckPyee.precision),
                                        this.reqCheckPyee.asset_id,
                                        this.remarks
                                    ).then((result) => {
                                        this.transferTime = this.getRangeDate();
                                        // console.log("txid", result.txid);
                                        debugger
                                        //如果转账成功以后，那么去中心化提交 提币信息。
                                        this.reqsubmittransinfo.from = accountname;
                                        this.reqsubmittransinfo.to = this.account
                                        this.reqsubmittransinfo.fee = result.fee.amount / Math.pow(10, this.reqCheckPyee.precision);
                                        this.reqsubmittransinfo.amount = this.money;//转账金额
                                        this.reqsubmittransinfo.coin_code = this.reqCheckPyee.symbol;//币种
                                        this.reqsubmittransinfo.hash = '';//数字货币账号
                                        this.reqsubmittransinfo.txid = result.txid;//txid

                                        this.reqsubmittransinfoTemp.from = accountname;
                                        this.reqsubmittransinfoTemp.to = this.account
                                        this.reqsubmittransinfoTemp.fee = result.fee.amount / Math.pow(10, this.reqCheckPyee.precision);
                                        this.reqsubmittransinfoTemp.amount = this.money;//转账金额
                                        this.reqsubmittransinfoTemp.coin_type = this.reqCheckPyee.symbol;//币种
                                        this.reqsubmittransinfoTemp.hash = '';//数字货币账号
                                        this.reqsubmittransinfoTemp.txid = result.txid;//txid
                                        this.transfer.submitwithdrawInfo(this.reqsubmittransinfo).then(success => {
                                                this.commonUtils.HideLoading();
                                                console.log(success)
                                                if (success) {
                                                    if (success.ret_code == '1') {
                                                        this.navCtrl.push("TransferreceiptPage", {
                                                            reqsubmittransinfo: this.reqsubmittransinfoTemp,
                                                            transferTime: this.transferTime,
                                                            flag: '3'
                                                        });
                                                    } else {
                                                        this.commonUtils.alertCommon('', success.ret_msg)
                                                    }

                                                } else {
                                                    this.showPopup("Error", "Transfer Error.");
                                                }
                                            },
                                            error => {
                                                this.commonUtils.HideLoading();
                                                this.showPopup("Error", error);
                                            });
                                    }).catch(error => {
                                        this.commonUtils.HideLoading();
                                        this.showPopup(this.translateObj.warning, error)
                                        console.log("[AccountActions.js:90] ----- transfer error ----->", error);
                                        //弹出错误信息
                                    })


                                } else {
                                    this.commonUtils.HideLoading();
                                    const toast = this.toastCtrl.create({
                                        message: this.translateObj.passwordWrong,
                                        duration: 3000,
                                        position: 'bottom'
                                    });

                                    toast.onDidDismiss(() => {
                                        console.log('Dismissed toast');
                                    });

                                    toast.present();
                                }
                            })

                        }
                    }
                });

                modal.present();
            }

        });




        // if(){
        //
        // }
        console.log(this.money)



    }
    getRangeDate(){
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
    HidepresentLoading(){
      this.loader.dismiss();
    }
    presentLoading() {
        this.loader = this.loadingCtrl.create({
            content: this.translateObj.transfering,
            duration: 1000
        });
        this.loader.present();
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
    changAmount(e){
        console.log(e);

        console.log(this.feelRate);
        // 手续费分 最大 和最小 值，  当超出指定范围 按最大最小值算
        if(Number(e) *this.feelRate.normalrate<this.feelRate.minfee){
            this.feel =this.feelRate.minfee;
        }else if(Number(e)*this.feelRate.normalrate>this.feelRate.maxfee){
            this.feel =this.feelRate.maxfee;
        }else{
            this.feel=Number(e)*this.feelRate.normalrate;
        }
        console.log(this.feel);
        if(Number(e)>50000){
            this.commonUtils.alertCommon('','数额不能超过50000');
            return;
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
