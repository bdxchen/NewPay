webpackJsonp([42],{

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCuMoneyPageModule", function() { return SetCuMoneyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__set_cu_money__ = __webpack_require__(965);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SetCuMoneyPageModule = (function () {
    function SetCuMoneyPageModule() {
    }
    return SetCuMoneyPageModule;
}());
SetCuMoneyPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__set_cu_money__["a" /* SetCuMoneyPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__set_cu_money__["a" /* SetCuMoneyPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], SetCuMoneyPageModule);

//# sourceMappingURL=set-cu-money.module.js.map

/***/ }),

/***/ 965:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetCuMoneyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_translate__ = __webpack_require__(212);
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
 * Generated class for the SetMoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SetCuMoneyPage = (function () {
    function SetCuMoneyPage(navCtrl, navParams, alertCtrl, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.data = [];
        this.bzMoney = ''; //收款金额
        this.skreason = ''; //收款理由
        this.showReason = false;
        // console.log(this.currency)
        this.currency = this.navParams.get('currency');
        console.log(this.currency);
        this.translate.get('set_cu_money').subscribe(function (res) {
            _this.translateObj = res;
        });
    }
    SetCuMoneyPage.prototype.ReasonsCollection = function () {
        this.showReason = !this.showReason;
    };
    SetCuMoneyPage.prototype.ionViewDidLoad = function () {
        if (this.navParams.get('flag') == 2) {
            console.log(this.currency);
            this.bzMoney = this.currency.money;
            this.skreason = this.currency.reason;
            if (this.skreason != "") {
                this.showReason = true;
            }
        }
        console.log('ionViewDidLoad SetMoneyPage');
    };
    SetCuMoneyPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SetCuMoneyPage.prototype.setmoneyB = function () {
        console.log(this.currency);
        if (this.currency == "") {
            this.alertCommon(this.translateObj.warningInfo, this.translateObj.assetEmpty);
            return false;
        }
        if (this.bzMoney == "") {
            this.alertCommon(this.translateObj.warningInfo, this.translateObj.amountEmpty);
            return false;
        }
        else {
            if (isNaN(Number(this.bzMoney))) {
                this.alertCommon(this.translateObj.warningInfo, this.translateObj.inputEmpty);
                return false;
            }
        }
        console.log(this.bzMoney);
        console.log(this.skreason);
        this.navCtrl.push('CurrencyPage', { money: this.bzMoney, reason: this.skreason, flag: 2, currency: this.currency });
    };
    SetCuMoneyPage.prototype.alertCommon = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: this.translateObj.confirm,
                    handler: function () {
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    return SetCuMoneyPage;
}());
SetCuMoneyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-set-cu-money',template:/*ion-inline-start:"E:\newpays\src\pages\balance\set-cu-money\set-cu-money.html"*/'<!--\n  Generated template for the SetMoneyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n  <ion-toolbar color="secondary">\n    <ion-buttons left icon-only tappable (click)="goBack()">\n      <button ion-button icon-only>\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title style="text-align: center">{{ \'set_cu_money.setAmountTitle\' | translate }}</ion-title>\n    <ion-buttons end icon-only >\n      <button ion-button icon-only>\n        <ion-icon name=""></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list style="margin-top: 10px">\n    <ion-item no-lines style="margin-top: 1px">\n      <ion-label>{{ \'set_cu_money.Amount\' | translate }}</ion-label>\n      <ion-input text-end   placeholder="{{ \'set_cu_money.inputAmount\' | translate }}" [(ngModel)]="bzMoney"></ion-input>\n    </ion-item>\n    <ion-item no-lines style="margin-top: 1px" [hidden]="showReason" >\n      <button ion-button clear item-end (click)="ReasonsCollection()">{{ \'set_cu_money.addReason\' | translate }}</button>\n    </ion-item>\n\n    <ion-item no-lines style="margin-top: 1px" [hidden]="!showReason">\n      <ion-label >{{ \'set_cu_money.reason\' | translate }}</ion-label>\n      <ion-input text-end placeholder="{{ \'set_cu_money.inputResaon\' | translate }}" [(ngModel)]="skreason"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button ion-button full style="width: 70%;margin-left: 15%;" (click)="setmoneyB()">{{ \'set_cu_money.confirm\' | translate }}</button>\n</ion-content>\n'/*ion-inline-end:"E:\newpays\src\pages\balance\set-cu-money\set-cu-money.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ng2_translate__["c" /* TranslateService */]])
], SetCuMoneyPage);

//# sourceMappingURL=set-cu-money.js.map

/***/ })

});
//# sourceMappingURL=42.js.map