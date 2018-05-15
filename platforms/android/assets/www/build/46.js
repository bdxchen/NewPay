webpackJsonp([46],{

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(960);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    return RegisterPageModule;
}());
RegisterPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], RegisterPageModule);

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 960:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_auth_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_countryNum_country_num_service__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_translate__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_commonUtils__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_backbutton_service__ = __webpack_require__(398);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var RegisterPage = (function () {
    function RegisterPage(nav, auth, alertCtrl, countryNumService, modalCtrl, translate, commonUtils, backButtonService) {
        var _this = this;
        this.nav = nav;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.countryNumService = countryNumService;
        this.modalCtrl = modalCtrl;
        this.translate = translate;
        this.commonUtils = commonUtils;
        this.backButtonService = backButtonService;
        this.country = { countryName: '', phoneCode: '', countryCode: '86' };
        this.createSuccess = false;
        this.countryCode = '86';
        this.registerCredentials = { userid: '', password: '', country: 'CN', captcha: '888888' };
        this.verifyCode = {
            verifyCodeTips: "",
            countdown: 60,
            disable: true
        };
        this.mCode = { nationCode: '', phoneNo: '' };
        this.backButtonService.registerBackButtonAction(null);
        this.translate.get('register').subscribe(function (res) {
            _this.translateObj = res;
            _this.verifyCode.verifyCodeTips = _this.translateObj.getVeriCode;
        });
        this.countryNumService.getCountryNumber().then(function (success) {
            console.log(success);
            if (success) {
                _this.countryN = success.data;
                // this.selectOptions = {
                //     title: this.translateObj.chooseCountryCodeTitle,
                //     // subTitle: 'Select your toppings',
                //     mode: 'ios'
                // };
            }
        });
    }
    RegisterPage.prototype.Okay = function () {
        console.log("DDDDDDDDDDDDDD");
    };
    // changeCountry(){
    //     console.log(this.NEWcountry)
    //
    //     this.country.phoneCode =this.NEWcountry.split("::")[1];
    //     this.country.countryCode= this.NEWcountry.split("::")[0];
    //     this.mCode.nationCode=this.NEWcountry.split("::")[1];
    // }
    RegisterPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter LoginPage');
        localStorage.setItem("flagBack", "2");
    };
    RegisterPage.prototype.ZCcheckedGUOJBM = function () {
        var _this = this;
        console.log();
        this.modal = this.modalCtrl.create('CountryCodePage');
        this.modal.onDidDismiss(function (data) {
            console.log(data);
            if (data) {
                _this.country.countryCode = data.countryCode;
                localStorage.setItem('country', data.phoneCode);
                _this.registerCredentials.country = data.countryCode;
                _this.mCode.nationCode = data.phoneCode;
            }
        });
        this.modal.present();
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
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
        localStorage.setItem('country', '86');
        this.registerCredentials.country = 'CN';
        this.mCode.nationCode = '86';
    };
    RegisterPage.prototype.compareFn = function () {
        alert("#########");
    };
    RegisterPage.prototype.goBack = function () {
        this.nav.pop();
    };
    //获取验证码
    RegisterPage.prototype.getCode = function () {
        var _this = this;
        if (this.mCode.nationCode == "") {
            this.commonUtils.alertCommon('', this.translateObj.courtyCode);
            return;
        }
        this.mCode.phoneNo = this.registerCredentials.userid;
        if (this.mCode.phoneNo == '') {
            this.showPopupQ("", this.translateObj.TelCodeEmpty);
            return;
        }
        var regUserid = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
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
        this.auth.getCode(this.mCode).then(function (success) {
            debugger;
            debugger;
            if (success != null) {
                if (success.ret_code == 0) {
                    _this.showPopupQ("", _this.translateObj.veriCodeSendSuccess);
                    //发送验证码成功后开始倒计时
                    _this.verifyCode.disable = false;
                    _this.settime();
                }
                else {
                    // this.showPopupQ("", success.ret_msg);
                    _this.showPopupQ("", _this.translateObj.ret_msg);
                }
                // else if(!success.success){
                //     this.showPopupQ("", this.translateObj.serviceErr);
                // }
            }
        }, function (error) {
            _this.showPopupQ("", _this.translateObj.netErr);
        });
    };
    //开始注册
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.registerCredentials.country = this.country.countryCode;
        console.log(this.country);
        console.log(this.registerCredentials.country);
        console.log(this.registerCredentials);
        if (this.registerCredentials.userid == '') {
            this.showPopupQ("", this.translateObj.TelCodeEmpty);
            return;
        }
        var regUserid = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
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
        }
        else if (this.registerCredentials.password.length < 8) {
            this.showPopupQ("", this.translateObj.psw_Reg);
            return;
        }
        else if (this.registerCredentials.password.length > 20) {
            this.showPopupQ("", this.translateObj.psw_Reg);
            return;
        }
        // if(this.registerCredentials.password != this.password1){
        //     this.showPopupQ("",this.translateObj.passwNotSame);
        //     return;
        // }
        if (this.userAgreement) {
            //发送注册请求
            this.auth.register(this.registerCredentials).then(function (success) {
                if (success) {
                    if (success.ret_code == "1") {
                        _this.showPopup("", _this.translateObj.registerSuccess);
                    }
                    else {
                        _this.showPopupQ("", success.ret_msg);
                        // this.showPopupQ("", this.translateObj.ret_msg);
                    }
                }
                else {
                    _this.showPopupQ("", _this.translateObj.serviceErr);
                }
            }).catch(function (err) {
                _this.showPopupQ("Error", _this.translateObj.netErr);
            });
        }
        else {
            this.showPopupQ("", this.translateObj.checkUserAgreement);
            return;
        }
    };
    RegisterPage.prototype.showPopupQ = function (title, text) {
        this.alert = this.alertCtrl.create({
            title: title,
            message: text,
            buttons: [
                {
                    text: this.translateObj.confirm,
                    handler: function (data) {
                    }
                }
            ]
        });
        this.alert.present();
    };
    RegisterPage.prototype.showPopup = function (title, text) {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: title,
            message: text,
            buttons: [
                {
                    text: this.translateObj.confirm,
                    handler: function (data) {
                        localStorage.removeItem('password');
                        localStorage.removeItem('checked');
                        _this.nav.push('LoginPage', { 'register': 1, 'userid': _this.registerCredentials.userid, 'password': _this.registerCredentials.password }); //把用户名和密码等带到登录页面
                    }
                }
            ]
        });
        this.alert.present();
    };
    // 倒计时
    RegisterPage.prototype.settime = function () {
        var _this = this;
        if (this.verifyCode.countdown == 1) {
            this.verifyCode.countdown = 60;
            this.verifyCode.verifyCodeTips = this.translateObj.getVeriCode;
            this.verifyCode.disable = true;
            return;
        }
        else {
            this.verifyCode.countdown--;
        }
        this.verifyCode.verifyCodeTips = this.translateObj.getVeriCodeAgain + "(" + this.verifyCode.countdown + ")";
        setTimeout(function () {
            _this.verifyCode.verifyCodeTips = _this.translateObj.getVeriCodeAgain + "(" + _this.verifyCode.countdown + ")";
            _this.settime();
        }, 1000);
    };
    RegisterPage.prototype.inputNameKu = function (userid) {
        if (this.registerCredentials.country == "CN") {
            if (userid.length > 11) {
                //截取前10个字符
                console.log(userid.length);
                this.registerCredentials.userid = userid.substring(0, 11);
            }
        }
    };
    RegisterPage.prototype.updateCucumberZ = function () {
        var _this = this;
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
                        handler: function () {
                            console.log('Disagree clicked');
                            _this.userAgreement = false;
                        }
                    },
                    {
                        text: '确定',
                        handler: function () {
                            console.log('Agree clicked');
                            _this.userAgreement = true;
                        }
                    }
                ]
            });
            this.alert.present();
        }
    };
    RegisterPage.prototype.ionViewWillLeave = function () {
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
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-register',template:/*ion-inline-start:"E:\newpay\newpay\src\pages\auth\register\register.html"*/'<ion-content fullscreen ionScroll="false" style="background-color: white !important;">\n    <div class="registerCon">\n        <img src="assets/img/register/registBack.png" class="IMGST">\n\n        <img class="logo" src="assets/img/logo/logo.png"/>\n        <div tappable (click)="goBack()">\n            <button ion-button clear start icon-only>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </div>\n    </div>\n    <div class="login-container">\n        <form #registerForm="ngForm">\n            <ion-list>\n                <!--<ion-item no-lines style="border-bottom: 1px solid #dedede;">-->\n                <!--<ion-label><img src="assets/img/country/{{country.countryCode}}.png"  style="width: 30px;height: 17px"/></ion-label>-->\n                <!--<ion-select [selectOptions]="selectOptions" name="country" [(ngModel)]="NEWcountry" (ngModelChange)="NEWcountry=$event; changeCountry()">-->\n                <!--<ion-option value="{{country.countryCode}}::{{country.phoneCode}}" *ngFor="let country of countryN"  okText="Okay" cancelText="Dismiss">{{country.countryName}}</ion-option>-->\n                <!--</ion-select>-->\n                <!--</ion-item>-->\n\n                <!--输入手机号-->\n                <ion-item>\n                    <ion-label>\n                        <span style="font-size: 1.5rem;">+{{countryCode}}</span>\n                        <ion-icon ios="md-arrow-dropdown" md="md-arrow-dropdown"></ion-icon>\n                    </ion-label>\n                    <ion-input placeholder="{{\'register.inputTel\' | translate }}" type="number" name="userid" [(ngModel)]="registerCredentials.userid" (keyup)="inputNameKu(registerCredentials.userid)" required></ion-input>\n                </ion-item>\n                <!--输入密码-->\n                <ion-item>\n                    <ion-input placeholder="{{\'register.inputNewPw\' | translate }}" type="password" name="password1" [(ngModel)]="registerCredentials.password" required></ion-input>\n                </ion-item>\n                <!--输入验证码-->\n                <!--<ion-item>\n\n                    <ion-input style="width:75%;" placeholder="{{\'register.verificationCode\' | translate }}" type="number" name="captcha" [(ngModel)]="registerCredentials.captcha" required></ion-input>\n                    <button ion-button [disabled]="!verifyCode.disable" tappable (click)="getCode()" style="color: #0dacfa">{{verifyCode.verifyCodeTips}}</button>\n                </ion-item>-->\n\n\n                <!--<ion-item no-lines style="border-bottom: 1px solid #dedede;">\n                    &lt;!&ndash;<ion-label>{{country.phoneCode}}</ion-label>&ndash;&gt;\n                    &lt;!&ndash;(click)="ZCcheckedGUOJBM()"&ndash;&gt;\n                    <div item-start style="color:#808080;" tappable>+{{countryCode}}\n                        <ion-icon ios="md-arrow-dropdown" md="md-arrow-dropdown"></ion-icon>\n                    </div>\n                    <ion-input placeholder="{{\'register.inputTel\' | translate }}" type="number" name="userid"\n                               [(ngModel)]="registerCredentials.userid"\n                               (keyup)="inputNameKu(registerCredentials.userid)" required></ion-input>\n                </ion-item>-->\n                <!--<ion-item no-lines style="border-bottom: 1px solid #dedede;">\n                    &lt;!&ndash;<ion-label floating>Username</ion-label>&ndash;&gt;\n                    <ion-input placeholder="{{\'register.inputNewPw\' | translate }}" type="password" name="password1"\n                               [(ngModel)]="registerCredentials.password" required></ion-input>\n                </ion-item>-->\n\n                <!--<ion-item no-lines style="border-bottom: 1px solid #dedede;">-->\n                <!--&lt;!&ndash;<ion-label floating>Username</ion-label>&ndash;&gt;-->\n                <!--<ion-input placeholder="{{\'register.inputConfirmPw\' | translate }}" type="password" name="password" [(ngModel)]="password1" required></ion-input>-->\n                <!--</ion-item>-->\n\n                <div style="display: flex;margin-top: 10px; padding-left: 15px">\n                    <div class="leftSt">\n                        <ion-input class="inputSt" placeholder="{{\'register.verificationCode\' | translate }}"\n                                   name="captcha" type="text" [(ngModel)]="registerCredentials.captcha"></ion-input>\n                    </div>\n                    <div style="display: inline-flex;flex: 1;">\n                        <button ion-button color="secondary" clear [disabled]="!verifyCode.disable" tappable (click)="getCode()" style="color: #0dacfa; height: 2.8rem; font-size: 1.4rem;">{{verifyCode.verifyCodeTips}}\n                        </button>\n                    </div>\n                </div>\n\n                <div class="btnST">\n                    <button ion-button full class="nextST" tappable (click)="register()">{{\'register.register\' |\n                        translate }}\n                    </button>\n                </div>\n                <ion-item style="padding: 0; font-size: 1.4rem; color: #85d6fc;" no-lines no-padding no-margin>\n                    <ion-label item-end>{{\'register.agreement\' | translate }}</ion-label>\n                    <ion-checkbox name="cucumberZ" checked="false" [(ngModel)]="cucumberZ"\n                                  (ionChange)="updateCucumberZ()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n                </ion-item>\n            </ion-list>\n        </form>\n    </div>\n</ion-content>\n'/*ion-inline-end:"E:\newpay\newpay\src\pages\auth\register\register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_countryNum_country_num_service__["a" /* CountryNumService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4_ng2_translate__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__providers_common_commonUtils__["a" /* CommonUtils */], __WEBPACK_IMPORTED_MODULE_6__providers_backbutton_service__["a" /* BackbuttonService */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=46.js.map