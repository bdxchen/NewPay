webpackJsonp([50],{

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetPageModule", function() { return PasswordResetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password_reset__ = __webpack_require__(956);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PasswordResetPageModule = (function () {
    function PasswordResetPageModule() {
    }
    return PasswordResetPageModule;
}());
PasswordResetPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__password_reset__["a" /* PasswordResetPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__password_reset__["a" /* PasswordResetPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], PasswordResetPageModule);

//# sourceMappingURL=password-reset.module.js.map

/***/ }),

/***/ 956:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_auth_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
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
 * Generated class for the PasswordResetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PasswordResetPage = (function () {
    function PasswordResetPage(navCtrl, alertCtrl, navParams, authService, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.translate = translate;
        this.newloginpwd = '';
        this.comloginpwd = '';
        this.pwdCompar = { nationCode: '', phoneNo: '', newPassword: '', captcha: '' };
        this.countryCode = this.navParams.get('country');
        this.phoneCode = this.navParams.get('phoneCode');
        this.verificationCode = this.navParams.get('idcardno');
        console.log('this.countryCode', this.countryCode);
        console.log('this.phoneCode', this.phoneCode);
        console.log('this.verificationCode', this.verificationCode);
        // this.translate.get('password_reset').subscribe((res: any) => {
        //   this.translateObj = res;
        //   console.log("password_reset", res);
        // });
        this.translate.get('password_reset').subscribe(function (res) {
            _this.translateObj = res;
            console.log("password_reset", res);
        });
    }
    PasswordResetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PasswordResetPage');
    };
    PasswordResetPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    PasswordResetPage.prototype.confirm = function () {
        var _this = this;
        if (this.newloginpwd !== this.comloginpwd) {
            this.alertCommon('', this.translateObj.PwNotSame);
            return;
        }
        if (this.newloginpwd == "" || this.comloginpwd == "") {
            this.alertCommon('', this.translateObj.newPwEmpty);
            return;
        }
        var reg = /^[a-zA-Z]{1}([a-zA-Z0-9]|[_]){7,19}$/; //字母开头8-20位，字母数字或的下划线组合
        if (!reg.test(this.newloginpwd)) {
            this.alertCommon("", this.translateObj.psw_Reg);
            return;
        }
        // if(this.comloginpwd==""){
        //   this.alertCommon('',this.translateObj.confirmPwEmpty);
        //   return;
        // }
        // if(this.comloginpwd != this.newloginpwd){
        //   this.alertCommon('',this.translateObj.PwNotSame);
        //   return;
        // }
        this.pwdCompar.nationCode = this.countryCode;
        this.pwdCompar.phoneNo = this.phoneCode;
        this.pwdCompar.newPassword = this.newloginpwd;
        this.pwdCompar.captcha = this.verificationCode;
        console.log("this.pwdCompar", this.pwdCompar);
        this.authService.resetLoginPwdSer(this.pwdCompar).then(function (success) {
            console.log(success);
            if (success.ret_code == "1") {
                var alert_1 = _this.alertCtrl.create({
                    title: _this.translateObj.resetSuccess,
                    buttons: [{
                            text: _this.translateObj.OK,
                            handler: function () {
                                _this.navCtrl.push("LoginPage");
                                //let navTransition = alert.dismiss();
                                //return false;
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
                            text: _this.translateObj.OK,
                            handler: function () {
                                // this.navCtrl.parent.select(2);
                                //let navTransition = alert.dismiss();
                                //return false;
                            }
                        }]
                });
                alert_2.present();
            }
        });
    };
    PasswordResetPage.prototype.alertCommon = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [{
                    text: this.translateObj.OK,
                    handler: function () {
                        // this.navCtrl.parent.select(2);
                    }
                }]
        });
        alert.present();
    };
    PasswordResetPage.prototype.resetValid = function (newloginpwd) {
        if (newloginpwd.length > 20) {
            this.newloginpwd = newloginpwd.substring(0, 20);
        }
    };
    return PasswordResetPage;
}());
PasswordResetPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-password-reset',template:/*ion-inline-start:"E:\newpays\src\pages\auth\forget-password\password-reset\password-reset.html"*/'<!--\n  Generated template for the PasswordResetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header no-border>\n    <ion-toolbar color="secondary">\n        <ion-buttons left icon-only tappable (click)="goBack()">\n            <button ion-button icon-only>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title style="text-align: center">{{\'password_reset.resetPw\' | translate}}</ion-title>\n        <ion-buttons right icon-only>\n            <button ion-button icon-only>\n                <ion-icon name=""></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-list style="margin-top: 10px">\n        <ion-item no-lines>\n            <ion-input placeholder="{{\'password_reset.inputNewPw\' | translate}}" name="phone"\n                       type="password" (keyup)="resetValid(newloginpwd)" [(ngModel)]="newloginpwd"\n                       clearInput></ion-input>\n        </ion-item>\n        <ion-item no-lines style="margin-top: 1px">\n            <ion-input placeholder="{{\'password_reset.inputConfirmPw\' | translate}}" name="rephone"\n                       type="password" [(ngModel)]="comloginpwd" clearInput></ion-input>\n        </ion-item>\n    </ion-list>\n    <button class="btnCss" ion-button full color="primary" tappable (click)="confirm()">{{\'password_reset.confirm\' |\n        translate}}\n    </button>\n</ion-content>\n'/*ion-inline-end:"E:\newpays\src\pages\auth\forget-password\password-reset\password-reset.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["c" /* TranslateService */]])
], PasswordResetPage);

//# sourceMappingURL=password-reset.js.map

/***/ })

});
//# sourceMappingURL=50.js.map