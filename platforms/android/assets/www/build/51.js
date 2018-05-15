webpackJsonp([51],{

/***/ 870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordPageModule", function() { return ForgetPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgetpassword__ = __webpack_require__(955);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ForgetPasswordPageModule = (function () {
    function ForgetPasswordPageModule() {
    }
    return ForgetPasswordPageModule;
}());
ForgetPasswordPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__forgetpassword__["a" /* ForgetPasswordPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgetpassword__["a" /* ForgetPasswordPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], ForgetPasswordPageModule);

//# sourceMappingURL=forgetpassword.module.js.map

/***/ }),

/***/ 955:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPasswordPage; });
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
var ForgetPasswordPage = (function () {
    function ForgetPasswordPage(nav, navParams, auth, alertCtrl, countryNumService, translate, commonUtils, backButtonService) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.countryNumService = countryNumService;
        this.translate = translate;
        this.commonUtils = commonUtils;
        this.backButtonService = backButtonService;
        this.codeParam = {
            fromflag: 2,
            usertel: ''
        };
        this.objParm = {};
        this.createSuccess = false;
        this.country = { countryName: '', phoneCode: '86', countryCode: '' };
        this.registerCredentials = { phone: '', idcardno: '', name: '' };
        this.mCode = { nationCode: '86', phoneNo: '' };
        // 验证码倒计时
        this.verifyCode = {
            verifyCodeTips: "",
            countdown: 60,
            disable: true
        };
        this.backButtonService.registerBackButtonAction(null);
        this.userid = this.navParams.get('userid');
        this.codeParam.usertel = this.navParams.get('userid');
        this.translate.get('forgetPassword').subscribe(function (res) {
            _this.translateObj = res;
            console.log("forgetPAss", res);
            _this.verifyCode.verifyCodeTips = _this.translateObj.getVeriCode;
        });
    }
    ForgetPasswordPage.prototype.changeCountry = function () {
        console.log(this.NEWcountry);
        this.country.phoneCode = this.NEWcountry.split("::")[1];
        this.country.countryCode = this.NEWcountry.split("::")[0];
        this.mCode.nationCode = this.NEWcountry.split("::")[1];
    };
    ForgetPasswordPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad RegisterPage');
        // this.codeParam.usertel = localStorage.getItem("userid")
        this.countryNumService.getCountryNumber().then(function (success) {
            console.log(success);
            if (success) {
                _this.countryN = success.data;
            }
        });
    };
    ForgetPasswordPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter LoginPage');
        localStorage.setItem("flagBack", "2");
    };
    ForgetPasswordPage.prototype.resetPassword = function () {
        var _this = this;
        debugger;
        if (this.codeParam.usertel == '') {
            this.showPopupQ("", this.translateObj.TelCodeEmpty);
            return;
        }
        var reg = new RegExp(/^\d{6}$/);
        this.registerCredentials.idcardno = this.registerCredentials.idcardno.trim();
        if (this.registerCredentials.idcardno.length != 6) {
            this.showPopupQ("", this.translateObj.idcardnoTi);
            return;
        }
        // alert(reg.test('123456'));
        if (!reg.test(this.registerCredentials.idcardno)) {
            this.showPopupQ("", this.translateObj.idcardnoTi);
            return;
        }
        this.objParm.nationCode = '86';
        this.objParm.phoneNo = this.codeParam.usertel;
        this.objParm.captcha = this.registerCredentials.idcardno;
        this.auth.getveryficaptcha(this.objParm).then(function (res) {
            console.log(res);
            if (res.ret_code == "1") {
                _this.nav.push('PasswordResetPage', { country: _this.mCode.nationCode, phoneCode: _this.mCode.phoneNo, idcardno: _this.registerCredentials.idcardno });
            }
            else if (res.ret_code == "0") {
                _this.commonUtils.alertCommon('', res.ret_msg);
                return;
            }
        });
    };
    // 倒计时
    ForgetPasswordPage.prototype.settime = function () {
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
            // this.verifyCode.verifyCodeTips = this.translateObj.getVeriCodeAgain+"(" + this.verifyCode.countdown + ")";
            _this.settime();
        }, 1000);
    };
    ForgetPasswordPage.prototype.getCode = function () {
        var _this = this;
        // console.log(ICode)
        console.log("获取验证码");
        if (this.codeParam.usertel == '') {
            this.showPopupQ("", this.translateObj.needInputTel);
            return;
        }
        //发送验证码成功后开始倒计时
        this.mCode.phoneNo = this.codeParam.usertel;
        if (this.mCode.phoneNo == '') {
            this.showPopupQ("", this.translateObj.TelCodeEmpty);
            return;
        }
        if (!(/^1[34578]\d{9}$/.test(this.mCode.phoneNo))) {
            this.showPopupQ("", this.translateObj.TelCodeErr);
            return;
        }
        //验证码请求
        this.auth.getResetLoginPwCode(this.mCode).then(function (success) {
            if (success != "") {
                if (success.ret_code == "1") {
                    _this.showPopupQ("", _this.translateObj.veriCodeSendSuccess);
                    //发送验证码成功后开始倒计时
                    _this.verifyCode.disable = false;
                    _this.settime();
                }
                else {
                    if (success.ret_msg) {
                        _this.showPopupQ("", success.ret_msg);
                        _this.verifyCode.disable = true;
                    }
                }
            }
        }, function (error) {
            _this.showPopupQ("", _this.translateObj.netErr);
        });
    };
    ForgetPasswordPage.prototype.showPopupQ = function (title, text) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: this.translateObj.confirm,
                    handler: function (data) {
                    }
                }
            ]
        });
        alert.present();
    };
    ForgetPasswordPage.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: this.translateObj.confirm,
                    handler: function (data) {
                        if (_this.createSuccess) {
                            _this.nav.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    ForgetPasswordPage.prototype.goBack = function () {
        this.nav.pop();
    };
    ForgetPasswordPage.prototype.yanzmValid = function (amount) {
        console.log(amount);
        this.registerCredentials.idcardno = amount.toString();
        // this.submitOrder.amount = Math.floor(amount * 100) / 100;
        console.log(amount);
        if (amount.length > 6) {
            this.registerCredentials.idcardno = amount.substring(0, 6);
        }
    };
    return ForgetPasswordPage;
}());
ForgetPasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-forgetpassword',template:/*ion-inline-start:"E:\newpay\newpay\src\pages\auth\forget-password\forgetpassword.html"*/'<!--<ion-header>-->\n<!--<ion-navbar color="secondary">-->\n<!--<ion-title>忘记密码</ion-title>-->\n<!--</ion-navbar>-->\n<!--</ion-header>-->\n<ion-header no-border>\n    <ion-toolbar color="secondary">\n        <ion-buttons left icon-only tappable (click)="goBack()">\n            <button ion-button icon-only>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title style="text-align: center">{{\'forgetPassword.findPw\' | translate}}</ion-title>\n        <ion-buttons right icon-only>\n            <button ion-button icon-only>\n                <ion-icon name=""></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <div class="login-container">\n        <ion-item *ngIf="userid==\'\'" no-lines style="text-align: center;border-bottom: 1px solid #f1f1f1">\n            <ion-label>+{{country.phoneCode}}</ion-label>\n            <ion-input type="number" placeholder="{{\'forgetPassword.inputTel\' | translate}}" name="phone"\n                       [(ngModel)]="codeParam.usertel" clearInput></ion-input>\n        </ion-item>\n        <ion-item *ngIf="userid!=\'\'" no-lines style="text-align: center;border-bottom: 1px solid #f1f1f1">\n            <!--<ion-label>+{{country.phoneCode}} {{codeParam.usertel}}</ion-label>-->\n            <!--<ion-input type="number" placeholder="{{\'forgetPassword.inputTel\' | translate}}" name="phone"-->\n                       <!--[(ngModel)]="codeParam.usertel" clearInput></ion-input>-->\n            <ion-label>+{{country.phoneCode}}</ion-label>\n            <ion-input type="number" placeholder="{{\'forgetPassword.inputTel\' | translate}}" name="phone"\n                       [(ngModel)]="codeParam.usertel" clearInput></ion-input>\n        </ion-item>\n        <ion-item no-lines style="text-align: center;">\n            <ion-input item-start type="number" placeholder="{{\'forgetPassword.verificationCode\' | translate}}"\n                       name="idcardno" (keyup)="yanzmValid(registerCredentials.idcardno)"\n                       [(ngModel)]="registerCredentials.idcardno" clearInput></ion-input>\n            <button item-end ion-button color="secondary" clear [disabled]="!verifyCode.disable" tappable\n                    (click)="getCode()" style="color: #0dacfa">{{verifyCode.verifyCodeTips}}\n            </button>\n        </ion-item>\n        <button style="margin:3rem auto; width: 90%; display: block; background: #7ecffa; border-radius: 4px;" ion-button full color="primary" tappable\n                (click)="resetPassword()">{{\'forgetPassword.next\' | translate}}\n        </button>\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"E:\newpay\newpay\src\pages\auth\forget-password\forgetpassword.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_countryNum_country_num_service__["a" /* CountryNumService */], __WEBPACK_IMPORTED_MODULE_4_ng2_translate__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_common_commonUtils__["a" /* CommonUtils */], __WEBPACK_IMPORTED_MODULE_6__providers_backbutton_service__["a" /* BackbuttonService */]])
], ForgetPasswordPage);

//# sourceMappingURL=forgetpassword.js.map

/***/ })

});
//# sourceMappingURL=51.js.map