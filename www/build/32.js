webpackJsonp([32],{

/***/ 1008:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transfer2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_financial_service_account_transfer_service__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_newpay_wallet_js__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util_service_storage_service__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_wallet_recovery_import_service__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_translate__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_commonUtils__ = __webpack_require__(130);
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
 * Generated class for the Transfer2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Transfer2Page = (function () {
    function Transfer2Page(navCtrl, nav, navParams, commonUtils, alertCtrl, transfer, loadingCtrl, recoveryImportService, modalCtrl, toastCtrl, storageService, pincodeCtrl, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.navParams = navParams;
        this.commonUtils = commonUtils;
        this.alertCtrl = alertCtrl;
        this.transfer = transfer;
        this.loadingCtrl = loadingCtrl;
        this.recoveryImportService = recoveryImportService;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.storageService = storageService;
        this.pincodeCtrl = pincodeCtrl;
        this.translate = translate;
        this.amountOfMoney = '';
        this.remarks = "";
        this.createSuccess = false;
        this.reqCheckPyee = { to_userid: '', amount: 0, asset_id: '', precision: 0, symbol: '', coin_type: '', coin_account: '', nickname: '' };
        this.reqsubmittransinfo = { amount: 0, fee: 0, comment: "", coin_type: "",
            to_userid: localStorage.getItem('account'),
            coin_account: "",
            txid: "" };
        this.to_userid = '';
        this.to_userid = navParams.get("toUserId");
        console.log(this.to_userid);
        this.translate.get('transfer2').subscribe(function (res) {
            _this.translateObj = res;
        });
    }
    Transfer2Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad Transfer2Page');
        // 0: {amount: 999940, asset_id: "1.3.0", precision: 5, symbol: "YTS"}
        __WEBPACK_IMPORTED_MODULE_3_newpay_wallet_js__["a" /* NewpayInstance */].getAccountBalances(localStorage.getItem("account")).then(function (resQ) {
            _this.commonUtils.HideLoading();
            var symbol = _this.navParams.get("symbol");
            console.log(symbol);
            for (var i = 0; i < resQ.length; i++) {
                if (resQ[i].symbol == symbol) {
                    console.log(resQ[i]);
                    _this.reqCheckPyee = resQ[i];
                    _this.reqCheckPyee.amount = resQ[i].amount;
                    _this.reqCheckPyee.asset_id = resQ[i].asset_id;
                    _this.reqCheckPyee.precision = resQ[i].precision;
                    _this.reqCheckPyee.symbol = resQ[i].symbol;
                }
            }
            console.log("res", resQ);
        }).catch(function (err) {
            _this.commonUtils.HideLoading();
            console.log(err);
        });
    };
    Transfer2Page.prototype.nextFinPwd = function () {
        var _this = this;
        var pinCode = this.pincodeCtrl.create({
            title: '输入密码'
        });
        pinCode.present();
        pinCode.onDidDismiss(function (code, status) {
            if (__WEBPACK_IMPORTED_MODULE_3_newpay_wallet_js__["a" /* NewpayInstance */].validatePassword(code)) {
                var account = localStorage.getItem('account');
                console.log(account);
                console.log(_this.to_userid);
                console.log(_this.amountOfMoney);
                console.log(_this.reqCheckPyee.precision);
                console.log(_this.reqCheckPyee.asset_id);
                console.log(_this.remarks);
                _this.commonUtils.showLoading();
                __WEBPACK_IMPORTED_MODULE_3_newpay_wallet_js__["a" /* NewpayInstance */].transfer(account, _this.to_userid, Number(_this.amountOfMoney) * Math.pow(10, _this.reqCheckPyee.precision), _this.reqCheckPyee.asset_id, _this.remarks, '').then(function (result) {
                    _this.commonUtils.HideLoading();
                    //转账成功。生成时间戳 获取当前时间
                    var date = new Date();
                    _this.transferTime = _this.getRangeDate();
                    console.log("txid", result.txid);
                    //如果转账成功以后，那么去中心化提交 转账信息。
                    _this.reqsubmittransinfo.txid = result.txid; //txid
                    //如果转账成功以后，那么去中心化提交 转账信息。
                    _this.navCtrl.push("TransferreceiptPage", {
                        flag: '2', reqsubmittransinfo: _this.reqsubmittransinfo,
                        transferTime: _this.transferTime
                    });
                }).catch(function (error) {
                    _this.commonUtils.HideLoading();
                    console.log(error);
                    if (error == "connection closed") {
                        _this.commonUtils.showToast("网络连接失败,请重试!");
                        return;
                    }
                    else {
                        _this.commonUtils.showToast("转账失败!");
                        return;
                    }
                });
            }
            else {
                _this.commonUtils.alertCommon("提示", "密码错误,请重新输入.");
            }
        });
    };
    Transfer2Page.prototype.getRangeDate = function () {
        var formatDate = function (time) {
            // 格式化日期，获取今天的日期
            var Dates = new Date(time);
            var year = Dates.getFullYear();
            var month = (Dates.getMonth() + 1) < 10 ? '0' + (Dates.getMonth() + 1) : (Dates.getMonth() + 1);
            var day = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
            var hours = Dates.getHours() < 10 ? '0' + Dates.getHours() : Dates.getHours();
            var mins = Dates.getMinutes() < 10 ? '0' + Dates.getHours() : Dates.getHours();
            return year + '-' + month + '-' + day + ' ' + hours + ":" + mins;
        };
        var now = formatDate(new Date().getTime()); // 当前时间
        return now;
    };
    Transfer2Page.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: this.translateObj.transfering,
        });
        this.loading.present();
    };
    Transfer2Page.prototype.hidePresentLoading = function () {
        this.loading.dismiss();
    };
    Transfer2Page.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Transfer2Page.prototype.presentAlert = function (title, subTitle) {
        this.alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: [this.translateObj.confirm]
        });
        this.alert.present();
    };
    Transfer2Page.prototype.showPopup = function (title, text) {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: this.translateObj.confirm,
                    handler: function (data) {
                        if (_this.createSuccess) {
                        }
                    }
                }
            ]
        });
        this.alert.present();
    };
    Transfer2Page.prototype.changeAMount = function (amount) {
        console.log(amount);
        this.amountOfMoney = amount.toString();
        // if(amount.indexOf("-")> -1 && amount !="" ){
        //     this.amountOfMoney =  this.amountOfMoney.replace("-", "");
        //
        // }
        // if(amount.indexOf("+")> -1 && amount !="" ){
        //     this.amountOfMoney =  this.amountOfMoney.replace("+", "");
        //
        // }
        if (this.amountOfMoney.split(".")[0] == "") {
            this.amountOfMoney = this.amountOfMoney.substring(0, 0);
        }
        this.amountOfMoney = this.amountOfMoney.replace(/[^\d.]/g, ""); //清除“数字”和“.”以外的字符
        this.amountOfMoney = this.amountOfMoney.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
        if (this.amountOfMoney.indexOf(".") > -1 && this.amountOfMoney != "") {
            // this.amountOfMoney =   this.amountOfMoney.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
            // this.amountOfMoney =   this.amountOfMoney.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');//只能输入两个小数
            var newstr;
            if (this.amountOfMoney.indexOf(".") != -1) {
                var pos = this.amountOfMoney.indexOf(".");
                newstr = this.amountOfMoney.substring(pos + 1);
                var yong = this.amountOfMoney.substring(0, pos + 1);
                newstr = newstr.replace(/[^0-9]/ig, "");
                if (newstr.length >= this.precision + 1) {
                    newstr = newstr.substring(0, (newstr.length - 1));
                }
                this.amountOfMoney = yong + newstr;
            }
            else {
                this.amountOfMoney = this.amountOfMoney.replace(/[^0-9\.]/ig, "");
            }
        }
        if (this.amountOfMoney.indexOf(".") < 0 && this.amountOfMoney != "") {
            this.amountOfMoney = parseFloat(this.amountOfMoney);
        }
        //转账单日限额 50000
        if (amount > 50000) {
            this.amountOfMoney = 50000;
            // this.feel =50000*this.feelrate.normalrate;
        }
    };
    Transfer2Page.prototype.beizhuKu = function (marks) {
        if (marks.length > 25) {
            //截取前10个字符
            console.log(marks.length);
            this.remarks = marks.substring(0, 25);
            return;
        }
    };
    Transfer2Page.prototype.ionViewWillLeave = function () {
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
    return Transfer2Page;
}());
Transfer2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-transfer2',template:/*ion-inline-start:"E:\newpays\src\pages\financial\transfer2\transfer2.html"*/'<!--\n  Generated template for the Transfer2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>-->\n\n<!--<ion-navbar color="secondary">-->\n<!--<ion-title>转账金额</ion-title>-->\n<!--</ion-navbar>-->\n\n<!--</ion-header>-->\n<ion-header no-border>\n    <ion-toolbar color="primary">\n        <ion-buttons left tappable (click)="goBack()">\n            <button ion-button icon-only>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title style="text-align: center">{{\'transfer2.title\' | translate}}</ion-title>\n        <ion-buttons right>\n            <button ion-button icon-only>\n                <ion-icon></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-card>\n        <ion-card-content>\n            <ion-card-title>\n                <!--<span style="display: inline; font-size: 1.5rem; color: #2a2b2d;">{{\'transfer2.to\' | translate}}{{reqCheckPyee.nickname}}</span>-->\n                <p style="display: inline; font-size: 1.5rem; color: #2a2b2d;">({{to_userid}})</p>\n                <span style="display: inline; font-size: 1.5rem; color: #2a2b2d;">{{\'transfer2.transfer\' | translate}}</span>\n            </ion-card-title>\n            <p style="color:#888;font-size: 1.3rem; margin: 5px 0; text-align: center;">{{reqCheckPyee.to_userid}}</p>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-list style="margin-top: 2rem">\n        <div class="transfer2_list">\n            <div class="p1">\n                <span>{{\'transfer2.transferAmount\' | translate}}</span>\n                <!--<div class="currency">{{//reqCheckPyee.coin_type}}</div>-->\n            </div>\n            <div class="p2">\n                <div class="symbol"[ngStyle]="{\'background-image\':\'url(assets/img/blackMoney/CNY.png)\'}"></div>\n                <input placeholder="{{\'transfer2.balance\' | translate}}:{{reqCheckPyee.amount}}" tappable [(ngModel)]="amountOfMoney">\n                <div class="clear"></div>\n                <!--<div class="all">{{\'withdraw.all\' | translate}}</div>-->\n            </div>\n            <div class="p3"><textarea placeholder="{{\'transfer2.addMemo\' | translate}}" maxlength="25" rows="3" [(ngModel)]="remarks" #am></textarea></div>\n        </div>\n\n        <!--<ion-item no-lines>\n            &lt;!&ndash;<ion-row>\n              <ion-col color="dark">{{\'transfer2.account\' | translate}}:{{reqCheckPyee.to_userid}}</ion-col>\n              <ion-col style="text-align: end" >{{\'transfer2.balance\' | translate}}:{{reqCheckPyee.symbol}} ({{reqCheckPyee.amount}})</ion-col>\n            </ion-row>&ndash;&gt;\n            &lt;!&ndash;<ion-label color="dark"></ion-label>&ndash;&gt;\n            <div item-start>\n                <div item-end class="currency"> {{reqCheckPyee.coin_type}}</div>\n                <p style=" float: left; font-size: 1.5rem; margin: 12px 5px 0 0; color: #a4a4a4;">\n                    {{\'transfer2.transferAmount\' | translate}}</p>\n            </div>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label color="dark" style="font-size: 2.7rem;">{{\'transfer2.price\' | translate}}</ion-label>\n            <ion-input style="font-size: 1.5rem;"\n                       placeholder="{{\'transfer2.balance\' | translate}}:{{reqCheckPyee.amount}}" tappable\n                       (keyup)="changeAMount(amountOfMoney)" [(ngModel)]="amountOfMoney" #am></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            &lt;!&ndash;(keyup)="beizhuKu(remarks)"&ndash;&gt;\n            <ion-textarea placeholder="{{\'transfer2.addMemo\' | translate}}" maxlength="25" [(ngModel)]="remarks" #am></ion-textarea>\n        </ion-item>-->\n\n    </ion-list>\n    <div class="note">\n        <div>*{{\'transfer.maxmoney\' | translate}}</div>\n\n    </div>\n    <button style="margin:5rem auto; width: 92%; display:block; background-color: #f9c215; opacity: .6;" ion-button\n            block tappable\n            (click)="nextFinPwd(am.value)">{{\'transfer2.confirmTransfer\' | translate}}\n    </button>\n</ion-content>\n'/*ion-inline-end:"E:\newpays\src\pages\financial\transfer2\transfer2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_7__providers_common_commonUtils__["a" /* CommonUtils */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_financial_service_account_transfer_service__["a" /* TransferService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_wallet_recovery_import_service__["a" /* RecoveryImportService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_util_service_storage_service__["a" /* StorageService */],
        __WEBPACK_IMPORTED_MODULE_8_ionic2_pincode_input_dist_pincode__["a" /* PincodeController */],
        __WEBPACK_IMPORTED_MODULE_6_ng2_translate__["c" /* TranslateService */]])
], Transfer2Page);

//# sourceMappingURL=transfer2.js.map

/***/ }),

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transfer2PageModule", function() { return Transfer2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transfer2__ = __webpack_require__(1008);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Transfer2PageModule = (function () {
    function Transfer2PageModule() {
    }
    return Transfer2PageModule;
}());
Transfer2PageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__transfer2__["a" /* Transfer2Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transfer2__["a" /* Transfer2Page */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], Transfer2PageModule);

//# sourceMappingURL=transfer2.module.js.map

/***/ })

});
//# sourceMappingURL=32.js.map