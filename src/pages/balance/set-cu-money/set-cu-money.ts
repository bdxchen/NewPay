import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { NewpayInstance } from 'newpay-wallet-js';
import { TranslateService } from 'ng2-translate';
/**
 * Generated class for the SetMoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-set-cu-money',
    templateUrl: 'set-cu-money.html',
})
export class SetCuMoneyPage {

    data: Array<{amount:string,asset_id:string,precision:string,symbol:string}> = [];
    currency:any;// 币种
    flagMO:string;
    showBIZ:boolean;
    bzMoney:string='';  //收款金额
    skreason:string=''; //收款理由
    showReason:boolean=false;
    translateObj: any;
    constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController, public translate:TranslateService) {
        // console.log(this.currency)
       this.currency = this.navParams.get('currency');
        console.log(this.currency)
        this.translate.get('set_cu_money').subscribe((res: any) => {
            this.translateObj = res;
        });
    }
    ReasonsCollection(){
        this.showReason= !this.showReason;
    }
    ionViewDidLoad() {
        if(this.navParams.get('flag')==2){
            console.log(this.currency)
            this.bzMoney= this.currency.money;
            this.skreason =this.currency.reason;
            if(this.skreason!=""){
                this.showReason=true;
            }
        }

        console.log('ionViewDidLoad SetMoneyPage');
    }
    goBack(){
        this.navCtrl.pop();
    }
    setmoneyB(){  //确定按钮
        console.log(this.currency);
        if(this.currency==""){
            this.alertCommon(this.translateObj.warningInfo, this.translateObj.assetEmpty);
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
        this.navCtrl.push('CurrencyPage',{money:this.bzMoney,reason:this.skreason,flag:2,currency:this.currency})
    }
    alertCommon(title,message){
        let alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: this.translateObj.confirm,
                    handler: () => {
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        alert.present();
    }
}
