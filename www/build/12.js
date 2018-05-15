webpackJsonp([12],{

/***/ 1032:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoveryImportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_newpay_wallet_js__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_wallet_recovery_import_service__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_service_storage_service__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_commonUtils__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_translate__ = __webpack_require__(212);
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
 * Generated class for the RecoveryImportPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RecoveryImportPage = (function () {
    function RecoveryImportPage(navCtrl, navParams, alertCtrl, modalCtrl, toastCtrl, pincodeCtrl, storageService, recoveryImportService, commonUtils, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.pincodeCtrl = pincodeCtrl;
        this.storageService = storageService;
        this.recoveryImportService = recoveryImportService;
        this.commonUtils = commonUtils;
        this.translate = translate;
        this.getKeyBrain = '';
        this.indexedDB = window.indexedDB;
        this.account = storageService.read('userid');
        this.translate.get('recovery_import').subscribe(function (res) {
            _this.translateObj = res;
        });
    }
    RecoveryImportPage.prototype.if = function (indexedDB) {
        console.log("你的浏览器不支持IndexedDB");
    };
    RecoveryImportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecoveryImportPage');
    };
    RecoveryImportPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    RecoveryImportPage.prototype.alertCommon = function (title, subTitle) {
        this.alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
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
    RecoveryImportPage.prototype.returnZXH = function (zhanghuming) {
        console.log("zhanghuming", zhanghuming);
        return new Promise(function (resolve, reject) {
            localStorage.setItem("account", zhanghuming);
            var obj = {
                flag: 0,
                // value: this.translateObj.accountExists
                account: zhanghuming
            };
            resolve(obj);
            // if(zhanghuming==user){  //和规则相同 允许导入
            //     let obj={
            //         flag:0,
            //         value: this.translateObj.accountExists
            //     };
            //     resolve(obj)
            //     // //链 导入脑钥 和生成规则不相同，那就肯定不能导入了
            //     // if(localStorage.getItem("account") != NewpayInstance.getCurAccountLocalKey() ){
            //     //     this.alertCommon(this.translateObj.warning, this.translateObj.IfMatching);
            //     //     console.log("不为null")
            //     //     return;
            //     // }
            // }else if(zhanghuming !=user){
            //     let obj={
            //         flag:1,
            //         value: this.translateObj.accountNoExists
            //     };
            //     resolve(obj)
            //     // this.commonUtils.alertCommon('提示','账户在本系统不存在');
            //     //return;
            // }
        }).catch();
    };
    RecoveryImportPage.prototype.recoveryKey = function () {
        var _this = this;
        if (this.getKeyBrain.length == 0) {
            this.alertCommon(this.translateObj.warning, this.translateObj.inputBrainKey);
            return;
        }
        if (this.getKeyBrain.length < 50) {
            this.alertCommon(this.translateObj.warning, this.translateObj.morethen15);
            return;
        }
        var pinCode = this.pincodeCtrl.create({
            title: '输入密码'
        });
        pinCode.present();
        pinCode.onDidDismiss(function (code, status) {
            console.log(_this.getKeyBrain.length);
            //创建之前 要 删除本地数据库的数据 获取getRootDatabaseName getDatabaseName
            console.log(code);
            console.log(__WEBPACK_IMPORTED_MODULE_2_newpay_wallet_js__["a" /* NewpayInstance */].validatePassword(code));
            if (__WEBPACK_IMPORTED_MODULE_2_newpay_wallet_js__["a" /* NewpayInstance */].validatePassword(code)) {
                // 先验证密码的正确性，如果密码都不正确后续操作全部不能执行。 如果密码正确 验证账户的正确性账户为当前登录用户 那就恢复脑钥
                _this.commonUtils.showLoading();
                //验证成功&& WalletDb.validatePassword(data.pwd, true)
                console.log(_this.getKeyBrain);
                // 初始化
                __WEBPACK_IMPORTED_MODULE_2_newpay_wallet_js__["a" /* NewpayInstance */].importBrainKey("default", _this.getKeyBrain, _this.returnZXH.bind(_this), code).then(function () {
                    _this.commonUtils.HideLoading();
                    //重置密码，导入成功，   提交到中心 服务器
                    console.log("导入成功");
                    console.log(__WEBPACK_IMPORTED_MODULE_2_newpay_wallet_js__["a" /* NewpayInstance */].getCurAccountLocalKey());
                    _this.brainKey = __WEBPACK_IMPORTED_MODULE_2_newpay_wallet_js__["a" /* NewpayInstance */].exportBrainKey();
                    console.log(_this.brainKey);
                    localStorage.setItem("brainKey", _this.brainKey);
                    //如果是导入 WalletManagerStore.onSetWallet（ 钱包名，钱包密码，脑钥）返回的是 成功不成功
                    _this.navCtrl.push('TabsPage');
                }).catch(function (err) {
                    _this.commonUtils.HideLoading();
                    console.log(err);
                    _this.alertCommon('提示', '脑钥错误,请重新导入');
                });
            }
            else {
                _this.commonUtils.alertCommon("", "密码错误");
            }
        });
    };
    RecoveryImportPage.prototype.ionViewWillLeave = function () {
        if (this.alert) {
            this.alert.dismiss();
        }
        if (this.loading) {
            this.loading.dismiss();
        }
        if (this.modal) {
            this.modal.dismiss();
        }
    };
    return RecoveryImportPage;
}());
RecoveryImportPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-recovery-import',template:/*ion-inline-start:"E:\newpays\src\pages\mine\my-wallet\recovery-import\recovery-import.html"*/'<!--\n  Generated template for the RecoveryImportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n    <ion-toolbar color="secondary">\n        <ion-buttons left icon-only tappable (click)="goBack()">\n            <button ion-button icon-only>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title style="text-align: center"> {{\'recovery_import.title\' | translate}}</ion-title>\n        <ion-buttons end="" icon-only>\n            <button ion-button icon-only>\n                <ion-icon name=""></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content style="background-color: #eef5fd !important">\n    <ion-list style="margin-top: 10px">\n        <!--<ion-item no-lines>-->\n            <!--<ion-label item-start>-->\n                <!--{{\'recovery_import.account\' | translate}}-->\n            <!--</ion-label>-->\n            <!--<p item-end> {{account}}</p>-->\n        <!--</ion-item>-->\n        <ion-item no-lines style="margin-top: 1px">\n            <ion-label item-start style="padding: 10px 0;">\n                {{\'recovery_import.brainKey\' | translate}}\n            </ion-label>\n            <!--<p item-end> 从钱包备份文件恢复(.bin)</p>-->\n            <ion-textarea item-end [(ngModel)]="getKeyBrain" value="{{getKeyBrain}}" rows="5" cols="20"></ion-textarea>\n        </ion-item>\n    </ion-list>\n    <p style="width: 94%;margin-left: 3%;color: #888888;font-size: 13px">{{\'recovery_import.memo\' | translate}}</p>\n    <button ion-button style="background-color: #f9c215; margin:20% auto 0;width: 94%; display: block;" tappable (click)="recoveryKey()">\n        {{\'recovery_import.confirm\' | translate}}\n    </button>\n</ion-content>\n'/*ion-inline-end:"E:\newpays\src\pages\mine\my-wallet\recovery-import\recovery-import.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_8_ionic2_pincode_input_dist_pincode__["a" /* PincodeController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_util_service_storage_service__["a" /* StorageService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_wallet_recovery_import_service__["a" /* RecoveryImportService */],
        __WEBPACK_IMPORTED_MODULE_6__providers_common_commonUtils__["a" /* CommonUtils */],
        __WEBPACK_IMPORTED_MODULE_7_ng2_translate__["c" /* TranslateService */]])
], RecoveryImportPage);

//# sourceMappingURL=recovery-import.js.map

/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryImportPageModule", function() { return RecoveryImportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recovery_import__ = __webpack_require__(1032);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RecoveryImportPageModule = (function () {
    function RecoveryImportPageModule() {
    }
    return RecoveryImportPageModule;
}());
RecoveryImportPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__recovery_import__["a" /* RecoveryImportPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recovery_import__["a" /* RecoveryImportPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], RecoveryImportPageModule);

//# sourceMappingURL=recovery-import.module.js.map

/***/ })

});
//# sourceMappingURL=12.js.map