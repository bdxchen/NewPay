webpackJsonp([3],{

/***/ 1010:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithdrawPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bank_modal_bank_modal__ = __webpack_require__(1011);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_modal__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_financial_service_account_transfer_service__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_bank_model_bank_model__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_financial_service_account_withdraw_service__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_newpay_wallet_js__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_wallet_recovery_import_service__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_util_service_storage_service__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_common_commonUtils__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_translate__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_feelActionrate_feel_actionrate_service__ = __webpack_require__(401);
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
var WithdrawPage = (function () {
    function WithdrawPage(navCtrl, navParams, actionSheetCtrl, modalCtrl, alertCtrl, transfer, loadingCtrl, toastCtrl, bankModelservice, withdrawService, recoveryImportService, storageService, commonUtils, translate, feelService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.transfer = transfer;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.bankModelservice = bankModelservice;
        this.withdrawService = withdrawService;
        this.recoveryImportService = recoveryImportService;
        this.storageService = storageService;
        this.commonUtils = commonUtils;
        this.translate = translate;
        this.feelService = feelService;
        this.remarks = '';
        this.account = "";
        this.feel = 0;
        this.money = "";
        this.bankData = { account: '', name: '', bankname: '', branchName: '' };
        this.currency = { amount: 0, asset_id: '', precision: 0, symbol: '' };
        this.balance = "200.00";
        this.withdrawInfo = {};
        this.withdrawbaModel = { channelType: '', account_no: '', accountName: '', accountAlias: '', amount: '', coin_type: '', comment: '' };
        // "channelType":"2", //类型 1微信 2支付 3银行卡
        // "account_no":"12313",   //账号
        // "accountName":"accountAlias",   // 名字
        // "accountAlias":"fcc@alipay.com", //别名渠道 比如银行ICBC
        // "amount":"1.00",    //提现金额
        // "coin_type":"BitCNY", //数字货币类型
        // "comment":"还款"
        this.digitalCurrency = { coin_type: '' };
        this.withdraw = { txid: '', orderNo: "", payStatus: '', fromaddress: '' };
        this.createSuccess = false;
        this.currency = navParams.get("currency");
        console.log("currency:", this.currency);
        this.digitalCurrency.coin_type = this.currency.symbol;
        this.precision = this.currency.precision;
        // this.getDigitalCurrency();
        this.translate.get('withdraw').subscribe(function (res) {
            _this.translateObj = res;
            console.log(res);
        });
    }
    WithdrawPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.Lzjaccount = this.storageService.read('userid');
        console.log('ionViewDidLoad withdrawPage');
        this.feelrequest = {
            "coinid": this.digitalCurrency.coin_type,
            "actiontype": "4" //类型1 topupcoin 2topup 3withdrawcoin 4 withdraw
        };
        this.feelService.getActionrate(this.feelrequest).then(function (res) {
            console.log(res);
            if (res.ret_code == '1') {
                _this.feelrate = res;
            }
            else {
                _this.feelrate = res;
                _this.commonUtils.alertCommon('', res.ret_msg);
                return;
            }
            // console.log("fell",res.minfee);
        }, function (error) {
            _this.commonUtils.alertCommon('', '网络连接错误，请稍后重试！');
        });
        // this.commonUtils.showLoading();
        // this.bankModelservice.getbankM().then((res) => {
        //     this.commonUtils.HideLoading();
        //     console.log(res);
        //     if(res.data){
        //         debugger
        //         this.bankData = res.data[0];
        //         console.log(this.bankData.account.substr(this.bankData.account.length-4));
        //         this.account =   this.bankData.account.substr(this.bankData.account.length-4)
        //     }else{
        //
        //     }
        //
        // },(err)=>{
        //     this.commonUtils.HideLoading();
        // })
        this.bankModelservice.getThirdpart().then(function (res) {
            console.log(res);
            if (res.data) {
                if (res.data.length > 0) {
                    debugger;
                    _this.bankData = res.data[0];
                    _this.account = _this.bankData.account;
                }
            }
        });
    };
    WithdrawPage.prototype.optionBank = function () {
        var _this = this;
        var madal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__bank_modal_bank_modal__["a" /* BankModalPage */]);
        madal.onDidDismiss(function (data, role) {
            console.log(data);
            console.log(role);
            if (role == '2') {
                _this.financial_account_type = '2'; // 支付宝
                if (data) {
                    _this.bankData = data;
                    console.log(data);
                    _this.accountName = data.name;
                    _this.account = data.account;
                }
            }
            else if (role == '3') {
                _this.financial_account_type = '3'; //银行卡
                if (data) {
                    _this.bankData = data;
                    _this.account = data.account.substr(data.account.length - 4);
                }
            }
        });
        madal.present();
    };
    WithdrawPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    WithdrawPage.prototype.choosebindAccount = function () {
        console.log('goto goComfirmPassword');
    };
    WithdrawPage.prototype.chooseWithdrawAccount = function () {
        console.log('goto goComfirmPassword');
    };
    WithdrawPage.prototype.goComfirmPassword = function (amount) {
        //密码正确进行 提现操作
        var account = '';
        var orderNo = '';
        console.log(this.money);
        console.log(this.remarks);
        //金额加手续费 大于 余额 不能进行提现操作
        if (this.money + Number(this.feel) > Number(this.currency.amount)) {
            //余额不足，不能实现提现操作！
            this.alertCommon(this.translateObj.warning, this.translateObj.balanceNotEnough);
            return false;
        }
        if (this.money === "") {
            this.alertCommon(this.translateObj.warning, this.translateObj.ifnull);
            return false;
        }
        /*if(this.money===0){
            this.alertCommon(this.translateObj.warning, this.translateObj.isNoZero)
            return false;
        }*/
        if (Number(this.money) < 100) {
            this.alertCommon(this.translateObj.warning, this.translateObj.balanceMin);
            return false;
        }
        if (Number(this.money) > 50000) {
            this.alertCommon(this.translateObj.warning, this.translateObj.balanceMax);
            return false;
        }
        if (this.account == "") {
            this.alertCommon(this.translateObj.warning, this.translateObj.pushZFB);
            return false;
        }
        this.openModel();
    };
    WithdrawPage.prototype.Generatingrder = function () {
        var _this = this;
        console.log(this.coin_account);
        this.withdrawbaModel.coin_type = this.currency.symbol;
        this.withdrawbaModel.amount = this.money;
        this.withdrawbaModel.comment = this.remarks;
        this.withdrawbaModel.accountAlias = '';
        this.withdrawbaModel.channelType = '2';
        this.withdrawbaModel.accountName = this.bankData.name;
        this.withdrawbaModel.account_no = this.account;
        this.withdrawService.getwithdrawBa(this.withdrawbaModel).then(function (res) {
            console.log(res.success);
            if (res.ret_code == '1') {
                _this.coin_account = res.account;
                var orderNo = res.orderNo;
                _this.transferW(orderNo);
                return;
            }
            else {
                console.log(res);
                _this.commonUtils.HideLoading();
                _this.commonUtils.alertCommon('提示', res.ret_msg);
                return;
            }
        }).catch(function (err) {
            _this.commonUtils.HideLoading();
            console.log(err);
            return;
        });
    };
    WithdrawPage.prototype.transferW = function (orderNo) {
        var _this = this;
        var accountname = localStorage.getItem("account");
        console.log("accountname", accountname);
        console.log("account", this.coin_account);
        console.log("money", this.money);
        console.log("asset_id", this.currency.asset_id);
        console.log("this.remarks", this.remarks);
        //密码输入正确 后，生成订单
        __WEBPACK_IMPORTED_MODULE_7_newpay_wallet_js__["a" /* NewpayInstance */].transfer(accountname, this.coin_account, Number(this.money) * Math.pow(10, this.currency.precision), this.currency.asset_id, this.remarks).then(function (result) {
            debugger;
            //转账成功。生成时间戳 获取当前时间
            _this.transferTime = _this.getRangeDate();
            console.log(_this.transferTime);
            console.log("txid", result);
            //如果转账成功以后，那么去中心化提交 转账信息。
            // 密码输入正确的时候，请求提现
            _this.withdraw.fee = result.fee.amount / Math.pow(10, _this.currency.precision); //手续费
            _this.withdraw.orderNo = orderNo; //
            _this.withdraw.payStatus = true;
            _this.withdraw.txid = result.txid;
            _this.withdraw.fromaddress = localStorage.getItem("account");
            _this.transfer.withdrawal(_this.withdraw).then(function (success) {
                _this.commonUtils.HideLoading();
                if (success.ret_code == "1") {
                    _this.navCtrl.push("TransferreceiptPage", {
                        reqsubmittransinfo: _this.withdrawbaModel,
                        transferTime: _this.transferTime,
                        flag: '3'
                    });
                }
                else {
                    _this.showPopup("Error", _this.translateObj.withdrawErr);
                }
            }, function (error) {
                _this.commonUtils.HideLoading();
                _this.showPopup("Error", error);
            });
        }).catch(function (error) {
            _this.commonUtils.HideLoading();
            if (error == "connection closed") {
                _this.commonUtils.showToast("网络连接失败,请重试!");
                return;
            }
            else {
                _this.withdraw.fee = '0'; //手续费
                _this.withdraw.orderNo = orderNo; //
                _this.withdraw.payStatus = false;
                _this.withdraw.txid = '';
                _this.withdraw.fromaddress = localStorage.getItem("account");
                _this.transfer.withdrawal(_this.withdraw).then(function (success) {
                    if (success.ret_code == "1") {
                    }
                    else {
                        // this.showPopup("Error", this.translateObj.withdrawErr);
                    }
                }, function (error) {
                    _this.showPopup(_this.translateObj.warning, '提现失败!');
                }).catch(function (err) {
                });
                console.log("[AccountActions.js:90] ----- transfer error ----->", error);
            }
            //弹出错误信息
        });
    };
    WithdrawPage.prototype.openModel = function () {
        var _this = this;
        this.modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_modal__["a" /* ModalPage */]);
        this.modal.onDidDismiss(function (data) {
            if (data.flag === 'forgot') {
                _this.navCtrl.push('ResetZJpsdPage');
            }
            else {
                if (data.pwd) {
                    console.log(data);
                    //密码查询 查询后的密码正确的话， 那么进行 转账处理。
                    debugger;
                    _this.commonUtils.showLoading();
                    _this.recoveryImportService.recImport(data.pwd).then(function (res) {
                        console.log(res);
                        if (res.ret_code == "1") {
                            debugger;
                            _this.Generatingrder();
                        }
                        else if (res.ret_code == "0") {
                            _this.commonUtils.HideLoading();
                            var toast = _this.toastCtrl.create({
                                message: _this.translateObj.passwordWrong,
                                duration: 2000,
                                position: 'bottom'
                            });
                            toast.onDidDismiss(function () {
                                console.log('Dismissed toast');
                            });
                            toast.present();
                        }
                        else {
                            _this.commonUtils.HideLoading();
                        }
                    }, function (err) {
                        console.log(err);
                        _this.commonUtils.HideLoading();
                    });
                }
            }
        });
        this.modal.present();
    };
    WithdrawPage.prototype.showPopup = function (title, text) {
        this.alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: this.translateObj.confirm,
                    handler: function (data) {
                    }
                }
            ]
        });
        this.alert.present();
    };
    WithdrawPage.prototype.getRangeDate = function () {
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
    WithdrawPage.prototype.getDigitalCurrency = function () {
        // this.commonUtils.showLoading();
        // this.transfer.digitalCurrency(this.digitalCurrency).subscribe(success => {
        //         // this.commonUtils.HideLoading();
        //         if (success !=null) {
        //             this.createSuccess = true;
        //         }
        //     },
        //     error => {
        //         this.showPopup("Error", error);
        //     });
    };
    WithdrawPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: this.translateObj.transfering,
        });
        this.loading.present();
    };
    WithdrawPage.prototype.hidePresentLoading = function () {
        this.loading.dismiss();
    };
    WithdrawPage.prototype.alertCommon = function (title, subT) {
        this.alert = this.alertCtrl.create({
            title: title,
            subTitle: subT,
            buttons: [this.translateObj.confirm]
        });
        this.alert.present();
    };
    WithdrawPage.prototype.tofix = function (money) {
        console.log(money.toString());
        this.money = money.toString();
        if (this.money.split(".")[0] == "") {
            this.money = this.money.substring(0, 0);
        }
        this.money = this.money.replace(/[^\d.]/g, ""); //清除“数字”和“.”以外的字符
        if (this.money.indexOf(".") > -1 && this.money != "") {
            this.money = this.money.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
            // this.money = this.money.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
            // this.money=  this.money.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');//只能输入两个小数
            var newstr;
            if (this.money.indexOf(".") != -1) {
                var pos = this.money.indexOf(".");
                newstr = this.money.substring(pos + 1);
                var yong = this.money.substring(0, pos + 1);
                newstr = newstr.replace(/[^0-9]/ig, "");
                if (this.precision == "") {
                    this.precision = 2;
                }
                if (newstr.length >= this.precision + 1) {
                    newstr = newstr.substring(0, (newstr.length - 1));
                }
                this.money = yong + newstr;
            }
            else {
                this.money = this.money.replace(/[^0-9\.]/ig, "");
            }
        }
        if (this.money.indexOf(".") < 0 && this.money != "") {
            this.money = parseFloat(this.money);
        }
        // this.money = Math.floor(money * 100) / 100;
        if (money > 50000) {
            this.money = 50000;
            this.feel = 50000 * this.feelrate.normalrate;
        }
    };
    WithdrawPage.prototype.changAmount = function (e) {
        console.log(e);
        e = e.replace(/[^\d.]/g, "");
        var re = /^[0-9]+.?[0-9]*$/; //判断字符串是否为数字     //判断正整数 /^[1-9]+[0-9]*]*$/
        if (e == "") {
            this.feel = 0;
        }
        if (!re.test(e)) {
            // alert("请输入数字");
            return false;
        }
        else {
            console.log(this.feelrate);
            if (this.feelrate.ret_code == '0') {
                this.feel = 0;
            }
            else {
                // 手续费分 最大 和最小 值，  当超出指定范围 按最大最小值算
                if (e * this.feelrate.normalrate < this.feelrate.minfee) {
                    this.feel = this.feelrate.minfee;
                }
                else if (e * this.feelrate.normalrate > this.feelrate.maxfee) {
                    this.feel = this.feelrate.maxfee;
                }
                else {
                    this.feel = e * this.feelrate.normalrate;
                }
            }
            this.feel = this.feel.toFixed(2);
        }
    };
    WithdrawPage.prototype.ionViewWillLeave = function () {
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
    return WithdrawPage;
}());
WithdrawPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-withdraw',template:/*ion-inline-start:"E:\newpay\newpay\src\pages\financial\withdraw\withdraw.html"*/'<!--\n  Generated template for the TopupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n    <ion-toolbar color="primary">\n        <ion-buttons left onclick="" (click)="goBack()">\n            <button ion-button icon-only>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n\n        <ion-title style="text-align: center">{{\'withdraw.title\' | translate}}</ion-title>\n        <ion-buttons end onclick="">\n            <button ion-button icon-only>\n                <ion-icon name=""></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list no-lines style="margin:12px 0;">\n        <!--<button *ngIf="financial_account_type==\'3\'" ion-item style="border-bottom: 1px solid #dedede;" (click)="optionBank()">-->\n        <!--<img src="assets/img/withdraw/zsyhlogo.png" style="width: 50px;height: 50px;" item-start>-->\n        <!--<div item-left ><div>{{bankData.bankname}}</div> <span>{{\'withdraw.lastNo\' | translate}}: {{account}}</span></div>-->\n        <!--</button>-->\n        <button ion-item (click)="optionBank()">\n            <img src="assets/img/topupAccount.png" style="width: 50px;height: 50px;" item-start>\n            <div item-left>\n                <div>{{bankData.name}}</div>\n                <span>{{account}}</span></div>\n        </button>\n    </ion-list>\n    <div class="withdrawals_list">\n        <div class="p1">\n            <span>{{\'withdraw.amount\' | translate}}</span>\n            <div class="currency">{{currency.symbol}}</div>\n        </div>\n        <div class="p2">\n            <div class="symbol">{{\'withdraw.symbol\' | translate}}</div>\n            <input placeholder="{{\'withdraw.inputAmount\' | translate}}：{{currency.amount}}" tappable (keyup)="tofix(money)" (ngModelChange)="changAmount($event)" [(ngModel)]="money">\n            <div class="clear"></div>\n            <!--<div class="all">{{\'withdraw.all\' | translate}}</div>-->\n        </div>\n        <div class="p3">{{\'withdraw.feel\' | translate}}{{feel}}元</div>\n    </div>\n    <ion-list>\n        <!--<ion-item no-lines style="margin-top: 1px">\n            <ion-label color="dark">{{\'withdraw.account\' | translate}}:{{Lzjaccount}}</ion-label>\n            &lt;!&ndash;<ion-select   [(ngModel)]="currency"  (ionChange)=\'getbalance($event)\'>&ndash;&gt;\n            &lt;!&ndash;<ion-option *ngFor="let currencyInfo of arrCurrency"  value="{{currencyInfo.name}}">{{currencyInfo.name}}</ion-option>&ndash;&gt;\n            &lt;!&ndash;</ion-select>&ndash;&gt;\n            <p item-end>{{\'withdraw.balance\' | translate}}:{{currency.symbol}} ({{currency.amount}})</p>\n        </ion-item>-->\n        <!--<ion-item no-lines>\n            &lt;!&ndash;<ion-label stacked color="dark">{{\'withdraw.amount\' | translate}}</ion-label>&ndash;&gt;\n            <div item-start>\n                <div style="float: left; margin:10px 5px 0 0">{{\'withdraw.amount\' | translate}}</div>\n                <div class="currency" item-end>{{currency.symbol}}</div>\n            </div>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-input placeholder="{{\'withdraw.inputAmount\' | translate}}：{{currency.amount}}" tappable\n                       (keyup)="tofix(money)" (ngModelChange)="changAmount($event)" [(ngModel)]="money"></ion-input>\n        </ion-item>\n        <div class="keyongyue">\n            手续费{{feel}}元\n        </div>-->\n        <!--<ion-item no-lines style="margin-top: 1px">-->\n        <!--<ion-label color="dark">{{\'withdraw.memo\' | translate}}:</ion-label>-->\n        <!--<ion-textarea  placeholder="{{\'withdraw.inputMemo\' | translate}}"  type="text"  [(ngModel)]="remarks" maxlength="200"></ion-textarea>-->\n        <!--</ion-item>-->\n\n        <!--<ion-note >-->\n        <div class="tishi">\n            <p> *{{\'withdraw.warning_1\' | translate}}</p>\n            <p> *{{\'withdraw.warning_2\' | translate}}</p>\n            <!--<p> *{{\'withdraw.warning_3\' | translate}}</p>-->\n        </div>\n        <!--</ion-note>-->\n\n    </ion-list>\n    <button ion-button block (click)="goComfirmPassword()" style="width: 92%; display: block; margin: 4rem auto;">{{\'withdraw.warning_3\' |\n        translate}}\n    </button>\n</ion-content>\n'/*ion-inline-end:"E:\newpay\newpay\src\pages\financial\withdraw\withdraw.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_financial_service_account_transfer_service__["a" /* TransferService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_bank_model_bank_model__["a" /* BankModelProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_financial_service_account_withdraw_service__["a" /* WithdrawService */],
        __WEBPACK_IMPORTED_MODULE_8__providers_wallet_recovery_import_service__["a" /* RecoveryImportService */],
        __WEBPACK_IMPORTED_MODULE_9__providers_util_service_storage_service__["a" /* StorageService */],
        __WEBPACK_IMPORTED_MODULE_10__providers_common_commonUtils__["a" /* CommonUtils */],
        __WEBPACK_IMPORTED_MODULE_11_ng2_translate__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_12__providers_feelActionrate_feel_actionrate_service__["a" /* FeelActionrateService */]])
], WithdrawPage);

//# sourceMappingURL=withdraw.js.map

/***/ }),

/***/ 1011:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bank_model_bank_model__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
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
 * Generated class for the BankModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BankModalPage = (function () {
    function BankModalPage(navCtrl, navParams, viewCtrl, bankModelservice, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.bankModelservice = bankModelservice;
        this.translate = translate;
        this.translate.get('login').subscribe(function (res) {
            _this.translateObj = res;
        });
    }
    BankModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    BankModalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad BankModalPage');
        // this.bankModelservice.getbankM().then((res) => {
        //     console.log(res);
        //     this.bankData = res.data
        // },(err)=>{
        //
        // })
        this.bankModelservice.getThirdpart().then(function (res) {
            console.log(res);
            if (res.ret_code == "1") {
                if (res.data) {
                    _this.thirdpart = res.data;
                }
            }
        });
    };
    BankModalPage.prototype.bankchose = function (bank, type) {
        console.log(bank);
        this.viewCtrl.dismiss(bank, type);
    };
    return BankModalPage;
}());
BankModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-bank-modal',template:/*ion-inline-start:"E:\newpay\newpay\src\pages\bank-modal\bank-modal.html"*/'<!--\n  Generated template for the ModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<div class="modalCssTop" (click)="closeModal()">\n</div>\n<div ngClass="modalCssBottom">\n  <div class="inner-box" style="bottom: 0;left: 0;width: 100%;height: 380px;">\n\n    <ion-header>\n      <ion-toolbar color="primary" >\n        <ion-buttons left onclick="" (click)="closeModal()">\n          <button ion-button icon-only>\n            <ion-icon name="ios-arrow-back"></ion-icon>\n          </button>\n        </ion-buttons>\n        <ion-title style="text-align: center">{{ \'bank_modal.choosePayModel\' | translate }}</ion-title>\n        <ion-buttons end>\n          <button ion-button icon-only>\n            <ion-icon name=""></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list radio-group style="margin-top: 1px">\n        <!--<ion-list-header>-->\n          <!--{{ \'bank_modal.bankCard\' | translate }}-->\n        <!--</ion-list-header>-->\n        <!--<ion-item no-lines style="border-bottom: 1px solid #dedede" *ngFor="let bank of bankData" (click)="bankchose(bank,\'3\')">-->\n          <!--<img item-start src="assets/img/withdraw/zsyhlogo.png" alt="" width="21px" height="21px"> <p item-left>{{bank.bankname}}</p>-->\n        <!--</ion-item>-->\n        <!--<ion-list-header>-->\n          <!--{{ \'bank_modal.aliPay\' | translate }}-->\n        <!--</ion-list-header>-->\n        <ion-item no-lines style="border-bottom: 1px solid #dedede" *ngFor="let third of thirdpart" (click)="bankchose(third,\'2\')">\n          <img item-start src="assets/img/alipaylogo.png" alt="" width="21px" height="21px"><span item-left >支付宝</span> <span style="color: #808080" item-right >{{third.name}}({{third.account}})</span>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </div>\n</div>'/*ion-inline-end:"E:\newpay\newpay\src\pages\bank-modal\bank-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_bank_model_bank_model__["a" /* BankModelProvider */], __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["c" /* TranslateService */]])
], BankModalPage);

//# sourceMappingURL=bank-modal.js.map

/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawPageModule", function() { return WithdrawPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__withdraw__ = __webpack_require__(1010);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WithdrawPageModule = (function () {
    function WithdrawPageModule() {
    }
    return WithdrawPageModule;
}());
WithdrawPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__withdraw__["a" /* WithdrawPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__withdraw__["a" /* WithdrawPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], WithdrawPageModule);

//# sourceMappingURL=withdraw.module.js.map

/***/ })

});
//# sourceMappingURL=3.js.map