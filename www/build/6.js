webpackJsonp([6],{

/***/ 1038:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingLanguagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_translate__ = __webpack_require__(212);
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
 * Generated class for the SettingLanguagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingLanguagePage = (function () {
    function SettingLanguagePage(navCtrl, navParams, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.relationship = 'zh';
        console.log(this.relationship);
        if (localStorage.getItem('language') != null) {
            this.relationship = localStorage.getItem('language');
        }
        // this.langs = [{ language: "English", type: "en" }, { language: "简体中文", type: "zh" }, { language: "繁体中文", type: "tw" }]
        this.langs = [{ language: "简体中文", type: "zh" }];
    }
    SettingLanguagePage.prototype.selectedLan = function () {
        this.relationship;
        console.log(this.relationship);
        this.translate.use(this.relationship);
        localStorage.setItem('language', this.relationship);
    };
    SettingLanguagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingLanguagePage');
    };
    SettingLanguagePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    return SettingLanguagePage;
}());
SettingLanguagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-setting-language',template:/*ion-inline-start:"E:\newpays\src\pages\setting-language\setting-language.html"*/'<!--\n  Generated template for the SettingLanguagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>-->\n\n  <!--<ion-navbar>-->\n    <!--<ion-title>settingLanguage</ion-title>-->\n  <!--</ion-navbar>-->\n\n<!--</ion-header>-->\n<ion-header no-border>\n  <ion-toolbar color="secondary">\n    <ion-buttons left icon-only tappable (click)="goBack()">\n      <button ion-button icon-only>\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title style="text-align: center">{{\'settingLanguage.title\' | translate}}</ion-title>\n    <ion-buttons end icon-only >\n      <button ion-button icon-only>\n        <ion-icon name=""></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list radio-group [(ngModel)]="relationship" tappable (ionChange)="selectedLan()">\n    <ion-item *ngFor="let lang of langs">\n      <ion-label>{{lang.language}}</ion-label>\n      <ion-radio checked="true" value="{{lang.type}}"></ion-radio>\n    </ion-item>\n\n    <!--<ion-item>\n      <ion-label>English</ion-label>\n      <ion-radio checked="false" value="en"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>繁体中文</ion-label>\n      <ion-radio checked="false" value="tw"></ion-radio>\n    </ion-item>-->\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"E:\newpays\src\pages\setting-language\setting-language.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ng2_translate__["c" /* TranslateService */]])
], SettingLanguagePage);

//# sourceMappingURL=setting-language.js.map

/***/ }),

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingLanguagePageModule", function() { return SettingLanguagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_language__ = __webpack_require__(1038);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettingLanguagePageModule = (function () {
    function SettingLanguagePageModule() {
    }
    return SettingLanguagePageModule;
}());
SettingLanguagePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__setting_language__["a" /* SettingLanguagePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setting_language__["a" /* SettingLanguagePage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], SettingLanguagePageModule);

//# sourceMappingURL=setting-language.module.js.map

/***/ })

});
//# sourceMappingURL=6.js.map