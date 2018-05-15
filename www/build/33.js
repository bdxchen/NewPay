webpackJsonp([33],{

/***/ 1005:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_financial_service_account_pub_service__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_bank_model_bank_model__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_commonUtils__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_translate__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_feelActionrate_feel_actionrate_service__ = __webpack_require__(402);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//提交
/**
 * Generated class for the TopupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TopupPage = (function () {
    function TopupPage(navCtrl, navParams, accountPubService, bankmodelProvider, commonUtils, translate, alertCtrl, feelService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.accountPubService = accountPubService;
        this.bankmodelProvider = bankmodelProvider;
        this.commonUtils = commonUtils;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.feelService = feelService;
        this.order = { coin: '', comment: '', oppaccountno: '', orderno: '', payType: '', quantity: '', status: '', time: '' };
        this.account = '';
        this.feel = 0;
        this.SearchD = { amount: '', asset_id: '', precision: 0, symbol: '' };
        this.alipay = { amount: '0.00', comment: '', coin_type: '' };
        this.submitOrder = { amount: '', comment: '', coin_type: '', account_no: '', channelType: '', topupComments: '' };
        this.confirmOrder = { orderNo: '', payStatus: true };
        this.order = this.navParams.get('order');
        console.log(this.order);
        if (this.order) {
            this.alipay.coin_type = this.order.coin;
        }
        else {
            this.SearchD = this.navParams.get('SearchD');
            console.log(this.SearchD);
            this.alipay.coin_type = this.SearchD.symbol;
            this.precision = this.SearchD.precision;
        }
        this.translate.get('topup').subscribe(function (res) {
            _this.translateObj = res;
        });
    }
    TopupPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.currency = localStorage.getItem('currency');
        this.feelrequest = {
            "coinid": this.alipay.coin_type,
            "actiontype": "2" //类型1 topupcoin 2topup 3withdrawcoin 4 withdraw
        };
        this.feelService.getActionrate(this.feelrequest).then(function (res) {
            console.log(res);
            _this.feelrate = res;
            // console.log("fell",res.minfee);
        }, function (error) {
            _this.commonUtils.alertCommon('', '网络连接失败，请重试！');
        });
        // this.accountPubService.getAlipay(this.alipay).subscribe(success => {
        //         if (success !=null){
        //             console.log("数据响应：："+success)
        //             this.submitOrder.account_no = success.account_no
        //             this.qr_code= success.qr_code
        //         }
        //     },
        //     error => {
        //         console.log("请求异常：："+error)
        //     });
        console.log('ionViewDidLoad TopupPage');
        this.getAccount();
        console.log(this.account);
    };
    TopupPage.prototype.getAccount = function () {
        var _this = this;
        this.commonUtils.showLoading();
        this.bankmodelProvider.getThirdpart().then(function (res) {
            _this.commonUtils.HideLoading();
            console.log(res);
            if (res.data.length == 0) {
                _this.flag = false;
                // this.commonUtils.alertCommon('','请添加支付宝账号');
                return;
            }
            else {
                _this.account = res.data[0].account;
                _this.name = res.data[0].name;
                console.log(_this.account);
            }
        }).catch(function (err) {
            _this.commonUtils.alertCommon('', err);
        });
    };
    TopupPage.prototype.skipToAlipay = function () {
        debugger;
        this.submitOrder.coin_type = this.alipay.coin_type;
        this.submitOrder.channelType = '2';
        this.submitOrder.account_no = this.account;
        if (this.submitOrder.amount === '') {
            this.alertCommon(this.translateObj.warning, '金额不能为空!');
            return;
        }
        if (Number(this.submitOrder.amount) === 0) {
            this.alertCommon(this.translateObj.warning, this.translateObj.isNoZero);
            return false;
        }
        if (Number(this.submitOrder.amount) < 100) {
            this.alertCommon(this.translateObj.warning, '金额不能小于100!');
            return;
        }
        if (Number(this.submitOrder.amount) > 50000) {
            this.alertCommon(this.translateObj.warning, '金额不能大于50000!');
            return;
        }
        if (this.submitOrder.account_no == '') {
            this.alertCommon(this.translateObj.warning, '请添加支付宝账号');
            return;
        }
        else {
            this.alertSkipAP();
        }
        // this.browserService.open("https://qr.alipay.com/tsx02605cjazchk0vqvhnc6");
    };
    TopupPage.prototype.alertCommon = function (title, subT) {
        this.alert = this.alertCtrl.create({
            title: title,
            subTitle: subT,
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
    TopupPage.prototype.alertSkipAP = function () {
        var _this = this;
        this.commonUtils.showLoading();
        this.accountPubService.submitOrder(this.submitOrder).then(function (success) {
            _this.accountNo = success.accountNo;
            _this.accountName = success.accountName;
            _this.topupComments = success.topupComments;
            _this.commonUtils.HideLoading();
            if (success.ret_code == "1") {
                _this.alert = _this.alertCtrl.create({
                    title: _this.translateObj.warning,
                    message: '<div class="topupMess"> <p class="text-center f12 hui tips">请按提示信息向该账户汇款</p></div>' +
                        '<div class="topupMess"> <p class="text-left">充值账号</p> <p class="text-right">' + _this.accountNo + '(承兑商)</p></div>' +
                        // '<div class="topupMess"> <p class="text-left">充值金额</p> <p class="text-right">' + this.submitOrder.amount + '</p></div>'+
                        // '<div class="topupMess"> <p class="text-left">备注(请务必填写)</p> <p class="text-right cheng">1234567890</p></div>',
                        // inputs: [
                        //     {
                        //         label: '备注',
                        //         name: '备注',
                        //         placeholder: '备注(请务必填写)'
                        //     },
                        // ],
                        '<div class="topupMess"> <p class="text-left">充值金额</p> <p class="text-right">' + _this.submitOrder.amount + '</p></div>' +
                        '<div class="topupMess"> <p class="text-left">备注</p> <p class="text-right cheng">' + _this.topupComments + '</p></div>',
                    /*inputs: [
                        {
                            label: '备注',
                            name: '备注',
                            placeholder: '备注(请务必填写)',
                        },
                    ],*/
                    buttons: [
                        {
                            text: _this.translateObj.Cancel,
                            role: 'cancel',
                            handler: function (data) {
                                // this.chncel();
                                console.log('Cancel clicked');
                                localStorage.setItem('qrCode', success.qrCode);
                                console.log('取消支付');
                                _this.payStatus = false;
                                _this.confirmOrderCon(_this.orderNo, _this.payStatus);
                            }
                        },
                        {
                            text: _this.translateObj.goTopup,
                            handler: function (data) {
                                console.log('Saved clicked');
                                //获取
                                //弹出
                                debugger;
                                console.log(success.qr_code);
                                localStorage.setItem('qrCode', success.qrCode);
                                _this.accountNo = success.accountNo;
                                _this.topupComments = success.topupComments;
                                setTimeout(function () {
                                    setTimeout(function () {
                                        _this.showConfirm(success);
                                    }, 2000);
                                });
                            }
                        }
                    ]
                });
                // this.alert.addInput({type:'radio',label:'Blue',value:'blue',checked:true});
                _this.alert.present();
            }
            else if (success.ret_code == "0") {
                // this.commonUtils.alertCommon('',success.ret_msg);
                _this.alert = _this.alertCtrl.create({
                    title: _this.translateObj.warning,
                    message: success.ret_msg,
                    enableBackdropDismiss: false,
                    buttons: [
                        {
                            text: _this.translateObj.confirm,
                            handler: function (data) {
                                _this.navCtrl.push('BillDetailPage', { assistants: success.orderNo, flag: 'topup' });
                            }
                        }
                    ]
                });
                _this.alert.present();
            }
            else if (success.ret_code == "2") {
                _this.showAlert(success.orderNo);
            }
        }, function (error) {
            console.log("请求异常：：" + error);
            _this.commonUtils.HideLoading();
            _this.commonUtils.alertCommon(_this.translateObj.warning, _this.translateObj.submitFail);
        });
    };
    TopupPage.prototype.chncel = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: this.translateObj.warning,
            message: 'this.translateObj.comcancel',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: this.translateObj.Cancel,
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                        var navTransition = _this.alert.dismiss();
                    }
                },
                {
                    text: this.translateObj.confirm,
                    handler: function (data) {
                        _this.alert.dismiss();
                    }
                }
            ]
        });
        this.alert.present();
    };
    TopupPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    TopupPage.prototype.confirmOrderCon = function (orderNo, payStatus) {
        this.confirmOrder.orderNo = orderNo;
        this.confirmOrder.payStatus = payStatus;
        this.accountPubService.confirmOrderZ(this.confirmOrder).then(function (success) {
            console.log(success);
        }, function (error) {
        });
    };
    TopupPage.prototype.showAlert = function (ordernO) {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: '提示',
            message: '有取消的订单,请查看详情！',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: this.translateObj.incomplete,
                    handler: function () {
                        _this.navCtrl.push('BillDetailPage', { assistants: ordernO, flag: 'topup' });
                    }
                }
            ]
        });
        this.alert.present();
    };
    TopupPage.prototype.showConfirm = function (success) {
        var _this = this;
        console.log(success);
        this.orderNo = success.orderNo; //订单号
        if (success.qrCode) {
        }
        // "accountNo" : "1", //收款账号
        //     "accountName" : "1",//收款名字
        this.alert = this.alertCtrl.create({
            title: this.translateObj.confirm,
            message: this.translateObj.isCompletePayment,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: this.translateObj.incomplete,
                    handler: function () {
                        _this.navCtrl.parent.select(0);
                    }
                },
                {
                    text: this.translateObj.complete,
                    handler: function () {
                        console.log('已付款');
                        _this.payStatus = true;
                        _this.confirmOrderCon(_this.orderNo, _this.payStatus);
                        _this.navCtrl.parent.select(0);
                    }
                }
            ]
        });
        this.alert.present();
    };
    TopupPage.prototype.toDecimal2 = function (x) {
        var f = parseFloat(x);
        if (isNaN(f)) {
            return false;
        }
        f = Math.round(x * 100) / 100;
        var s = f.toString();
        var rs = s.indexOf('.');
        if (rs < 0) {
            rs = s.length;
            s += '.';
        }
        while (s.length <= rs + 2) {
            s += '0';
        }
        return s;
    };
    TopupPage.prototype.tofix = function (amount) {
        console.log(amount);
        this.submitOrder.amount = amount.toString();
        // this.submitOrder.amount = Math.floor(amount * 100) / 100;
        console.log(amount);
        if (this.submitOrder.amount.split(".")[0] == "") {
            this.submitOrder.amount = this.submitOrder.amount.substring(0, 0);
        }
        this.submitOrder.amount = this.submitOrder.amount.replace(/[^\d.]/g, ""); //清除“数字”和“.”以外的字符
        this.submitOrder.amount = this.submitOrder.amount.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
        if (this.submitOrder.amount.indexOf(".") > -1 && this.submitOrder.amount != "") {
            // this.submitOrder.amount =this.submitOrder.amount.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
            // this.submitOrder.amount = this.submitOrder.amount.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');//只能输入两个小数
            var newstr;
            if (this.submitOrder.amount.indexOf(".") != -1) {
                var pos = this.submitOrder.amount.indexOf("."); //小数点的位置
                newstr = this.submitOrder.amount.substring(pos + 1); //小数点后面的值
                var yong = this.submitOrder.amount.substring(0, pos + 1);
                newstr = newstr.replace(/[^0-9]/ig, "");
                console.log("this.precision:++++++", this.precision);
                if (this.precision == "") {
                    this.precision = 2;
                }
                if (newstr.length >= this.precision + 1) {
                    newstr = newstr.substring(0, (newstr.length - 1));
                }
                this.submitOrder.amount = yong + newstr;
            }
            else {
                this.submitOrder.amount = this.submitOrder.amount.replace(/[^0-9\.]/ig, "");
            }
        }
        if (this.submitOrder.amount.indexOf(".") < 0 && this.submitOrder.amount != "") {
            this.submitOrder.amount = parseFloat(this.submitOrder.amount);
        }
        if (amount > 50000) {
            this.submitOrder.amount = 50000;
            this.feel = 50000 * this.feelrate.normalrate;
        }
    };
    TopupPage.prototype.changAmount = function (e) {
        console.log(e);
        // this.submitOrder.amount = Number(this.submitOrder.amount).toFixed(2);
        e = e.replace(/[^\d.]/g, "");
        if (e == "") {
            this.feel = 0;
        }
        var re = /^[0-9]+.?[0-9]*$/; //判断字符串是否为数字     //判断正整数 /^[1-9]+[0-9]*]*$/
        if (!re.test(e)) {
            // alert("请输入数字");
            return false;
        }
        else {
            console.log(e);
            if (Number(e) == 0) {
                this.feel = 0;
            }
            else {
                console.log(this.feelrate);
                // 手续费分 最大 和最小 值，  当超出指定范围 按最大最小值算
                if (Number(e) * this.feelrate.normalrate < this.feelrate.minfee) {
                    this.feel = this.feelrate.minfee;
                }
                else if (Number(e) * this.feelrate.normalrate > this.feelrate.maxfee) {
                    this.feel = this.feelrate.maxfee;
                }
                else {
                    this.feel = Number(e) * this.feelrate.normalrate;
                }
            }
            this.feel = this.feel.toFixed(2);
            console.log(this.feel);
        }
    };
    TopupPage.prototype.ionViewWillLeave = function () {
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
    return TopupPage;
}());
TopupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-topup',template:/*ion-inline-start:"E:\newpays\src\pages\financial\topup\topup.html"*/'                                                                                                                                                                                                                                                                                                                       <!--\n  Generated template for the TopupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>-->\n\n<!--<ion-navbar color="secondary">-->\n<!--<ion-title>充值</ion-title>-->\n<!--</ion-navbar>-->\n\n<!--</ion-header>-->\n\n<ion-header no-border>\n    <ion-toolbar color="primary">\n        <ion-buttons left onclick="" tappable (click)="goBack()">\n            <button ion-button icon-only>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title style="text-align: center">{{\'topup.title\' | translate}}</ion-title>\n        <ion-buttons right>\n            <button ion-button icon-only>\n                <ion-icon name=""></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n\n    <ion-list style="margin-top: 10px">\n        <button ion-item>\n            <img src="assets/img/topupAccount.png" style="width: 50px;height: 50px; margin: 12px 10px 12px 0;"\n                 item-start>\n            <h2>{{\'topup.aliPay\' | translate}}</h2>\n            <p>{{account}}</p>\n        </button>\n    </ion-list>\n    <ion-list>\n        <!--<ion-item no-lines>\n            <ion-label color="dark">{{\'topup.bizhong\' | translate}}</ion-label>\n            <ion-input text-end disabled [(ngModel)]="this.alipay.coin_type"></ion-input>\n        </ion-item>-->\n        <div class="topup_list">\n            <div class="p1">\n                <span>{{\'topup.amount\' | translate}}</span>\n                <div class="currency">{{currency}}</div>\n            </div>\n            <div class="p2">\n                <div class="symbol">{{\'transfer2.price\' | translate}}</div>\n                <input placeholder="{{\'topup.inputAmount\' | translate}}" tappable (keyup)="tofix(submitOrder.amount)" (ngModelChange)="changAmount($event)" [(ngModel)]="submitOrder.amount">\n                <div class="clear"></div>\n            </div>\n            <div class="p3">手续费{{feel}}元</div>\n        </div>\n        <!--<ion-item no-lines>\n            &lt;!&ndash;<ion-label stacked></ion-label>&ndash;&gt;\n            <ion-label stacked style="font-size: 1.5rem; margin: 9px;">{{\'topup.amount\' | translate}} <span\n                    class="currency">BitCNY</span></ion-label>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label color="dark" style="font-size: 2.7rem;">{{\'transfer2.price\' | translate}}</ion-label>\n            <ion-input style="font-size: 2.7rem; margin: 10px 0;" placeholder="{{\'topup.inputAmount\' | translate}}"\n                       type="text" tappable\n                       (keyup)="tofix(submitOrder.amount)" (ngModelChange)="changAmount($event)"\n                       [(ngModel)]="submitOrder.amount"></ion-input>\n        </ion-item>\n        <div class="keyongyue">\n            手续费{{feel}}元\n        </div>-->\n        <!--<ion-item style="margin-top: 1px">-->\n        <!--<ion-label color="dark">{{\'topup.memo\' | translate}}</ion-label>-->\n        <!--<ion-input placeholder="{{\'topup.inputMemo\' | translate}}" [(ngModel)]="submitOrder.comment"></ion-input>-->\n        <!--</ion-item>-->\n    </ion-list>\n    <div class="note">\n        <div>*{{\'topup.onlyAliPay\' | translate}}</div>\n        <div>*{{\'topup.memoForPay\' | translate}}</div>\n        <div>*{{\'topup.maxmoney\' |translate}}</div>\n    </div>\n\n    <button ion-button block tappable (click)="skipToAlipay()" style="width: 92%; display:block; margin:10% auto 0;font-size: 1.7rem;">\n        {{\'topup.refill\' |\n        translate}}\n    </button>\n\n    <div class="footer_tips">*{{\'topup.topupTiS\' | translate}}</div>\n</ion-content>\n'/*ion-inline-end:"E:\newpays\src\pages\financial\topup\topup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_financial_service_account_pub_service__["a" /* AccountPubService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_bank_model_bank_model__["a" /* BankModelProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_common_commonUtils__["a" /* CommonUtils */],
        __WEBPACK_IMPORTED_MODULE_5_ng2_translate__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_feelActionrate_feel_actionrate_service__["a" /* FeelActionrateService */]])
], TopupPage);

//# sourceMappingURL=topup.js.map

/***/ }),

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopupPageModule", function() { return TopupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topup__ = __webpack_require__(1005);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TopupPageModule = (function () {
    function TopupPageModule() {
    }
    return TopupPageModule;
}());
TopupPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__topup__["a" /* TopupPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__topup__["a" /* TopupPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], TopupPageModule);

//# sourceMappingURL=topup.module.js.map

/***/ })

});
//# sourceMappingURL=33.js.map