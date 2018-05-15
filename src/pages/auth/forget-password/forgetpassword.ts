import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { AuthService } from '../../../providers/user-service/user-auth-service';
import { ReqLogin, AckLogin, ReqLogout, AckLogout,  ReqRegister, AckRegister, Code } from '../../../providers/messages/user-auth-msg';
import { CountryNumService } from '../../../providers/countryNum/country-num-service'
import { TranslateService } from 'ng2-translate';
import { CommonUtils} from  '../../../providers/common/commonUtils'
import {BackbuttonService} from "../../../providers/backbutton-service";
/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-forgetpassword',
  templateUrl: 'forgetpassword.html'
})
export class ForgetPasswordPage {
    codeParam:any = {
        fromflag: 2,
        usertel:  ''

    }
    objParm:any ={};
    createSuccess = false;
    countryN:string[];
    country:any={countryName:'',phoneCode:'86',countryCode:''};
    NEWcountry:string;
    registerCredentials = {phone: '', idcardno: '',name:''};
    mCode: Code = { nationCode:'86',phoneNo:''};
    translateObj: any;
    userid:string;
    // 验证码倒计时
    verifyCode: any = {
        verifyCodeTips: "",
        countdown: 60,
        disable: true
    }

  constructor(private nav: NavController, public navParams: NavParams, private auth: AuthService, private alertCtrl: AlertController,
              public countryNumService:CountryNumService, public translate:TranslateService,
              private commonUtils:CommonUtils,private backButtonService:BackbuttonService) {

      this.backButtonService.registerBackButtonAction(null);
      this.userid= this.navParams.get('userid');
      this.codeParam.usertel = this.navParams.get('userid');
      this.translate.get('forgetPassword').subscribe((res: any) => {
          this.translateObj = res;
          console.log("forgetPAss",res)
          this.verifyCode.verifyCodeTips = this.translateObj.getVeriCode;
      });
  }

    changeCountry(){
        console.log(this.NEWcountry)

        this.country.phoneCode =this.NEWcountry.split("::")[1];
        this.country.countryCode= this.NEWcountry.split("::")[0];
        this.mCode.nationCode=this.NEWcountry.split("::")[1];
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
      // this.codeParam.usertel = localStorage.getItem("userid")
      this.countryNumService.getCountryNumber().then(success=>{
          console.log(success)
          if(success){
              this.countryN =  success.data;
          }
      })
  }
    ionViewWillEnter() {
        console.log('ionViewWillEnter LoginPage');
        localStorage.setItem("flagBack","2")
    }
  public resetPassword() {
        debugger
      if (this.codeParam.usertel == '') {
          this.showPopupQ("",this.translateObj.TelCodeEmpty);
          return;
      }
      var reg = new RegExp(/^\d{6}$/);
      this.registerCredentials.idcardno = this.registerCredentials.idcardno.trim()
      if(this.registerCredentials.idcardno.length!=6){
          this.showPopupQ("",this.translateObj.idcardnoTi);
          return;
      }
      // alert(reg.test('123456'));
      if (!reg.test(this.registerCredentials.idcardno)) {
          this.showPopupQ("",this.translateObj.idcardnoTi);
          return;
      }
      this.objParm.nationCode ='86';
      this.objParm.phoneNo =this.codeParam.usertel;
      this.objParm.captcha =this.registerCredentials.idcardno;

      this.auth.getveryficaptcha(this.objParm).then(res=>{
        console.log(res)
          if(res.ret_code=="1"){
              this.nav.push('PasswordResetPage', {country:this.mCode.nationCode, phoneCode: this.mCode.phoneNo, idcardno: this.registerCredentials.idcardno});
          }else if(res.ret_code=="0"){
              this.commonUtils.alertCommon('',res.ret_msg);
              return;
          }
      })

    }

    // 倒计时
    settime() {
        if (this.verifyCode.countdown == 1) {
            this.verifyCode.countdown = 60;
            this.verifyCode.verifyCodeTips = this.translateObj.getVeriCode;
            this.verifyCode.disable = true;
            return;
        } else {
            this.verifyCode.countdown--;
        }

        this.verifyCode.verifyCodeTips = this.translateObj.getVeriCodeAgain+"(" + this.verifyCode.countdown + ")";
        setTimeout(() => {
            // this.verifyCode.verifyCodeTips = this.translateObj.getVeriCodeAgain+"(" + this.verifyCode.countdown + ")";
            this.settime();
        }, 1000);
    }
    getCode() {
        // console.log(ICode)
        console.log("获取验证码");
        if (this.codeParam.usertel == '') {
            this.showPopupQ("",this.translateObj.needInputTel);
            return;
        }

        //发送验证码成功后开始倒计时



        this.mCode.phoneNo = this.codeParam.usertel;
        if (this.mCode.phoneNo == '') {
            this.showPopupQ("",this.translateObj.TelCodeEmpty);
            return;
        }
        if(!(/^1[34578]\d{9}$/.test(this.mCode.phoneNo))){
            this.showPopupQ("",this.translateObj.TelCodeErr);
            return;
        }
        //验证码请求
        this.auth.getResetLoginPwCode(this.mCode).then(success => {
                if (success !="") {
                    if(success.ret_code == "1"){
                        this.showPopupQ("",this.translateObj.veriCodeSendSuccess);
                        //发送验证码成功后开始倒计时
                        this.verifyCode.disable = false;
                        this.settime();
                    }
                    // else if(!success.success){
                    //     this.showPopupQ("", this.translateObj.serviceErr);
                    // }
                    else {
                        if(success.ret_msg){
                            this.showPopupQ("",success.ret_msg);
                            this.verifyCode.disable = true;
                        }

                    }
                }
            },
            error => {
                this.showPopupQ("",this.translateObj.netErr);
            });
    }
    showPopupQ(title,text){
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: this.translateObj.confirm,
                    handler: data => {
                    }
                }
            ]
        });
        alert.present();
    }
    showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
       {
         text: this.translateObj.confirm,
         handler: data => {
           if (this.createSuccess) {
             this.nav.popToRoot();
           }
         }
       }
     ]
    });
    alert.present();
  }
    goBack(){
    this.nav.pop();
    }
    yanzmValid(amount){
        console.log(amount);
        this.registerCredentials.idcardno = amount.toString();
        // this.submitOrder.amount = Math.floor(amount * 100) / 100;
        console.log(amount)
        if(amount.length>6){
            this.registerCredentials.idcardno = amount.substring(0,6);
        }

    }
}
