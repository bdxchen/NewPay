webpackJsonp([45],{

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceDetailPageModule", function() { return BalanceDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__balance_detail__ = __webpack_require__(961);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_dragula__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BalanceDetailPageModule = (function () {
    function BalanceDetailPageModule() {
    }
    return BalanceDetailPageModule;
}());
BalanceDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__balance_detail__["a" /* BalanceDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__balance_detail__["a" /* BalanceDetailPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */], __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__["DragulaModule"]
        ],
    })
], BalanceDetailPageModule);

//# sourceMappingURL=balance-detail.module.js.map

/***/ }),

/***/ 961:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalanceDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_financial_service_account_balance_service__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_newpay_wallet_js__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util_service_storage_service__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_transfer_Ba_accountif_service__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_home_searchAcc_service__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_commonUtils__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_translate__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_dragula__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_dragula__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var BalanceDetailPage = (function () {
    function BalanceDetailPage(navCtrl, balanceService, searchAcc, navParams, toastCtrl, alertCtrl, loadingCtrl, storageService, baAccountifService, commonUtils, translate, dragulaService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.balanceService = balanceService;
        this.searchAcc = searchAcc;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storageService = storageService;
        this.baAccountifService = baAccountifService;
        this.commonUtils = commonUtils;
        this.translate = translate;
        this.dragulaService = dragulaService;
        this.Allasset = 0;
        this.currencyCoin = '';
        this.data = [];
        this.isDebug = true;
        this.options = {
            removeOnSpill: true
        };
        // dragulaService.setOptions('first-bag', {
        //     removeOnSpill: true
        // });
        this.translate.get('balance_detail').subscribe(function (res) {
            _this.translateObj = res;
        });
    }
    BalanceDetailPage.prototype.toggleDetails = function (data) {
        debugger;
        if (data.showDetails) {
            data.showDetails = false;
            data.icon = 'assets/img/transfer/jiantouS.png';
        }
        else {
            data.showDetails = true;
            data.icon = 'assets/img/transfer/jiantouX.png';
        }
    };
    BalanceDetailPage.prototype.toTopup = function (SearchD) {
        localStorage.setItem('currency', SearchD.symbol);
        this.navCtrl.push("TopupPage", { SearchD: SearchD });
        console.log('toTopup CurrencyDetailPage');
    };
    BalanceDetailPage.prototype.toTransfer = function (SearchD) {
        localStorage.setItem('currency', SearchD.symbol);
        this.navCtrl.push("TransferPage", { SearchD: SearchD });
        console.log('toTopup CurrencyDetailPage');
    };
    BalanceDetailPage.prototype.toWithdraw = function (SearchD) {
        console.log(SearchD);
        localStorage.setItem('currency', SearchD.symbol);
        this.navCtrl.push("WithdrawPage", { currency: SearchD });
        console.log('ionViewDidLoad CurrencydetailPage');
    };
    BalanceDetailPage.prototype.toFlowDetail = function (currency) {
        this.navCtrl.push("FlowdetailPage", { currency: currency });
    };
    BalanceDetailPage.prototype.ChargingMoney = function (SearchD) {
        this.navCtrl.push('CurrencyPage', { currency: SearchD, flag: 1 });
    };
    BalanceDetailPage.prototype.Currency = function (SearchD) {
        this.navCtrl.push('ChargingMoneyPage', { SearchD: SearchD });
    };
    BalanceDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BalanceDetailPage');
    };
    BalanceDetailPage.prototype.ionViewWillEnter = function () {
        //查询平台支持所有货币列表
        this.suppCompar();
    };
    BalanceDetailPage.prototype.suppCompar = function () {
        var _this = this;
        debugger;
        // this.type ='BitEUR';
        this.commonUtils.showLoading();
        this.searchAcc.findAssets().then(function (res) {
            _this.commonUtils.HideLoading();
            console.log(res);
            if (res.ret_code == "1") {
                // this.data  = res.data;
                var arr = [];
                var accountname = localStorage.getItem("account");
                __WEBPACK_IMPORTED_MODULE_3_newpay_wallet_js__["a" /* NewpayInstance */].getAccountBalances(accountname).then(function (resQ) {
                    // amount: 1, asset_id: "1.3.113", precision: 4, symbol: "bitCNY"
                    console.log("res", resQ);
                    for (var j = 0; j < res.data.length; j++) {
                        var obj = { amount: '0', asset_id: '', precision: '', symbol: res.data[j].code };
                        for (var i = 0; i < resQ.length; i++) {
                            if (res.data[j].code == resQ[i].symbol) {
                                // arr.push(resQ[i])
                                // console.log(JSON.stringify(arr))
                                obj = resQ[i];
                            }
                        }
                        arr.push(obj);
                    }
                    console.log("arr", arr);
                    _this.comp(arr);
                    localStorage.setItem('showList', JSON.stringify(arr));
                }).catch(function (err) {
                    console.log(err);
                    _this.commonUtils.alertCommon('', "网络链接错误,请检查网络是否连接");
                });
            }
        }).catch(function (err) {
            _this.commonUtils.HideLoading();
            // this.commonUtils.alertCommon('',err);
        });
    };
    BalanceDetailPage.prototype.comp = function (arr) {
        var _this = this;
        var showList = arr;
        if (showList.length != 0) {
            this.data = [];
            for (var i = 0; i < showList.length; i++) {
                this.data.push({
                    title: 'Title ' + i,
                    icon: 'assets/img/transfer/jiantouS.png',
                    showDetails: false,
                    SearchD: showList[i]
                });
            }
        }
        console.log("data+++++++++++", this.data);
        this.coin_type = '';
        // this.commonUtils.showLoading();
        this.baAccountifService.monetaryxchangeRate(this.coin_type).then(function (res) {
            // this.commonUtils.HideLoading();
            console.log(res);
            var isContain = false;
            if (res.ret_code == "1") {
                _this.currencyCoin = res.currencyCoin;
                _this.currencyCoin_type = res.coin_type;
                var all = 0;
                for (var o = 0; o < _this.data.length; o++) {
                    for (var i = 0; i < res.rateList.length; i++) {
                        debugger;
                        if (res.rateList[i].digital == res.coin_type) {
                            if (res.rateList[i].digital == _this.data[o].SearchD.symbol) {
                                console.log("AAAAA", _this.data[o].SearchD);
                                all = all + _this.data[o].SearchD.amount * 1;
                                isContain = true;
                            }
                        }
                        else if (res.rateList[i].digital == _this.data[o].SearchD.symbol) {
                            all = all + res.rateList[i].rate * _this.data[o].SearchD.amount;
                        }
                    }
                    if (!isContain) {
                        if (res.coin_type == _this.data[o].SearchD.symbol) {
                            all += _this.data[o].SearchD.amount * 1;
                        }
                    }
                }
                _this.Allasset = all.toFixed(2);
                console.log(all.toFixed(2));
            }
        }).catch(function (err) {
            // this.commonUtils.HideLoading();
        });
    };
    BalanceDetailPage.prototype.viewCurrencyDetails = function () {
        this.navCtrl.push("CurrencyDetailPage");
    };
    BalanceDetailPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    BalanceDetailPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait....'
        });
        this.loading.present();
    };
    BalanceDetailPage.prototype.showError = function (text) {
        var _this = this;
        setTimeout(function () {
            _this.loading.dismiss();
        });
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    };
    //添加数字货币
    BalanceDetailPage.prototype.addDigitals = function () {
        var _this = this;
        this.commonUtils.showLoading();
        this.searchAcc.getSearchAccM().then(function (res) {
            _this.commonUtils.HideLoading();
            console.log(res);
            _this.alert = _this.alertCtrl.create();
            _this.alert.setTitle(_this.translateObj.digitalCurrency);
            for (var i = 0; i < res.data.length; i++) {
                debugger;
                var name_1 = res.data[i].name;
                var code = res.data[i].code;
                _this.alert.addInput({
                    type: 'radio',
                    label: name_1,
                    value: code,
                });
            }
            _this.alert.addButton(_this.translateObj.CANCEL);
            _this.alert.addButton({
                text: _this.translateObj.OK,
                handler: function (data) {
                    console.log(data);
                    // this.testRadioOpen = false;
                    _this.RadioResult = data;
                    console.log(_this.RadioResult);
                    var request = {};
                    request.digitalCoin = data;
                    _this.commonUtils.showLoading();
                    _this.searchAcc.Adddigital(request).then(function (res) {
                        _this.commonUtils.HideLoading();
                        //添加成功 重新 查询对比 显示列表
                        if (res.ret_code == "1") {
                            console.log(res);
                            _this.commonUtils.alertCommon('', _this.translateObj.addAssetSuccess);
                            _this.suppCompar();
                        }
                        else if (res.ret_code == "0") {
                            _this.commonUtils.showToast(res.ret_msg);
                        }
                    }).catch(function (res) {
                        _this.commonUtils.HideLoading();
                        _this.commonUtils.alertCommon('', _this.translateObj.addAssetFail);
                    });
                }
            });
            _this.alert.present();
        }).catch(function (err) {
            _this.commonUtils.alertCommon('', _this.translateObj.queryAssetListFail);
        });
    };
    BalanceDetailPage.prototype.TaostGlobal = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
        });
        toast.present();
    };
    BalanceDetailPage.prototype.ionViewWillLeave = function () {
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
    return BalanceDetailPage;
}());
BalanceDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-balance-detail',template:/*ion-inline-start:"E:\newpays\src\pages\balance\balance-detail\balance-detail.html"*/'<!--<ion-header>-->\n\n<!--<ion-navbar color="secondary">-->\n<!--<ion-title>账户余额</ion-title>-->\n<!---->\n<!--</ion-navbar>-->\n\n<!--</ion-header>-->\n<ion-header no-border>\n    <ion-toolbar color="primary">\n        <ion-buttons left tappable (click)="goBack()">\n            <button ion-button icon-only>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title style="text-align: center">{{\'balance_detail.balance_title\' | translate }}</ion-title>\n        <ion-buttons right tappable (click)="addDigitals()">\n            <button ion-button icon-only>\n                <ion-icon name="md-add"></ion-icon>\n            </button>\n        </ion-buttons>\n\n    </ion-toolbar>\n</ion-header>\n<ion-content class="cards-bg">\n    <div class="BGAl">\n        <div style="text-align: center;">\n            <img class="c-icon-jgwablogo" *ngIf="currencyCoin!=\'\'" src="assets/img/legalMoney/{{currencyCoin}}.png" style="width: 4rem;height: 4rem"/>\n            <!--<i class="c-icon-jgwablogo"></i>-->\n            <span style="font-size: 4rem; width: 100%; color: #fff;">{{Allasset}}</span>\n        </div>\n        <div class="totalZC">{{\'balance_detail.totalAssets\' | translate }} ({{\'balance_detail.convert\' | translate\n            }}{{currencyCoin}})\n        </div>\n    </div>\n\n    <!--<ul [dragula]=\'"bag-one"\' [dragulaModel]=\'data\'>-->\n    <!--<li *ngFor="let item of data">{{item.SearchD.symbol}}</li>-->\n    <!--<li *ngFor="let item of data">{{item.SearchD.symbol}}</li>-->\n    <!--</ul>-->\n\n    <ion-list no-lines>\n        <!--<div [dragula]=\'"bag-one"\' [dragulaModel]=\'data\'>-->\n        <div *ngFor="let d of data">\n            <ion-item tappable (click)="toggleDetails(d)">\n                <img class="animated infinite bounce"  *ngIf="d.SearchD.symbol==\'BTS\'" src="assets/img/balance/BitEUR.png"\n                     style="width: 25px;" item-start>\n                <img class="animated infinite bounce" *ngIf="d.SearchD.symbol==\'CNY\'" src="assets/img/balance/BitCNY.png"\n                     style="width: 25px;" item-start>\n                <img class="animated infinite bounce" *ngIf="d.SearchD.symbol==\'USD\'" src="assets/img/balance/BitUSD.png"\n                     style="width: 25px;" item-start>\n                <img class="animated infinite bounce" *ngIf="d.SearchD.symbol==\'PHP\'" src="assets/img/balance/BitPHP.png"\n                     style="width: 25px;" item-start>\n                <!--<img *ngIf="d.SearchD.symbol==\'USD\'" src="assets/img/balance/BitUSD.png" style="width: 21px;height: 21px;" item-start>-->\n                <span item-left>{{d.SearchD.symbol}}</span>\n                <span item-right class="heihui">{{d.SearchD.amount}}</span>\n                <img src="{{d.icon}}" style="width: 21px;height: 21px" item-end>\n            </ion-item>\n            <div *ngIf="d.showDetails" class="changeTixian">\n\n                <div tappable (click)="toTopup(d.SearchD)">\n                    <img src="assets/img/balance/chongzhi.png" style="width: 18px;height: 18px;">\n                    <p>{{\'balance_detail.refill\' | translate }}</p>\n                </div>\n                <div tappable (click)="toWithdraw(d.SearchD)">\n                    <img src="assets/img/balance/tixian.png" style="width: 18px;height: 18px;">\n                    <p>{{\'balance_detail.getCash\' | translate }}</p>\n                </div>\n                <div tappable (click)="toTransfer(d.SearchD)">\n                    <img src="assets/img/balance/zhuanzhang.png" style="width: 18px;height: 18px;">\n                    <p>{{\'balance_detail.transfer\' | translate }}</p>\n                </div>\n                <!--<div tappable (click)="ChargingMoney(d.SearchD)">-->\n                <!--<img src="assets/img/balance/tibi.png" style="width: 18px;height: 18px;">-->\n                <!--<p>{{\'balance_detail.refillCoin\' | translate }}</p>-->\n                <!--</div>-->\n                <!--<div tappable (click)="Currency(d.SearchD)">-->\n                <!--<img src="assets/img/balance/chongbi.png" style="width: 18px;height: 18px;">-->\n                <!--<p>{{\'balance_detail.transferCoin\' | translate }}</p>-->\n                <!--</div>-->\n            </div>\n            <!--</div>-->\n        </div>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"E:\newpays\src\pages\balance\balance-detail\balance-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_financial_service_account_balance_service__["a" /* BalanceService */],
        __WEBPACK_IMPORTED_MODULE_6__providers_home_searchAcc_service__["a" /* SearchAccService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_util_service_storage_service__["a" /* StorageService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_transfer_Ba_accountif_service__["a" /* BaAccountifService */],
        __WEBPACK_IMPORTED_MODULE_7__providers_common_commonUtils__["a" /* CommonUtils */],
        __WEBPACK_IMPORTED_MODULE_8_ng2_translate__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_9_ng2_dragula__["DragulaService"]])
], BalanceDetailPage);

//# sourceMappingURL=balance-detail.js.map

/***/ })

});
//# sourceMappingURL=45.js.map