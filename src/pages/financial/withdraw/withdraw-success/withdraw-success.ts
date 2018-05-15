import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the TopupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-receiv-success',
  templateUrl: 'withdraw-success.html',
})
export class WithdrawSuccessPage {
  receiveData:{account:string,currecy:string,amount:string,remark:string}

  arrCurrency =[
    {name:"BitCNY",bal:"200"},
    {name:"BitUSD",bal:"300"},
    {name:"BTS",bal:"400"}
  ];


  constructor(
      public navCtrl: NavController,
      public navParams: NavParams
  ) {
    this.receiveData={account:"",currecy:"",amount:"",remark:""}
    console.log("WithdrawSuccessPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WithdrawSuccessPage');
  }

  finishWithdraw(){
    this.navCtrl.push("HomePage")
    // console.log('go WithdrawSuccessPage');
    //   this.navCtrl.setRoot("TabsPage");
    this.navCtrl.parent.select(0);
  }
  goBack(){
    this.navCtrl.pop();
  }
}
