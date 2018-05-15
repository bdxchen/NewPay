webpackJsonp([25],{

/***/ 1017:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util_service_conf_service__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(navCtrl, confService) {
        this.navCtrl = navCtrl;
        this.confService = confService;
        this.app_version = this.confService.app_version;
    }
    AboutPage.prototype.goBack = function () {
        this.navCtrl.parent.select(2);
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-about',template:/*ion-inline-start:"E:\newpays\src\pages\mine\about\about.html"*/'<ion-header no-border cache-view="false">\n  <ion-toolbar color="secondary">\n    <ion-buttons left icon-only tappable (click)="goBack()">\n      <button ion-button icon-only>\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title style="text-align: center">{{\'about.title\' | translate}}</ion-title>\n    <ion-buttons end icon-only >\n      <button ion-button icon-only>\n        <ion-icon name=""></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content  isScrolling=false>\n  <div class="mineBgCss">\n    <div style="text-align: center">\n      <img class="bgLogo" src="assets/img/logo/logo.png">\n        <p style="color: #FFFFFF">NewPay {{app_version}}</p>\n      <div class="cardCssM">\n\n          <p style="padding-top: 20px; font-size: 1.6rem;">{{\'about.concern\' | translate}}</p>\n        <ion-img  style="width: 70%;height: 70vw" src="assets/img/default-receive-qr.png"></ion-img>\n      </div>\n      <!--<ion-card>-->\n        <!--<ion-item no-lines class="text-center">-->\n          <!--<p style="color: white">扫码关注</p>-->\n        <!--</ion-item>-->\n        <!--<ion-img  style="width: 200px;height: 200px" src="assets/img/default-receive-qr.png"></ion-img>-->\n        <!--&lt;!&ndash;<div id="qrcodeCanvas"></div>&ndash;&gt;-->\n      <!--</ion-card>-->\n\n\n    </div>\n    <div style="margin-left: 5%;color: white">\n      <p>{{\'about.customerService\' | translate}}</p>\n      <p>{{\'about.hotline\' | translate}}</p>\n\n    </div>\n    <div class="bottomPositionCss">{{\'about.memo\' | translate}}<br>{{\'about.memo2\' | translate}}</div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\newpays\src\pages\mine\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_util_service_conf_service__["b" /* ConfService */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(1017);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutPageModule = (function () {
    function AboutPageModule() {
    }
    return AboutPageModule;
}());
AboutPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], AboutPageModule);

//# sourceMappingURL=about.module.js.map

/***/ })

});
//# sourceMappingURL=25.js.map