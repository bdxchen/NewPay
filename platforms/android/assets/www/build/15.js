webpackJsonp([15],{

/***/ 1026:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_auth_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util_service_conf_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_gallery_modal__ = __webpack_require__(404);
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
 * Generated class for the MinePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MinePage = (function () {
    function MinePage(navCtrl, navParams, alertCtrl, auth, confService, translate, modalCtr, commonUtils) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.confService = confService;
        this.translate = translate;
        this.modalCtr = modalCtr;
        this.commonUtils = commonUtils;
        this.userinfo = {};
        this.account = localStorage.getItem("account");
        this.translate.get('forgetPassword').subscribe(function (res) {
            _this.translateObj = res;
        });
    }
    MinePage.prototype.ionViewWillEnter = function () {
        this.userPhone = localStorage.getItem("userid");
        console.log(localStorage.getItem('userid'));
        console.log('ionViewWIllLoad MinePage');
    };
    MinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MinePage');
    };
    MinePage.prototype.myMsg = function () {
        this.navCtrl.push("MymessagePage");
    };
    MinePage.prototype.goAbout = function () {
        this.navCtrl.push("AboutPage");
    };
    MinePage.prototype.goDocument = function (userinfo) {
        this.navCtrl.push("DocumentPage", { userinfo: JSON.stringify(userinfo) });
    };
    MinePage.prototype.goFlowdetail = function () {
        this.navCtrl.push("FlowdetailPage");
    };
    MinePage.prototype.goSecuritycenter = function () {
        this.navCtrl.push("ChangepwdPage", {});
    };
    MinePage.prototype.myWallet = function () {
        this.navCtrl.push('MyWalletPage');
    };
    MinePage.prototype.setting = function () {
        console.log("设置");
        this.navCtrl.push('SettingPage');
    };
    MinePage.prototype.goMyAlipay = function () {
        //this.navCtrl.push("MyAlipayPage")
        this.navCtrl.push("MyAlipayPage");
    };
    MinePage.prototype.goBankCard = function () {
        if (this.userinfo.id_status == '1') {
            this.navCtrl.push("BankcardPage", { titleName: this.translateObj.passwordForBankCard, nextPage: "BankcardPage" });
        }
        else {
            if (this.userinfo.id_status == '0') {
                this.commonUtils.alertCommon('提示', this.translateObj.shenfenRZS0);
            }
            else if (this.userinfo.id_status == '2') {
                this.commonUtils.alertCommon('提示', this.translateObj.shenfenRZS2);
            }
            else {
                this.commonUtils.alertCommon('提示', this.translateObj.shenfenRZS3);
            }
        }
        // this.navCtrl.push("BankcardPage")
    };
    MinePage.prototype.exit = function () {
        this.navCtrl.push("LoginPage");
    };
    MinePage.prototype.openMaxIMG = function () {
        this.modal = this.modalCtr.create(__WEBPACK_IMPORTED_MODULE_5_ionic_gallery_modal__["a" /* GalleryModal */], {
            photos: [{
                    url: this.profile_icon,
                    type: '',
                }],
            initialSlide: 1
        });
        this.modal.present();
    };
    MinePage.prototype.ionViewWillLeave = function () {
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
    MinePage.prototype.goTestPage = function () {
        this.navCtrl.push("OnlyTestPage");
    };
    return MinePage;
}());
MinePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-mine',template:/*ion-inline-start:"E:\newpay\newpay\src\pages\mine\mine.html"*/'<!--<ion-header>-->\n\n  <!--<ion-navbar>-->\n    <!--<ion-buttons begin>-->\n      <!--<button ion-button icon-only (click)="myMsg()">-->\n        <!--<ion-icon name="mail"></ion-icon>-->\n      <!--</button>-->\n    <!--</ion-buttons>-->\n    <!--<ion-buttons end>-->\n      <!--<button ion-button icon-only (click)="setting()">-->\n        <!--<ion-icon name="cog"></ion-icon>-->\n      <!--</button>-->\n    <!--</ion-buttons>-->\n  <!--</ion-navbar>-->\n\n<!--</ion-header>-->\n<ion-header no-border no-lines>\n  <ion-toolbar color="secondary">\n    <!--<ion-buttons start left (click)="myMsg()">-->\n    <!--<button ion-button icon-only color="royal">-->\n      <!--<ion-icon name="mail" md="md-mail"></ion-icon>-->\n    <!--</button>-->\n  <!--</ion-buttons>-->\n    <ion-buttons start left >\n      <button ion-button icon-only color="royal">\n        <ion-icon name="" md=""></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title content style="text-align: center">{{\'mine.title\' | translate}}</ion-title>\n    <ion-buttons right >\n      <button ion-button icon-only color="royal" tappable (click)="setting()">\n        <ion-icon name="ios-settings-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content cache-view="false">\n\n  <ion-item-group style="margin-top: 35px;font-size: 14px !important;">\n    <!--<ion-item>-->\n        <!--<p><ion-icon name="folder"></ion-icon>  我的资料</p>-->\n       <!--<ion-note item-end (click)="goDocument()">修改头像及二维码信息 > </ion-note>-->\n    <!--</ion-item>-->\n    <ion-list no-lines>\n      <!--<button ion-item (click)="goFlowdetail()">-->\n        <!--&lt;!&ndash;<ion-icon name="cart" item-start></ion-icon>&ndash;&gt;-->\n        <!--<img src="assets/img/mine/myZD.png" alt="" item-start width="21px" height="21px">-->\n        <!--{{\'mine.myBill\' | translate}}-->\n        <!--<ion-note item-end>{{\'mine.myBillMemo\' | translate}}</ion-note>-->\n      <!--</button>-->\n\n      <ion-item>\n        <p><ion-icon name="folder"></ion-icon>  我的账号</p>\n        <ion-note item-end (click)="goDocument()">{{account}} </ion-note>\n\n      </ion-item>\n\n\n      <button style="margin-top: 1px;border-bottom: 1px solid #f1f1f1" ion-item tappable (click)="goMyAlipay()">\n        <!--<ion-icon name="medical" item-start></ion-icon>-->\n        <!--<img src="assets/img/mine/myZFB.png" alt="" item-start width="21px" height="21px">-->\n        我的余额\n        <ion-note class="my_details" item-end><img class="f-right" src="assets/img/mine/right.png" alt="" width="16px"></ion-note>\n\n      </button>\n\n      <!--<button style="margin-bottom: 15px;" ion-item tappable (click)="goBankCard()">-->\n        <!--&lt;!&ndash;<ion-icon name="cafe" item-start></ion-icon>&ndash;&gt;-->\n        <!--<img src="assets/img/mine/myYHK.png" alt="" item-start width="21px" height="21px">-->\n        <!--{{\'mine.myBankCard\' | translate}}-->\n        <!--<ion-note class="my_details" item-end>{{\'mine.myBankCardMemo\' | translate}} <img class="f-right" src="assets/img/mine/right.png" alt="" width="16px"></ion-note>-->\n      <!--</button>-->\n\n      <!--<button style="border-bottom: 1px solid #f1f1f1" ion-item tappable (click)="goSecuritycenter()">-->\n        <!--&lt;!&ndash;<ion-icon name="beer" item-start></ion-icon>&ndash;&gt;-->\n        <!--<img src="assets/img/mine/myAQZX.png" alt="" item-start width="21px" height="21px">-->\n        <!--{{\'mine.securityCenter\' | translate}}-->\n        <!--<ion-note class="my_details" item-end>{{\'mine.securityCenterMemo\' | translate}} <img class="f-right" src="assets/img/mine/right.png" alt="" width="16px"></ion-note>-->\n      <!--</button>-->\n\n      <button style="border-bottom: 1px solid #f1f1f1" ion-item tappable (click)="myWallet()">\n        <!--<ion-icon name="paw" item-start></ion-icon>-->\n        <img src="assets/img/mine/myMYBF.png" alt="" item-start width="21px" height="21px">\n        {{\'mine.myWallet\' | translate}}\n        <ion-note class="my_details" item-end>{{\'mine.myWalletMemo\' | translate}} <img class="f-right" src="assets/img/mine/right.png" alt="" width="16px"></ion-note>\n      </button>\n\n      <button style="margin-top: 1px;border-bottom: 1px solid #f1f1f1" ion-item tappable (click)="goTestPage()">\n        进入测试页面\n        <ion-note class="my_details" item-end><img class="f-right" src="assets/img/mine/right.png" alt="" width="16px"></ion-note>\n      </button>\n\n      <!--<button ion-item tappable (click)="goAbout()">-->\n        <!--<img src="assets/img/mine/myGYWM.png" alt="" item-start width="21px" height="21px">-->\n        <!--{{\'mine.aboutUS\' | translate}}-->\n        <!--<ion-note class="my_details" item-end>&lt;!&ndash;{{\'mine.aboutUSMemo\' | translate}}&ndash;&gt; <img class="f-right" src="assets/img/mine/right.png" alt="" width="16px"></ion-note>-->\n      <!--</button>-->\n\n    </ion-list>\n  </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"E:\newpay\newpay\src\pages\mine\mine.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_util_service_conf_service__["b" /* ConfService */],
        __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_common_commonUtils__["a" /* CommonUtils */]])
], MinePage);

//# sourceMappingURL=mine.js.map

/***/ }),

/***/ 908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MineModule", function() { return MineModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mine__ = __webpack_require__(1026);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MineModule = (function () {
    function MineModule() {
    }
    return MineModule;
}());
MineModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mine__["a" /* MinePage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__mine__["a" /* MinePage */],
        ]
    })
], MineModule);

//# sourceMappingURL=mine.module.js.map

/***/ })

});
//# sourceMappingURL=15.js.map