import { Component } from '@angular/core';
import {
    IonicPage, NavController, NavParams, AlertController, LoadingController, Loading,
    ToastController,Alert,ActionSheet,Modal
} from 'ionic-angular';
import { BalanceInfo} from '../../../providers/messages/account-common-msg';
import { BalanceService } from '../../../providers/financial-service/account-balance-service';
import {NewpayInstance} from 'newpay-wallet-js';
import {ReqGetBalance}from '../../../providers/messages/account-currency-msg';
import { StorageService } from '../../../providers/util-service/storage-service'
import {BaAccountifService} from '../../../providers/transfer/Ba-accountif-service'
import { SearchAccService }  from '../../../providers/home/searchAcc-service';
import { CommonUtils } from  '../../../providers/common/commonUtils';
import { TranslateService } from 'ng2-translate';
import { DragulaService } from 'ng2-dragula';
@IonicPage()
@Component({
  selector: 'page-balance-detail',
  templateUrl: 'balance-detail.html',
})
export class BalanceDetailPage {
    coin_type:string;
    currencyCoin_type:string;
    type:string;
    RadioResult:any;
    Allasset:any=0;
    currencyCoin:string='';
    data: Array<{title: string,  icon: string, showDetails: boolean,SearchD:any}> = [];
  balanceInfo: Array<BalanceInfo>;
  tempcurrency:string;
  temptotalbalance : string;
    alert:Alert;
    modal:Modal;
    actionSheet:ActionSheet;
    loading:Loading
  isDebug=true;
    translateObj: any;
    options: any = {
        removeOnSpill: true
    }
  constructor(public navCtrl: NavController,
              public balanceService: BalanceService,
              public searchAcc:SearchAccService,
              public navParams: NavParams,
              private toastCtrl:ToastController,
              private alertCtrl : AlertController,
              private loadingCtrl : LoadingController,
              public storageService:StorageService,
              public baAccountifService:BaAccountifService,
              public commonUtils:CommonUtils,
              public translate:TranslateService,
              private dragulaService: DragulaService
              ) {
      // dragulaService.setOptions('first-bag', {
      //     removeOnSpill: true
      // });
      this.translate.get('balance_detail').subscribe((res: any) => {
          this.translateObj = res;
      });

  }
    toggleDetails(data) {
        debugger
        if (data.showDetails) {
            data.showDetails = false;
            data.icon = 'assets/img/transfer/jiantouS.png';
        } else {
            data.showDetails = true;
            data.icon = 'assets/img/transfer/jiantouX.png';
        }
    }
    toTopup(SearchD) {
        localStorage.setItem('currency',SearchD.symbol);
        this.navCtrl.push("TopupPage", {  SearchD: SearchD});
        console.log('toTopup CurrencyDetailPage');
    }
    toTransfer(SearchD) {
        localStorage.setItem('currency',SearchD.symbol);
        this.navCtrl.push("TransferPage", { SearchD: SearchD});
        console.log('toTopup CurrencyDetailPage');
    }

    toWithdraw(SearchD) {
      console.log(SearchD)
        localStorage.setItem('currency',SearchD.symbol);
        this.navCtrl.push("WithdrawPage", { currency: SearchD});
        console.log('ionViewDidLoad CurrencydetailPage');
    }
    toFlowDetail(currency){
        this.navCtrl.push("FlowdetailPage", { currency: currency});
    }
    ChargingMoney(SearchD){//充币
        this.navCtrl.push('CurrencyPage',{ currency: SearchD,flag:1});
    }
    Currency(SearchD){//提币
        this.navCtrl.push('ChargingMoneyPage',{ SearchD: SearchD});

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BalanceDetailPage');

  }
    ionViewWillEnter(){
        //查询平台支持所有货币列表
        this.suppCompar();
  }
  suppCompar(){
        debugger
      // this.type ='BitEUR';
      this.commonUtils.showLoading()
      this.searchAcc.findAssets().then((res)=>{
          this.commonUtils.HideLoading();
          console.log(res)
          if(res.ret_code=="1"){
            // this.data  = res.data;
              var arr=[];
              let accountname=localStorage.getItem("account");
              NewpayInstance.getAccountBalances(accountname).then((resQ)=>{
                  // amount: 1, asset_id: "1.3.113", precision: 4, symbol: "bitCNY"
                  console.log("res", resQ);
                  for(let j=0;j<res.data.length;j++){
                      let obj:any ={amount:'0',asset_id:'',precision:'',symbol:res.data[j].code};
                  for(let i = 0; i < resQ.length; i++ ){
                          if(res.data[j].code==resQ[i].symbol){
                              // arr.push(resQ[i])
                              // console.log(JSON.stringify(arr))
                              obj=resQ[i];
                          }
                  }
                      arr.push(obj)
                  }
                  console.log("arr",arr);
                  this.comp(arr)
                  localStorage.setItem('showList',JSON.stringify(arr))
              }).catch((err)=>{
                  console.log(err);
                  this.commonUtils.alertCommon('',"网络链接错误,请检查网络是否连接");
              })
          }
      }).catch((err)=>{
          this.commonUtils.HideLoading();
          // this.commonUtils.alertCommon('',err);
      });

  }
  comp(arr){
      let  showList=arr;
      if(showList.length!=0){
          this.data =[];
          for(let i = 0; i < showList.length; i++ ){
              this.data.push({
                  title: 'Title '+i,
                  icon: 'assets/img/transfer/jiantouS.png',
                  showDetails: false,
                  SearchD:showList[i]
              });
          }
      }
      console.log("data+++++++++++",this.data)
      this.coin_type = '';
      // this.commonUtils.showLoading();
      this.baAccountifService.monetaryxchangeRate(this.coin_type).then((res)=>{
          // this.commonUtils.HideLoading();
          console.log(res)
          let isContain = false;
          if(res.ret_code=="1"){
              this.currencyCoin= res.currencyCoin;
              this.currencyCoin_type= res.coin_type;
              let all =0;
              for(let o=0;o<this.data.length;o++){
                  for(let i=0;i<res.rateList.length;i++){
                      debugger
                      if(  res.rateList[i].digital == res.coin_type){
                          if(res.rateList[i].digital == this.data[o].SearchD.symbol) {
                              console.log("AAAAA",this.data[o].SearchD)
                              all = all + this.data[o].SearchD.amount * 1;
                              isContain = true;
                          }
                      }else if(res.rateList[i].digital == this.data[o].SearchD.symbol){
                          all =all+  res.rateList[i].rate*this.data[o].SearchD.amount
                      }
                  }
                  if (!isContain){
                      if(res.coin_type == this.data[o].SearchD.symbol){
                          all += this.data[o].SearchD.amount *1;
                      }
                  }

              }
              this.Allasset = all.toFixed(2);
              console.log( all.toFixed(2));
          }

      }).catch((err)=>{
          // this.commonUtils.HideLoading();
      })
  }
  viewCurrencyDetails(){
      this.navCtrl.push("CurrencyDetailPage");
  }
    goBack(){
    this.navCtrl.pop();
    }
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content:'Please Wait....'
    });
    this.loading.present();
  }

  showError(text){
    setTimeout(() => {
      this.loading.dismiss();
    });

    let alert = this.alertCtrl.create({
      title : 'Fail',
      subTitle :text,
      buttons:['OK']
    })
    alert.present(prompt);
  }
  //添加数字货币
  addDigitals(){

      this.commonUtils.showLoading();
      this.searchAcc.getSearchAccM().then((res)=>{
          this.commonUtils.HideLoading();
          console.log(res);
          this.alert = this.alertCtrl.create();
          this.alert.setTitle(this.translateObj.digitalCurrency);
          for(let i=0;i<res.data.length;i++){
              debugger
             let name= res.data[i].name;
             let code = res.data[i].code;
              this.alert.addInput({
                  type: 'radio',
                  label: name,
                  value: code,
                  // checked: true
              });
          }
              this.alert.addButton(this.translateObj.CANCEL);
              this.alert.addButton({
                  text: this.translateObj.OK,
                  handler: data => {
                      console.log(data)
                      // this.testRadioOpen = false;
                      this.RadioResult = data;
                      console.log(this.RadioResult)
                      let request:any={};
                      request.digitalCoin=data;
                      this.commonUtils.showLoading();
                      this.searchAcc.Adddigital(request).then((res)=>{
                          this.commonUtils.HideLoading();
                          //添加成功 重新 查询对比 显示列表
                          if(res.ret_code=="1"){
                              console.log(res)
                              this.commonUtils.alertCommon('',this.translateObj.addAssetSuccess)
                              this.suppCompar();
                          }else if(res.ret_code =="0"){
                              this.commonUtils.showToast(res.ret_msg);
                          }

                      }).catch((res)=>{
                          this.commonUtils.HideLoading();
                          this.commonUtils.alertCommon('',this.translateObj.addAssetFail)
                      })
                  }
              });
              this.alert.present();
      }).catch((err)=>{
        this.commonUtils.alertCommon('',this.translateObj.queryAssetListFail)
      });



  }
    TaostGlobal(msg){
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
        });
        toast.present();
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
