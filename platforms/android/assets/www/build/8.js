webpackJsonp([8],{

/***/ 1038:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetZJpsdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_translate__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_auth_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_commonUtils__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ResetZJpsdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetZJpsdPage = (function () {
    function ResetZJpsdPage(navCtrl, navParams, alertCtrl, translate, auth, loading, commonUtils) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.auth = auth;
        this.loading = loading;
        this.commonUtils = commonUtils;
        this.phoneCode = '86';
        this.countryCode = "CN";
        this.usertel = "";
        this.request = { captcha: '', newPassword: '' };
        this.forget = { ziJPwd: '' };
        // 验证码倒计时
        this.verifyCode = {
            verifyCodeTips: "",
            countdown: 60,
            disable: true
        };
        this.usertel = localStorage.getItem('userid');
        this.translate.get('forgetPassword').subscribe(function (res) {
            _this.translateObj = res;
            console.log("forgetPAss", res);
            _this.verifyCode.verifyCodeTips = _this.translateObj.getVeriCode;
        });
    }
    ResetZJpsdPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ResetZJpsdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetZJpsdPage');
    };
    // 倒计时
    ResetZJpsdPage.prototype.settime = function () {
        var _this = this;
        debugger;
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
    ResetZJpsdPage.prototype.getCode = function () {
        var _this = this;
        // console.log(ICode)
        console.log("获取验证码");
        if (this.usertel == '') {
            this.showPopupQ("", this.translateObj.needInputTel);
            return;
        }
        //发送验证码成功后开始倒计时
        //验证码请求
        this.commonUtils.showLoading();
        this.auth.getZiJinPwdValid().then(function (success) {
            _this.commonUtils.HideLoading();
            if (success != null) {
                if (success.ret_code == '1') {
                    _this.showPopupQ("", _this.translateObj.veriCodeSendSuccess);
                    //发送验证码成功后开始倒计时
                    _this.verifyCode.disable = false;
                    _this.settime();
                }
                else {
                    _this.showPopupQ("", success.ret_msg);
                }
            }
            else {
                _this.showPopupQ("", _this.translateObj.serviceErr);
            }
        }, function (error) {
            _this.commonUtils.HideLoading();
            _this.showPopupQ("", _this.translateObj.netErr);
        });
    };
    ResetZJpsdPage.prototype.showPopupQ = function (title, text) {
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
    ResetZJpsdPage.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: this.translateObj.confirm,
                    handler: function (data) {
                        // if (this.createSuccess) {
                        _this.navCtrl.pop();
                        // }
                    }
                }
            ]
        });
        alert.present();
    };
    ResetZJpsdPage.prototype.resetZJPassword = function () {
        var _this = this;
        var reg = new RegExp(/^\d{6}$/);
        // alert(reg.test('123456'));
        console.log("重置资金密码");
        console.log(this.forget.ziJPwd);
        if (this.forget.ziJPwd == "") {
            this.commonUtils.alertCommon('', '资金密码为六位数字!');
            return;
        }
        if (!reg.test(this.forget.ziJPwd)) {
            this.commonUtils.alertCommon('', '资金密码为六位数字!');
            return;
        }
        if (!reg.test(this.idcardno)) {
            this.commonUtils.alertCommon('', '资金验证码为六位数字!');
            return;
        }
        this.request.newPassword = this.forget.ziJPwd;
        this.request.captcha = this.idcardno;
        this.commonUtils.showLoading();
        this.auth.getZiJinPwd(this.request).then(function (res) {
            _this.commonUtils.HideLoading();
            console.log(res);
            if (res.ret_code == "1") {
                _this.alert = _this.alertCtrl.create({
                    title: _this.translateObj.title,
                    message: _this.translateObj.resetTrue,
                    enableBackdropDismiss: false,
                    buttons: [
                        {
                            text: _this.translateObj.confirm,
                            handler: function (data) {
                                _this.navCtrl.pop();
                            }
                        }
                    ]
                });
                _this.alert.present();
            }
            else if (res.ret_code == "0") {
                _this.commonUtils.alertCommon('', res.ret_msg);
            }
        }).catch(function (err) {
            _this.commonUtils.HideLoading();
            _this.commonUtils.alertCommon('', '网络链接超时,请重试');
        });
    };
    ResetZJpsdPage.prototype.yanzmValid = function (amount) {
        console.log(amount);
        this.idcardno = amount;
        // this.submitOrder.amount = Math.floor(amount * 100) / 100;
        console.log(amount);
        if (amount.length > 10) {
            this.idcardno = amount.substring(0, 10);
        }
    };
    ResetZJpsdPage.prototype.ZJMMValid = function (ziJPwd) {
        this.forget.ziJPwd = ziJPwd.replace(/[^0-9]/ig, "");
        console.log(this.forget.ziJPwd);
        if (this.forget.ziJPwd.length > 6) {
            this.forget.ziJPwd = this.forget.ziJPwd.substring(0, 6);
        }
        // document.getElementById("ziJPwd").innerText=this.forget.ziJPwd
    };
    ResetZJpsdPage.prototype.ionViewWillLeave = function () {
        if (this.alert) {
            this.alert.dismiss();
        }
    };
    return ResetZJpsdPage;
}());
ResetZJpsdPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-reset-z-jpsd',template:/*ion-inline-start:"E:\newpay\newpay\src\pages\reset-z-jpsd\reset-z-jpsd.html"*/'<ion-header no-border  mode="md">\n  <ion-toolbar color="secondary">\n    <ion-buttons left icon-only tappable (click)="back()">\n      <button ion-button icon-only>\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title style="text-align: center">重置资金密码</ion-title>\n    <ion-buttons end icon-only >\n      <button ion-button icon-only>\n        <ion-icon name=""></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class="login-container">\n    <ion-item no-lines style="text-align: center;border-bottom: 1px solid #dedede">\n      <ion-input type="number" item-start maxlength="8"  placeholder="{{\'forgetPassword.verificationCode\' | translate}}" [(ngModel)]="idcardno"  (keyup)="yanzmValid(idcardno)"   clearInput></ion-input>\n      <button item-end ion-button color="secondary" clear [disabled]="!verifyCode.disable" tappable (click)="getCode()" style="color: #0dacfa">{{verifyCode.verifyCodeTips}}</button>\n    </ion-item>\n    <ion-item no-lines style="text-align: center;border-bottom: 1px solid #dedede">\n      <ion-input placeholder="{{\'forgetPassword.ZijinPwd\' | translate}}" maxlength="6" [(ngModel)]="forget.ziJPwd" (keyup)="ZJMMValid(forget.ziJPwd)"></ion-input>\n    </ion-item>\n    <button style="display: block; width: 90%; margin: 3rem auto 0;" ion-button full  color="primary" tappable (click)="resetZJPassword()">{{\'forgetPassword.submit\' | translate}}</button>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\newpay\newpay\src\pages\reset-z-jpsd\reset-z-jpsd.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ng2_translate__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_common_commonUtils__["a" /* CommonUtils */]])
], ResetZJpsdPage);

//# sourceMappingURL=reset-z-jpsd.js.map

/***/ }),

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetZJpsdPageModule", function() { return ResetZJpsdPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reset_z_jpsd__ = __webpack_require__(1038);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ResetZJpsdPageModule = (function () {
    function ResetZJpsdPageModule() {
    }
    return ResetZJpsdPageModule;
}());
ResetZJpsdPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__reset_z_jpsd__["a" /* ResetZJpsdPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reset_z_jpsd__["a" /* ResetZJpsdPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], ResetZJpsdPageModule);

//# sourceMappingURL=reset-z-jpsd.module.js.map

/***/ })

});
//# sourceMappingURL=8.js.map