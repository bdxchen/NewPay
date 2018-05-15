import { Component } from '@angular/core';
import {
    IonicPage, NavController, NavParams, ModalController, ToastController, Loading, Alert,
    ActionSheet, Modal
} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import {TransferService} from "../../../providers/financial-service/account-transfer-service";
import {ReqSubmitTransInfo} from "../../../providers/messages/account-transfer-msg";
import {NewpayInstance} from 'newpay-wallet-js';
import {StorageService} from '../../../providers/util-service/storage-service';
import  { RecoveryImportService } from '../../../providers/wallet/recovery-import-service';
import { TranslateService } from 'ng2-translate';
import { CommonUtils} from  '../../../providers/common/commonUtils'
import {PincodeController} from "ionic2-pincode-input/dist/pincode";
/**
 * Generated class for the Transfer2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transfer2',
  templateUrl: 'transfer2.html',
})
export class Transfer2Page {
    alert:Alert;
    actionSheet:ActionSheet;
    modal:Modal;
    coin_account:string;
    opts :Object;
    feelrequest:any;
    loading:Loading;
    transferTime:string;
    currency: string;
    account: string;
    amountOfMoney:any='';
    remarks:string="";
    createSuccess = false;
    reqCheckPyee: any = {to_userid: '',amount:0,asset_id:'',precision:0,symbol:'',coin_type:'',coin_account:'',nickname:''};
    SearchD: string;
    reqsubmittransinfo: ReqSubmitTransInfo = {amount: 0, fee: 0, comment: "", coin_type: "",
        to_userid: localStorage.getItem('account'),
        coin_account: "",
        txid: ""};
    translateObj: any;
    precision:any;
    to_userid:string='';
    constructor(public navCtrl: NavController,
                private nav: NavController,
                public navParams: NavParams,
                private commonUtils:CommonUtils,
                public alertCtrl: AlertController,
                private transfer: TransferService,
                public loadingCtrl: LoadingController,
                public recoveryImportService:RecoveryImportService,
                public modalCtrl: ModalController,
                public toastCtrl: ToastController,
                public  storageService: StorageService,
                public pincodeCtrl: PincodeController,
                public translate:TranslateService) {

        this.to_userid = navParams.get("toUserId");
        console.log(this.to_userid);

        this.translate.get('transfer2').subscribe((res: any) => {
            this.translateObj = res;
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Transfer2Page');
        // 0: {amount: 999940, asset_id: "1.3.0", precision: 5, symbol: "YTS"}
        NewpayInstance.getAccountBalances(localStorage.getItem("account")).then((resQ) => {
            this.commonUtils.HideLoading();
            let symbol = this.navParams.get("symbol");
            console.log(symbol)
            for(let i=0;  i<resQ.length;i++){
                if(resQ[i].symbol == symbol){
                    console.log(resQ[i])
                    this.reqCheckPyee =resQ[i];
                    this.reqCheckPyee.amount =resQ[i].amount;
                    this.reqCheckPyee.asset_id =resQ[i].asset_id;
                    this.reqCheckPyee.precision =resQ[i].precision;
                    this.reqCheckPyee.symbol =resQ[i].symbol;
                }
            }
            console.log("res", resQ);

        }).catch((err) => {
            this.commonUtils.HideLoading();
            console.log(err);
        })

    }

    nextFinPwd() {
        let pinCode =  this.pincodeCtrl.create({
            title:'输入密码'
        });

        pinCode.present();

        pinCode.onDidDismiss( (code,status) => {
            if(NewpayInstance.validatePassword(code)){
            let account = localStorage.getItem('account');
            console.log(account)
                console.log(this.to_userid)
                console.log(this.amountOfMoney)
                console.log(this.reqCheckPyee.precision)
                console.log(this.reqCheckPyee.asset_id);
            console.log(this.remarks)
            this.commonUtils.showLoading();
            NewpayInstance.transfer(
                account,
                this.to_userid,
                Number(this.amountOfMoney) * Math.pow(10, this.reqCheckPyee.precision),
                this.reqCheckPyee.asset_id,
                this.remarks,
                ''
            ).then((result) => {
                this.commonUtils.HideLoading();
                //转账成功。生成时间戳 获取当前时间
                let date = new Date();
                this.transferTime = this.getRangeDate();
                console.log("txid", result.txid);
                //如果转账成功以后，那么去中心化提交 转账信息。
                this.reqsubmittransinfo.txid = result.txid;//txid
                //如果转账成功以后，那么去中心化提交 转账信息。

                this.navCtrl.push("TransferreceiptPage", {
                    flag: '2', reqsubmittransinfo: this.reqsubmittransinfo,
                    transferTime: this.transferTime
                });
            }).catch(error => {
                this.commonUtils.HideLoading();
                console.log(error)
                if (error == "connection closed") {
                    this.commonUtils.showToast("网络连接失败,请重试!");
                    return;
                }else{
                    this.commonUtils.showToast("转账失败!");
                    return;
                }

            })
            }else{
                this.commonUtils.alertCommon("提示","密码错误,请重新输入.")
            }
        });

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
    presentLoading() {
        this.loading = this.loadingCtrl.create({
            content: this.translateObj.transfering,
            // duration: 1000
        });
        this.loading.present();
    }
    hidePresentLoading(){
        this.loading.dismiss();
    }
    goBack(){
        this.navCtrl.pop();
    }
    presentAlert(title,subTitle) {
        this.alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: [this.translateObj.confirm]
        });
        this.alert.present();
    }
    showPopup(title, text) {
        this.alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: this.translateObj.confirm,
                    handler: data => {
                        if (this.createSuccess) {

                        }
                    }
                }
            ]
        });
        this.alert.present();
    }
    changeAMount(amount){
        console.log(amount)
        this.amountOfMoney = amount.toString()
        // if(amount.indexOf("-")> -1 && amount !="" ){
        //     this.amountOfMoney =  this.amountOfMoney.replace("-", "");
        //
        // }
        // if(amount.indexOf("+")> -1 && amount !="" ){
        //     this.amountOfMoney =  this.amountOfMoney.replace("+", "");
        //
        // }
        if(this.amountOfMoney.split(".")[0]==""){
            this.amountOfMoney = this.amountOfMoney.substring(0,0)
        }
        this.amountOfMoney =   this.amountOfMoney.replace(/[^\d.]/g, "");  //清除“数字”和“.”以外的字符
        this.amountOfMoney =   this.amountOfMoney.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
        if(this.amountOfMoney.indexOf(".")> -1 && this.amountOfMoney !="") {

            // this.amountOfMoney =   this.amountOfMoney.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
            // this.amountOfMoney =   this.amountOfMoney.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');//只能输入两个小数
            var newstr;
            if(this.amountOfMoney.indexOf(".")!=-1){
                var pos = this.amountOfMoney.indexOf(".");
                newstr = this.amountOfMoney.substring(pos+1);
                var yong = this.amountOfMoney.substring(0,pos+1);
                newstr = newstr.replace(/[^0-9]/ig,"");
                if(newstr.length>=this.precision+1){
                    newstr = newstr.substring(0,(newstr.length-1));
                }
                this.amountOfMoney = yong + newstr;
            }else{
                this.amountOfMoney = this.amountOfMoney.replace(/[^0-9\.]/ig,"");
            }
        }
        if(this.amountOfMoney.indexOf(".")< 0 && this.amountOfMoney !=""){//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
            this.amountOfMoney = parseFloat(this.amountOfMoney);
        }
        //转账单日限额 50000
        if(amount>50000){
            this.amountOfMoney =50000;
            // this.feel =50000*this.feelrate.normalrate;
        }
    }
    beizhuKu(marks){
        if(marks.length>25){
                //截取前10个字符
                console.log(marks.length)
                this.remarks = marks.substring(0,25);
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
