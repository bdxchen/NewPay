webpackJsonp([9],{

/***/ 1035:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlyTestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_commonUtils__ = __webpack_require__(130);
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
 * Generated class for the OnlyTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OnlyTestPage = (function () {
    function OnlyTestPage(navCtrl, navParams, commonUtils) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonUtils = commonUtils;
    }
    OnlyTestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OnlyTestPage');
    };
    OnlyTestPage.prototype.showloading = function () {
        var _this = this;
        this.commonUtils.showLoading();
        setTimeout(function () {
            _this.commonUtils.HideLoading();
        }, 2000);
    };
    OnlyTestPage.prototype.isMobile = function () {
        console.log(this.commonUtils.isMobile());
    };
    OnlyTestPage.prototype.alertCommon = function () {
        this.commonUtils.alertCommon('弹框展示', '这是一个弹框');
    };
    OnlyTestPage.prototype.showToast = function () {
        this.commonUtils.showToast();
    };
    return OnlyTestPage;
}());
OnlyTestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-only-test',template:/*ion-inline-start:"E:\newpays\src\pages\only-test\only-test.html"*/'<!--\n  Generated template for the OnlyTestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>onlyTest</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <ion-item-group style="margin-top: 35px;font-size: 14px !important;">\n    <ion-list no-lines>\n      <button style="margin-top: 1px;border-bottom: 1px solid #f1f1f1" ion-item tappable (click)="showloading()">\n        loading\n        <ion-note class="my_details" item-end><img class="f-right" src="assets/img/mine/right.png" alt="" width="16px"></ion-note>\n      </button>\n    </ion-list>\n    <ion-list no-lines>\n      <button style="margin-top: 1px;border-bottom: 1px solid #f1f1f1" ion-item tappable (click)="isMobile()">\n        是否真机环境\n        <ion-note class="my_details" item-end><img class="f-right" src="assets/img/mine/right.png" alt="" width="16px"></ion-note>\n      </button>\n    </ion-list>\n    <ion-list no-lines>\n      <button style="margin-top: 1px;border-bottom: 1px solid #f1f1f1" ion-item tappable (click)="alertCommon()">\n        弹框\n        <ion-note class="my_details" item-end><img class="f-right" src="assets/img/mine/right.png" alt="" width="16px"></ion-note>\n      </button>\n    </ion-list>\n    <ion-list no-lines>\n      <button style="margin-top: 1px;border-bottom: 1px solid #f1f1f1" ion-item tappable (click)="showToast()">\n        底部提示信息\n        <ion-note class="my_details" item-end><img class="f-right" src="assets/img/mine/right.png" alt="" width="16px"></ion-note>\n      </button>\n    </ion-list>\n  </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"E:\newpays\src\pages\only-test\only-test.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_common_commonUtils__["a" /* CommonUtils */]])
], OnlyTestPage);

//# sourceMappingURL=only-test.js.map

/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlyTestPageModule", function() { return OnlyTestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__only_test__ = __webpack_require__(1035);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OnlyTestPageModule = (function () {
    function OnlyTestPageModule() {
    }
    return OnlyTestPageModule;
}());
OnlyTestPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__only_test__["a" /* OnlyTestPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__only_test__["a" /* OnlyTestPage */]),
        ],
    })
], OnlyTestPageModule);

//# sourceMappingURL=only-test.module.js.map

/***/ })

});
//# sourceMappingURL=9.js.map