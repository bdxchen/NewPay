webpackJsonp([20],{

/***/ 1025:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_auth_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_translate__ = __webpack_require__(212);
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
 * Generated class for the ChangepwdPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChangepwdPage = (function () {
    function ChangepwdPage(navCtrl, alertCtrl, navParams, authService, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.translate = translate;
        this.pwdCompar = { oldPassword: '', newPassword: '' };
        this.pwd = "loginpwd";
        this.relationship = "aaaa";
        this.oldloginpwd = '';
        this.newloginpwd = '';
        this.comloginpwd = '';
        this.oldfinpwd = '';
        this.newfinpwd = '';
        this.comfinpwd = '';
        this.CaptchaF = "";
        this.CaptchaL = "";
        // 验证码倒计时
        this.verifyCode = {
            verifyCodeTipsL: "",
            verifyCodeTipsF: "",
            countdownL: 60,
            countdownF: 60,
            disableL: true,
            disableF: true
        };
        this.translate.get('changepwd').subscribe(function (res) {
            _this.translateObj = res;
            console.log("forgetPAss", res);
            _this.verifyCode.verifyCodeTipsL = _this.translateObj.getVeriCode;
            _this.verifyCode.verifyCodeTipsF = _this.translateObj.getVeriCode;
        });
    }
    ChangepwdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangepwdPage');
    };
    // 倒计时
    ChangepwdPage.prototype.settimeL = function () {
        var _this = this;
        if (this.verifyCode.countdownL == 1) {
            this.verifyCode.countdownL = 60;
            this.verifyCode.verifyCodeTipsL = this.translateObj.getVeriCode;
            this.verifyCode.disableL = true;
            return;
        }
        else {
            this.verifyCode.countdownL--;
        }
        this.verifyCode.verifyCodeTipsL = this.translateObj.getVeriCodeAgain + "(" + this.verifyCode.countdownL + ")";
        setTimeout(function () {
            _this.verifyCode.verifyCodeTipsL = _this.translateObj.getVeriCodeAgain + "(" + _this.verifyCode.countdownL + ")";
            _this.settimeL();
        }, 1000);
    };
    ChangepwdPage.prototype.settimeF = function () {
        var _this = this;
        if (this.verifyCode.countdownF == 1) {
            this.verifyCode.countdownF = 60;
            this.verifyCode.verifyCodeTipsF = this.translateObj.getVeriCode;
            this.verifyCode.disableF = true;
            return;
        }
        else {
            this.verifyCode.countdownF--;
        }
        this.verifyCode.verifyCodeTipsF = this.translateObj.getVeriCodeAgain + "(" + this.verifyCode.countdownF + ")";
        setTimeout(function () {
            _this.verifyCode.verifyCodeTipsF = _this.translateObj.getVeriCodeAgain + "(" + _this.verifyCode.countdownF + ")";
            _this.settimeF();
        }, 1000);
    };
    ChangepwdPage.prototype.getCodelogIN = function () {
        var _this = this;
        // console.log(ICode)
        console.log("获取验证码");
        //发送验证码成功后开始倒计时
        //验证码请求
        this.authService.getloginCaptchaM().then(function (success) {
            if (success != null) {
                if (success.ret_code == "1") {
                    //发送验证码成功后开始倒计时
                    _this.showPopupQ("", _this.translateObj.veriCodeSendSuccess);
                    _this.verifyCode.disableL = false;
                    _this.settimeL();
                }
                else {
                    _this.showPopupQ("", success.ret_msg);
                    _this.verifyCode.disableL = true;
                }
            }
            else {
                // this.showPopupQ("", this.translateObj.serviceErr);
            }
        }, function (error) {
        });
    };
    ChangepwdPage.prototype.getfinancialIN = function () {
        var _this = this;
        // console.log(ICode)
        console.log("获取验证码");
        //发送验证码成功后开始倒计时
        //验证码请求
        this.authService.getfinancialCaptchaM().then(function (success) {
            if (success != null) {
                if (success.ret_code == "1") {
                    //发送验证码成功后开始倒计时
                    _this.showPopupQ("", _this.translateObj.veriCodeSendSuccess);
                    _this.verifyCode.disableF = false;
                    _this.settimeF();
                }
                else {
                    _this.showPopupQ("", success.ret_msg);
                    _this.verifyCode.disableF = true;
                }
            }
            else {
                // this.showPopupQ("", this.translateObj.serviceErr);
            }
        }, function (error) {
        });
    };
    ChangepwdPage.prototype.selectedFriends = function () {
    };
    ChangepwdPage.prototype.selectedEnemies = function () {
    };
    ChangepwdPage.prototype.goBack = function () {
        this.navCtrl.parent.select(2);
    };
    ChangepwdPage.prototype.changeLoginPwd = function () {
        var _this = this;
        console.log(this.oldloginpwd);
        var reg = new RegExp(/^\d{6}$/);
        var reg1 = new RegExp(/^[a-zA-Z]{1}([a-zA-Z0-9]|[_]){7,19}$/);
        if (this.CaptchaL == "") {
            this.alertCommon(this.translateObj.warNewLoginYZMEmpty, '');
            return;
        }
        // alert(reg.test('123456'));
        if (!reg.test(this.CaptchaL)) {
            this.showPopupQ("", this.translateObj.veriCodMustLog);
            return;
        }
        if (this.oldloginpwd === this.newloginpwd) {
            this.alertCommon('', this.translateObj.warNewCannotEqualOld);
            return;
        }
        if (this.oldloginpwd == "") {
            this.alertCommon('', this.translateObj.warOldLoginPwEmpty);
            return;
        }
        if (!reg1.test(this.oldloginpwd)) {
            this.showPopupQ("", this.translateObj.oldPsw_Reg);
            return;
        }
        else if (this.oldloginpwd.length < 8) {
            this.showPopupQ("", this.translateObj.oldPsw_Reg);
            return;
        }
        else if (this.oldloginpwd.length > 20) {
            this.showPopupQ("", this.translateObj.oldPsw_Reg);
            return;
        }
        if (this.newloginpwd == "") {
            this.alertCommon('', this.translateObj.warNewLoginPwEmpty);
            return;
        }
        if (!reg1.test(this.newloginpwd)) {
            this.showPopupQ("", this.translateObj.newPsw_Reg);
            return;
        }
        else if (this.newloginpwd.length < 8) {
            this.showPopupQ("", this.translateObj.newPsw_Reg);
            return;
        }
        else if (this.newloginpwd.length > 20) {
            this.showPopupQ("", this.translateObj.newPsw_Reg);
            return;
        }
        if (this.newloginpwd != "") {
            this.pwdCompar.oldPassword = this.oldloginpwd;
            this.pwdCompar.newPassword = this.newloginpwd;
            this.pwdCompar.captcha = this.CaptchaL;
            console.log(this.pwdCompar);
            this.authService.changeLoginPwdSer(this.pwdCompar).then(function (success) {
                console.log(success);
                if (success.ret_code == "1") {
                    _this.alert = _this.alertCtrl.create({
                        message: _this.translateObj.changeLoginPwSuc,
                        buttons: [{
                                text: _this.translateObj.confirm,
                                handler: function () {
                                    var navTransition = _this.alert.dismiss();
                                    _this.navCtrl.parent.select(2);
                                    return false;
                                }
                            }]
                    });
                    _this.alert.present();
                }
                else {
                    _this.alert = _this.alertCtrl.create({
                        title: '',
                        message: success.ret_msg,
                        buttons: [{
                                text: _this.translateObj.confirm,
                                handler: function () {
                                    var navTransition = _this.alert.dismiss();
                                    // this.navCtrl.parent.select(2);
                                    return false;
                                }
                            }]
                    });
                    _this.alert.present();
                }
            });
        }
        else {
            this.alertCommon('', this.translateObj.warLoginPwNotSame);
            return;
        }
    };
    ChangepwdPage.prototype.changeFinPwd = function () {
        var _this = this;
        debugger;
        console.log(this.oldfinpwd);
        // alert(reg.test('123456'));
        var reg = /^\d{6}\b/;
        // var txt = "123456";
        // if(reg.test(txt)){
        //     alert("ok");
        // }else{
        //     alert("error");
        // }
        if (!reg.test(this.CaptchaF)) {
            this.showPopupQ("", this.translateObj.veriCodMustF);
            return;
        }
        if (!reg.test(this.oldfinpwd)) {
            this.alertCommon(this.translateObj.warning, this.translateObj.warOldAssetPw6);
            return;
        }
        if (!reg.test(this.newfinpwd)) {
            this.alertCommon(this.translateObj.warning, this.translateObj.warNewAssetPw6);
            return;
        }
        if (this.newfinpwd != "") {
            this.pwdCompar.oldPassword = this.oldfinpwd;
            this.pwdCompar.newPassword = this.newfinpwd;
            this.pwdCompar.captcha = this.CaptchaF;
            console.log(this.pwdCompar);
            this.authService.changeFinancialPwd(this.pwdCompar).then(function (success) {
                console.log(success);
                if (success.ret_code == "1") {
                    var alert_1 = _this.alertCtrl.create({
                        title: _this.translateObj.changeAssetPwSuc,
                        buttons: [{
                                text: _this.translateObj.confirm,
                                handler: function () {
                                    var navTransition = alert_1.dismiss();
                                    _this.navCtrl.parent.select(2);
                                    return false;
                                }
                            }]
                    });
                    alert_1.present();
                }
                else {
                    var alert_2 = _this.alertCtrl.create({
                        title: '',
                        message: success.ret_msg,
                        buttons: [{
                                text: _this.translateObj.confirm,
                                handler: function () {
                                    var navTransition = alert_2.dismiss();
                                    // this.navCtrl.parent.select(2);
                                    return false;
                                }
                            }]
                    });
                    alert_2.present();
                }
            });
        }
        else {
            this.alertCommon('', this.translateObj.warAssetPwNotSame);
            return;
        }
    };
    ChangepwdPage.prototype.alertCommon = function (title, message) {
        this.alert = this.alertCtrl.create({
            title: title,
            message: message,
            enableBackdropDismiss: false,
            buttons: [{
                    text: this.translateObj.confirm,
                    handler: function () {
                        // this.navCtrl.parent.select(2);
                    }
                }]
        });
        this.alert.present();
    };
    ChangepwdPage.prototype.showPopupQ = function (title, text) {
        this.alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            enableBackdropDismiss: false,
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
    ChangepwdPage.prototype.liginValidL = function (CaptchaL) {
        console.log(CaptchaL);
        if (CaptchaL.length > 6) {
            this.CaptchaL = CaptchaL.substring(0, 6);
        }
    };
    ChangepwdPage.prototype.liginPValidL = function (oldloginpwd) {
        console.log(oldloginpwd);
        if (oldloginpwd.length > 6) {
            this.oldloginpwd = oldloginpwd.substring(0, 20);
        }
    };
    ChangepwdPage.prototype.liginrePValidL = function (newloginpwd) {
        console.log(newloginpwd);
        if (newloginpwd.length > 6) {
            this.newloginpwd = newloginpwd.substring(0, 20);
        }
    };
    ChangepwdPage.prototype.liginValidF = function (CaptchaF) {
        console.log(CaptchaF);
        if (CaptchaF.length > 6) {
            this.CaptchaF = CaptchaF.substring(0, 6);
        }
    };
    ChangepwdPage.prototype.liginPValidF = function (oldfinpwd) {
        console.log(oldfinpwd);
        if (oldfinpwd.length > 6) {
            this.oldfinpwd = oldfinpwd.substring(0, 6);
        }
    };
    ChangepwdPage.prototype.liginrePValidF = function (newfinpwd) {
        console.log(newfinpwd);
        if (newfinpwd.length > 6) {
            this.newfinpwd = newfinpwd.substring(0, 6);
        }
    };
    ChangepwdPage.prototype.ionViewWillLeave = function () {
        if (this.alert) {
            this.alert.dismiss();
        }
        if (this.loading) {
            this.loading.dismiss();
        }
        if (this.actionSheet) {
            this.actionSheet.dismiss();
        }
        if (this.modal) {
            this.modal.dismiss();
        }
    };
    return ChangepwdPage;
}());
ChangepwdPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-changepwd',template:/*ion-inline-start:"E:\newpay\newpay\src\pages\mine\changepwd\changepwd.html"*/'<ion-header no-border cache-view="false">\n    <ion-toolbar color="secondary">\n        <ion-buttons left icon-only tappable (click)="goBack()">\n            <button ion-button icon-only>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title style="text-align: center">{{\'changepwd.title\' | translate}}</ion-title>\n        <ion-buttons end icon-only>\n            <button ion-button icon-only>\n                <ion-icon name=""></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar>\n        <ion-segment [(ngModel)]="pwd" mode="md">\n            <ion-segment-button value="loginpwd">\n                {{\'changepwd.changeLoginPw\' | translate}}\n                <div class="bolder-sm"></div>\n            </ion-segment-button>\n            <ion-segment-button value="finpwd">\n                {{\'changepwd.changeAssetPw\' | translate}}\n                <div class="bolder-sm"></div>\n            </ion-segment-button>\n\n        </ion-segment>\n    </ion-toolbar>\n</ion-header>\n<ion-content style="background-color: #eef5fd !important">\n\n    <div [ngSwitch]="pwd">\n        <ion-list *ngSwitchCase="\'loginpwd\'">\n            <ion-item no-lines>\n                <ion-input item-start type="number" placeholder="{{\'forgetPassword.verificationCode\' | translate}}"\n                          (keyup)="liginValidL(CaptchaL)"       [(ngModel)]="CaptchaL" clearInput></ion-input>\n                <button item-end ion-button color="secondary" clear [disabled]="!verifyCode.disableL" tappable\n                        (click)="getCodelogIN()" style="color: #0dacfa">{{verifyCode.verifyCodeTipsL}}\n                </button>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>{{\'changepwd.oldLoginPw\' | translate}}</ion-label>\n                <ion-input placeholder="{{\'changepwd.inputOldLoginPw\' | translate}}" type="password"\n                           (keyup)="liginPValidL(oldloginpwd)"  [(ngModel)]="oldloginpwd"></ion-input>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>{{\'changepwd.newLoginPw\' | translate}}</ion-label>\n                <ion-input placeholder="{{\'changepwd.inputNewLoginPw\' | translate}}" type="password"\n                           (keyup)="liginrePValidL(newloginpwd)"    [(ngModel)]="newloginpwd"></ion-input>\n            </ion-item>\n            <!--<ion-item no-lines>\n                <ion-label>{{\'changepwd.confirmLoginPw\' | translate}}</ion-label>\n                <ion-input placeholder="{{\'changepwd.inputConfirmLoginPw\' | translate}}" type="password"\n                           [(ngModel)]="confirmloginpw"></ion-input>\n            </ion-item>-->\n\n            <!--<ion-item no-lines style="margin-top: 1px">-->\n            <!--<ion-label >{{\'changepwd.confirmLoginPw\' | translate}}</ion-label>-->\n            <!--<ion-input placeholder="{{\'changepwd.inputConfirmLoginPw\' | translate}}" type="password" [(ngModel)]="comloginpwd" ></ion-input>-->\n            <!--</ion-item>-->\n            <button style="margin:20vw auto; display:block; width:92%; background-color: #0dacfa;" ion-button block\n                    tappable (click)="changeLoginPwd()">{{\'changepwd.changeLoginPw\' | translate}}\n            </button>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'finpwd\'">\n            <ion-item no-lines>\n                <ion-input item-start type="number" placeholder="{{\'forgetPassword.verificationCode\' | translate}}"\n                           (keyup)="liginValidF(CaptchaF)"  [(ngModel)]="CaptchaF" clearInput></ion-input>\n                <button item-end ion-button color="secondary" clear [disabled]="!verifyCode.disableF" tappable\n                        (click)="getfinancialIN()" style="color: #0dacfa">{{verifyCode.verifyCodeTipsF}}\n                </button>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>{{\'changepwd.oldAssetPw\' | translate}}</ion-label>\n                <ion-input type="password" style="-webkit-text-security:disc"\n                           (keyup)="liginPValidF(oldfinpwd)"   placeholder="{{\'changepwd.inputOldAssetPw\' | translate}}"\n                           [(ngModel)]="oldfinpwd"></ion-input>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label>{{\'changepwd.newAssetPw\' | translate}}</ion-label>\n                <ion-input type="password" style="-webkit-text-security:disc" maxlength="6"\n                           (keyup)="liginrePValidF(newfinpwd)"\n                           placeholder="{{\'changepwd.inputNewAssetPw\' | translate}}"\n                           [(ngModel)]="newfinpwd"></ion-input>\n            </ion-item>\n            <!--<ion-item no-lines style="margin-top: 1px">-->\n            <!--<ion-label>{{\'changepwd.confirmAssetPw\' | translate}}</ion-label>-->\n            <!--<ion-input type="number" style="-webkit-text-security:disc" placeholder="{{\'changepwd.inputConfirmAssetPw\' | translate}}"  [(ngModel)]="comfinpwd" ></ion-input>-->\n            <!--</ion-item >-->\n            <button style="margin:20vw auto; display:block; width:92%; background-color: #0dacfa;" ion-button block\n                    tappable (click)="changeFinPwd()">{{\'changepwd.changeAssetPw\' | translate}}\n            </button>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"E:\newpay\newpay\src\pages\mine\changepwd\changepwd.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_4_ng2_translate__["c" /* TranslateService */]])
], ChangepwdPage);

//# sourceMappingURL=changepwd.js.map

/***/ }),

/***/ 907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepwdPageModule", function() { return ChangepwdPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changepwd__ = __webpack_require__(1025);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChangepwdPageModule = (function () {
    function ChangepwdPageModule() {
    }
    return ChangepwdPageModule;
}());
ChangepwdPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__changepwd__["a" /* ChangepwdPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__changepwd__["a" /* ChangepwdPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], ChangepwdPageModule);

//# sourceMappingURL=changepwd.module.js.map

/***/ })

});
//# sourceMappingURL=20.js.map