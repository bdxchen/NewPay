import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams, Loading, Alert} from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import { AuthService } from '../../providers/user-service/user-auth-service';
import { CommonUtils } from '../../providers/common/commonUtils'
/**
 * Generated class for the ResetZJpsdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-z-jpsd',
  templateUrl: 'reset-z-jpsd.html',
})
export class ResetZJpsdPage {
  phoneCode:string='86';
  countryCode :string="CN";
  usertel:string="";
  alert:Alert;
  idcardno:string;
    loader:Loading;
    request:any={captcha:'',newPassword:''};
    forget:any ={ ziJPwd:''}
    mCode:any;
  translateObj: any;
    // 验证码倒计时
    verifyCode: any = {
        verifyCodeTips: "",
        countdown: 60,
        disable: true
    }
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl:AlertController, public translate:TranslateService,
              private auth: AuthService,
              private loading:LoadingController,
              private commonUtils:CommonUtils) {
   this.usertel = localStorage.getItem('userid');
      this.translate.get('forgetPassword').subscribe((res: any) => {
          this.translateObj = res;
          console.log("forgetPAss",res)
          this.verifyCode.verifyCodeTips = this.translateObj.getVeriCode;
      });
  }
  back(){
   this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetZJpsdPage');
  }
    // 倒计时
    settime() {
      debugger
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
            this.verifyCode.verifyCodeTips = this.translateObj.getVeriCodeAgain+"(" + this.verifyCode.countdown + ")";
            this.settime();
        }, 1000);
    }
    getCode() {
        // console.log(ICode)
        console.log("获取验证码");
        if (this.usertel == '') {
            this.showPopupQ("",this.translateObj.needInputTel);
            return;
        }
        //发送验证码成功后开始倒计时
        //验证码请求
        this.commonUtils.showLoading();
        this.auth.getZiJinPwdValid().then(success => {
                this.commonUtils.HideLoading();
                if (success != null) {
                    if(success.ret_code == '1'){
                        this.showPopupQ("",this.translateObj.veriCodeSendSuccess);
                        //发送验证码成功后开始倒计时
                        this.verifyCode.disable = false;
                        this.settime();
                    }else {
                        this.showPopupQ("",success.ret_msg);

                    }
                } else {
                    this.showPopupQ("", this.translateObj.serviceErr);
                }
            },
            error => {
                this.commonUtils.HideLoading();
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
                        // if (this.createSuccess) {
                            this.navCtrl.pop();
                        // }
                    }
                }
            ]
        });
        alert.present();
    }
    resetZJPassword(){
       let reg = new RegExp(/^\d{6}$/);
       // alert(reg.test('123456'));
      console.log("重置资金密码");
      console.log(this.forget.ziJPwd );
      if(this.forget.ziJPwd==""){
        this.commonUtils.alertCommon('','资金密码为六位数字!');
        return;
      }
      if(!reg.test(this.forget.ziJPwd)){
          this.commonUtils.alertCommon('','资金密码为六位数字!');
          return;
      }
        if(!reg.test(this.idcardno)){
            this.commonUtils.alertCommon('','资金验证码为六位数字!');
            return;
        }
      this.request.newPassword =this.forget.ziJPwd;
        this.request.captcha=this.idcardno;
        this.commonUtils.showLoading();
      this.auth.getZiJinPwd(this.request).then(res=>{
      this.commonUtils.HideLoading();
      console.log(res)
       if(res.ret_code=="1"){
           this.alert = this.alertCtrl.create({
               title:this.translateObj.title,
               message: this.translateObj.resetTrue,
               enableBackdropDismiss:false,
               buttons: [
                   {
                       text: this.translateObj.confirm,
                       handler: data => {
                           this.navCtrl.pop();
                       }
                   }
               ]
           });
           this.alert.present();
       }else if(res.ret_code=="0"){
           this.commonUtils.alertCommon('',res.ret_msg);
       }
      }).catch(err=>{
         this.commonUtils.HideLoading();
         this.commonUtils.alertCommon('','网络链接超时,请重试')
      })
    }
    yanzmValid(amount){
        console.log(amount);
        this.idcardno = amount;
        // this.submitOrder.amount = Math.floor(amount * 100) / 100;
        console.log(amount)
        if(amount.length>10){
            this.idcardno = amount.substring(0,10);
        }

    }
    ZJMMValid(ziJPwd){
        this.forget.ziJPwd=ziJPwd.replace(/[^0-9]/ig,"");
        console.log(this.forget.ziJPwd);
        if(this.forget.ziJPwd.length>6){
            this.forget.ziJPwd  = this.forget.ziJPwd.substring(0,6);
        }
        // document.getElementById("ziJPwd").innerText=this.forget.ziJPwd
    }
    ionViewWillLeave(){
        if(this.alert){
            this.alert.dismiss();
        }
    }
}
