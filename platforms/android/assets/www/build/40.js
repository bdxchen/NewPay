webpackJsonp([40],{

/***/ 882:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillDetailPageModule", function() { return BillDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bill_detail__ = __webpack_require__(967);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BillDetailPageModule = (function () {
    function BillDetailPageModule() {
    }
    return BillDetailPageModule;
}());
BillDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__bill_detail__["a" /* BillDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bill_detail__["a" /* BillDetailPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], BillDetailPageModule);

//# sourceMappingURL=bill-detail.module.js.map

/***/ }),

/***/ 967:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_auth_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_financial_service_account_pub_service__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_translate__ = __webpack_require__(212);
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
 * Generated class for the BillDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BillDetailPage = (function () {
    function BillDetailPage(navCtrl, navParams, authService, alertCtrl, accountPubService, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.accountPubService = accountPubService;
        this.translate = translate;
        this.order = { coin: '', comment: '', oppaccountno: '', orderno: '', payType: '', quantity: '', status: '', time: '', statusTemp: '' };
        this.confirmOrder = { orderNo: '', payStatus: true };
        this.formatDateTime = function (date) {
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            m = m < 10 ? ('0' + m) : m;
            var d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            var h = date.getHours();
            var minute = date.getMinutes();
            minute = minute < 10 ? ('0' + minute) : minute;
            return y + '-' + m + '-' + d + ' ' + h + ':' + minute;
        };
        this.assistants = this.navParams.get('assistants');
        var flag = this.navParams.get('flag');
        console.log(flag);
        debugger;
        if (flag == "home") {
            this.showDetail(this.assistants, 'home');
        }
        else {
            this.showDetail(this.assistants, 'topup');
        }
        this.translate.get('bill_detail').subscribe(function (res) {
            _this.translateObj = res;
        });
    }
    BillDetailPage.prototype.showDetail = function (assistants, flag) {
        var _this = this;
        console.log(assistants);
        // {asstype: "TOPUP", coin: "", quantity: "100.0000", time: "2017-11-17 11:00:17.0", id: "ff8080815fc4a5a2015fc7eb700f00e4", …}asstype: "TOPUP"coin: ""id: "ff8080815fc4a5a2015fc7eb700f00e4"quantity: "100.0000"status: "2"time: "2017-11-17 11:00:17.0"__proto__: Object
        if (flag == 'home') {
            this.req = assistants.id;
            switch (assistants.asstype) {
                case 'TOPUP':
                    {
                        this.temp = 'topup';
                        break;
                    }
                case 'TRANSFER':
                    {
                        this.temp = 'transfer';
                        break;
                    }
                case 'WITHDRAW':
                    {
                        this.temp = 'withdraw';
                        break;
                    }
                case 'WITHDRAWCOIN':
                    {
                        this.temp = 'withdrawcoin';
                        break;
                    }
            }
        }
        else {
            this.req = this.assistants;
            this.temp = 'topup';
        }
        console.log('temp', this.temp);
        this.authService.orderDetail(this.temp, this.req).then(function (success) {
            console.log(success);
            if (success) {
                _this.order = success;
                if (_this.temp == 'topup') {
                    switch (success.status) {
                        case "0": {
                            _this.order.statusTemp = _this.translateObj.unpaid;
                            break;
                        }
                        case "1": {
                            _this.order.statusTemp = _this.translateObj.paid;
                            break;
                        }
                        case "2": {
                            _this.order.statusTemp = _this.translateObj.paidAndConfirm;
                            break;
                        }
                        case "3": {
                            _this.order.statusTemp = _this.translateObj.topupCompleted;
                            break;
                        }
                        case "7": {
                            _this.order.statusTemp = _this.translateObj.userCancel;
                            break;
                        }
                        case "8": {
                            _this.order.statusTemp = _this.translateObj.systemCancel;
                            break;
                        }
                        case "9": {
                            _this.order.statusTemp = _this.translateObj.timeoutCancel;
                            break;
                        }
                        case "9": {
                            _this.order.statusTemp = _this.translateObj.timeout;
                            break;
                        }
                    }
                }
                else if (_this.temp == 'withdraw') {
                    switch (success.status) {
                        case "0": {
                            _this.order.statusTemp = _this.translateObj.waitingTX;
                            break;
                        }
                        case "1": {
                            _this.order.statusTemp = _this.translateObj.transferred;
                            break;
                        }
                        case "2": {
                            _this.order.statusTemp = _this.translateObj.transferAndComfirm;
                            break;
                        }
                        case "3": {
                            _this.order.statusTemp = _this.translateObj.withdrawCompleted;
                            break;
                        }
                        case "8": {
                            _this.order.statusTemp = _this.translateObj.withdrawFail;
                            break;
                        }
                        case "9": {
                            _this.order.statusTemp = _this.translateObj.withdrawTimeout;
                            break;
                        }
                    }
                }
                else {
                    _this.order.statusTemp = _this.translateObj.completed;
                }
                _this.order.orderno = success.orderno;
                _this.order.qr_code = success.qrCode;
                _this.order.time = success.time;
                console.log(_this.order);
                _this.order.identity = success.identity;
            }
        }, function (error) {
            console.log(error);
        });
    };
    BillDetailPage.prototype.confirmOrderCon = function (orderNo, payStatus) {
        this.confirmOrder.orderNo = orderNo;
        this.confirmOrder.payStatus = payStatus;
        this.accountPubService.confirmOrderZ(this.confirmOrder).then(function (success) {
            if (success.ret_code == "1") {
                console.log(success);
            }
        }, function (error) {
            console.log(error);
        });
    };
    BillDetailPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    BillDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BillDetailPage');
    };
    BillDetailPage.prototype.showConfirm = function (success) {
        var _this = this;
        console.log(success);
        this.orderNo = this.order.orderno; //订单号
        var confirm = this.alertCtrl.create({
            title: this.translateObj.confirm,
            message: this.translateObj.isCompletedPay,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: this.translateObj.unpaid,
                    handler: function () {
                        console.log('未付款');
                        _this.payStatus = false;
                        // this.confirmOrderCon(this.orderNo,this.payStatus);
                        _this.navCtrl.parent.select(0);
                    }
                },
                {
                    text: this.translateObj.paid,
                    handler: function () {
                        console.log('已付款');
                        _this.payStatus = true;
                        _this.confirmOrderCon(_this.orderNo, _this.payStatus);
                        _this.navCtrl.parent.select(0);
                    }
                }
            ]
        });
        confirm.present();
    };
    BillDetailPage.prototype.Order = function (flag) {
        var _this = this;
        this.orderNo = this.order.orderno; //订单号
        console.log(flag);
        console.log("order点击了");
        if (flag == '0') {
            this.orderNo = this.order.orderno;
            this.payStatus = false;
            this.confirmOrderCon(this.orderNo, this.payStatus);
            this.navCtrl.parent.select(0);
        }
        else if (flag == '1') {
            // this.browserService.open(success.qr_code);
            if (this.order.qr_code) {
                //弹出
                setTimeout(function () {
                    setTimeout(function () {
                        _this.showConfirm(flag);
                    }, 2000);
                });
            }
        }
        else if (flag == '2') {
            this.payStatus = true;
            this.confirmOrderCon(this.orderNo, this.payStatus);
            this.navCtrl.parent.select(0);
        }
        // this.navCtrl.push('TopupPage',{flag:'order',order:this.order})
    };
    BillDetailPage.prototype.ionViewWillLeave = function () {
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
    return BillDetailPage;
}());
BillDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-bill-detail',template:/*ion-inline-start:"E:\newpay\newpay\src\pages\financial\flowdetail\bill-detail\bill-detail.html"*/'<!--\n  Generated template for the BillDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header no-border>\n    <ion-toolbar color="secondary">\n        <ion-buttons left icon-only tappable (click)="goBack()">\n            <button ion-button icon-only>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title style="text-align: center" *ngIf="temp==\'topup\'">{{\'bill_detail.topup\' |\n            translate}}{{\'bill_detail.title\' | translate }}\n        </ion-title>\n        <ion-title style="text-align: center" *ngIf="temp==\'transfer\'">{{\'bill_detail.transfer\' |\n            translate}}{{\'bill_detail.title\' | translate }}\n        </ion-title>\n        <ion-title style="text-align: center" *ngIf="temp==\'withdraw\'">{{\'bill_detail.withdraw\' |\n            translate}}{{\'bill_detail.title\' | translate }}\n        </ion-title>\n        <ion-title style="text-align: center" *ngIf="temp==\'withdrawcoin\'">{{\'bill_detail.withdrawcoin\' |\n            translate}}{{\'bill_detail.title\' | translate }}\n        </ion-title>\n        <ion-buttons end icon-only>\n            <button ion-button icon-only>\n                <ion-icon name=""></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <!--<div class="contents">\n        <span style="">{{order.oppaccountno}}</span>\n        <img src="assets/img/bill/transfer.png" alt="" style="width: 21px;\n    height: 18px;\n    margin-left: 5px;">\n    </div>\n    <div class="card-background-page">\n        <ion-card>\n            <div class="card-title"><span *ngIf="order.identity==\'0\'">-</span><span *ngIf="order.identity==\'1\'">+</span>{{order.quantity}}\n            </div>\n            <div class="card-subtitle">{{order.statusTemp}}</div>\n        </ion-card>\n\n    </div>-->\n    <div class="cont">\n        <p class="p1">{{order.oppaccountno}}</p>\n        <p class="p2">\n            <span *ngIf="order.identity==\'0\'">-</span>\n            <span *ngIf="order.identity==\'1\'">+</span>\n            <span>{{order.quantity}}</span>\n        </p>\n        <p class="p3">{{order.statusTemp}}</p>\n    </div>\n\n    <ul class="details_list">\n        <li>\n            <span>{{\'bill_detail.coinType\' | translate }}</span>\n            <span>{{order.coin}}</span>\n        </li>\n        <li *ngIf="temp==\'topup\' || temp==\'withdraw\'">\n            <span>{{\'bill_detail.payType\' | translate }}</span>\n            <span *ngIf="order.payType==\'1\'">{{\'bill_detail.weixinPay\' | translate }}</span>\n            <span *ngIf="order.payType==\'2\'">{{\'bill_detail.aliPay\' | translate }}</span>\n            <span *ngIf="order.payType==\'3\'">{{\'bill_detail.bankCard\' | translate }}</span>\n        </li>\n        <li>\n            <span>订单类型</span>\n            <span *ngIf="temp==\'topup\'">充值</span>\n            <span *ngIf="temp==\'transfer\'">转账</span>\n            <span *ngIf="temp==\'withdraw\'">提现</span>\n            <span *ngIf="temp==\'withdrawcoin\'">提币</span>\n        </li>\n        <li>\n            <span>{{\'bill_detail.memo\' | translate }}</span>\n            <span>{{order.comment}}</span>\n        </li>\n        <li *ngIf="temp==\'!withdraw\'">\n            <span>{{\'bill_detail.otherAccount\' | translate }}</span>\n            <span>{{order.oppaccountno}}</span>\n        </li>\n    </ul>\n    <ul class="details_list" style="border-top: 1px solid #f1f1f1;">\n        <li>\n            <span>{{\'bill_detail.datetime\' | translate }}</span>\n            <span>{{order.time}}</span>\n        </li>\n        <li>\n            <span>{{\'bill_detail.orderNo\' | translate }}</span>\n            <span>{{order.orderno}}</span>\n        </li>\n    </ul>\n    <!--<ion-item no-lines style="margin-top: 25px">\n        <span item-start>{{\'bill_detail.coinType\' | translate }}</span>\n        <span item-end>{{order.coin}}</span>\n    </ion-item>\n    <ion-item no-lines *ngIf="temp==\'topup\' || temp==\'withdraw\'">\n        <span item-start>{{\'bill_detail.payType\' | translate }}</span>\n        <span item-end *ngIf="order.payType==\'1\'">{{\'bill_detail.weixinPay\' | translate }}</span>\n        <span item-end *ngIf="order.payType==\'2\'">{{\'bill_detail.aliPay\' | translate }}</span>\n        <span item-end *ngIf="order.payType==\'3\'">{{\'bill_detail.bankCard\' | translate }}</span>\n    </ion-item>\n    <ion-item no-lines>\n        <span item-start>订单类型</span>\n        <span item-end *ngIf="temp==\'topup\'">充值</span>\n        <span item-end *ngIf="temp==\'transfer\'">转账</span>\n        <span item-end *ngIf="temp==\'withdraw\'">提现</span>\n        <span item-end *ngIf="temp==\'withdrawcoin\'">提币</span>\n    </ion-item>\n    <ion-item no-lines>\n        <span item-start>{{\'bill_detail.memo\' | translate }}</span>\n        <span item-end>{{order.comment}}</span>\n    </ion-item>\n    <ion-item no-lines style="border-bottom: 1px solid #dedede">\n        <span item-start>{{\'bill_detail.otherAccount\' | translate }}</span>\n        <span item-end>{{order.oppaccountno}}</span>\n\n    </ion-item>\n    <ion-item no-lines>\n        <span item-start>{{\'bill_detail.datetime\' | translate }}</span>\n        <span item-end>{{order.time}}</span>\n    </ion-item>\n    <ion-item no-lines>\n        <span item-start>{{\'bill_detail.orderNo\' | translate }}</span>\n        <span item-end>{{order.orderno}}</span>\n    </ion-item>-->\n\n    <div style="position: fixed;bottom: 0;left: 10px;right: 10px;" *ngIf="temp==\'topup\' && order.status==\'0\'">\n        <ion-row>\n            <ion-col col-4 class="text-left">\n                <button ion-button style="background-color:#2faff9" tappable (click)="Order(\'0\')">\n                    {{\'bill_detail.cancelOrder\' | translate }}\n                </button>\n            </ion-col>\n            <ion-col col-4 class="text-center">\n                <button ion-button style="background-color:#2faff9" tappable (click)="Order(\'1\')">\n                    {{\'bill_detail.continuePay\' | translate }}\n                </button>\n            </ion-col>\n            <ion-col col-4 class="text-right">\n                <button ion-button style="background-color:#2faff9" tappable (click)="Order(\'2\')">{{\'bill_detail.finish\' | translate }}\n                </button>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>\n'/*ion-inline-end:"E:\newpay\newpay\src\pages\financial\flowdetail\bill-detail\bill-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_financial_service_account_pub_service__["a" /* AccountPubService */],
        __WEBPACK_IMPORTED_MODULE_4_ng2_translate__["c" /* TranslateService */]])
], BillDetailPage);

//# sourceMappingURL=bill-detail.js.map

/***/ })

});
//# sourceMappingURL=40.js.map