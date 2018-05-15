webpackJsonp([36],{

/***/ 1004:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return requestReceivePage; });
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
var requestReceivePage = (function () {
    function requestReceivePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.arrCurrency = [
            { name: "BitCNY", bal: "200" },
            { name: "BitUSD", bal: "300" },
            { name: "BTS", bal: "400" }
        ];
        this.receiveData = { account: "", currecy: "", amount: "", remark: "" };
        console.log("requestReceivePage");
    }
    requestReceivePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad requestReceivePage');
    };
    requestReceivePage.prototype.cancelReceive = function () {
        // this.navCtrl.push("HomePage");
        //   this.navCtrl.setRoot("TabsPage");
        this.navCtrl.parent.select(0);
        console.log('go receivePage');
    };
    requestReceivePage.prototype.goComfirm = function () {
        this.navCtrl.push("receiveSuccessPage");
    };
    requestReceivePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    return requestReceivePage;
}());
requestReceivePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-request-receive',template:/*ion-inline-start:"E:\newpay\newpay\src\pages\financial\receive\request-receive\request-receive.html"*/'<!--\n  Generated template for the TopupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar color="secondary">\n        <ion-buttons left icon-only tappable (click)="goBack()">\n            <button ion-button icon-only>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title style="text-align: center">{{ \'request_receive.title\' | translate }}</ion-title>\n        <ion-buttons right>\n            <button ion-button clear  color="primary" tappable (click)="cancelReceive()">\n                {{ \'request_receive.cancel\' | translate }}\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n\n	<ion-list style="margin-top: 3%" >\n        <ion-item>\n            <ion-label color="primary">{{ \'request_receive.asset\' | translate }}:</ion-label>\n            <ion-select   [(ngModel)]="receiveData.currency">\n                <ion-option *ngFor="let currencyInfo of arrCurrency"  value="{{currencyInfo.name}}">{{currencyInfo.name}}</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item >\n            <ion-label color="primary">{{ \'request_receive.account\' | translate }}:</ion-label>\n            <ion-input placeholder="{{ \'request_receive.emailOrTel\' | translate }}"  [(ngModel)]="receiveData.account"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label color="primary">{{ \'request_receive.amount\' | translate }}:</ion-label>\n            <ion-input placeholder="{{ \'request_receive.feeFree\' | translate }}" [(ngModel)]="receiveData.amount"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary">{{ \'request_receive.memo\' | translate }}:</ion-label>\n            <ion-input placeholder="{{ \'request_receive.noRequired\' | translate }}" [(ngModel)]="receiveData.remark"></ion-input>\n        </ion-item>\n    </ion-list>\n    <button  style="background-color: #0dacfa;width: 80%;margin-left: 10%;margin-top: 20%" ion-button block tappable (click)="goComfirm()">{{ \'request_receive.confirm\' | translate }}</button>\n\n</ion-content>\n'/*ion-inline-end:"E:\newpay\newpay\src\pages\financial\receive\request-receive\request-receive.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
], requestReceivePage);

//# sourceMappingURL=request-receive.js.map

/***/ }),

/***/ 889:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestReceivePageModule", function() { return requestReceivePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_receive__ = __webpack_require__(1004);
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
            __WEBPACK_IMPORTED_MODULE_2__request_receive__["a" /* requestReceivePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__request_receive__["a" /* requestReceivePage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__request_receive__["a" /* requestReceivePage */]
        ]
    })
], requestReceivePageModule);

//# sourceMappingURL=request-receive.module.js.map

/***/ })

});
//# sourceMappingURL=36.js.map