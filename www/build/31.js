webpackJsonp([31],{

/***/ 1010:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferreceiptPage; });
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
 * Generated class for the TransferreceiptPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TransferreceiptPage = (function () {
    function TransferreceiptPage(navCtrl, navParams, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.reqsubmittransinfo = { amount: '', fee: '', comment: "", coin_type: "",
            to_userid: localStorage.getItem('account'),
            coin_account: "",
            txid: "" };
        this.reqsubmittransinfo = navParams.get("reqsubmittransinfo");
        this.transferTime = navParams.get('transferTime');
        console.log(this.reqsubmittransinfo);
        this.flag = navParams.get('flag'); //1 充值 2 转账 3 提现
        this.translate.get('transferreceipt').subscribe(function (res) {
            _this.translateObj = res;
            // "transferCoinInfo": "提币信息",
            //     "transferInfo": "转账信息",
            //     "getCashInfo": "提现信息",
            //     "payInfo": "支付信息"
            debugger;
            if (_this.flag == '1') {
                _this.title = _this.translateObj.transferCoinInfo;
                _this.backImg = 'skfinish.png';
            }
            else if (_this.flag == '2') {
                _this.title = _this.translateObj.transferInfo;
                _this.backImg = 'skfinish.png';
            }
            else if (_this.flag == '3') {
                _this.title = _this.translateObj.payInfo;
                _this.backImg = 'zffinish.png';
            }
            else if (_this.flag == '4') {
                _this.title = _this.translateObj.transferInfo;
                _this.backImg = 'zffinish.png';
            }
        });
    }
    TransferreceiptPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransferreceiptPage');
    };
    TransferreceiptPage.prototype.backBal = function () {
        // this.navCtrl.push("BalanceDetailPage", { });
        this.navCtrl.parent.select(0);
    };
    TransferreceiptPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    TransferreceiptPage.prototype.ionViewWillLeave = function () {
        if (this.alert) {
            this.alert.dismiss();
        }
        if (this.loading) {
            this.loading.dismiss();
        }
        if (this.actionSheet) {
            this.actionSheet.dismiss();
        }
        if (this.modal) {
            this.modal.dismiss();
        }
    };
    return TransferreceiptPage;
}());
TransferreceiptPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-transferreceipt',template:/*ion-inline-start:"E:\newpays\src\pages\financial\transferreceipt\transferreceipt.html"*/'<!--\n  Generated template for the TransferreceiptPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>-->\n\n<!--<ion-navbar color="secondary">-->\n<!--<ion-title>转账信息</ion-title>-->\n<!--</ion-navbar>-->\n\n<!--</ion-header>-->\n<ion-header no-border>\n    <ion-toolbar color="primary">\n        <ion-buttons left onclick="" (click)="goBack()">\n            <button ion-button icon-only>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n\n        <ion-title style="text-align: center">{{title}}</ion-title>\n\n\n        <ion-buttons right (click)="backBal()">\n            <button ion-button clear>{{\'transferreceipt.finish\' | translate}}</button>\n        </ion-buttons>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <img src="assets/img/{{backImg}}"/>\n        <ion-card-content>\n            <ion-card-title>\n                {{\'transferreceipt.transferSuccess\' | translate}}\n            </ion-card-title>\n            <p style="font-size: 1.2rem; color: #888;">\n                {{reqsubmittransinfo.coin_type}} &nbsp;\n                <!--{{reqsubmittransinfo.amount}}-->\n            </p>\n            <!--<div style="position: absolute;-->\n            <!--bottom: 10px;display: block;-->\n            <!--width: 250px;-->\n            <!--left:50%;-->\n            <!--margin-left:-125px;">-->\n            <!--<span>-->\n            <!--{{\'transferreceipt.time\' | translate}}: {{transferTime}}-->\n            <!--</span>-->\n\n            <!--</div>-->\n        </ion-card-content>\n\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\newpays\src\pages\financial\transferreceipt\transferreceipt.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ng2_translate__["c" /* TranslateService */]])
], TransferreceiptPage);

//# sourceMappingURL=transferreceipt.js.map

/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferreceiptPageModule", function() { return TransferreceiptPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transferreceipt__ = __webpack_require__(1010);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TransferreceiptPageModule = (function () {
    function TransferreceiptPageModule() {
    }
    return TransferreceiptPageModule;
}());
TransferreceiptPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__transferreceipt__["a" /* TransferreceiptPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transferreceipt__["a" /* TransferreceiptPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], TransferreceiptPageModule);

//# sourceMappingURL=transferreceipt.module.js.map

/***/ })

});
//# sourceMappingURL=31.js.map