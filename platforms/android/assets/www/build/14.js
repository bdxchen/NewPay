webpackJsonp([14],{

/***/ 1031:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackupsKeyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_clipboard__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_translate__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_commonUtils__ = __webpack_require__(130);
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
 * Generated class for the BackupsKeyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BackupsKeyPage = (function () {
    function BackupsKeyPage(navCtrl, navParams, commonUtils, clipboard, alertCtrl, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonUtils = commonUtils;
        this.clipboard = clipboard;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.brainKey = this.navParams.get("brainKey");
        console.log(this.brainKey);
        this.account = localStorage.getItem('account');
        this.translate.get('backups_key').subscribe(function (res) {
            _this.translateObj = res;
        });
    }
    BackupsKeyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BackupsKeyPage');
        console.log(this.brainKey);
    };
    BackupsKeyPage.prototype.copyBack = function () {
        var _this = this;
        this.clipboard.copy(this.brainKey).then(function (res) {
            _this.CommonAlert();
        }).catch(function (err) {
            _this.alertCommon('', err);
        });
    };
    BackupsKeyPage.prototype.alertCommon = function (title, subT) {
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
    BackupsKeyPage.prototype.CommonAlert = function () {
        this.alert = this.alertCtrl.create({
            title: this.translateObj.warning,
            subTitle: this.translateObj.warCopySuc,
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
    BackupsKeyPage.prototype.goBack = function () {
        // this.navCtrl.pop();
        this.navCtrl.push("TabsPage");
        // this.navCtrl.parent.select(2);
    };
    BackupsKeyPage.prototype.ionViewWillLeave = function () {
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
    return BackupsKeyPage;
}());
BackupsKeyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-backups-key',template:/*ion-inline-start:"E:\newpay\newpay\src\pages\mine\my-wallet\backups-key\backups-key.html"*/'<ion-header no-border>\n    <ion-toolbar color="secondary">\n        <ion-buttons left icon-only tappable (click)="goBack()">\n            <button ion-button icon-only>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title style="text-align: center"> {{\'backups_key.title\' | translate}}</ion-title>\n        <ion-buttons end="" icon-only>\n            <button ion-button icon-only>\n                <ion-icon name=""></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content style="background-color: #eef5fd !important">\n    <ion-list style="margin-top: 10px">\n        <ion-item no-lines>\n            <ion-label item-start>\n                {{\'backups_key.account\' | translate}}\n            </ion-label>\n            <p item-end> {{account}}</p>\n        </ion-item>\n        <ion-item no-lines style="margin-top: 1px">\n            <ion-label item-start style="padding: 10px 0;">\n                {{\'backups_key.backupWallet\' | translate}}\n            </ion-label>\n            {{brainKey}}\n            <ion-textarea style="color: #2a2b2d;" [(ngModel)]="brainKey" item-end value="{{brainKey}}" disabled="disabled" rows="5" cols="20"></ion-textarea>\n        </ion-item>\n    </ion-list>\n    <div style="width: 94%;margin-left: 3%;\n    display: flex;\n    justify-content: center;\n    align-items: center">\n        <img src="assets/img/dangerous.png" alt="" style="width: 20px;height: 20px">\n        <p style="flex: 1;width: 94%;margin-left: 3%;color: #ff9b44;font-size: 13px">{{\'backups_key.memo\' |\n            translate}}</p>\n    </div>\n\n    <button ion-button style="width: 94%; background-color: #f9c215; display: block; margin: 8% auto;" tappable (click)="copyBack()">\n        {{\'backups_key.backupBtn\' | translate}}\n    </button>\n</ion-content>\n'/*ion-inline-end:"E:\newpay\newpay\src\pages\mine\my-wallet\backups-key\backups-key.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__providers_common_commonUtils__["a" /* CommonUtils */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_clipboard__["a" /* Clipboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ng2_translate__["c" /* TranslateService */]])
], BackupsKeyPage);

//# sourceMappingURL=backups-key.js.map

/***/ }),

/***/ 913:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackupsKeyPageModule", function() { return BackupsKeyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backups_key__ = __webpack_require__(1031);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BackupsKeyPageModule = (function () {
    function BackupsKeyPageModule() {
    }
    return BackupsKeyPageModule;
}());
BackupsKeyPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__backups_key__["a" /* BackupsKeyPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__backups_key__["a" /* BackupsKeyPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], BackupsKeyPageModule);

//# sourceMappingURL=backups-key.module.js.map

/***/ })

});
//# sourceMappingURL=14.js.map