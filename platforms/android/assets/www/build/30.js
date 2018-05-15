webpackJsonp([30],{

/***/ 1012:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithdrawSuccessPage; });
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
var WithdrawSuccessPage = (function () {
    function WithdrawSuccessPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.arrCurrency = [
            { name: "BitCNY", bal: "200" },
            { name: "BitUSD", bal: "300" },
            { name: "BTS", bal: "400" }
        ];
        this.receiveData = { account: "", currecy: "", amount: "", remark: "" };
        console.log("WithdrawSuccessPage");
    }
    WithdrawSuccessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WithdrawSuccessPage');
    };
    WithdrawSuccessPage.prototype.finishWithdraw = function () {
        this.navCtrl.push("HomePage");
        // console.log('go WithdrawSuccessPage');
        //   this.navCtrl.setRoot("TabsPage");
        this.navCtrl.parent.select(0);
    };
    WithdrawSuccessPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    return WithdrawSuccessPage;
}());
WithdrawSuccessPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-receiv-success',template:/*ion-inline-start:"E:\newpay\newpay\src\pages\financial\withdraw\withdraw-success\withdraw-success.html"*/'<!--\n  Generated template for the TopupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar color="primary" >\n        <ion-buttons left onclick="" (click)="goBack()">\n            <button ion-button icon-only>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n\n        <ion-title style="text-align: center">提现完成</ion-title>\n        <ion-buttons right (click)="finishWithdraw()">\n            <button ion-button clear>完成</button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n	<ion-list >\n        <ion-item >\n          <p>你已成功提现</p>\n          <p>(BitCNY)10</p>\n        </ion-item>\n        <ion-item>\n          <p>提现时间:2017-10-24</p>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\newpay\newpay\src\pages\financial\withdraw\withdraw-success\withdraw-success.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
], WithdrawSuccessPage);

//# sourceMappingURL=withdraw-success.js.map

/***/ }),

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawSuccessPageModule", function() { return WithdrawSuccessPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__withdraw_success__ = __webpack_require__(1012);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WithdrawSuccessPageModule = (function () {
    function WithdrawSuccessPageModule() {
    }
    return WithdrawSuccessPageModule;
}());
WithdrawSuccessPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__withdraw_success__["a" /* WithdrawSuccessPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__withdraw_success__["a" /* WithdrawSuccessPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__withdraw_success__["a" /* WithdrawSuccessPage */]
        ]
    })
], WithdrawSuccessPageModule);

//# sourceMappingURL=withdraw-success.module.js.map

/***/ })

});
//# sourceMappingURL=30.js.map