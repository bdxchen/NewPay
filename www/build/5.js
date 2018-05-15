webpackJsonp([5],{

/***/ 1039:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_backbutton_service__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage(navCtrl, navParams, elementRef, renderer, event, backButtonService, platform, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.event = event;
        this.backButtonService = backButtonService;
        this.platform = platform;
        this.translate = translate;
        this.tab1Root = "HomePage";
        this.tab2Root = "MinePage";
        this.appSplashHeight = document.documentElement.clientHeight;
        platform.ready().then(function () {
            _this.backButtonService.registerBackButtonAction(_this.tabRef);
        });
    }
    TabsPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter LoginPage');
        localStorage.setItem("flagBack", "2");
    };
    TabsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var tabs = this.queryElement(this.elementRef.nativeElement, '.tabbar');
        this.event.subscribe('hideTabs', function () {
            _this.renderer.setElementStyle(tabs, 'display', 'none');
            var SelectTab = _this.tabRef.getSelected()._elementRef.nativeElement;
            var content = _this.queryElement(SelectTab, '.scroll-content');
            _this.mb = content.style['margin-bottom'];
            _this.renderer.setElementStyle(content, 'margin-bottom', '0');
        });
        this.event.subscribe('showTabs', function () {
            _this.renderer.setElementStyle(tabs, 'display', '');
            var SelectTab = _this.tabRef.getSelected()._elementRef.nativeElement;
            var content = _this.queryElement(SelectTab, '.scroll-content');
            _this.renderer.setElementStyle(content, 'margin-bottom', _this.mb);
        });
    };
    TabsPage.prototype.queryElement = function (elem, q) {
        return elem.querySelector(q);
    };
    return TabsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myTabs'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Tabs */])
], TabsPage.prototype, "tabRef", void 0);
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"E:\newpays\src\pages\tabs\tabs.html"*/'<ion-tabs color="secondary" #myTabs selectedIndex="0">\n  <ion-tab [root]="tab1Root" tappable tabTitle="{{\'tabs.index\' | translate}}"  tabIcon="tab-Myhome"></ion-tab>\n  <!--<ion-tab [root]="tab2Root" tappable tabTitle="{{\'tabs.friend\' | translate}}" tabIcon="tab-Mycontacts"></ion-tab>-->\n  <ion-tab [root]="tab2Root" tappable tabTitle="{{\'tabs.mine\' | translate}}" tabIcon="tab-Myinformation"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"E:\newpays\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_backbutton_service__["a" /* BackbuttonService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */], __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["c" /* TranslateService */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(1039);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TabsModule = (function () {
    function TabsModule() {
    }
    return TabsModule;
}());
TabsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */],
        ]
    })
], TabsModule);

//# sourceMappingURL=tabs.module.js.map

/***/ })

});
//# sourceMappingURL=5.js.map