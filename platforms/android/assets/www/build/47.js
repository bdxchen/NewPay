webpackJsonp([47],{

/***/ 873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundpasswordPageModule", function() { return FundpasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fundpassword__ = __webpack_require__(958);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FundpasswordPageModule = (function () {
    function FundpasswordPageModule() {
    }
    return FundpasswordPageModule;
}());
FundpasswordPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__fundpassword__["a" /* FundpasswordPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fundpassword__["a" /* FundpasswordPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], FundpasswordPageModule);

//# sourceMappingURL=fundpassword.module.js.map

/***/ }),

/***/ 958:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FundpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_financial_service_account_transfer_service__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_commonUtils__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_newpay_wallet_js__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_translate__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_util_service_conf_service__ = __webpack_require__(16);
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
 * Generated class for the FundpasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FundpasswordPage = (function () {
    function FundpasswordPage(navCtrl, navParams, alertCtrl, confService, transfer, pincodeCtrl, toastCtrl, commonUtils, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.confService = confService;
        this.transfer = transfer;
        this.pincodeCtrl = pincodeCtrl;
        this.toastCtrl = toastCtrl;
        this.commonUtils = commonUtils;
        this.translate = translate;
        this.fundpassword = { password: '' };
        this.flag = false;
        console.log(this.navParams.get('userid'));
        this.userId = this.navParams.get('userid');
        this.translate.get('fundpassword').subscribe(function (res) {
            _this.translateObj = res;
        });
    }
    FundpasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FundpasswordPage');
        //清空indexDB 和loacal
    };
    FundpasswordPage.prototype.goBack = function () {
        // this.showPopup("","资金密码设置失败，可能会影响您的正常使用");
        this.navCtrl.pop();
        // this.navCtrl.push("TabsPage");
    };
    FundpasswordPage.prototype.registerFund = function () {
        var _this = this;
        var re = new RegExp("^[a-zA-Z]+$");
        //要包含数字的话是 new RegExp("^[a-zA-Z0-9]+$");
        __WEBPACK_IMPORTED_MODULE_4_newpay_wallet_js__["a" /* NewpayInstance */].checkAccountExists(this.accountName).then(function (res) {
            _this.flag = false;
            console.log(res);
            for (var i = 0; i < res.length; i++) {
                console.log(res[i][0]);
                if (_this.accountName === res[i][0]) {
                    _this.flag = true;
                }
            }
            if (_this.flag) {
                _this.commonUtils.alertCommon('提示', '该账户已经存在!');
                return;
            }
            else {
                if (re.test(_this.accountName)) {
                    console.log("不支持");
                    _this.commonUtils.alertCommon("提示", "不支持高级名称注册");
                    return;
                }
                else {
                    console.log(__WEBPACK_IMPORTED_MODULE_4_newpay_wallet_js__["a" /* NewpayInstance */].checkAccountExists(_this.accountName));
                    debugger;
                    // if(){
                    //
                    // }
                    var pinCode = _this.pincodeCtrl.create({
                        title: '输入密码'
                    });
                    pinCode.present();
                    pinCode.onDidDismiss(function (code, status) {
                        if (status === 'done') {
                            _this.code = code;
                            console.log(code);
                            // this.accountName = "" //账户的名字   账户存在 那么钱包是肯定存在的。 np +登陆名 电话号码
                            _this.commonUtils.showLoading();
                            console.log(_this.accountName);
                            var password = code;
                            __WEBPACK_IMPORTED_MODULE_4_newpay_wallet_js__["a" /* NewpayInstance */].createWalletAndAccount("default", _this.accountName, _this.confService.hydrantHttp, password).then(function () {
                                //如果是导入 WalletManagerStore.onSetWallet（ 钱包名，钱包密码，脑钥）返回的是 成功不成功
                                //先创建钱包 当钱包设置成功去 创建 账户
                                console.log("创建钱包成功");
                                _this.commonUtils.HideLoading();
                                localStorage.setItem("account", _this.accountName);
                                _this.showToast(_this.translateObj.resetPwSuccess);
                                _this.brainKey = __WEBPACK_IMPORTED_MODULE_4_newpay_wallet_js__["a" /* NewpayInstance */].exportBrainKey();
                                console.log(_this.brainKey);
                                localStorage.setItem("brainKey", _this.brainKey);
                                //是否 进行备份 如果 备份  就跳转到备份页面，备份成功跳转到home页，如果不备份则直接跳转到home页
                                _this.showConfirm();
                            }, function (err) {
                                console.log("AAAAAAAAAA");
                            }).catch(function (error) {
                                console.log("创建钱包失败");
                                console.log("ERROR AccountActions.createAccount", error);
                                var error_msg = error.base && error.base.length && error.base.length > 0 ? error.base[0] : "unknown error";
                                if (error.remote_ip)
                                    error_msg = error.remote_ip[0];
                                _this.commonUtils.HideLoading();
                                _this.showToast(error);
                            });
                        }
                        else if (status === 'forgot') {
                            // forgot password
                        }
                    });
                }
            }
        });
    };
    FundpasswordPage.prototype.showToast = function (content) {
        var toast = this.toastCtrl.create({
            message: content,
            duration: 3000
        });
        toast.present();
    };
    FundpasswordPage.prototype.showPopup = function (title, text) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: this.translateObj.confirm,
                }
            ]
        });
        alert.present();
    };
    FundpasswordPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: this.translateObj.backup_title,
            message: this.translateObj.backup_memo,
            buttons: [
                // {
                //     text: this.translateObj.cancel,
                //     handler: () => {
                //         console.log('Disagree clicked');
                //         this.navCtrl.push("TabsPage");
                //         //到主页
                //     }
                // },
                {
                    text: this.translateObj.confirm,
                    handler: function () {
                        console.log('Agree clicked');
                        //获取脑钥。
                        // this.brainKey =   WalletDb.getBrainKey()
                        console.log(_this.brainKey);
                        _this.navCtrl.push("BackupsKeyPage", { brainKey: _this.brainKey });
                        //到备份页面
                    }
                }
            ]
        });
        confirm.present();
    };
    return FundpasswordPage;
}());
FundpasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-fundpassword',template:/*ion-inline-start:"E:\newpay\newpay\src\pages\auth\register\fundpassword\fundpassword.html"*/'<ion-content fullscreen  ionScroll="false" style="background-color: white !important;">\n  <div class="registerCon">\n    <img src="assets/img/register/registBack.png" class="IMGST">\n\n    <!--<img class="logo" src="assets/img/logo/logo.png" />-->\n    <div tappable (click)="goBack()">\n      <button ion-button clear start icon-only>\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </div>\n  </div>\n  <div class="login-container">\n    <ion-list>\n    <ion-item no-lines>\n      {{\'fundpassword.setFundPw\' | translate }}\n    </ion-item>\n    <ion-item no-lines style="border-bottom: 1px solid #dedede;">\n      <!--<ion-label floating>Username</ion-label>-->\n      <ion-input class="password" placeholder="{{\'fundpassword.inputFunPw\' | translate }}"  type="text"  name="accountName" [(ngModel)]="accountName" tappable></ion-input>\n      <!--<p [hidden]="username.valid" class="alert alert-danger">用户名不可以为空!</p>-->\n    </ion-item>\n    <!--<ion-item no-lines style="border-bottom: 1px solid #dedede;">-->\n      <!--&lt;!&ndash;<ion-label floating>Username</ion-label>&ndash;&gt;-->\n      <!--<ion-input class="password" placeholder="{{\'fundpassword.confirmFunPw\' | translate }}" max="6" maxlength="6" type="number" name="refundpassword" [(ngModel)]="refundpassword" tappable (keyup)=\'refundpasswordFC(refundpassword)\'></ion-input>-->\n    <!--</ion-item>-->\n\n    <div class="btnST">\n      <!--<ion-note style="color: red;font-size: 12px">{{\'fundpassword.fundPwMemo\' | translate }}</ion-note>-->\n      <button ion-button full class="nextST" tappable (click)="registerFund()">{{\'fundpassword.finish\' | translate }}</button>\n    </div>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\newpay\newpay\src\pages\auth\register\fundpassword\fundpassword.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_7__providers_util_service_conf_service__["b" /* ConfService */],
        __WEBPACK_IMPORTED_MODULE_2__providers_financial_service_account_transfer_service__["a" /* TransferService */],
        __WEBPACK_IMPORTED_MODULE_8_ionic2_pincode_input_dist_pincode__["a" /* PincodeController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_common_commonUtils__["a" /* CommonUtils */],
        __WEBPACK_IMPORTED_MODULE_6_ng2_translate__["c" /* TranslateService */]])
], FundpasswordPage);

//# sourceMappingURL=fundpassword.js.map

/***/ })

});
//# sourceMappingURL=47.js.map