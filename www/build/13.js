webpackJsonp([13],{

/***/ 1030:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyWalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_newpay_wallet_js__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_wallet_recovery_import_service__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_translate__ = __webpack_require__(212);
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
 * Generated class for the MyWalletPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MyWalletPage = (function () {
    function MyWalletPage(navCtrl, navParams, toastCtrl, modalCtrl, recoveryImportService, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.recoveryImportService = recoveryImportService;
        this.translate = translate;
        this.data = [];
        this.translate.get('my_wallet').subscribe(function (res) {
            _this.translateObj = res;
        });
    }
    MyWalletPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyWalletPage');
        // let  showList=JSON.parse(localStorage.getItem('showList'));
        //
        // if(showList.length!=0){
        //     this.data =showList;
        //     }
    };
    MyWalletPage.prototype.goBack = function () {
        this.navCtrl.parent.select(1);
    };
    MyWalletPage.prototype.beifenMS = function () {
        this.navCtrl.push('BackupsKeyPage', { brainKey: __WEBPACK_IMPORTED_MODULE_2_newpay_wallet_js__["a" /* NewpayInstance */].exportBrainKey() });
    };
    MyWalletPage.prototype.huifuDR = function () {
        localStorage.setItem('flag', '2');
        this.navCtrl.push('RecoveryImportPage');
    };
    MyWalletPage.prototype.ionViewWillLeave = function () {
        if (this.alert) {
            this.alert.dismiss();
        }
        if (this.loading) {
            this.loading.dismiss();
        }
        // if(this.actionSheet){
        //     this.actionSheet.dismiss();
        // }
        if (this.modal) {
            this.modal.dismiss();
        }
    };
    return MyWalletPage;
}());
MyWalletPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-my-wallet',template:/*ion-inline-start:"E:\newpays\src\pages\mine\my-wallet\my-wallet.html"*/'<!--\n  Generated template for the MyWalletPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border cache-view="false">\n    <ion-toolbar color="secondary">\n        <ion-buttons left icon-only (click)="goBack()">\n            <button ion-button icon-only>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title style="text-align: center">{{\'my_wallet.title\' | translate}}</ion-title>\n        <ion-buttons end icon-only>\n            <button ion-button icon-only>\n                <ion-icon name=""></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content style="background-color: #eef5fd !important">\n    <button ion-button style="margin: 20% auto;width: 92%; display:block; background-color: #f9c215" tappable\n            (click)="beifenMS()">{{\'my_wallet.backupKey\' | translate}}\n    </button>\n    <!--<button ion-button style="margin-top: 5%;width: 70%;margin-left: 15%;background-color: #2faff9" (click)="huifuDR()">{{\'my_wallet.import\' | translate}}</button>-->\n\n</ion-content>\n'/*ion-inline-end:"E:\newpays\src\pages\mine\my-wallet\my-wallet.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_wallet_recovery_import_service__["a" /* RecoveryImportService */],
        __WEBPACK_IMPORTED_MODULE_5_ng2_translate__["c" /* TranslateService */]])
], MyWalletPage);

//# sourceMappingURL=my-wallet.js.map

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWalletPageModule", function() { return MyWalletPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_wallet__ = __webpack_require__(1030);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MyWalletPageModule = (function () {
    function MyWalletPageModule() {
    }
    return MyWalletPageModule;
}());
MyWalletPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_wallet__["a" /* MyWalletPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_wallet__["a" /* MyWalletPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], MyWalletPageModule);

//# sourceMappingURL=my-wallet.module.js.map

/***/ })

});
//# sourceMappingURL=13.js.map