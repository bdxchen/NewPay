import { Component } from '@angular/core';
import {ActionSheet, Alert, AlertController, IonicPage, Loading, Modal, NavController} from 'ionic-angular';
import {AddBankCard} from "../../../providers/messages/user-auth-msg";
import {MineService} from "../../../providers/user-service/mine-service";
import { TranslateService } from 'ng2-translate';
import { CommonUtils} from  '../../../providers/common/commonUtils'
import { IentityAuth} from '../../../providers/identity/ientity-auth'
@IonicPage()
@Component({
  selector: 'bankcard-add',
  templateUrl: 'bankcard-add.html'
})
export class BankcardAddPage {
  alert:Alert;
  loading:Loading;
  modal:Modal;
  actionSheet:ActionSheet;
  createSuccess = false;

  addBankCard: any = {account:'',name:'',bankname:'',branchName:'',userId:'11111'};
  bankCode:string;
  account1: string;
  translateObj: any;
  constructor(public navCtrl: NavController
                , public mineser:MineService
                , private alertCtrl: AlertController, public translate:TranslateService,
              private commonUtils:CommonUtils,private ientityAuth:IentityAuth) {
      this.translate.get('bankcard_add').subscribe((res: any) => {
          this.translateObj = res;
      });
  }
  changCardNO(account){
    console.log("监听");
      console.log("addBankCard",account);
      if(account.length==6){
          this.mineser.bankbinXXCard(account).then(success =>{
              console.log(success)
            if(success.ret_code=='1')  {
                switch (success.data.alias){
                    case 'BOCOM' :{
                        this.addBankCard.bankname ="交通银行";
                        break;
                    }
                    case 'ICBC' :{
                        this.addBankCard.bankname ="工商银行";
                        break;
                    }
                    case 'ABC' :{
                        this.addBankCard.bankname ="农业银行";
                        break;
                    }
                    case 'CCB' :{
                        this.addBankCard.bankname ="建设银行";
                        break;
                    }
                    case 'BOC' :{
                        this.addBankCard.bankname ="中国银行";
                        break;
                    }
                }


            }else{
                this.addBankCard.bankname ="";
                  //弹出信息 ，12.15 去掉
                // this.commonUtils.alertCommon('',success.ret_msg);
            }

            }).catch(err=>{
                  // this.commonUtils.alertCommon('','网络连接失败,请重试');
          })
      }
  }
  confirm(){

      let address = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/;//中文、英文、数字包括下划线

      let address2 = /^[A-Za-z]+$/;//包含字母

      if(this.addBankCard.account == ""){
          this.showPopup("", this.translateObj.warCardNo);
          return;
      }
      if(this.addBankCard.account.length<15){
          this.showPopup("", this.translateObj.validate);
          return;
      }
      if(this.addBankCard.account != this.account1){
          this.showPopup("", this.translateObj.warCardNotSame);
          return;
      }
      // if(this.addBankCard.name == ""){
      //     this.showPopup("", this.translateObj.warOwnerName);
      //     return;
      // }


      if(this.addBankCard.bankname == ""){
          this.showPopup("",this.translateObj.warBankName);
          return;
      }

      if(this.addBankCard.branchName == ""){
          this.showPopup("", this.translateObj.warBankAddress);
          return;
      }

      // if(!address.test(this.addBankCard.branchName) && !address2.test(this.addBankCard.branchName)){
      this.addBankCard.branchName = this.addBankCard.branchName.replace(/\s+/g,"");
      if(this.addBankCard.branchName==""){
          this.showPopup("", this.translateObj.warBankAddress2);
          return;
      }
      this.mineser.addBankCard(this.addBankCard).then(success => {

              if (success != null) {
                  if(success.ret_code== 1){
                      this.commonUtils.showToast(this.translateObj.bindSuccess);
                      this.navCtrl.push("BankcardPage");
                  }else {
                      this.showPopup("",success.ret_msg)
                  }
              } else {
                  this.showPopup("", this.translateObj.serviceErr);
              }
          },
          error => {
              this.showPopup("", this.translateObj.netErr);
          });
  }
  goBack(){
    this.navCtrl.pop();
  }
  reset(){
      this.addBankCard = {
          account:'',name:'',bankname:'',branchName:'',userId:'11111'
      };
  }
  ionViewDidLoad() {
        this.ientityAuth.userIdentity().then((res)=>{
                console.log(res);
                if(res.ret_code=='1'){
                    this.addBankCard.name =  res.data.idName
                }

            }
        ).catch(err=>{
            console.log(err)
        })

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
                            this.navCtrl.popToRoot();
                        }
                    }
                }
            ]
        });
        this.alert.present();
    }
    XZlx(acc){
      if(acc){
          this.account1 = acc.replace(/[^\d]/g,'');
          if(acc.length>19){
              this.account1  =acc.substring(0,19);

          }
      }

    }
    XZlxBC(acc){
        if(acc){
            this.addBankCard.account =acc.replace(/[^\d]/g,'');
            if(acc.length>19){
                this.addBankCard.account =acc.substring(0,19);
            }
        }

    }
    bankNameValid(bankname){
        console.log(bankname.length);
        if(bankname.length>25){
         this.addBankCard.bankname = bankname.substring(0,25);
        }
    }
    BranchNameValid(branchName){
        console.log(branchName.length);
        if(branchName.length>50){
            this.addBankCard.branchName = branchName.substring(0,50);
        }
    }

    ionViewWillLeave(){
        if(this.alert){
            this.alert.dismiss();
        }
        if(this.loading){
            this.loading.dismiss();
        }
        // if(this.actionSheet){
        //     this.actionSheet.dismiss();
        // }
        // if(this.modal){
        //     this.modal.dismiss();
        // }
    }
}
