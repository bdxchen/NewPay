webpackJsonp([44],{

/***/ 877:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargingMoneyPageModule", function() { return ChargingMoneyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__charging_money__ = __webpack_require__(962);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChargingMoneyPageModule = (function () {
    function ChargingMoneyPageModule() {
    }
    return ChargingMoneyPageModule;
}());
ChargingMoneyPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__charging_money__["a" /* ChargingMoneyPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__charging_money__["a" /* ChargingMoneyPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], ChargingMoneyPageModule);

//# sourceMappingURL=charging-money.module.js.map

/***/ }),

/***/ 962:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChargingMoneyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_financial_service_account_transfer_service__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_modal__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_wallet_recovery_import_service__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_newpay_wallet_js__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_commonUtils__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_translate__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_feelActionrate_feel_actionrate_service__ = __webpack_require__(402);
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
 * Generated class for the ChargingMoneyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChargingMoneyPage = (function () {
    function ChargingMoneyPage(navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, transfer, commonUtils, loadingCtrl, recoveryImportService, translate, feelService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.transfer = transfer;
        this.commonUtils = commonUtils;
        this.loadingCtrl = loadingCtrl;
        this.recoveryImportService = recoveryImportService;
        this.translate = translate;
        this.feelService = feelService;
        this.remarks = '';
        this.money = '';
        this.feel = 0;
        this.reqsubmittransinfo = { from: '', to: '', amount: '', fee: '', coin_code: '', txid: '', hash: '' };
        this.reqsubmittransinfoTemp = { from: '', to: '', amount: '', fee: '', coin_type: '', txid: '', hash: '' };
        this.account = "";
        this.reqCheckPyee = navParams.get("SearchD");
        console.log(this.reqCheckPyee);
        this.translate.get('charging_money').subscribe(function (res) {
            _this.translateObj = res;
        });
    }
    //现在手续费 有问题
    ChargingMoneyPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ChargingMoneyPage');
        this.feelrequest = {
            "coinid": this.reqCheckPyee.symbol,
            "actiontype": "3" //类型1 topupcoin 2topup 3withdrawcoin 4 withdraw
        };
        this.feelService.getActionrate(this.feelrequest).then(function (res) {
            console.log(res);
            if (res.ret_code == '1') {
                _this.feelRate = res;
            }
            else if (res.ret_code == '0') {
                _this.commonUtils.alertCommon('', res.ret_msg);
            }
            // console.log("fell",res.minfee);
        }, function (error) {
            _this.commonUtils.alertCommon('this.translateObj.warning', _this.translateObj.fellVali);
        });
    };
    ChargingMoneyPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ChargingMoneyPage.prototype.nextFinPwd = function (amount) {
        var _this = this;
        var characterNum = 1;
        console.log(this.account);
        if (this.account == "") {
            this.commonUtils.alertCommon(this.translateObj.warning, this.translateObj.accountEmpty);
            return;
        }
        if (this.money == "") {
            this.commonUtils.alertCommon(this.translateObj.warning, this.translateObj.amountEmpty);
            return;
        }
        __WEBPACK_IMPORTED_MODULE_5_newpay_wallet_js__["a" /* NewpayInstance */].checkAccountExists(this.account).then(function (res) {
            console.log(res);
            var q = 0;
            for (var i = 0; i < res.length; i++) {
                console.log(res[i][0]);
                if (res[i][0] == _this.account) {
                    q++;
                }
            }
            if (q == 0) {
                _this.commonUtils.alertCommon(_this.translateObj.warning, _this.translateObj.accountNotExists);
                return;
            }
            else {
                console.log(_this.remarks);
                _this.opts = { showBackdrop: true, enableBackdropDismiss: true, cssClass: 'modalCssQ' };
                var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_modal__["a" /* ModalPage */]);
                modal.onDidDismiss(function (data) {
                    if (data.flag === 'forgot') {
                        _this.navCtrl.push('ResetZJpsdPage');
                    }
                    else {
                        if (data.pwd) {
                            console.log(data);
                            //转账成功。生成时间戳 获取当前时间
                            _this.commonUtils.showLoading();
                            _this.recoveryImportService.recImport(data.pwd).then(function (res) {
                                if (res.ret_code == "1") {
                                    var accountname_1 = localStorage.getItem("account");
                                    __WEBPACK_IMPORTED_MODULE_5_newpay_wallet_js__["a" /* NewpayInstance */].transfer(accountname_1, _this.account, //
                                    Number(_this.money) * Math.pow(10, _this.reqCheckPyee.precision), _this.reqCheckPyee.asset_id, _this.remarks).then(function (result) {
                                        _this.transferTime = _this.getRangeDate();
                                        // console.log("txid", result.txid);
                                        debugger;
                                        //如果转账成功以后，那么去中心化提交 提币信息。
                                        _this.reqsubmittransinfo.from = accountname_1;
                                        _this.reqsubmittransinfo.to = _this.account;
                                        _this.reqsubmittransinfo.fee = result.fee.amount / Math.pow(10, _this.reqCheckPyee.precision);
                                        _this.reqsubmittransinfo.amount = _this.money; //转账金额
                                        _this.reqsubmittransinfo.coin_code = _this.reqCheckPyee.symbol; //币种
                                        _this.reqsubmittransinfo.hash = ''; //数字货币账号
                                        _this.reqsubmittransinfo.txid = result.txid; //txid
                                        _this.reqsubmittransinfoTemp.from = accountname_1;
                                        _this.reqsubmittransinfoTemp.to = _this.account;
                                        _this.reqsubmittransinfoTemp.fee = result.fee.amount / Math.pow(10, _this.reqCheckPyee.precision);
                                        _this.reqsubmittransinfoTemp.amount = _this.money; //转账金额
                                        _this.reqsubmittransinfoTemp.coin_type = _this.reqCheckPyee.symbol; //币种
                                        _this.reqsubmittransinfoTemp.hash = ''; //数字货币账号
                                        _this.reqsubmittransinfoTemp.txid = result.txid; //txid
                                        _this.transfer.submitwithdrawInfo(_this.reqsubmittransinfo).then(function (success) {
                                            _this.commonUtils.HideLoading();
                                            console.log(success);
                                            if (success) {
                                                if (success.ret_code == '1') {
                                                    _this.navCtrl.push("TransferreceiptPage", {
                                                        reqsubmittransinfo: _this.reqsubmittransinfoTemp,
                                                        transferTime: _this.transferTime,
                                                        flag: '3'
                                                    });
                                                }
                                                else {
                                                    _this.commonUtils.alertCommon('', success.ret_msg);
                                                }
                                            }
                                            else {
                                                _this.showPopup("Error", "Transfer Error.");
                                            }
                                        }, function (error) {
                                            _this.commonUtils.HideLoading();
                                            _this.showPopup("Error", error);
                                        });
                                    }).catch(function (error) {
                                        _this.commonUtils.HideLoading();
                                        _this.showPopup(_this.translateObj.warning, error);
                                        console.log("[AccountActions.js:90] ----- transfer error ----->", error);
                                        //弹出错误信息
                                    });
                                }
                                else {
                                    _this.commonUtils.HideLoading();
                                    var toast = _this.toastCtrl.create({
                                        message: _this.translateObj.passwordWrong,
                                        duration: 3000,
                                        position: 'bottom'
                                    });
                                    toast.onDidDismiss(function () {
                                        console.log('Dismissed toast');
                                    });
                                    toast.present();
                                }
                            });
                        }
                    }
                });
                modal.present();
            }
        });
        // if(){
        //
        // }
        console.log(this.money);
    };
    ChargingMoneyPage.prototype.getRangeDate = function () {
        var formatDate = function (time) {
            // 格式化日期，获取今天的日期
            var Dates = new Date(time);
            var year = Dates.getFullYear();
            var month = (Dates.getMonth() + 1) < 10 ? '0' + (Dates.getMonth() + 1) : (Dates.getMonth() + 1);
            var day = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
            return year + '-' + month + '-' + day;
        };
        var now = formatDate(new Date().getTime()); // 当前时间
        return now;
    };
    ChargingMoneyPage.prototype.HidepresentLoading = function () {
        this.loader.dismiss();
    };
    ChargingMoneyPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: this.translateObj.transfering,
            duration: 1000
        });
        this.loader.present();
    };
    ChargingMoneyPage.prototype.showPopup = function (title, text) {
        this.alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: this.translateObj.ok,
                    handler: function (data) {
                    }
                }
            ]
        });
        this.alert.present();
    };
    ChargingMoneyPage.prototype.changAmount = function (e) {
        console.log(e);
        console.log(this.feelRate);
        // 手续费分 最大 和最小 值，  当超出指定范围 按最大最小值算
        if (Number(e) * this.feelRate.normalrate < this.feelRate.minfee) {
            this.feel = this.feelRate.minfee;
        }
        else if (Number(e) * this.feelRate.normalrate > this.feelRate.maxfee) {
            this.feel = this.feelRate.maxfee;
        }
        else {
            this.feel = Number(e) * this.feelRate.normalrate;
        }
        console.log(this.feel);
        if (Number(e) > 50000) {
            this.commonUtils.alertCommon('', '数额不能超过50000');
            return;
        }
    };
    ChargingMoneyPage.prototype.ionViewWillLeave = function () {
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
    return ChargingMoneyPage;
}());
ChargingMoneyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-charging-money',template:/*ion-inline-start:"E:\newpays\src\pages\balance\charging-money\charging-money.html"*/'<!--\n  Generated template for the TopupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n  <ion-toolbar color="secondary">\n    <ion-buttons left icon-only tappable (click)="goBack()">\n      <button ion-button icon-only>\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title style="text-align: center">{{ \'charging_money.transferCoin\' | translate }}</ion-title>\n    <ion-buttons end icon-only >\n      <button ion-button icon-only>\n        <ion-icon name=""></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list style="margin-top: 2rem">\n\n    <ion-item no-lines>\n      <ion-label color="dark">{{ \'charging_money.account\' | translate }}</ion-label>\n      <ion-input text-end placeholder="{{ \'charging_money.inputAccount\' | translate }}"  [(ngModel)]="account" #am></ion-input>\n    </ion-item>\n    <ion-item no-lines style="margin-top: 1px;">\n      <ion-label color="dark">{{ \'charging_money.amount\' | translate }}</ion-label>\n      <ion-input text-end placeholder="{{ \'charging_money.transferCoinAmount\' | translate }}"  type="number" [(ngModel)]="money" tappable (ngModelChange)="changAmount($event)"></ion-input>\n    </ion-item>\n    <div class="keyongyue">\n      手续费: {{feel}}\n    </div>\n    <!--<ion-item no-lines style="margin-top: 1px;">-->\n      <!--<ion-label color="dark">{{ \'charging_money.memo\' | translate }}</ion-label>-->\n      <!--<ion-input placeholder="{{ \'charging_money.addMemo\' | translate }}"  [(ngModel)]="remarks" #am></ion-input>-->\n    <!--</ion-item>-->\n  </ion-list>\n  <button style="width: 70%;margin-left: 15%;background-color: #0dabfa;margin-top: 20%;" ion-button block tappable (click)="nextFinPwd()">{{ \'charging_money.confirm\' | translate }}</button>\n</ion-content>\n'/*ion-inline-end:"E:\newpays\src\pages\balance\charging-money\charging-money.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_financial_service_account_transfer_service__["a" /* TransferService */],
        __WEBPACK_IMPORTED_MODULE_6__providers_common_commonUtils__["a" /* CommonUtils */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_wallet_recovery_import_service__["a" /* RecoveryImportService */],
        __WEBPACK_IMPORTED_MODULE_7_ng2_translate__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_8__providers_feelActionrate_feel_actionrate_service__["a" /* FeelActionrateService */]])
], ChargingMoneyPage);

//# sourceMappingURL=charging-money.js.map

/***/ })

});
//# sourceMappingURL=44.js.map