webpackJsonp([48],{

/***/ 873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPageModule", function() { return PasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password__ = __webpack_require__(958);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PasswordPageModule = (function () {
    function PasswordPageModule() {
    }
    return PasswordPageModule;
}());
PasswordPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__password__["a" /* PasswordPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__password__["a" /* PasswordPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], PasswordPageModule);

//# sourceMappingURL=password.module.js.map

/***/ }),

/***/ 958:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_financial_service_account_pub_service__ = __webpack_require__(400);
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




var PasswordPage = (function () {
    function PasswordPage(navCtrl, pubservice, alertCtrl, navParams, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.pubservice = pubservice;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.fundpwd = { userid: '123', fund_pwd: '111' };
        this.titleName = navParams.get("titleName");
        this.nextPage = navParams.get("nextPage");
        this.translate.get('password').subscribe(function (res) {
            _this.translateObj = res;
        });
    }
    PasswordPage.prototype.goNextPage = function (nextPage) {
        var _this = this;
        this.pubservice.checkFundpwd(this.fundpwd).then(function (allowed) {
            if (allowed) {
                setTimeout(function () {
                    //this.loading.dismiss();
                    _this.navCtrl.push(nextPage);
                });
            }
            else {
                _this.showError(_this.translateObj.addressDenied);
            }
        }, function (error) {
            _this.showError(error);
        });
    };
    PasswordPage.prototype.showError = function (text) {
        var alert = this.alertCtrl.create({
            title: this.translateObj.err,
            subTitle: text,
            buttons: [this.translateObj.ok]
        });
        alert.present(prompt);
    };
    return PasswordPage;
}());
PasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-password',template:/*ion-inline-start:"E:\newpays\src\pages\auth\password\password.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>\n      {{  titleName   }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-input placeholder="{{\'password.inputPw\' | translate }}"></ion-input>\n    </ion-item>\n  </ion-list>\n    <button ion-button block tappable (click)="goNextPage(nextPage)">{{\'password.next\' | translate }}</button>\n</ion-content>\n'/*ion-inline-end:"E:\newpays\src\pages\auth\password\password.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_financial_service_account_pub_service__["a" /* AccountPubService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["c" /* TranslateService */]])
], PasswordPage);

//# sourceMappingURL=password.js.map

/***/ })

});
//# sourceMappingURL=48.js.map