webpackJsonp([38],{

/***/ 884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountPayModule", function() { return accountPayModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_pay__ = __webpack_require__(969);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var accountPayModule = (function () {
    function accountPayModule() {
    }
    return accountPayModule;
}());
accountPayModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__account_pay__["a" /* accountPayPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account_pay__["a" /* accountPayPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__account_pay__["a" /* accountPayPage */]
        ]
    })
], accountPayModule);

//# sourceMappingURL=account-pay.module.js.map

/***/ }),

/***/ 969:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return accountPayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_newpay_wallet_js__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_financial_service_account_transfer_service__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_wallet_recovery_import_service__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_commonUtils__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_translate__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_home_searchAcc_service__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic2_pincode_input_dist_pincode__ = __webpack_require__(215);
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
var accountPayPage = (function () {
    function accountPayPage(navCtrl, navParams, transfer, alertCtrl, toastCtrl, loadingCtrl, modalCtrl, searchAcc, recoveryImportService, commonUtils, translate, pincodeCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transfer = transfer;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.searchAcc = searchAcc;
        this.recoveryImportService = recoveryImportService;
        this.commonUtils = commonUtils;
        this.translate = translate;
        this.pincodeCtrl = pincodeCtrl;
        this.reqCheckPayee = { asset_id: "", precision: "", coin_type: "", symbol: "" };
        this.reqsubmittransinfo = { amount: 0, fee: 0, comment: "", coin_type: "",
            to_userid: "",
            coin_account: "",
            txid: "" };
        // this.textJson ='{"Account":"np12345","currency":"","money":"","reason":""}'
        this.receiveData = { Account: '', currecy: '', money: '', remark: '' };
        this.AccountTemp = "";
        this.flagB = false;
        this.remarkMemo = "";
        this.selectOptionsQT = {
            title: '',
            mode: 'ios'
        };
        this.translate.get('account_pay').subscribe(function (res) {
            _this.translateObj = res;
        });
        var account = localStorage.getItem('account');
        // alert(this.navParams.get("barcodeData"));
        var obj = JSON.parse(this.navParams.get("barcodeData"));
        console.log("obj", obj);
        // {"Account":"mo110202","currency":"YTS","money":10,"reason":""}
        this.receiveData.money = obj.money;
        console.log(this.receiveData.money);
        this.receiveData.Account = obj.Account;
        this.reqCheckPayee.symbol = obj.currency;
        console.log(this.receiveData.currecy);
        console.log(this.receiveData.Account);
        if (this.receiveData.currecy == "") {
            this.flagC = 1;
        }
        else {
            this.flagC = 2;
        }
    }
    accountPayPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_newpay_wallet_js__["a" /* NewpayInstance */].getAccountBalances(localStorage.getItem("account")).then(function (resQ) {
            _this.commonUtils.HideLoading();
            console.log("res", resQ);
            _this.resQ = resQ;
            // for(let i=0; i<resQ.length;i++){
            //     if(this.receiveData.currecy== resQ[i].symbol){
            //         this.reqCheckPayee =resQ[i];
            //     }
            // }
        }).catch(function (err) {
            _this.commonUtils.HideLoading();
            console.log(err);
        });
    };
    accountPayPage.prototype.cancelPay = function () {
        this.navCtrl.push("HomePage");
    };
    accountPayPage.prototype.goTransfer = function () {
        var _this = this;
        if (this.conType == "") {
            this.showPopup('', this.translateObj.chooseAsset);
            return;
        }
        console.log(this.receiveData.money);
        //验证账户有效性
        if (this.receiveData.money === "") {
            this.showPopup("", this.translateObj.emptyMoney);
            return;
        }
        if (Number(this.receiveData.money) === 0) {
            this.showPopup("", this.translateObj.isNoZero);
            return;
        }
        var pinCode = this.pincodeCtrl.create({
            title: '输入密码'
        });
        pinCode.present();
        pinCode.onDidDismiss(function (code, status) {
            if (__WEBPACK_IMPORTED_MODULE_2_newpay_wallet_js__["a" /* NewpayInstance */].validatePassword(code)) {
                //密码查询 查询后的密码正确的话， 那么进行 转账处理。
                var accountname = localStorage.getItem('account');
                __WEBPACK_IMPORTED_MODULE_2_newpay_wallet_js__["a" /* NewpayInstance */].getAccountBalances(localStorage.getItem("account")).then(function (resQ) {
                    _this.commonUtils.HideLoading();
                    console.log("res", resQ);
                    _this.resQ = resQ;
                    for (var i = 0; i < resQ.length; i++) {
                        if (_this.reqCheckPayee.symbol == resQ[i].symbol) {
                            _this.reqCheckPayee = resQ[i];
                        }
                    }
                }).catch(function (err) {
                    _this.commonUtils.HideLoading();
                    console.log(err);
                });
                _this.commonUtils.showLoading();
                __WEBPACK_IMPORTED_MODULE_2_newpay_wallet_js__["a" /* NewpayInstance */].transfer(accountname, _this.receiveData.Account, Number(_this.receiveData.money) * Math.pow(10, _this.reqCheckPayee.precision), _this.reqCheckPayee.asset_id, _this.remarkMemo).then(function (result) {
                    _this.commonUtils.HideLoading();
                    debugger;
                    console.log(result);
                    //转账成功。生成时间戳 获取当前时间
                    _this.transferTime = _this.getRangeDate();
                    console.log("txid", result.txid);
                    //如果转账成功以后，那么去中心化提交 转账信息。
                    _this.reqsubmittransinfo.txid = result.txid; //txid
                    //如果转账成功以后，那么去中心化提交 转账信息。
                    _this.navCtrl.push("TransferreceiptPage", {
                        flag: '4', reqsubmittransinfo: _this.reqsubmittransinfo,
                        transferTime: _this.transferTime
                    });
                }).catch(function (error) {
                    _this.commonUtils.HideLoading();
                    console.log("[AccountActions.js:90] ----- transfer error ----->", error);
                    if (error == "connection closed") {
                        _this.commonUtils.showToast("网络连接失败,请重试!");
                        return;
                    }
                    else {
                        _this.showPopup("提示", _this.translateObj.transferFail);
                    }
                    // this.showPopup(this.translateObj.warning, error.message)
                });
            }
            else {
                _this.commonUtils.alertCommon("提示", "密码错误,请重新输入.");
            }
        });
    };
    accountPayPage.prototype.getRangeDate = function () {
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
    accountPayPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: this.translateObj.transfering,
            duration: 1000
        });
        this.loading.present();
    };
    accountPayPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    accountPayPage.prototype.showPopup = function (title, text) {
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
    accountPayPage.prototype.accPayValid = function (amount) {
        console.log(amount);
        this.receiveData.money = amount.toString();
        if (amount > 50000) {
            this.receiveData.money = "50000";
        }
        console.log(amount);
        if (this.receiveData.money.split(".")[0] == "") {
            this.receiveData.money = this.receiveData.money.substring(0, 0);
        }
        this.receiveData.money = this.receiveData.money.replace(/[^\d.]/g, ""); //清除“数字”和“.”以外的字符
        this.receiveData.money = this.receiveData.money.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
        if (this.receiveData.money.indexOf(".") > -1 && this.receiveData.money != "") {
            this.receiveData.money = this.receiveData.money.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
            this.receiveData.money = this.receiveData.money.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //只能输入两个小数
        }
        if (this.receiveData.money.indexOf(".") < 0 && this.receiveData.money != "") {
            this.receiveData.money = parseFloat(this.receiveData.money);
        }
    };
    accountPayPage.prototype.accountPvalid = function (remarks) {
        if (remarks.length > 25) {
            //截取前10个字符
            console.log(remarks.length);
            this.remarkMemo = remarks.substring(0, 25);
            return;
        }
    };
    accountPayPage.prototype.alertCommon = function (title, subT) {
        this.alert = this.alertCtrl.create({
            title: title,
            subTitle: subT,
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
    accountPayPage.prototype.ionViewWillLeave = function () {
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
    return accountPayPage;
}());
accountPayPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-request-receive',template:/*ion-inline-start:"E:\newpay\newpay\src\pages\financial\pay\account-pay\account-pay.html"*/'<ion-header no-border>\n    <!--<ion-navbar >-->\n    <ion-toolbar color="secondary">\n        <ion-buttons left icon-only tappable (click)="goBack()">\n            <button ion-button icon-only>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title style="text-align: center">{{\'account_pay.title\' | translate }}</ion-title>\n        <ion-buttons end icon-only>\n            <button ion-button icon-only>\n                <ion-icon name=""></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-list style="margin-top: 10px">\n        <ion-item no-lines>\n            <p>{{\'account_pay.transferTo\' | translate }} <a>{{receiveData.Account}}</a></p>\n        </ion-item>\n        <ion-item no-lines *ngIf="flagC==1">\n            <ion-label>{{\'account_pay.coinType\' | translate }}</ion-label>\n            <ion-select [selectOptions]="selectOptionsQT" [(ngModel)]="reqCheckPayee.symbol"\n                        okText="确定" cancelText="取消">\n                <ion-option *ngFor="let dataTemp of resQ" [value]="dataTemp.symbol">{{dataTemp.symbol}}</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item no-lines style="margin-top: 1px" *ngIf="flagC==2">\n            <ion-label>{{\'account_pay.coinType\' | translate }}</ion-label>\n            <p item-end>{{reqCheckPayee.symbol}}</p>\n        </ion-item>\n        <ion-item no-lines style="margin-top: 1px" *ngIf="flagC==1">\n            <ion-label>{{\'account_pay.amount\' | translate }}:</ion-label>\n            <ion-input text-end placeholder="{{\'account_pay.inputAmount\' | translate }}"\n                       (keyup)="accPayValid(receiveData.money)" [(ngModel)]="receiveData.money"></ion-input>\n        </ion-item>\n        <ion-item no-lines style="margin-top: 1px" *ngIf="flagC==2">\n            <ion-label>{{\'account_pay.amount\' | translate }}:</ion-label>\n            <p item-end>{{receiveData.money}}</p>\n        </ion-item>\n        <ion-item no-lines style="margin-top: 1px; border: none;">\n            <ion-textarea placeholder="{{\'account_pay.inputMemo\' | translate }}"  maxlength="25"  rows="3" cols="20"  [(ngModel)]="remarkMemo"></ion-textarea>\n        </ion-item>\n    </ion-list>\n    <button style="margin: 3rem auto 0; width:92%; display: block; background-color: #f9a718; box-shadow: none;" ion-button tappable (click)="goTransfer()">{{\'account_pay.transferBtn\' | translate}}\n    </button>\n</ion-content>\n'/*ion-inline-end:"E:\newpay\newpay\src\pages\financial\pay\account-pay\account-pay.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_financial_service_account_transfer_service__["a" /* TransferService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_7__providers_home_searchAcc_service__["a" /* SearchAccService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_wallet_recovery_import_service__["a" /* RecoveryImportService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_common_commonUtils__["a" /* CommonUtils */],
        __WEBPACK_IMPORTED_MODULE_6_ng2_translate__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_8_ionic2_pincode_input_dist_pincode__["a" /* PincodeController */]])
], accountPayPage);

//# sourceMappingURL=account-pay.js.map

/***/ })

});
//# sourceMappingURL=38.js.map