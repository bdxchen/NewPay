webpackJsonp([10],{

/***/ 1035:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_auth_service__ = __webpack_require__(213);
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
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SettingPage = (function () {
    function SettingPage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
    }
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    SettingPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SettingPage.prototype.quit = function () {
        var userId = localStorage.getItem('userid');
        localStorage.removeItem("brainKey");
        // localStorage.setItem("password",'')
        this.navCtrl.push('LoginPage');
        // let activeNav: NavController = this.appCtrl.getActiveNav();
        // console.log(activeNav)
        // activeNav.push("LoginPage");
        // this.auth.logout(userId).then((res)=>{
        //  if(res.ret_code=='1'){
        //      this.navCtrl.push('LoginPage');
        //  }
        //
        // })
    };
    SettingPage.prototype.itemSelected = function (itemIndex) {
        console.log(itemIndex);
        if (itemIndex == 2) {
            this.navCtrl.push('SettingLanguagePage');
        }
    };
    return SettingPage;
}());
SettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-setting',template:/*ion-inline-start:"E:\newpay\newpay\src\pages\mine\setting\setting.html"*/'<!--\n  Generated template for the SettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n  <ion-toolbar color="secondary">\n    <ion-buttons left icon-only tappable (click)="goBack()">\n      <button ion-button icon-only>\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title style="text-align: center">{{\'setting.title\' | translate}}</ion-title>\n      <ion-buttons right icon-only >\n          <button ion-button icon-only>\n              <ion-icon name=""></ion-icon>\n          </button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content style="background-color: #eef5fd !important">\n  <ion-list no-lines style="margin-top:10px">\n      <!--<button ion-item tappable (click)="itemSelected(1)">\n          {{\'setting.newMsg\' | translate}}\n          <img class="f-right" src="../../../assets/img/mine/right.png" alt="" width="16px">\n      </button>-->\n      <button style="margin-top: 1px" ion-item tappable (click)="itemSelected(2)">\n          {{\'setting.multilingual\' | translate}}\n          <!--<img class="f-right" src="../../../assets/img/mine/right.png" alt="" width="16px">-->\n      </button>\n\n      <!--<button style="margin-top: 10px;" ion-item tappable (click)="itemSelected(3)">\n          {{\'setting.clearCache\' | translate}}\n      </button>-->\n  </ion-list>\n\n  <button class="login_out" tappable (click)="quit()">{{\'setting.quit\' | translate}}</button>\n\n</ion-content>\n'/*ion-inline-end:"E:\newpay\newpay\src\pages\mine\setting\setting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_auth_service__["a" /* AuthService */]])
], SettingPage);

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting__ = __webpack_require__(1035);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettingPageModule = (function () {
    function SettingPageModule() {
    }
    return SettingPageModule;
}());
SettingPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], SettingPageModule);

//# sourceMappingURL=setting.module.js.map

/***/ })

});
//# sourceMappingURL=10.js.map