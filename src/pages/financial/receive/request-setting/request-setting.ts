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
  selector: 'page-request-setting',
  templateUrl: 'request-setting.html',
})
export class requestSettingPage {
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
    console.log("pay-info");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad pay-info');
  }

  requestReceive(){
    this.navCtrl.push("requestReceivePage")
    console.log('go requestReceivePage');
  }

  goComfirm(){
    this.navCtrl.push("receivePage")
  }
  goBack(){
    this.navCtrl.pop();
  }

}
