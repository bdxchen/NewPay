import { Component } from '@angular/core';
import {ActionSheet, Alert, AlertController, IonicPage, Loading, Modal, NavController, NavParams} from 'ionic-angular';
import { AuthService} from  '../../../../providers/user-service/user-auth-service';
import {Alipay, SubmitOrder,ConfirmOrder} from "../../../../providers/messages/account-pub-msg";
import {AccountPubService} from "../../../../providers/financial-service/account-pub-service";
import { TranslateService } from 'ng2-translate';
/**
 * Generated class for the BillDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bill-detail',
  templateUrl: 'bill-detail.html',
})
export class BillDetailPage {
  order:any={coin:'',comment:'',oppaccountno:'',orderno:'',payType:'',quantity:'',status:'',time:'',statusTemp:''}
    temp:string;
    payStatus:boolean;
  assistants:any;
  req:string;
  alert:Alert;
  loading:Loading;
    actionSheet:ActionSheet;
    modal:Modal;
    confirmOrder:ConfirmOrder ={orderNo:'',payStatus:true};
    orderNo:string;
    translateObj: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authService:AuthService,
              private alertCtrl:AlertController,
              private accountPubService:AccountPubService,
              public translate:TranslateService) {
      this.assistants =  this.navParams.get('assistants');
      let flag =  this.navParams.get('flag');
      console.log(flag);
      debugger
      if(flag=="home"){
          this.showDetail(this.assistants,'home');
      }else{
          this.showDetail(this.assistants,'topup')
      }

      this.translate.get('bill_detail').subscribe((res: any) => {
          this.translateObj = res;
      });
  }
  showDetail(assistants,flag){
    console.log(assistants)
      // {asstype: "TOPUP", coin: "", quantity: "100.0000", time: "2017-11-17 11:00:17.0", id: "ff8080815fc4a5a2015fc7eb700f00e4", …}asstype: "TOPUP"coin: ""id: "ff8080815fc4a5a2015fc7eb700f00e4"quantity: "100.0000"status: "2"time: "2017-11-17 11:00:17.0"__proto__: Object

      if(flag=='home'){
          this.req=assistants.id;
          switch(assistants.asstype)
          {
              case 'TOPUP':
              {
                  this.temp='topup'
                  break;
              }
              case 'TRANSFER':
              {
                  this.temp='transfer'
                  break;
              }
              case 'WITHDRAW':
              {
                  this.temp='withdraw'
                  break;
              }
              case 'WITHDRAWCOIN':
              {
                  this.temp='withdrawcoin'
                  break;
              }

          }
      }else{
          this.req=this.assistants;
          this.temp='topup';
      }

      console.log('temp',this.temp)

      this.authService.orderDetail(this.temp,this.req).then(success=>{
        console.log(success)
      if(success){
          this.order =success;
          if(this.temp =='topup'){
              switch (success.status){
                  case "0":{
                      this.order.statusTemp =  this.translateObj.unpaid
                      break;
                  }
                  case "1":{
                      this.order.statusTemp =  this.translateObj.paid
                      break;
                  }
                  case "2":{
                      this.order.statusTemp =  this.translateObj.paidAndConfirm
                      break;
                  }
                  case "3":{
                      this.order.statusTemp =  this.translateObj.topupCompleted
                      break;
                  }
                  case "7":{
                      this.order.statusTemp =  this.translateObj.userCancel
                      break;
                  }
                  case "8":{
                      this.order.statusTemp =  this.translateObj.systemCancel
                      break;
                  }
                  case "9":{
                      this.order.statusTemp =  this.translateObj.timeoutCancel
                      break;
                  }
                  case "9":{
                      this.order.statusTemp =  this.translateObj.timeout
                      break;
                  }
              }
          }else if(this.temp =='withdraw'){

              switch (success.status){
                  case "0":{
                      this.order.statusTemp =  this.translateObj.waitingTX
                      break;
                  }
                  case "1":{
                      this.order.statusTemp =  this.translateObj.transferred
                      break;
                  }
                  case "2":{
                      this.order.statusTemp =  this.translateObj.transferAndComfirm
                      break;
                  }
                  case "3":{
                      this.order.statusTemp =  this.translateObj.withdrawCompleted
                      break;
                  }
                  case "8":{
                      this.order.statusTemp =  this.translateObj.withdrawFail
                      break;
                  }
                  case "9":{
                      this.order.statusTemp =  this.translateObj.withdrawTimeout
                      break;
                  }
              }
          }else{
              this.order.statusTemp= this.translateObj.completed;
          }

          this.order.orderno = success.orderno;
          this.order.qr_code = success.qrCode;
          this.order.time = success.time;
          console.log(this.order)
          this.order.identity = success.identity;
      }

      },error => {
        console.log(error)
      })
  }
  confirmOrderCon(orderNo,payStatus){
        this.confirmOrder.orderNo=orderNo;
        this.confirmOrder.payStatus=payStatus;
        this.accountPubService.confirmOrderZ(this.confirmOrder).then(success => {
            if(success.ret_code=="1"){
                console.log(success)
            }
        },error => {
            console.log(error);
        })
    }
  formatDateTime = function (date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        var minute = date.getMinutes();
        minute = minute < 10 ? ('0' + minute) : minute;
        return y + '-' + m + '-' + d+' '+h+':'+minute;
    };
    goBack(){
    this.navCtrl.pop();
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BillDetailPage');
  }
  showConfirm(success) {
        console.log(success)
        this.orderNo = this.order.orderno //订单号
        let confirm = this.alertCtrl.create({
            title: this.translateObj.confirm,
            message: this.translateObj.isCompletedPay,
            enableBackdropDismiss:false,
            buttons: [
                {
                    text: this.translateObj.unpaid,
                    handler: () => {
                        console.log('未付款');
                        this.payStatus= false;
                        // this.confirmOrderCon(this.orderNo,this.payStatus);
                        this.navCtrl.parent.select(0);
                    }
                },
                {
                    text: this.translateObj.paid,
                    handler: () => {
                        console.log('已付款');
                        this.payStatus= true;
                        this.confirmOrderCon(this.orderNo,this.payStatus);
                        this.navCtrl.parent.select(0);
                    }
                }
            ]
        });
        confirm.present();
    }

  Order(flag){
      this.orderNo = this.order.orderno //订单号
        console.log(flag);
     console.log("order点击了");
      if(flag=='0'){  //取消
          this.orderNo =this.order.orderno;
          this.payStatus =  false;
          this.confirmOrderCon(this.orderNo,this.payStatus);
          this.navCtrl.parent.select(0);
      }else if(flag=='1'){  //继续
          // this.browserService.open(success.qr_code);
          if(this.order.qr_code) { //二维码
              //弹出
              setTimeout(() => {
                  setTimeout(() => {
                      this.showConfirm(flag);
                  }, 2000);
              })
          }
      }else if(flag=='2'){
          this.payStatus= true;
          this.confirmOrderCon(this.orderNo,this.payStatus);
          this.navCtrl.parent.select(0);
      }
      // this.navCtrl.push('TopupPage',{flag:'order',order:this.order})

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
