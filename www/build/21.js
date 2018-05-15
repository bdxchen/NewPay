webpackJsonp([21],{

/***/ 1024:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankcardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_mine_service__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_commonUtils__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BankcardPage = (function () {
    function BankcardPage(navCtrl, actionSheetCtrl, mineser, alertCtrl, commonUtils, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.mineser = mineser;
        this.alertCtrl = alertCtrl;
        this.commonUtils = commonUtils;
        this.translate = translate;
        this.flag = 0;
        this.indexTags = [];
        this.deleteBankCard = { account: '', name: '', bankname: '', branchName: '', time: '' };
        this.showBankCrad();
        this.translate.get('bankcard').subscribe(function (res) {
            _this.translateObj = res;
        });
    }
    BankcardPage.prototype.goBack = function () {
        this.navCtrl.parent.select(2);
    };
    BankcardPage.prototype.goBankcardAddPage = function () {
        this.navCtrl.push("BankcardAddPage");
    };
    BankcardPage.prototype.deleteCard = function (tag) {
        this.deleteBankCard = tag;
        console.log("删除银行卡");
        this.showConfirm(tag);
    };
    BankcardPage.prototype.showConfirm = function (tag) {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: '',
            message: this.translateObj.unbindWarning + tag.account.substring(tag.account.length - 4) + '?',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: this.translateObj.cancel,
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: this.translateObj.confirm,
                    handler: function () {
                        console.log('Agree clicked');
                        _this.commonUtils.showLoading();
                        _this.mineser.deleteBankCard(_this.deleteBankCard).then(function (retData) {
                            _this.commonUtils.HideLoading();
                            if (retData != null) {
                                if (retData.ret_code == "1") {
                                    _this.mineser.bankCardcclist().then(function (retData) {
                                        debugger;
                                        if (retData != null) {
                                            if (retData.ret_code == 1) {
                                                if (retData.data.length > 0) {
                                                    _this.flag = 1;
                                                    _this.indexTags = retData.data;
                                                }
                                                else if (retData.data.length == 0) {
                                                    _this.flag = 0;
                                                    _this.indexTags = [];
                                                }
                                            }
                                        }
                                        else {
                                            console.log("ret_code = 0" + JSON.stringify(retData));
                                        }
                                    }, function (error) {
                                        _this.commonUtils.HideLoading();
                                        console.log("get frieds err");
                                    });
                                }
                            }
                            else {
                                console.log("ret_code = 0" + JSON.stringify(retData));
                            }
                        }, function (error) {
                            _this.commonUtils.HideLoading();
                            console.log("get frieds err");
                        });
                    }
                }
            ]
        });
        this.alert.present();
    };
    BankcardPage.prototype.showBankCrad = function () {
        var _this = this;
        this.mineser.bankCardcclist().then(function (retData) {
            if (retData != null) {
                if (retData.ret_code == 1) {
                    console.log(retData.ret_code);
                    if (retData.data.length > 0) {
                        _this.flag = 1;
                        // for (let i = 0; i < retData.data.length; i++) {
                        //     let temp = [];
                        // retData.data[i].cardNumber = retData.data[i].account;//拷贝account的值到cardNumber方便回传
                        // for (let j = 0; j < retData.data[i].account.length; j++) {
                        //     let len = retData.data[i].account.length;
                        //     if (j >= 0 && j < 4) {
                        //         temp.push(retData.data[i].account[j])
                        //     }else if(j>=4 &&  j<len-4){
                        //         temp.push("*");
                        //     }else if(j>=len-4 && j<len){
                        //         if(len-4==j){
                        //             temp.push(" ");
                        //             temp.push(retData.data[i].account[j]);
                        //         }else{
                        //             temp.push(retData.data[i].account[j]);
                        //         }
                        //
                        //     }
                        //
                        // }
                        // console.log(temp)
                        // let str=temp.join("").replace(/(\d{4})/g,'$1 ').replace(/\s*$/,'');
                        // retData.data[i].account = str;
                        // }
                        _this.indexTags = retData.data;
                    }
                    else if (retData.data.length == 0) {
                        _this.flag = 0;
                        _this.indexTags = retData.data;
                    }
                }
            }
            else {
                console.log("ret_code = 0" + JSON.stringify(retData));
            }
        }, function (error) {
            console.log("get frieds err");
        });
    };
    BankcardPage.prototype.ionViewWillLeave = function () {
        if (this.alert) {
            this.alert.dismiss();
        }
        // if(this.loading){
        //     this.loading.dismiss();
        // }
        // if(this.actionSheet){
        //     this.actionSheet.dismiss();
        // }
        // if(this.modal){
        //     this.modal.dismiss();
        // }
    };
    return BankcardPage;
}());
BankcardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-bankcard',template:/*ion-inline-start:"E:\newpays\src\pages\mine\bankcard\bankcard.html"*/'<!--<ion-header>-->\n<!--<ion-navbar color="secondary">-->\n<!--<ion-title>-->\n<!--银行卡管理-->\n<!--</ion-title>-->\n<!--</ion-navbar>-->\n<!--</ion-header>-->\n<ion-header no-border>\n    <ion-toolbar color="secondary">\n        <ion-buttons left icon-only tappable (click)="goBack()">\n            <button ion-button icon-only>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title style="text-align: center">{{\'bankcard.title\' | translate}}</ion-title>\n        <ion-buttons end="" icon-only>\n            <button ion-button icon-only>\n                <ion-icon name=""></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content padding style="background-color: #eef5fd !important">\n    <div *ngIf="flag>0">\n        <ion-list no-lines *ngFor="let tag of indexTags">\n            <ion-item-sliding no-lines style="border-radius: 10px">\n                <!--tag.alias-->\n                <ion-item no-lines no-padding [ngStyle]="{\'background-image\':\'url(assets/img/cardAdministration/\'+tag.alias+\'.png)\',\'min-height\':\' 8.4em\',\'border-radius\': \'10px\'}">\n                    <div item-start>\n                        <h2>{{tag.bankname}}</h2>\n                        <p>{{tag.name}}</p>\n                        <h2>{{tag.account}} </h2>\n                    </div>\n                </ion-item>\n                <ion-item-options side="right">\n                    <button ion-button color="primary" tappable (click)="deleteCard(tag)">\n                        <ion-icon name="ios-trash-outline"></ion-icon>\n                        {{\'bankcard.delete\' | translate}}\n                    </button>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ion-list>\n    </div>\n    <div padding text-center *ngIf="flag==0"><img src="assets/img/alipay/bankcardNull.png"\n                                                  style=" width: 50vw;margin: 10% auto 0;"></div>\n    <div class="cardBtn">\n        <button ion-button outline block icon-left tappable (click)="goBankcardAddPage()">\n            <ion-icon name="add"></ion-icon>\n            {{\'bankcard.addBankcard\' | translate}}\n        </button>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\newpays\src\pages\mine\bankcard\bankcard.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_service_mine_service__["a" /* MineService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_common_commonUtils__["a" /* CommonUtils */],
        __WEBPACK_IMPORTED_MODULE_4_ng2_translate__["c" /* TranslateService */]])
], BankcardPage);

//# sourceMappingURL=bankcard.js.map

/***/ }),

/***/ 906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankcardPageModule", function() { return BankcardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bankcard__ = __webpack_require__(1024);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BankcardPageModule = (function () {
    function BankcardPageModule() {
    }
    return BankcardPageModule;
}());
BankcardPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__bankcard__["a" /* BankcardPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bankcard__["a" /* BankcardPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], BankcardPageModule);

//# sourceMappingURL=bankcard.module.js.map

/***/ })

});
//# sourceMappingURL=21.js.map