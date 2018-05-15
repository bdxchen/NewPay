webpackJsonp([24],{

/***/ 1021:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlipayAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_mine_service__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_commonUtils__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_identity_ientity_auth__ = __webpack_require__(405);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AlipayAddPage = (function () {
    function AlipayAddPage(navCtrl, mineService, alertCtrl, translate, commonUtils, ientityAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.mineService = mineService;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.commonUtils = commonUtils;
        this.ientityAuth = ientityAuth;
        this.createSuccess = false;
        this.addAlipay = { account: '', name: '' };
        this.translate.get('alipay_add').subscribe(function (res) {
            _this.translateObj = res;
        });
    }
    AlipayAddPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    AlipayAddPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.commonUtils.showLoading();
        this.ientityAuth.userIdentity().then(function (res) {
            _this.commonUtils.HideLoading();
            console.log(res);
            if (res.ret_code == '1') {
                _this.addAlipay.name = res.data.idName;
            }
        }).catch(function (err) {
            _this.commonUtils.HideLoading();
            _this.commonUtils.alertCommon('', err);
            console.log(err);
        });
    };
    AlipayAddPage.prototype.confirm = function () {
        var _this = this;
        // this.addAlipay.account
        // var regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,
        //     regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;
        this.addAlipay.account = this.addAlipay.account.trim();
        if (this.addAlipay.account.trim() == "") {
            this.commonUtils.alertCommon('', this.translateObj.empty);
            return false;
        }
        // if(regEn.test(this.addAlipay.account) || regCn.test(this.addAlipay.account)) {
        //     this.commonUtils.alertCommon('',this.translateObj.specialValid)
        //     return false;
        // }
        this.mineService.addAlipay(this.addAlipay).then(function (success) {
            if (success != null) {
                _this.createSuccess = true;
                if (success.ret_code == 1) {
                    _this.commonUtils.showToast(_this.translateObj.bindSuccess);
                    _this.addAlipay = {
                        name: "",
                        account: ""
                    };
                    _this.navCtrl.push("MyAlipayPage");
                }
                else {
                    _this.showPopup("", success.ret_msg);
                }
            }
            else {
                _this.showPopup("", _this.translateObj.serviceErr);
            }
        }, function (error) {
            _this.showPopup("", _this.translateObj.netErr);
        });
    };
    AlipayAddPage.prototype.reset = function () {
        this.addAlipay = {
            name: "",
            account: ""
        };
    };
    AlipayAddPage.prototype.showPopup = function (title, text) {
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
    AlipayAddPage.prototype.XZlx = function (acc) {
        if (acc) {
            // this.addAlipay.account = acc.replace(/[^\d]/g,'');
            if (acc.length > 20) {
                this.addAlipay.account = acc.substring(0, 20);
            }
        }
    };
    AlipayAddPage.prototype.ionViewWillLeave = function () {
        if (this.alert) {
            this.alert.dismiss();
        }
        if (this.loading) {
            this.loading.dismiss();
        }
        // if(this.actionSheet){
        //     this.actionSheet.dismiss();
        // }
        // if(this.modal){
        //     this.modal.dismiss();
        // }
    };
    return AlipayAddPage;
}());
AlipayAddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'alipay-add',template:/*ion-inline-start:"E:\newpay\newpay\src\pages\mine\alipay\alipay-add\alipay-add.html"*/'<ion-header no-border>\n    <ion-toolbar color="secondary">\n        <ion-buttons left icon-only (click)="goBack()">\n            <button ion-button icon-only>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title style="text-align: center"> {{\'alipay_add.title\' | translate}}</ion-title>\n        <ion-buttons right icon-only>\n            <button ion-button icon-only>\n                <ion-icon name=""></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content style="background-color: #eef5fd !important">\n    <ion-list style="margin-top: 10px">\n        <ion-item no-lines>\n            <ion-label class="primary">{{\'alipay_add.name\' | translate}}:</ion-label>\n            <ion-input class="hei" text-end placeholder="{{\'alipay_add.inputName\' | translate}}" disabled\n                       [(ngModel)]="addAlipay.name"></ion-input>\n        </ion-item>\n        <ion-item no-lines style="margin-top: 1px">\n            <ion-label class="primary">{{\'alipay_add.alipayAccount\' | translate}}:</ion-label>\n            <ion-input style="color: #bbb;" text-end placeholder="{{\'alipay_add.inputAlipayAccount\' | translate}}"\n                       (keyup)="XZlx(addAlipay.account)" [(ngModel)]="addAlipay.account"></ion-input>\n        </ion-item>\n        <p style="padding: 0 4%; color: #888; font-size: 1.2rem;">{{\'alipay_add.prompt\' | translate}}</p>\n        <div style="margin-top: 10vw">\n            <button style="width: 92%; margin: 20% auto; border-radius: 4px; background-color: #2faff9; color: #FFFFFF; border: 1px solid #0dacfa;" ion-button outline full (click)="confirm()">{{\'alipay_add.confirm\' | translate}}\n            </button>\n        </div>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\newpay\newpay\src\pages\mine\alipay\alipay-add\alipay-add.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_service_mine_service__["a" /* MineService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_common_commonUtils__["a" /* CommonUtils */],
        __WEBPACK_IMPORTED_MODULE_5__providers_identity_ientity_auth__["a" /* IentityAuth */]])
], AlipayAddPage);

//# sourceMappingURL=alipay-add.js.map

/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlipayAddPageModule", function() { return AlipayAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alipay_add__ = __webpack_require__(1021);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AlipayAddPageModule = (function () {
    function AlipayAddPageModule() {
    }
    return AlipayAddPageModule;
}());
AlipayAddPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__alipay_add__["a" /* AlipayAddPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__alipay_add__["a" /* AlipayAddPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], AlipayAddPageModule);

//# sourceMappingURL=alipay-add.module.js.map

/***/ })

});
//# sourceMappingURL=24.js.map