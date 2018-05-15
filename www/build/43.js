webpackJsonp([43],{

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyDetailPageModule", function() { return CurrencyDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__currency_detail__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CurrencyDetailPageModule = (function () {
    function CurrencyDetailPageModule() {
    }
    return CurrencyDetailPageModule;
}());
CurrencyDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__currency_detail__["a" /* CurrencyDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__currency_detail__["a" /* CurrencyDetailPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], CurrencyDetailPageModule);

//# sourceMappingURL=currency-detail.module.js.map

/***/ }),

/***/ 963:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
 * Generated class for the CurrencyDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CurrencyDetailPage = (function () {
    function CurrencyDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.currentcurrency = navParams.get('currency');
        this.amount = navParams.get('amount');
        this.freeze = "0.00";
    }
    CurrencyDetailPage.prototype.toTopup = function (currency) {
        debugger;
        this.navCtrl.push("TopupPage", { currency: currency });
        console.log('toTopup CurrencyDetailPage');
    };
    CurrencyDetailPage.prototype.toTransfer = function (currency) {
        this.navCtrl.push("TransferPage", { currency: currency });
        console.log('toTopup CurrencyDetailPage');
    };
    CurrencyDetailPage.prototype.toWithdraw = function (currency) {
        this.navCtrl.push("WithdrawPage", { currency: currency });
        console.log('ionViewDidLoad CurrencydetailPage');
    };
    CurrencyDetailPage.prototype.toFlowDetail = function (currency) {
        this.navCtrl.push("FlowdetailPage", { currency: currency });
    };
    CurrencyDetailPage.prototype.ChargingMoney = function (_a) {
        var currency = _a.currency;
        this.navCtrl.push('CurrencyPage', { currency: currency });
    };
    CurrencyDetailPage.prototype.Currency = function (currency) {
        this.navCtrl.push('ChargingMoneyPage', { currency: currency });
    };
    CurrencyDetailPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    return CurrencyDetailPage;
}());
CurrencyDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-currency-detail',template:/*ion-inline-start:"E:\newpays\src\pages\balance\currency-detail\currency-detail.html"*/'\n<ion-header>\n  <ion-toolbar color="secondary">\n    <ion-buttons left icon-only tappable (click)="goBack()">\n      <button ion-button icon-only>\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title style="text-align: center">{{ \'currency_detail.balance\' | translate }}</ion-title>\n    <ion-buttons end icon-only>\n      <button ion-button icon-only>\n        <ion-icon name=""></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="cards-bg">\n  <div class="card-background-page">\n    <ion-card>\n      <img src="assets/img/home/homeBg.png"/>\n      <div class="card-title">¥200.00</div>\n      <div class="card-subtitle">BitCNY</div>\n    </ion-card>\n  </div>\n\n  <ion-list no-lines margin-top="10px">\n    <!-- Contenedor -->\n\n    <button ion-item style="border-bottom: 1px solid #dedede;" tappable (click)="toTopup()">\n      <img src="assets/img/balance/chongzhi.png" style="width: 21px;height: 21px;" item-start>\n      <span item-left>{{ \'currency_detail.refill\' | translate }}</span>\n      <!--<ion-icon name="ios-arrow-forward-outline" item-end></ion-icon>-->\n    </button>\n    <button ion-item style="border-bottom: 1px solid #dedede;" tappable (click)="toWithdraw()">\n      <img src="assets/img/balance/tixian.png" style="width: 21px;height: 21px;" item-start>\n      <span item-left>{{ \'currency_detail.getCash\' | translate }}</span>\n      <!--<ion-icon name="ios-arrow-forward-outline" item-end></ion-icon>-->\n    </button>\n    <button ion-item style="border-bottom: 1px solid #dedede;" tappable (click)="toTransfer()">\n      <img src="assets/img/balance/zhuanzhang.png" style="width: 21px;height: 21px;" item-start>\n      <span item-left>{{ \'currency_detail.transfer\' | translate }}</span>\n    </button>\n    <button ion-item style="border-bottom: 1px solid #dedede;" tappable (click)="ChargingMoney()">\n      <img src="assets/img/balance/tibi.png" style="width: 21px;height: 21px;" item-start>\n      <span item-left>{{ \'currency_detail.refillCoin\' | translate }}</span>\n    </button>\n    <button ion-item style="border-bottom: 1px solid #dedede;" tappable (click)="Currency()">\n      <img src="assets/img/balance/chongbi.png" style="width: 21px;height: 21px;" item-start>\n      <span item-left>{{ \'currency_detail.transferCoin\' | translate }}</span>\n    </button>\n  </ion-list>\n</ion-content>\n\n<!--<ion-content padding>-->\n\n  <!--<ion-list >-->\n    <!--<ion-item >-->\n      <!--<ion-thumbnail item-start>-->\n        <!--<img src="assets/img/bitlogo.png">-->\n      <!--</ion-thumbnail>-->\n      <!--<h2>{{currentcurrency}}</h2>-->\n      <!--<p>可用金额:{{amount}}</p>-->\n      <!--<p>冻结金额:{{freeze}}</p>-->\n    <!--</ion-item>-->\n  <!--</ion-list>-->\n  <!--<ion-list no-border>-->\n\n    <!--<ion-list-header>-->\n      <!--<p>操作</p>-->\n    <!--</ion-list-header>-->\n\n    <!--<ion-item (click)="toTopup(currentcurrency)">-->\n      <!--<ion-icon name=\'md-log-in\' item-start></ion-icon>-->\n      <!--充值-->\n      <!--<ion-note item-end>-->\n        <!--(10分钟内到账)-->\n      <!--</ion-note>-->\n    <!--</ion-item>-->\n    <!--<ion-item (click)="toWithdraw(currentcurrency)">-->\n      <!--<ion-icon name=\'md-log-out\' item-start></ion-icon>-->\n      <!--提现-->\n      <!--<ion-note item-end>-->\n        <!--(10分钟内到账)-->\n      <!--</ion-note>-->\n    <!--</ion-item>-->\n    <!--<ion-item (click)="toTransfer(currentcurrency)">-->\n      <!--<ion-icon name=\'md-git-compare\' item-start></ion-icon>-->\n      <!--转账-->\n      <!--<ion-note item-end>-->\n        <!--(实时到账)-->\n      <!--</ion-note>-->\n    <!--</ion-item>-->\n  <!--</ion-list>-->\n<!--</ion-content>-->\n'/*ion-inline-end:"E:\newpays\src\pages\balance\currency-detail\currency-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
], CurrencyDetailPage);

//# sourceMappingURL=currency-detail.js.map

/***/ })

});
//# sourceMappingURL=43.js.map