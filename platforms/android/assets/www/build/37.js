webpackJsonp([37],{

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestReceivePageModule", function() { return requestReceivePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__receiv_success__ = __webpack_require__(970);
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
            __WEBPACK_IMPORTED_MODULE_2__receiv_success__["a" /* receiveSuccessPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__receiv_success__["a" /* receiveSuccessPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__receiv_success__["a" /* receiveSuccessPage */]
        ]
    })
], requestReceivePageModule);

//# sourceMappingURL=receiv-success.module.js.map

/***/ }),

/***/ 970:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return receiveSuccessPage; });
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
var receiveSuccessPage = (function () {
    function receiveSuccessPage(navCtrl, navParams) {
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
    receiveSuccessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad page-receiv-success');
    };
    receiveSuccessPage.prototype.finishReceive = function () {
        // this.navCtrl.push("HomePage");
        //   this.navCtrl.setRoot("TabsPage");
        this.navCtrl.parent.select(0);
        console.log('go receivePage');
    };
    receiveSuccessPage.prototype.goComfirm = function () {
        this.navCtrl.push("requestReceivePage");
    };
    receiveSuccessPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    return receiveSuccessPage;
}());
receiveSuccessPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-receiv-success',template:/*ion-inline-start:"E:\newpay\newpay\src\pages\financial\receive\receive-success\receiv-success.html"*/'<!--\n  Generated template for the TopupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar color="secondary">\n        <ion-buttons left icon-only tappable (click)="goBack()">\n            <button ion-button icon-only>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title style="text-align: center">收款</ion-title>\n        <ion-buttons right>\n            <button ion-button  color="primary" tappable (click)="finishReceive()">\n                完成\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-list >\n        <ion-item >\n            <p>成功发起收款(BitCNY)10</p>\n            <p>张三zhang**@qq.com</p>\n        </ion-item>\n\n    </ion-list>\n    <button ion-button block (click)="goComfirm()">继续找人收款</button>\n\n</ion-content>\n'/*ion-inline-end:"E:\newpay\newpay\src\pages\financial\receive\receive-success\receiv-success.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
], receiveSuccessPage);

//# sourceMappingURL=receiv-success.js.map

/***/ })

});
//# sourceMappingURL=37.js.map