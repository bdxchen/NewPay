webpackJsonp([23],{

/***/ 1020:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAlipayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_mine_service__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_service_storage_service__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_commonUtils__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_translate__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_newpay_wallet_js__ = __webpack_require__(393);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyAlipayPage = (function () {
    function MyAlipayPage(navCtrl, mineser, actionSheetCtrl, storageService, alertCtrl, commonUtils, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.mineser = mineser;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storageService = storageService;
        this.alertCtrl = alertCtrl;
        this.commonUtils = commonUtils;
        this.translate = translate;
        this.flag = 0;
        this.mdeleteAlipay = { account: '', name: '' };
        //请求服务器
        this.translate.get('alipay').subscribe(function (res) {
            _this.translateObj = res;
        });
        __WEBPACK_IMPORTED_MODULE_6_newpay_wallet_js__["a" /* NewpayInstance */].getAccountBalances(localStorage.getItem("account")).then(function (resQ) {
            _this.commonUtils.HideLoading();
            console.log("res", resQ);
            _this.data = resQ;
        }).catch(function (err) {
            _this.commonUtils.HideLoading();
            console.log(err);
        });
    }
    MyAlipayPage.prototype.goBack = function () {
        this.navCtrl.parent.select(1);
    };
    MyAlipayPage.prototype.goAlipayAddPage = function () {
        this.navCtrl.push("AlipayAddPage");
    };
    MyAlipayPage.prototype.deleteAlipay = function (tag) {
        this.mdeleteAlipay.account = tag.account;
        this.mdeleteAlipay.name = tag.name;
        this.showConfirm(tag);
    };
    MyAlipayPage.prototype.showConfirm = function (tag) {
        this.alert = this.alertCtrl.create({
            title: '',
            message: this.translateObj.unbindWarning,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: this.translateObj.cancel,
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: this.translateObj.confirm,
                    handler: function () {
                    }
                }
            ]
        });
        this.alert.present();
    };
    MyAlipayPage.prototype.ionViewWillLeave = function () {
        if (this.alert) {
            this.alert.dismiss();
        }
        if (this.loading) {
            this.loading.dismiss();
        }
        // if(this.actionSheet){
        //     this.actionSheet.dismiss();
        // }
        // if(this.modal){
        //     this.modal.dismiss();
        // }
    };
    return MyAlipayPage;
}());
MyAlipayPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-alipay',template:/*ion-inline-start:"E:\newpay\newpay\src\pages\mine\alipay\alipay.html"*/'<ion-header no-border>\n    <ion-toolbar color="secondary">\n        <ion-buttons left icon-only tappable (click)="goBack()">\n            <button ion-button icon-only>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title style="text-align: center">余额管理</ion-title>\n        <ion-buttons right icon-only>\n            <button ion-button icon-only>\n                <ion-icon name=""></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content style="background-color: #eef5fd !important">\n    <ion-card>\n        <ion-card-header>\n            余额:\n        </ion-card-header>\n\n        <ion-list>\n            <button ion-item *ngFor="let item of data">\n                <ion-icon name="cart" item-start></ion-icon>\n                <!--0: {amount: 1000000, asset_id: "1.3.0", precision: 5, symbol: "YTS"}length: 1__proto__: Array(0)-->\n               <p item-left>{{item.symbol}}</p>   <span item-end="">{{item.amount}}</span>\n            </button>\n        </ion-list>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\newpay\newpay\src\pages\mine\alipay\alipay.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_service_mine_service__["a" /* MineService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_util_service_storage_service__["a" /* StorageService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_common_commonUtils__["a" /* CommonUtils */],
        __WEBPACK_IMPORTED_MODULE_5_ng2_translate__["c" /* TranslateService */]])
], MyAlipayPage);

//# sourceMappingURL=alipay.js.map

/***/ }),

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAlipayPageModule", function() { return MyAlipayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alipay__ = __webpack_require__(1020);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MyAlipayPageModule = (function () {
    function MyAlipayPageModule() {
    }
    return MyAlipayPageModule;
}());
MyAlipayPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__alipay__["a" /* MyAlipayPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__alipay__["a" /* MyAlipayPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], MyAlipayPageModule);

//# sourceMappingURL=alipay.module.js.map

/***/ })

});
//# sourceMappingURL=23.js.map