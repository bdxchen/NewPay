webpackJsonp([26],{

/***/ 1019:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
 * Generated class for the InvitationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var InvitationPage = (function () {
    function InvitationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var item = this.navParams.data;
        console.log(item);
    }
    InvitationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InvitationPage');
    };
    InvitationPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    return InvitationPage;
}());
InvitationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-invitation',template:/*ion-inline-start:"E:\newpays\src\pages\invitation\invitation.html"*/'<ion-header>\n  <ion-toolbar color="secondary">\n    <ion-buttons left icon-only (click)="goBack()">\n      <button ion-button icon-only>\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title style="text-align: center">朋友详情</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class="headerTop">\n    <div class="imgPBG">\n      <img src="assets/img/mine/ziliaoBG.png" alt="" width="100%" height="150px" >\n      <div class="ziliao">\n        <div class="leftZliao">\n          <img src="assets/img/mine/meinv.jpg" style="width: 90px;\n    height: 90px;\n    border-radius: 50%;">\n        </div>\n        <div class="rightZiliao">\n          <div class="spanStyle"><h3>悠悠</h3></div>\n          <div class="spanStyle" tappable (click)="goDocument()">\n            <img src="assets/img/mine/bianjiziliao.png" width="18px" height="18px" style="vertical-align: bottom">\n            修改备注\n          </div>\n          <p style="height: 10px;width: 75%;">电话:136833588698</p>\n          <p style="height: 10px;width: 75%;">地区:北京 朝阳</p>\n          <img src="assets/img/mine/erweima.png" style="position: absolute;\n          right: 2%;\n          bottom: 2%;width: 40px">\n        </div>\n      </div>\n    </div>\n\n    <!---->\n  </div>\n  <ion-item-group style="margin-top: 18%;font-size: 14px !important;">\n    <!--<ion-item>-->\n    <!--<p><ion-icon name="folder"></ion-icon>  我的资料</p>-->\n    <!--<ion-note item-end (click)="goDocument()">修改头像及二维码信息 > </ion-note>-->\n    <!--</ion-item>-->\n    <ion-list>\n      <ion-item>\n        <span item-start>真是姓名</span> <span item-end>元悠悠</span>\n      </ion-item>\n      <ion-item>\n        <span item-start>真是姓名</span> <span item-end>元悠悠</span>\n      </ion-item>\n      <button ion-button full style="margin-top: 3rem;width: 70%;margin-left: 15%;background-color: #0dacfa">邀请</button>\n    </ion-list>\n  </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"E:\newpays\src\pages\invitation\invitation.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
], InvitationPage);

//# sourceMappingURL=invitation.js.map

/***/ }),

/***/ 901:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationPageModule", function() { return InvitationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invitation__ = __webpack_require__(1019);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InvitationPageModule = (function () {
    function InvitationPageModule() {
    }
    return InvitationPageModule;
}());
InvitationPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__invitation__["a" /* InvitationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__invitation__["a" /* InvitationPage */]),
        ],
    })
], InvitationPageModule);

//# sourceMappingURL=invitation.module.js.map

/***/ })

});
//# sourceMappingURL=26.js.map