webpackJsonp([35],{

/***/ 1003:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return requestSettingPage; });
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
 * Generated class for the TopupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var requestSettingPage = (function () {
    function requestSettingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.arrCurrency = [
            { name: "BitCNY", bal: "200" },
            { name: "BitUSD", bal: "300" },
            { name: "BTS", bal: "400" }
        ];
        this.receiveData = { account: "", currecy: "", amount: "", remark: "" };
        console.log("pay-info");
    }
    requestSettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad pay-info');
    };
    requestSettingPage.prototype.requestReceive = function () {
        this.navCtrl.push("requestReceivePage");
        console.log('go requestReceivePage');
    };
    requestSettingPage.prototype.goComfirm = function () {
        this.navCtrl.push("receivePage");
    };
    requestSettingPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    return requestSettingPage;
}());
requestSettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-request-setting',template:/*ion-inline-start:"E:\newpays\src\pages\financial\receive\request-setting\request-setting.html"*/'<!--\n  Generated template for the TopupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar color="secondary">\n        <ion-buttons left icon-only tappable (click)="goBack()">\n            <button ion-button icon-only>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title style="text-align: center">{{ \'request_setting.title\' | translate }}</ion-title>\n        <ion-buttons end>\n        <button ion-button  color="primary" tappable (click)="requestReceive()">\n            {{ \'request_setting.setAmount\' | translate }}\n        </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-list >\n        <ion-item>\n            <ion-label color="primary">{{ \'request_setting.type\' | translate }}:</ion-label>\n            <ion-select   [(ngModel)]="receiveData.currency">\n                <ion-option *ngFor="let currencyInfo of arrCurrency"  value="{{currencyInfo.name}}">{{currencyInfo.name}}</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary">{{ \'request_setting.amount\' | translate }}:</ion-label>\n            <ion-input placeholder="{{ \'request_setting.feeFree\' | translate }}" [(ngModel)]="receiveData.amount"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary">{{ \'request_setting.memo\' | translate }}:</ion-label>\n            <ion-input placeholder="{{ \'request_setting.noRequired\' | translate }}" [(ngModel)]="receiveData.remark"></ion-input>\n        </ion-item>\n    </ion-list>\n    <button ion-button block (click)="goComfirm()">{{ \'request_setting.confirm\' | translate }}</button>\n\n</ion-content>\n'/*ion-inline-end:"E:\newpays\src\pages\financial\receive\request-setting\request-setting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
], requestSettingPage);

//# sourceMappingURL=request-setting.js.map

/***/ }),

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestReceivePageModule", function() { return requestReceivePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_setting__ = __webpack_require__(1003);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var requestReceivePageModule = (function () {
    function requestReceivePageModule() {
    }
    return requestReceivePageModule;
}());
requestReceivePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__request_setting__["a" /* requestSettingPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__request_setting__["a" /* requestSettingPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__request_setting__["a" /* requestSettingPage */]
        ]
    })
], requestReceivePageModule);

//# sourceMappingURL=request-setting.module.js.map

/***/ })

});
//# sourceMappingURL=35.js.map