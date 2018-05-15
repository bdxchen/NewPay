webpackJsonp([4],{

/***/ 1006:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_financial_service_account_transfer_service__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_newpay_wallet_js__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_translate__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ion_digit_keyboard__ = __webpack_require__(1007);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_commonUtils__ = __webpack_require__(130);
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
 * Generated class for the TransferPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TransferPage = (function () {
    function TransferPage(transfer, navCtrl, navParams, alertCtrl, translate, commonUtils) {
        // this.SearchD = navParams.get("SearchD");
        var _this = this;
        this.transfer = transfer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.commonUtils = commonUtils;
        this.checkUid = { to_userid: '', coin_type: 'BTS' };
        this.createSuccess = false;
        this.SearchD = { amount: 0, asset_id: '', precision: 0, symbol: '' };
        // to_userid:string;
        // amount: number; // 金额
        // asset_id: string;  //id
        // precision: number;   //精度
        // symbol: string //币种
        this.reqCheckPyee = { to_userid: '', amount: 0, asset_id: '', precision: 0, coin_type: '', symbol: '', coin_account: '', nickname: '' };
        this.keyboardSettings = {
            align: 'center',
            //width: '85%',
            visible: false,
            leftActionOptions: {
                iconName: 'ios-backspace-outline',
                fontSize: '1.4em'
            },
            rightActionOptions: {
                //iconName: 'ios-checkmark-circle-outline',
                text: '.',
                fontSize: '1.3em'
            },
            roundButtons: false,
            showLetters: true,
            swipeToHide: true,
            // Available themes: IonDigitKeyboard.themes
            theme: 'ionic'
        };
        this.translate.get('transfer').subscribe(function (res) {
            _this.translateObj = res;
        });
    }
    TransferPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    TransferPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_newpay_wallet_js__["a" /* NewpayInstance */].getAccountBalances(localStorage.getItem("account")).then(function (resQ) {
            _this.commonUtils.HideLoading();
            console.log("res", resQ);
            _this.selectOptions = {
                title: '币种',
                subTitle: '',
                mode: 'md'
            };
            _this.symbol = resQ[0].symbol;
            _this.coinType = resQ;
        }).catch(function (err) {
            _this.commonUtils.HideLoading();
            console.log(err);
        });
    };
    TransferPage.prototype.nextCheckAcc = function () {
        console.log(this.symbol);
        if (this.reqCheckPyee.to_userid == "") {
            this.commonUtils.alertCommon("提示", "账号名称不能为空");
            return;
        }
        console.log(this.reqCheckPyee.to_userid);
        this.navCtrl.push('Transfer2Page', { toUserId: this.reqCheckPyee.to_userid, symbol: this.symbol });
        // NewpayInstance.checkAccountExists().then((res)=>{
        //     console.log("lookupAccounts", res);
        //     let temp =0;
        //
        // }).catch(err=>{
        //     console.log(err)
        // })
    };
    TransferPage.prototype.alertComm = function (title, content) {
        this.alert = this.alertCtrl.create({
            title: title,
            subTitle: content,
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
    TransferPage.prototype.showPopup = function (title, text) {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: this.translateObj.confirm,
                    handler: function (data) {
                        if (_this.createSuccess) {
                            // this.navCtrl.popToRoot();
                        }
                    }
                }
            ]
        });
        this.alert.present();
    };
    TransferPage.prototype.showKeyboard = function () {
        this.keyboard.show();
    };
    // Event way
    TransferPage.prototype.numberClick = function (key) {
        console.log('From event: ', key);
    };
    TransferPage.prototype.hideKeyboard = function () {
        this.keyboard.hide();
    };
    TransferPage.prototype.ionViewWillLeave = function () {
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
    return TransferPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__components_ion_digit_keyboard__["a" /* IonDigitKeyboardCmp */]),
    __metadata("design:type", Object)
], TransferPage.prototype, "keyboard", void 0);
TransferPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-transfer',template:/*ion-inline-start:"E:\newpay\newpay\src\pages\financial\transfer\transfer.html"*/'<!--\n  Generated template for the TransferPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n    <ion-toolbar color="primary" >\n        <ion-buttons left onclick="" tappable (click)="goBack()">\n            <button ion-button icon-only>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n\n        <ion-title style="text-align: center">{{\'transfer.title\' | translate}}</ion-title>\n\n        <ion-buttons right tappable>\n            <button ion-button icon-only>\n                <ion-icon name=""></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n\n	<ion-list style="margin: 1rem 0;">\n    <ion-item>\n            <ion-label color="primary">币种</ion-label>\n            <ion-select [selectOptions]="selectOptions" multiple="false" [(ngModel)]="symbol" okText="确认" cancelText="取消">\n            <ion-option *ngFor="let item of coinType"  [value]="coinType.symbol">{{item.symbol}}</ion-option>\n            </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary">收款人账户</ion-label>\n        <!--请输入NewPay账户-->\n      <ion-input type="text"  placeholder="{{\'transfer.inputOtherAccount\' | translate}}" required   [(ngModel)]="reqCheckPyee.to_userid"></ion-input>\n    </ion-item>\n  </ion-list>\n    <ion-note item-start style="color:#FF8A2C; font-size: 1.2rem;">\n        *{{\'transfer.memo\' | translate}}\n    </ion-note>\n  <button ion-button block tappable (click)="nextCheckAcc()">{{\'transfer.next\' | translate}}</button>\n\n    <!--<button ion-button secondary (click)="showKeyboard()">Show Keyboard</button>-->\n</ion-content>\n<!--<ion-digit-keyboard-->\n        <!--[align]="keyboardSettings.align"-->\n        <!--[width]="keyboardSettings.width"-->\n        <!--[visible]="keyboardSettings.visible"-->\n        <!--[leftActionOptions]="keyboardSettings.leftActionOptions"-->\n        <!--[rightActionOptions]="keyboardSettings.rightActionOptions"-->\n        <!--[roundButtons]="keyboardSettings.roundButtons"-->\n        <!--[showLetters]="keyboardSettings.showLetters"-->\n        <!--[swipeToHide]="keyboardSettings.swipeToHide"-->\n        <!--[theme]="keyboardSettings.theme"-->\n        <!--(numberClick)="numberClick($event)"-->\n<!--&gt;-->\n    <!--<ion-toolbar no-border-bottom>-->\n        <!--<ion-buttons start>-->\n            <!--<button ion-button (click)="hideKeyboard()">Cancel</button>-->\n        <!--</ion-buttons>-->\n        <!--<ion-buttons end>-->\n            <!--<button ion-button solid *ngIf="">Next</button>-->\n            <!--<button ion-button (click)="hideKeyboard()">Done</button>-->\n        <!--</ion-buttons>-->\n    <!--</ion-toolbar>-->\n<!--</ion-digit-keyboard>-->'/*ion-inline-end:"E:\newpay\newpay\src\pages\financial\transfer\transfer.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_financial_service_account_transfer_service__["a" /* TransferService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ng2_translate__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_6__providers_common_commonUtils__["a" /* CommonUtils */]])
], TransferPage);

//# sourceMappingURL=transfer.js.map

/***/ }),

/***/ 1007:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__(417);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferPageModule", function() { return TransferPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transfer__ = __webpack_require__(1006);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TransferPageModule = (function () {
    function TransferPageModule() {
    }
    return TransferPageModule;
}());
TransferPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__transfer__["a" /* TransferPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transfer__["a" /* TransferPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], TransferPageModule);

//# sourceMappingURL=transfer.module.js.map

/***/ })

});
//# sourceMappingURL=4.js.map