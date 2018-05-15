webpackJsonp([29],{

/***/ 1018:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrienddetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_friend_service__ = __webpack_require__(413);
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
 * Generated class for the FrienddetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FrienddetailPage = (function () {
    function FrienddetailPage(navCtrl, friend, navParams) {
        this.navCtrl = navCtrl;
        this.friend = friend;
        this.navParams = navParams;
        this.friendinfotemp = { friendid: '1212121212' };
        // this.friend.frienddetail(this.friendinfotemp);
        this.friendinfo = navParams.get('item');
        //alert(this.friendinfo.name);
    }
    FrienddetailPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    FrienddetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FrienddetailPage');
    };
    FrienddetailPage.prototype.toTrans = function (acc) {
        this.navCtrl.push("CurrencyselPage", { account: acc });
        console.log('toTopup CurrencyDetailPage');
    };
    return FrienddetailPage;
}());
FrienddetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-frienddetail',template:/*ion-inline-start:"E:\newpay\newpay\src\pages\friends\frienddetail\frienddetail.html"*/'<ion-header no-border>\n    <ion-toolbar color="secondary">\n        <ion-buttons left icon-only tappable (click)="goBack()">\n            <button ion-button icon-only>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title style="text-align: center">{{\'frienddetail.title\' | translate }}</ion-title>\n        <ion-buttons right icon-only tappable>\n            <button ion-button icon-only>\n                <ion-icon></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <!--<div class="headerTop">-->\n    <!--<img src="assets/img/mine/ziliaoBG.png" alt="" >-->\n    <!--<div class="innerCss">-->\n    <!--<div class="leftCss"><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=48412762,3957934545&fm=27&gp=0.jpg" alt="">-->\n    <!--</div>-->\n    <!--<div class="rightCss">-->\n    <!--<div class="changeRemark">-->\n    <!--<div class="div1">悠悠</div> <div class="div2">修改备注</div>-->\n    <!--</div>-->\n    <!--<p>账户:{{friendinfo.phoneNumber}}</p>-->\n    <!--&lt;!&ndash;<button ion-button outline small icon-left>&ndash;&gt;-->\n    <!--&lt;!&ndash;<ion-icon name="transferQQ"></ion-icon>&ndash;&gt;-->\n    <!--&lt;!&ndash;转账&ndash;&gt;-->\n    <!--&lt;!&ndash;</button>&ndash;&gt;-->\n\n    <!--</div>-->\n    <!--</div>-->\n    <!--</div>-->\n    <ion-list style="margin-top: 10px">\n        <ion-item no-lines>\n            <p item-start>{{\'frienddetail.realName\' | translate }}</p>\n            <p item-end>{{friendinfo.displayName}}</p>\n        </ion-item>\n        <ion-item no-lines style="margin-top:1px">\n            <p item-start>{{\'frienddetail.phoneCode\' | translate }}</p>\n            <p item-end>{{friendinfo.phoneNumber}}</p>\n        </ion-item>\n        <!--<ion-item no-lines style="margin-top:1px" >-->\n        <!--<p item-start>邮箱地址</p>-->\n        <!--<p item-end>youyou@qq.com</p>-->\n        <!--</ion-item>-->\n\n        <!--<div class="bottomCont" *ngIf="friendinfo.flag==1">-->\n        <!--<button  ion-button block>{{\'frienddetail.invitation\' | translate }}</button>-->\n        <!--</div>-->\n        <!--<div class="bottomCont" *ngIf="friendinfo.flag==2">-->\n        <!--<button  ion-button block disabled>{{\'frienddetail.verified\' | translate }}</button>-->\n        <!--</div>-->\n    </ion-list>\n\n\n</ion-content>\n \n'/*ion-inline-end:"E:\newpay\newpay\src\pages\friends\frienddetail\frienddetail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_service_friend_service__["a" /* FriendService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
], FrienddetailPage);

//# sourceMappingURL=frienddetail.js.map

/***/ }),

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrienddetailPageModule", function() { return FrienddetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__frienddetail__ = __webpack_require__(1018);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FrienddetailPageModule = (function () {
    function FrienddetailPageModule() {
    }
    return FrienddetailPageModule;
}());
FrienddetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__frienddetail__["a" /* FrienddetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__frienddetail__["a" /* FrienddetailPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], FrienddetailPageModule);

//# sourceMappingURL=frienddetail.module.js.map

/***/ })

});
//# sourceMappingURL=29.js.map