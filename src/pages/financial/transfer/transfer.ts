import { Component,ViewChild,OnInit } from '@angular/core';
import {ActionSheet, Alert, AlertController, IonicPage, Loading, Modal, NavController, NavParams} from 'ionic-angular';
import {ReqCheckPayee,Searchd,CheckUid} from "../../../providers/messages/account-transfer-msg";
import {TransferService} from "../../../providers/financial-service/account-transfer-service";
import {NewpayInstance} from 'newpay-wallet-js';
import { TranslateService } from 'ng2-translate';
import { IonDigitKeyboardCmp, IonDigitKeyboardOptions } from '../../../components/ion-digit-keyboard';
import {Transfer2Page} from "../transfer2/transfer2";
import {CommonUtils} from "../../../providers/common/commonUtils"
/**
 * Generated class for the TransferPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transfer',
  templateUrl: 'transfer.html',
})
export class TransferPage{

  coin_account:string;
  alert:Alert;
  modal:Modal;
  actionSheet:ActionSheet;
  loading:Loading;
  checkUid:CheckUid={to_userid:'',coin_type:'BTS'};
  createSuccess = false;
  SearchD : Searchd={amount:0,asset_id:'',precision:0,symbol:''};
    // to_userid:string;
    // amount: number; // 金额
    // asset_id: string;  //id
    // precision: number;   //精度
    // symbol: string //币种

    reqCheckPyee: ReqCheckPayee = {to_userid: '',amount:0,asset_id:'',precision:0,coin_type:'',symbol:'',coin_account:'',nickname:''};
    translateObj: any;
    coinType:any;
    symbol:"";
    selectOptions:any;
    @ViewChild(IonDigitKeyboardCmp) keyboard;
    public keyboardSettings: IonDigitKeyboardOptions = {
        align: 'center',
        //width: '85%',
        visible: false,
        leftActionOptions: {
            iconName: 'ios-backspace-outline',
            fontSize: '1.4em'
        },
        rightActionOptions: {
            //iconName: 'ios-checkmark-circle-outline',
            text: '.',
            fontSize: '1.3em'
        },
        roundButtons: false,
        showLetters: true,
        swipeToHide: true,
        // Available themes: IonDigitKeyboard.themes
        theme: 'ionic'
    };
  constructor(private transfer: TransferService,public navCtrl: NavController,
              public navParams: NavParams ,private alertCtrl: AlertController, public translate:TranslateService,
              public commonUtils:CommonUtils) {
  	// this.SearchD = navParams.get("SearchD");

      this.translate.get('transfer').subscribe((res: any) => {
          this.translateObj = res;
      });
  }
  goBack(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
      NewpayInstance.getAccountBalances(localStorage.getItem("account")).then((resQ) => {
          this.commonUtils.HideLoading();
          console.log("res", resQ);
          this.selectOptions = {
              title: '币种',
              subTitle: '',
              mode: 'md'
          };
          this.symbol =resQ[0].symbol
          this.coinType =resQ;
      }).catch((err) => {
          this.commonUtils.HideLoading();
          console.log(err);
      })
  }
  nextCheckAcc(){
      console.log(this.symbol)
      if(this.reqCheckPyee.to_userid==""){
          this.commonUtils.alertCommon("提示","账号名称不能为空")
          return;
      }
      console.log(this.reqCheckPyee.to_userid);
      this.navCtrl.push('Transfer2Page',{toUserId:this.reqCheckPyee.to_userid,symbol:this.symbol})

                          // NewpayInstance.checkAccountExists().then((res)=>{
                          //     console.log("lookupAccounts", res);
                          //     let temp =0;
                          //
                          // }).catch(err=>{
                          //     console.log(err)
                          // })
  }
  alertComm(title,content){
      this.alert = this.alertCtrl.create({
          title: title,
          subTitle: content,
          buttons: [
              {
                  text: this.translateObj.confirm,
                  handler: data => {

                  }
              }
          ]
      })
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
                            // this.navCtrl.popToRoot();
                        }
                    }
                }
            ]
        });
        this.alert.present();
    }

    public showKeyboard() {
        this.keyboard.show();
    }

    // Event way
    public numberClick(key: number) {
        console.log('From event: ', key);
    }

    public hideKeyboard() {
        this.keyboard.hide();
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
