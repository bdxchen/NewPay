import { Component } from '@angular/core';
import {ActionSheet, Alert, IonicPage, Loading, Modal, NavController, NavParams} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {NewpayInstance} from 'newpay-wallet-js';
import { AuthService } from  '../../../providers/user-service/user-auth-service'
import 'rxjs/add/operator/toPromise';
import {PwdCompar} from '../../../providers/messages/user-auth-msg';
import { TranslateService } from 'ng2-translate';

/**
 * Generated class for the ChangepwdPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepwd',
  templateUrl: 'changepwd.html',
})
export class ChangepwdPage {

    pwdCompar:any={oldPassword:'',newPassword:''};
	pwd: string = "loginpwd";
    relationship="aaaa";
	oldloginpwd : string='';
	newloginpwd : string='' ;
	comloginpwd : string='' ;
	oldfinpwd : string='' ;
	newfinpwd : string='' ;
	comfinpwd : string='' ;
    CaptchaF:any="";
    CaptchaL:any="";
    alert:Alert;
    actionSheet:ActionSheet;
    modal:Modal;
    loading:Loading;
    translateObj: any;
    // 验证码倒计时
    verifyCode: any = {
        verifyCodeTipsL: "",
        verifyCodeTipsF: "",
        countdownL: 60,
        countdownF: 60,
        disableL: true,
        disableF: true
    }
  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public navParams: NavParams,
              public authService:AuthService,
              public translate:TranslateService) {
      this.translate.get('changepwd').subscribe((res: any) => {
          this.translateObj = res;
          console.log("forgetPAss",res)
          this.verifyCode.verifyCodeTipsL = this.translateObj.getVeriCode;
          this.verifyCode.verifyCodeTipsF = this.translateObj.getVeriCode;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepwdPage');
  }
    // 倒计时
    settimeL() {
        if (this.verifyCode.countdownL == 1) {
            this.verifyCode.countdownL = 60;
            this.verifyCode.verifyCodeTipsL = this.translateObj.getVeriCode;
            this.verifyCode.disableL = true;
            return;
        } else {
            this.verifyCode.countdownL--;
        }

        this.verifyCode.verifyCodeTipsL = this.translateObj.getVeriCodeAgain+"(" + this.verifyCode.countdownL + ")";
        setTimeout(() => {
            this.verifyCode.verifyCodeTipsL = this.translateObj.getVeriCodeAgain+"(" + this.verifyCode.countdownL + ")";
            this.settimeL();
        }, 1000);
    }
    settimeF() {
        if (this.verifyCode.countdownF == 1) {
            this.verifyCode.countdownF = 60;
            this.verifyCode.verifyCodeTipsF = this.translateObj.getVeriCode;
            this.verifyCode.disableF = true;
            return;
        } else {
            this.verifyCode.countdownF--;
        }

        this.verifyCode.verifyCodeTipsF = this.translateObj.getVeriCodeAgain+"(" + this.verifyCode.countdownF + ")";
        setTimeout(() => {
            this.verifyCode.verifyCodeTipsF = this.translateObj.getVeriCodeAgain+"(" + this.verifyCode.countdownF + ")";
            this.settimeF();
        }, 1000);
    }
    getCodelogIN() {
        // console.log(ICode)
        console.log("获取验证码");
        //发送验证码成功后开始倒计时

        //验证码请求
        this.authService.getloginCaptchaM().then(success => {
                if (success != null) {
                    if(success.ret_code == "1"){
                        //发送验证码成功后开始倒计时
                        this.showPopupQ("",this.translateObj.veriCodeSendSuccess);
                        this.verifyCode.disableL = false;

                        this.settimeL();
                    }else {
                        this.showPopupQ("",success.ret_msg);
                        this.verifyCode.disableL = true;
                    }
                } else {
                    // this.showPopupQ("", this.translateObj.serviceErr);
                }
            },
            error => {

            });
    }
    getfinancialIN() {
        // console.log(ICode)
        console.log("获取验证码");
        //发送验证码成功后开始倒计时

        //验证码请求
        this.authService.getfinancialCaptchaM().then(success => {
                if (success != null) {
                    if(success.ret_code == "1"){
                        //发送验证码成功后开始倒计时
                        this.showPopupQ("",this.translateObj.veriCodeSendSuccess);
                        this.verifyCode.disableF = false;
                        this.settimeF();
                    }else {
                        this.showPopupQ("",success.ret_msg);
                        this.verifyCode.disableF = true;
                    }
                } else {
                    // this.showPopupQ("", this.translateObj.serviceErr);
                }
            },
            error => {

            });
    }
  selectedFriends(){

  }
  selectedEnemies(){

    }
    goBack(){
        this.navCtrl.parent.select(2);
    }
  changeLoginPwd(){
      console.log(this.oldloginpwd);
      var reg = new RegExp(/^\d{6}$/);
      var reg1 = new RegExp(/^[a-zA-Z]{1}([a-zA-Z0-9]|[_]){7,19}$/);
      if(this.CaptchaL==""){
          this.alertCommon(this.translateObj.warNewLoginYZMEmpty,'');
          return;
      }

      // alert(reg.test('123456'));
      if( !reg.test(this.CaptchaL)){
          this.showPopupQ("",this.translateObj.veriCodMustLog);
          return;
      }
      if(this.oldloginpwd === this.newloginpwd){
          this.alertCommon('',this.translateObj.warNewCannotEqualOld);
          return;
      }
      if(this.oldloginpwd==""){
          this.alertCommon('',this.translateObj.warOldLoginPwEmpty);
          return;
      }
      if(!reg1.test(this.oldloginpwd)){
          this.showPopupQ("",this.translateObj.oldPsw_Reg);
          return;
      }else if(this.oldloginpwd.length<8){
          this.showPopupQ("",this.translateObj.oldPsw_Reg);
          return;
      }else if(this.oldloginpwd.length>20){
          this.showPopupQ("",this.translateObj.oldPsw_Reg);
          return;
      }

      if(this.newloginpwd==""){
          this.alertCommon('',this.translateObj.warNewLoginPwEmpty);
          return;
      }

      if(!reg1.test(this.newloginpwd)){
          this.showPopupQ("",this.translateObj.newPsw_Reg);
          return;
      }else if(this.newloginpwd.length<8){
          this.showPopupQ("",this.translateObj.newPsw_Reg);
          return;
      }else if(this.newloginpwd.length>20){
          this.showPopupQ("",this.translateObj.newPsw_Reg);
          return;
      }


      if(this.newloginpwd !=""){
          this.pwdCompar.oldPassword =this.oldloginpwd;
          this.pwdCompar.newPassword=this.newloginpwd;
          this.pwdCompar.captcha =this.CaptchaL;
          console.log(this.pwdCompar)
          this.authService.changeLoginPwdSer(this.pwdCompar).then(success=>{
              console.log(success)
              if(success.ret_code=="1"){
                  this.alert = this.alertCtrl.create({
                      message : this.translateObj.changeLoginPwSuc,
                      buttons: [{
                          text: this.translateObj.confirm,
                          handler: () => {
                              let navTransition = this.alert.dismiss();
                              this.navCtrl.parent.select(2);
                              return false;
                          }
                      }]
                  });
                  this.alert.present();
              }else{
                  this.alert = this.alertCtrl.create({
                      title: '',
                      message:success.ret_msg,
                      buttons: [{
                          text: this.translateObj.confirm,
                          handler: () => {
                              let navTransition = this.alert.dismiss();
                              // this.navCtrl.parent.select(2);

                              return false;
                          }
                      }]
                  });
                  this.alert.present();
              }
          })
      }else{
        this.alertCommon('',this.translateObj.warLoginPwNotSame);
        return;

      }


  }

  changeFinPwd(){
      debugger
      console.log(this.oldfinpwd);
      // alert(reg.test('123456'));
      var reg = /^\d{6}\b/;
      // var txt = "123456";
      // if(reg.test(txt)){
      //     alert("ok");
      // }else{
      //     alert("error");
      // }
      if( !reg.test(this.CaptchaF)){
          this.showPopupQ("",this.translateObj.veriCodMustF);
          return;
      }
      if(!reg.test(this.oldfinpwd) ){
          this.alertCommon(this.translateObj.warning, this.translateObj.warOldAssetPw6)
          return;
      }
      if(!reg.test(this.newfinpwd) ){
          this.alertCommon(this.translateObj.warning, this.translateObj.warNewAssetPw6)
          return;
      }



      if(this.newfinpwd!=""){
      this.pwdCompar.oldPassword =this.oldfinpwd;
          this.pwdCompar.newPassword=this.newfinpwd;
          this.pwdCompar.captcha =this.CaptchaF;
          console.log(this.pwdCompar)
          this.authService.changeFinancialPwd(this.pwdCompar).then(success=>{
              console.log(success)
              if(success.ret_code=="1"){
                  let alert = this.alertCtrl.create({
                      title: this.translateObj.changeAssetPwSuc,
                      buttons: [{
                          text: this.translateObj.confirm,
                          handler: () => {
                              let navTransition = alert.dismiss();
                              this.navCtrl.parent.select(2);
                              return false;
                          }
                      }]
                  });
                  alert.present();
              }else{
                  let alert = this.alertCtrl.create({
                      title: '',
                      message:success.ret_msg,
                      buttons: [{
                          text: this.translateObj.confirm,
                          handler: () => {
                              let navTransition = alert.dismiss();
                              // this.navCtrl.parent.select(2);

                              return false;
                          }
                      }]
                  });
                  alert.present();
              }
          })
      }else{
          this.alertCommon('',this.translateObj.warAssetPwNotSame);
          return;

      }

  }
  alertCommon(title,message){
      this.alert = this.alertCtrl.create({
          title: title,
          message: message,
          enableBackdropDismiss:false,
          buttons: [{
                        text: this.translateObj.confirm,
                        handler: () => {
                            // this.navCtrl.parent.select(2);
                        }
                    }]
      });
      this.alert.present();
  }
    showPopupQ(title,text){
        this.alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            enableBackdropDismiss:false,
            buttons: [
                {
                    text: this.translateObj.confirm,
                    handler: data => {
                    }
                }
            ]
        });
        this.alert.present();
    }
    liginValidL(CaptchaL){
       console.log(CaptchaL);
       if(CaptchaL.length>6){
           this.CaptchaL = CaptchaL.substring(0,6);
       }
    }
    liginPValidL(oldloginpwd){
        console.log(oldloginpwd);
        if(oldloginpwd.length>6){
            this.oldloginpwd = oldloginpwd.substring(0,20);
        }
    }
    liginrePValidL(newloginpwd){
        console.log(newloginpwd);
        if(newloginpwd.length>6){
            this.newloginpwd = newloginpwd.substring(0,20);
        }
    }

    liginValidF(CaptchaF){
        console.log(CaptchaF);
        if(CaptchaF.length>6){
            this.CaptchaF = CaptchaF.substring(0,6);
        }
    }
    liginPValidF(oldfinpwd){
        console.log(oldfinpwd);
        if(oldfinpwd.length>6){
            this.oldfinpwd = oldfinpwd.substring(0,6);
        }
    }
    liginrePValidF(newfinpwd){
        console.log(newfinpwd);
        if(newfinpwd.length>6){
            this.newfinpwd = newfinpwd.substring(0,6);
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
