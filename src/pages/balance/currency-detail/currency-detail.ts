import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CurrencyPage } from '../currency/currency';
import { ChargingMoneyPage } from '../charging-money/charging-money';
/**
 * Generated class for the CurrencyDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-currency-detail',
  templateUrl: 'currency-detail.html',
})
export class CurrencyDetailPage {
  currentcurrency : string;
  amount : string;
  freeze:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentcurrency = navParams.get('currency');
    this.amount = navParams.get('amount');
    this.freeze = "0.00";
  }

  toTopup(currency) {
    debugger
    this.navCtrl.push("TopupPage", { currency: currency});
    console.log('toTopup CurrencyDetailPage');
  }
  toTransfer(currency) {
    this.navCtrl.push("TransferPage", { currency: currency});
    console.log('toTopup CurrencyDetailPage');
  }

  toWithdraw(currency) {
    this.navCtrl.push("WithdrawPage", { currency: currency});
    console.log('ionViewDidLoad CurrencydetailPage');
  }
  toFlowDetail(currency){
    this.navCtrl.push("FlowdetailPage", { currency: currency});
  }
    ChargingMoney({  currency}){//充币
        this.navCtrl.push('CurrencyPage',{ currency: currency});
    }
    Currency(currency){//提币
        this.navCtrl.push('ChargingMoneyPage',{ currency: currency});

    }
    goBack(){
    this.navCtrl.pop();
    }

}
