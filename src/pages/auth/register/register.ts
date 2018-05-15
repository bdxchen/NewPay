import {Component} from '@angular/core';
import {IonicPage, NavController, AlertController, ModalController, Alert, Modal, Loading} from 'ionic-angular';
import {AuthService} from '../../../providers/user-service/user-auth-service';
import {ReqRegister, AckRegister, Code} from '../../../providers/messages/user-auth-msg';
import {CountryNumService} from '../../../providers/countryNum/country-num-service';
import {TranslateService} from 'ng2-translate';
import {CommonUtils} from '../../../providers/common/commonUtils'
import {BackbuttonService} from "../../../providers/backbutton-service";

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})
export class RegisterPage {
    countryN: string[];
    modal: Modal;
    loading: Loading;
    selectOptions: any;
    cucumberZ: boolean;
    userAgreement: boolean;
    country: any = {countryName: '', phoneCode: '', countryCode: '86'};
    createSuccess = false;
    NEWcountry: string;
    countryCode: string = '86';
    registerCredentials: ReqRegister = {userid: '', password: '', country: 'CN', captcha: '888888'};
    translateObj: any;
    // 验证码倒计时
    alert: Alert;
    verifyCode: any = {
        verifyCodeTips: "",
        countdown: 60,
        disable: true
    };

    constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController,
                public countryNumService: CountryNumService,
                private modalCtrl: ModalController,
                public translate: TranslateService, private commonUtils: CommonUtils,private backButtonService:BackbuttonService) {

        this.backButtonService.registerBackButtonAction(null);
        this.translate.get('register').subscribe((res: any) => {
            this.translateObj = res;
            this.verifyCode.verifyCodeTips = this.translateObj.getVeriCode;
        });
        this.countryNumService.getCountryNumber().then(success => {
            console.log(success)
            if (success) {
                this.countryN = success.data;
                // this.selectOptions = {
                //     title: this.translateObj.chooseCountryCodeTitle,
                //     // subTitle: 'Select your toppings',
                //     mode: 'ios'
                // };
            }
        })
    }

    password1: string;
    mCode: Code = {nationCode: '', phoneNo: ''}

    Okay() {
        console.log("DDDDDDDDDDDDDD")
    }

    // changeCountry(){
    //     console.log(this.NEWcountry)
    //
    //     this.country.phoneCode =this.NEWcountry.split("::")[1];
    //     this.country.countryCode= this.NEWcountry.split("::")[0];
    //     this.mCode.nationCode=this.NEWcountry.split("::")[1];
    // }
    ionViewWillEnter() {
        console.log('ionViewWillEnter LoginPage');
        localStorage.setItem("flagBack","2")
    }
    ZCcheckedGUOJBM() {
        console.log()
        this.modal = this.modalCtrl.create('CountryCodePage');
        this.modal.onDidDismiss(data => {
            console.log(data);
            if (data) {
                this.country.countryCode = data.countryCode;
                localStorage.setItem('country', data.phoneCode)
                this.registerCredentials.country = data.countryCode;
                this.mCode.nationCode = data.phoneCode;
            }

        });
        this.modal.present();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterPage');
        // this.countryNumService.getCountryNumber().subscribe(success=>{
        //     console.log(success)
        //     if(success){
        //       this.countryN =  success.data;
        //         this.country.countryCode=   success.data[0].phoneCode;
        //         localStorage.setItem('country',success.data[0].phoneCode)
        //         this.registerCredentials.country =success.data[0].countryCode;
        //         this.mCode.nationCode =success.data[0].phoneCode;
        //     }
        // })
        this.country.countryCode = 'CN';
        localStorage.setItem('country', '86')
        this.registerCredentials.country = 'CN';
        this.mCode.nationCode = '86';
    }

    compareFn() {
        alert("#########")
    }

    goBack() {
        this.nav.pop()
    }

    //获取验证码
    getCode() {
        if (this.mCode.nationCode == "") {
            this.commonUtils.alertCommon('', this.translateObj.courtyCode);
            return;
        }
        this.mCode.phoneNo = this.registerCredentials.userid;
        if (this.mCode.phoneNo == '') {
            this.showPopupQ("", this.translateObj.TelCodeEmpty);
            return;
        }
        let regUserid = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
        if (!regUserid.test(this.mCode.phoneNo)) {
            if (this.registerCredentials.country == "CN") {
                this.showPopupQ("", this.translateObj.TelCodeEmpty);
                return;
            }

        }
        // if(!(/^1[34578]\d{9}$/.test(this.mCode.phoneNo))){
        //     this.showPopupQ("",this.translateObj.TelCodeErr);
        //     return;
        // }
        //验证码请求
        this.auth.getCode(this.mCode).then(success => {
            debugger
                debugger
                if (success != null) {
                    if (success.ret_code == 0) {
                        this.showPopupQ("", this.translateObj.veriCodeSendSuccess);
                        //发送验证码成功后开始倒计时
                        this.verifyCode.disable = false;
                        this.settime();
                    } else {
                        // this.showPopupQ("", success.ret_msg);
                        this.showPopupQ("", this.translateObj.ret_msg);
                    }

                    // else if(!success.success){
                    //     this.showPopupQ("", this.translateObj.serviceErr);
                    // }

                }
            },
            error => {
                this.showPopupQ("", this.translateObj.netErr);
            });
    }

    //开始注册
    register() {
        this.registerCredentials.country = this.country.countryCode;
        console.log(this.country);
        console.log(this.registerCredentials.country);
        console.log(this.registerCredentials)
        if (this.registerCredentials.userid == '') {
            this.showPopupQ("", this.translateObj.TelCodeEmpty);
            return;
        }
        let regUserid = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
        if (!regUserid.test(this.registerCredentials.userid)) {
            if (this.registerCredentials.country == "CN") {
                this.showPopupQ("", this.translateObj.TelCodeEmpty);
                return;
            }

        }
        // if(!(/^1[34578]\d{9}$/.test(this.registerCredentials.userid))){
        //     this.showPopupQ("",this.translateObj.TelCodeErr);
        //     return;
        // }
        var reg = new RegExp(/^\d{6}$/);
        if (!reg.test(this.registerCredentials.captcha)) {
            this.showPopupQ("", this.translateObj.veriCodeEmpty);
            return;
        }
        if (this.registerCredentials.password == '' || this.password1 == '') {
            this.showPopupQ("", this.translateObj.pwEmpty);
            return;
        }
        var reg1 = new RegExp(/^[a-zA-Z]{1}([a-zA-Z0-9]|[_]){7,19}$/);
        if (!reg1.test(this.registerCredentials.password)) {
            this.showPopupQ("", this.translateObj.psw_Reg);
            return;
        } else if (this.registerCredentials.password.length < 8) {
            this.showPopupQ("", this.translateObj.psw_Reg);
            return;
        } else if (this.registerCredentials.password.length > 20) {
            this.showPopupQ("", this.translateObj.psw_Reg);
            return;
        }
        // if(this.registerCredentials.password != this.password1){
        //     this.showPopupQ("",this.translateObj.passwNotSame);
        //     return;
        // }
        if (this.userAgreement) {
            //发送注册请求
            this.auth.register(this.registerCredentials).then(success => {
                    if (success) {
                        if (success.ret_code == "1") {

                            this.showPopup("", this.translateObj.registerSuccess);

                        } else {
                            this.showPopupQ("", success.ret_msg);
                            // this.showPopupQ("", this.translateObj.ret_msg);
                        }
                    } else {
                        this.showPopupQ("", this.translateObj.serviceErr);
                    }
                }).catch(err=>{
                    this.showPopupQ("Error", this.translateObj.netErr);
            });
        } else {
            this.showPopupQ("", this.translateObj.checkUserAgreement);
            return;
        }

    }

    showPopupQ(title, text) {
        this.alert = this.alertCtrl.create({
            title: title,
            message: text,
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

    showPopup(title, text) {
        this.alert = this.alertCtrl.create({
            title: title,
            message: text,
            buttons: [
                {
                    text: this.translateObj.confirm,
                    handler: data => {
                        localStorage.removeItem('password');
                        localStorage.removeItem('checked');
                        this.nav.push('LoginPage', {'register':1,'userid':this.registerCredentials.userid,'password':this.registerCredentials.password})//把用户名和密码等带到登录页面
                    }
                }
            ]
        });
        this.alert.present();
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

        this.verifyCode.verifyCodeTips = this.translateObj.getVeriCodeAgain + "(" + this.verifyCode.countdown + ")";
        setTimeout(() => {
            this.verifyCode.verifyCodeTips = this.translateObj.getVeriCodeAgain + "(" + this.verifyCode.countdown + ")";
            this.settime();
        }, 1000);
    }

    inputNameKu(userid) {
        if (this.registerCredentials.country == "CN") {
            if (userid.length > 11) {
                //截取前10个字符
                console.log(userid.length)
                this.registerCredentials.userid = userid.substring(0, 11);

            }
        }
    }

    updateCucumberZ() {
        console.log('Cucumbers new state:' + this.cucumberZ);
        if (this.cucumberZ) {
            this.alert = this.alertCtrl.create({
                title: '注册提示',
                message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?' +
                'Do you agree to use this lightsaber to do good across the intergalactic galaxy?' +
                'Do you agree to use this lightsaber to do good across the intergalactic galaxy?' +
                'Do you agree to use this lightsaber to do good across the intergalactic galaxy?Do you agre' +
                'e to use this lightsaber to do good across the intergalactic galaxy?Do you agree to ' +
                'use this lightsaber to do good across the intergalactic galaxy?Do you agree to ' +
                'use this lightsaber to do good across th' +
                'e intergalactic galaxy?Do you agree to use this lightsaber to do good across the ' +
                'intergalactic galaxy?' +
                'Do you agree to use this lightsaber to do good across the intergalactic galaxy?' +
                'Do you agree to use this lightsaber to do good across the intergalactic galaxy?' +
                'Do you agree to use this lightsaber to do good across the intergalactic galaxy?' +
                'Do you agree to use this lightsaber to do good across the intergalactic galaxy?' +
                'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
                buttons: [
                    {
                        text: '取消',
                        handler: () => {
                            console.log('Disagree clicked');
                            this.userAgreement = false;
                        }
                    },
                    {
                        text: '确定',
                        handler: () => {
                            console.log('Agree clicked');
                            this.userAgreement = true;
                        }
                    }
                ]
            });
            this.alert.present();
        }
    }

    ionViewWillLeave() {
        if (this.alert) {
            this.alert.dismiss();
        }
        if (this.loading) {
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
