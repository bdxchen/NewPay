webpackJsonp([22],{

/***/ 1023:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankcardAddPage; });
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






var BankcardAddPage = (function () {
    function BankcardAddPage(navCtrl, mineser, alertCtrl, translate, commonUtils, ientityAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.mineser = mineser;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.commonUtils = commonUtils;
        this.ientityAuth = ientityAuth;
        this.createSuccess = false;
        this.addBankCard = { account: '', name: '', bankname: '', branchName: '', userId: '11111' };
        this.translate.get('bankcard_add').subscribe(function (res) {
            _this.translateObj = res;
        });
    }
    BankcardAddPage.prototype.changCardNO = function (account) {
        var _this = this;
        console.log("监听");
        console.log("addBankCard", account);
        if (account.length == 6) {
            this.mineser.bankbinXXCard(account).then(function (success) {
                console.log(success);
                if (success.ret_code == '1') {
                    switch (success.data.alias) {
                        case 'BOCOM': {
                            _this.addBankCard.bankname = "交通银行";
                            break;
                        }
                        case 'ICBC': {
                            _this.addBankCard.bankname = "工商银行";
                            break;
                        }
                        case 'ABC': {
                            _this.addBankCard.bankname = "农业银行";
                            break;
                        }
                        case 'CCB': {
                            _this.addBankCard.bankname = "建设银行";
                            break;
                        }
                        case 'BOC': {
                            _this.addBankCard.bankname = "中国银行";
                            break;
                        }
                    }
                }
                else {
                    _this.addBankCard.bankname = "";
                    //弹出信息 ，12.15 去掉
                    // this.commonUtils.alertCommon('',success.ret_msg);
                }
            }).catch(function (err) {
                // this.commonUtils.alertCommon('','网络连接失败,请重试');
            });
        }
    };
    BankcardAddPage.prototype.confirm = function () {
        var _this = this;
        var address = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/; //中文、英文、数字包括下划线
        var address2 = /^[A-Za-z]+$/; //包含字母
        if (this.addBankCard.account == "") {
            this.showPopup("", this.translateObj.warCardNo);
            return;
        }
        if (this.addBankCard.account.length < 15) {
            this.showPopup("", this.translateObj.validate);
            return;
        }
        if (this.addBankCard.account != this.account1) {
            this.showPopup("", this.translateObj.warCardNotSame);
            return;
        }
        // if(this.addBankCard.name == ""){
        //     this.showPopup("", this.translateObj.warOwnerName);
        //     return;
        // }
        if (this.addBankCard.bankname == "") {
            this.showPopup("", this.translateObj.warBankName);
            return;
        }
        if (this.addBankCard.branchName == "") {
            this.showPopup("", this.translateObj.warBankAddress);
            return;
        }
        // if(!address.test(this.addBankCard.branchName) && !address2.test(this.addBankCard.branchName)){
        this.addBankCard.branchName = this.addBankCard.branchName.replace(/\s+/g, "");
        if (this.addBankCard.branchName == "") {
            this.showPopup("", this.translateObj.warBankAddress2);
            return;
        }
        this.mineser.addBankCard(this.addBankCard).then(function (success) {
            if (success != null) {
                if (success.ret_code == 1) {
                    _this.commonUtils.showToast(_this.translateObj.bindSuccess);
                    _this.navCtrl.push("BankcardPage");
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
    BankcardAddPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    BankcardAddPage.prototype.reset = function () {
        this.addBankCard = {
            account: '', name: '', bankname: '', branchName: '', userId: '11111'
        };
    };
    BankcardAddPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.ientityAuth.userIdentity().then(function (res) {
            console.log(res);
            if (res.ret_code == '1') {
                _this.addBankCard.name = res.data.idName;
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    BankcardAddPage.prototype.showPopup = function (title, text) {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: this.translateObj.confirm,
                    handler: function (data) {
                        if (_this.createSuccess) {
                            _this.navCtrl.popToRoot();
                        }
                    }
                }
            ]
        });
        this.alert.present();
    };
    BankcardAddPage.prototype.XZlx = function (acc) {
        if (acc) {
            this.account1 = acc.replace(/[^\d]/g, '');
            if (acc.length > 19) {
                this.account1 = acc.substring(0, 19);
            }
        }
    };
    BankcardAddPage.prototype.XZlxBC = function (acc) {
        if (acc) {
            this.addBankCard.account = acc.replace(/[^\d]/g, '');
            if (acc.length > 19) {
                this.addBankCard.account = acc.substring(0, 19);
            }
        }
    };
    BankcardAddPage.prototype.bankNameValid = function (bankname) {
        console.log(bankname.length);
        if (bankname.length > 25) {
            this.addBankCard.bankname = bankname.substring(0, 25);
        }
    };
    BankcardAddPage.prototype.BranchNameValid = function (branchName) {
        console.log(branchName.length);
        if (branchName.length > 50) {
            this.addBankCard.branchName = branchName.substring(0, 50);
        }
    };
    BankcardAddPage.prototype.ionViewWillLeave = function () {
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
    return BankcardAddPage;
}());
BankcardAddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'bankcard-add',template:/*ion-inline-start:"E:\newpays\src\pages\mine\bankcard-add\bankcard-add.html"*/'<ion-header no-border>\n    <ion-toolbar color="secondary">\n        <ion-buttons left icon-only tappable (click)="goBack()">\n            <button ion-button icon-only>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title style="text-align: center">{{\'bankcard_add.title\' | translate}}</ion-title>\n        <ion-buttons right icon-only>\n            <button ion-button icon-only>\n                <ion-icon name=""></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content style="background-color: #eef5fd !important">\n    <ion-list style="margin-top: 10px;">\n\n        <ion-item no-lines style="margin-top: 1px">\n            <ion-label>{{\'bankcard_add.name\' | translate}}</ion-label>\n            <ion-input placeholder="{{\'bankcard_add.inputName\' | translate}}" disabled\n                       [(ngModel)]="addBankCard.name"></ion-input>\n        </ion-item>\n        <ion-item no-lines style="margin-top: 1px">\n            <ion-label>{{\'bankcard_add.cardNo\' | translate}}</ion-label>\n            <ion-input placeholder="{{\'bankcard_add.inputCardNo\' | translate}}" type="text"\n                       (keyup)="XZlxBC(addBankCard.account)" onpaste="return false" ng-pattern="/[^a-zA-Z]/"\n                       [(ngModel)]="addBankCard.account" tappable\n                       (ngModelChange)=" changCardNO(addBankCard.account)"></ion-input>\n        </ion-item>\n        <ion-item no-lines style="margin-top: 1px">\n            <ion-label>{{\'bankcard_add.confirmCardNo\' | translate}}</ion-label>\n            <ion-input placeholder="{{\'bankcard_add.inputConfirmCard\' | translate}}" type="text"\n                       (keyup)="XZlx(account1)" onpaste="return false" ng-pattern="/[^a-zA-Z]/"\n                       [(ngModel)]="account1"></ion-input>\n        </ion-item>\n        <ion-item no-lines style="margin-top: 1px">\n            <p item-start>{{\'bankcard_add.bankName\' | translate}}</p>\n            <!--<ion-input placeholder="{{\'bankcard_add.inputBankName\' | translate}}" disabled (keyup)="bankNameValid(addBankCard.bankname)" [(ngModel)]="addBankCard.bankname"></ion-input>-->\n            <p item-end> {{addBankCard.bankname}}</p>\n        </ion-item>\n        <ion-item no-lines style="margin-top: 1px">\n            <ion-label>{{\'bankcard_add.bankAddress\' | translate}}</ion-label>\n            <ion-input placeholder="{{\'bankcard_add.inputBankAddress\' | translate}}"\n                       (keyup)="BranchNameValid(addBankCard.branchName)"\n                       [(ngModel)]="addBankCard.branchName"></ion-input>\n        </ion-item>\n    </ion-list>\n\n    <p class="appPele heihui">\n        {{\'bankcard_add.memo\' | translate}}\n    </p>\n    <button ion-button full tappable (click)="confirm()" style="width: 92%; margin: 50px auto; border-right-width: 1px; border-left-width: 1px;\nbackground-color: #2faff9; font-size: 1.7rem;">{{\'bankcard_add.confirm\' | translate}}\n    </button>\n\n    <!--<button ion-button full outline  (click)="reset()" style="width: 70%;margin-left: 15%;-->\n    <!--border-radius: 8px;-->\n    <!--border-right-width: 1px;-->\n    <!--border-left-width: 1px;-->\n    <!--border-color: red;color: red;" >{{\'bankcard_add.reset\' | translate}}</button>-->\n\n</ion-content>\n'/*ion-inline-end:"E:\newpays\src\pages\mine\bankcard-add\bankcard-add.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_service_mine_service__["a" /* MineService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_common_commonUtils__["a" /* CommonUtils */], __WEBPACK_IMPORTED_MODULE_5__providers_identity_ientity_auth__["a" /* IentityAuth */]])
], BankcardAddPage);

//# sourceMappingURL=bankcard-add.js.map

/***/ }),

/***/ 905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankcardAddPageModule", function() { return BankcardAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bankcard_add__ = __webpack_require__(1023);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BankcardAddPageModule = (function () {
    function BankcardAddPageModule() {
    }
    return BankcardAddPageModule;
}());
BankcardAddPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__bankcard_add__["a" /* BankcardAddPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bankcard_add__["a" /* BankcardAddPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], BankcardAddPageModule);

//# sourceMappingURL=bankcard-add.module.js.map

/***/ })

});
//# sourceMappingURL=22.js.map