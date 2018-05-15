webpackJsonp([34],{

/***/ 886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetMoneyPageModule", function() { return SetMoneyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__set_money__ = __webpack_require__(971);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SetMoneyPageModule = (function () {
    function SetMoneyPageModule() {
    }
    return SetMoneyPageModule;
}());
SetMoneyPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__set_money__["a" /* SetMoneyPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__set_money__["a" /* SetMoneyPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], SetMoneyPageModule);

//# sourceMappingURL=set-money.module.js.map

/***/ }),

/***/ 971:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetMoneyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_newpay_wallet_js__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_commonUtils__ = __webpack_require__(130);
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
var SetMoneyPage = (function () {
    function SetMoneyPage(navCtrl, events, commonUtils, navParams, alertCtrl, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.events = events;
        this.commonUtils = commonUtils;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.currency = ""; // 币种
        this.bzMoney = ''; //收款金额
        this.skreason = ''; //收款理由
        this.showReason = false;
        this.translate.get('set_money').subscribe(function (res) {
            _this.translateObj = res;
        });
    }
    SetMoneyPage.prototype.ReasonsCollection = function () {
        this.showReason = !this.showReason;
    };
    SetMoneyPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.selectOptionsQT = {
            title: '',
            mode: 'ios'
        };
        console.log(this.currency);
        this.paramInfo = this.navParams.get('paramInfo');
        console.log(this.paramInfo);
        this.flagMO = this.navParams.get('flagMO');
        if (JSON.stringify(this.navParams.data.paramInfo) != "{}") {
            __WEBPACK_IMPORTED_MODULE_2_newpay_wallet_js__["a" /* NewpayInstance */].getAccountBalances(localStorage.getItem("account")).then(function (resQ) {
                _this.commonUtils.HideLoading();
                console.log("res", resQ);
                _this.currency = "aaaa";
                _this.data = resQ;
            }).catch(function (err) {
                _this.commonUtils.HideLoading();
                console.log(err);
            });
            // this.paramInfo=this.paramInfo;
            // // {Account:account,currency:'', money:this.navParams.data.money, reason:this.navParams.data.reason}
            // this.currency = this.paramInfo.currency;
            // this.skreason=   this.paramInfo.reason;
            // this.bzMoney = this.paramInfo.money;
        }
        console.log("BBBBB", "BBBBBBB");
        this.showBIZ = true;
        if (this.skreason != '') {
            this.showReason = true;
        }
        console.log('ionViewDidLoad SetMoneyPage');
    };
    SetMoneyPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SetMoneyPage.prototype.setmoneyC = function () {
        var _this = this;
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
        var opts = {
            currency: this.currency, money: this.bzMoney, reason: this.skreason
        };
        this.navCtrl.pop().then(function () {
            console.log("set-money");
            // Trigger custom event and pass data to be send back
            _this.events.publish('custom-user-events', opts);
        });
        // this.navCtrl.pop()
    };
    SetMoneyPage.prototype.alertCommon = function (title, message) {
        this.alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: this.translateObj.confrim,
                    handler: function () {
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        this.alert.present();
    };
    SetMoneyPage.prototype.setmoneyJT = function (bzMoney) {
        if (bzMoney != "") {
            this.bzMoney = bzMoney.toString();
            if (this.bzMoney > 50000) {
                this.bzMoney = 50000;
                return;
            }
            if (this.bzMoney.split(".")[0] == "") {
                this.bzMoney = this.bzMoney.substring(0, 0);
            }
            // this.submitOrder.amount = Math.floor(amount * 100) / 100;
            console.log(bzMoney);
            this.bzMoney = this.bzMoney.replace(/[^\d.]/g, ""); //清除“数字”和“.”以外的字符
            this.bzMoney = this.bzMoney.replace(/\.{2,}/g, ""); //只保留第一个. 清除多余的
            if (this.bzMoney.indexOf(".") > -1 && this.bzMoney != "") {
                this.bzMoney = this.bzMoney.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
                this.bzMoney = this.bzMoney.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //只能输入两个小数
            }
            if (this.bzMoney.indexOf(".") < 0 && this.bzMoney != "") {
                this.bzMoney = parseFloat(this.bzMoney);
            }
        }
    };
    SetMoneyPage.prototype.ionViewWillLeave = function () {
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
    return SetMoneyPage;
}());
SetMoneyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-set-money',template:/*ion-inline-start:"E:\newpay\newpay\src\pages\financial\receive\set-money\set-money.html"*/'<!--\n  Generated template for the SetMoneyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n    <ion-toolbar color="secondary">\n        <ion-buttons left icon-only tappable (click)="goBack()">\n            <button ion-button icon-only>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title style="text-align: center">{{\'set_money.setAmountTitle\' | translate}}</ion-title>\n        <ion-buttons right>\n            <button ion-button icon-only>\n                <ion-icon></ion-icon>\n            </button>\n        </ion-buttons>\n        <!--<ion-buttons right>-->\n        <!--<button ion-button  color="primary" (click)="goAccountPay()">-->\n        <!--账户支付-->\n        <!--</button>-->\n        <!--</ion-buttons>-->\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list style="margin-top: 10px">\n        <ion-item no-lines>\n            <ion-label>{{\'set_money.asset\' | translate}}</ion-label>\n            <ion-select [selectOptions]="selectOptionsQT" [(ngModel)]="currency"\n                        okText="{{\'set_money.confirm\' | translate}}" cancelText="{{\'set_money.cancel\' | translate}}">\n                <ion-option *ngFor="let dataTemp of data" [value]="dataTemp.symbol">{{dataTemp.symbol}}</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item no-lines style="margin-top: 1px">\n            <ion-label>{{\'set_money.amount\' | translate}}</ion-label>\n            <ion-input text-end type="text"  placeholder="{{\'set_money.inputAmount\' | translate}}" [(ngModel)]="bzMoney"\n                       (keyup)="setmoneyJT(bzMoney)"></ion-input>\n        </ion-item>\n        <!--<ion-item no-lines style="margin-top: 1px" [hidden]="showReason" >-->\n        <!--<button ion-button clear item-end tappable (click)="ReasonsCollection()">{{\'set_money.addReason\' | translate}}</button>-->\n        <!--</ion-item>-->\n\n        <!--<ion-item no-lines style="margin-top: 1px" [hidden]="!showReason">-->\n        <!--<ion-label >{{\'set_money.addReason\' | translate}}</ion-label>-->\n        <!--<ion-input text-end placeholder="{{\'set_money.inputResaon\' | translate}}" [(ngModel)]="skreason"></ion-input>-->\n        <!--</ion-item>-->\n    </ion-list>\n    <button ion-button full style="width: 92%; display: block; margin: 2rem auto; background: #f9c215;" tappable (click)="setmoneyC()">{{\'set_money.confirm\' |\n        translate}}\n    </button>\n</ion-content>\n'/*ion-inline-end:"E:\newpay\newpay\src\pages\financial\receive\set-money\set-money.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
        __WEBPACK_IMPORTED_MODULE_4__providers_common_commonUtils__["a" /* CommonUtils */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["c" /* TranslateService */]])
], SetMoneyPage);

//# sourceMappingURL=set-money.js.map

/***/ })

});
//# sourceMappingURL=34.js.map