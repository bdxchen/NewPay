webpackJsonp([7],{

/***/ 1037:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_commonUtils__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_buffer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_buffer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_buffer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_translate__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_updateApp_NativeService__ = __webpack_require__(217);
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
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScanPage = (function () {
    function ScanPage(navCtrl, commonUtils, translate, navParams, nativeService, qrScanner, viewCtrl, event, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.commonUtils = commonUtils;
        this.translate = translate;
        this.navParams = navParams;
        this.nativeService = nativeService;
        this.qrScanner = qrScanner;
        this.viewCtrl = viewCtrl;
        this.event = event;
        this.alertCtrl = alertCtrl;
        this.light = false;
        this.frontCamera = false;
        if (this.nativeService.isIos()) {
            this.animate = false;
        }
        else {
            this.animate = true;
        }
        translate.get('home').subscribe(function (res) {
            _this.translateObj = res;
        });
    }
    ScanPage.prototype.ionViewDidEnter = function () {
        //页面可见时才执行
        this.showCamera();
        this.ngOnInitDid();
    };
    ScanPage.prototype.ngOnInitDid = function () {
        var _this = this;
        // let text = "eyJBY2NvdW50IjoibnAxODgxMTQ0NDc1NiIsImN1cnJlbmN5IjoiYml0Q05ZIiwibW9uZXkiOiIxMCIsInJlYXNvbiI6IueMqiJ9"
        //  let text='eyJBY2NvdW50Ijoid3AzMzQ0IiwiY3VycmVuY3kiOiJZVFNVU0QiLCJtb25leSI6MywicmVhc29uIjoiIn0='
        // console.log(new Buffer(text,'base64').toString());//解码
        // let QQ =  new Buffer(text,'base64').toString();
        // console.log(this.isContains(QQ,'Account'))
        // if(this.isContains(QQ,'Account') && this.isContains(QQ,'currency') && this.isContains(QQ,'money')){
        //     // alert("正确")
        //     // this.qrScanner.hide(); // hide camera preview
        //     // scanSub.unsubscribe(); // stop scanning
        //     this.navCtrl.push('accountPayPage',{barcodeData:QQ});
        //
        // }else {
        //      this.commonUtils.alertCommon( this.translateObj.warning, this.translateObj.scanErr);
        //      this.navCtrl.pop();
        // }
        this.qrScanner.prepare()
            .then(function (status) {
            console.log(status);
            if (status.authorized) {
                // camera permission was granted
                window.document.querySelector('body').classList.add('transparent-body');
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    // "eyJBY2NvdW50IjoibnAxODgxMTQ0NDc1NiIsImN1cnJlbmN5IjoiYml0Q05ZIiwibW9uZXkiOiIxMCIsInJlYXNvbiI6IueMqiJ9"
                    //  let text='eyJBY2NvdW50IjoibW8xMTAyMDIiLCJjdXJyZW5jeSI6IllUUyIsIm1vbmV5IjoxMCwicmVhc29uIjoiIn0'
                    console.log(new __WEBPACK_IMPORTED_MODULE_4_buffer__["Buffer"](text, 'base64').toString()); //解码
                    var QQ = new __WEBPACK_IMPORTED_MODULE_4_buffer__["Buffer"](text, 'base64').toString();
                    console.log(_this.isContains(QQ, 'Account'));
                    if (_this.isContains(QQ, 'Account') && _this.isContains(QQ, 'currency') && _this.isContains(QQ, 'money')) {
                        // alert("正确")
                        _this.qrScanner.hide(); // hide camera preview
                        scanSub_1.unsubscribe(); // stop scanning
                        if (JSON.parse(QQ).Account === localStorage.getItem("account")) {
                            _this.showPopup(_this.translateObj.warning, _this.translateObj.scanSelf);
                            return;
                        }
                        else {
                            _this.navCtrl.push('accountPayPage', { barcodeData: QQ });
                        }
                    }
                    else {
                        _this.showPopup(_this.translateObj.warning, _this.translateObj.scanErr);
                    }
                });
                // show camera preview
                _this.qrScanner.show();
                // wait for user to scan something, then the observable callback will be called
            }
            else if (status.denied) {
                // this.qrScanner.openSettings();
                _this.commonUtils.alertCommon(_this.translateObj.warning, '调用扫码权限失败');
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
                // this.commonUtils.alertCommon( this.translateObj.warning, '调用扫码权限失败');
                // this.navCtrl.pop();
                _this.qrScanner.openSettings();
            }
        })
            .catch(function (e) {
            console.log('Error is', e);
            _this.showPopup(_this.translateObj.warning, _this.translateObj.scanfail);
        });
    };
    ScanPage.prototype.showPopup = function (title, text) {
        var _this = this;
        this.alert = this.alertCtrl.create({
            cssClass: 'projectList',
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: this.translateObj.confrim,
                    handler: function (data) {
                        _this.navCtrl.pop();
                        // this.navCtrl.push('accountPayPage',{barcodeData:'{"Account":"npqp18811444000","currency":"","money":"","reason":""}'});
                    }
                }
            ]
        });
        this.alert.present();
    };
    ScanPage.prototype.isContains = function (str, substr) {
        return str.indexOf(substr) >= 0;
    };
    ScanPage.prototype.dismiss = function () {
        console.log("关闭二维码扫码");
        // this.viewCtrl.dismiss();
        this.navCtrl.pop({ animate: this.animate });
    };
    ScanPage.prototype.toggleLight = function () {
        console.log(this.light);
        this.light = !this.light;
        if (this.light) {
            this.qrScanner.enableLight();
        }
        else {
            this.qrScanner.disableLight();
        }
    };
    ScanPage.prototype.toggleCamera = function () {
        console.log(this.frontCamera);
        this.frontCamera = !this.frontCamera;
        if (this.frontCamera) {
            this.qrScanner.useFrontCamera();
        }
        else {
            this.qrScanner.useBackCamera();
        }
    };
    ScanPage.prototype.showCamera = function () {
        window.document.querySelector('ion-app').classList.add('cameraView');
    };
    ScanPage.prototype.hideCamera = function () {
        this.qrScanner.hide(); //需要关闭扫描，否则相机一直开着
        // (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
    };
    ScanPage.prototype.ionViewWillEnter = function () {
        var elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map(function (key) {
                elements[key].style.display = 'none';
            });
        }
    };
    ScanPage.prototype.ionViewWillLeave = function () {
        this.hideCamera();
        var elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map(function (key) {
                elements[key].style.display = 'flex';
            });
        }
    };
    return ScanPage;
}());
ScanPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-scan',template:/*ion-inline-start:"E:\newpays\src\pages\scan\scan.html"*/'<ion-header no-border cache-view="false" mode="md">\n    <ion-toolbar color="secondary">\n        <ion-buttons left icon-only tappable (click)="dismiss()">\n            <button ion-button icon-only>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title style="text-align: center">扫描中..</ion-title>\n        <ion-buttons end icon-only >\n            <button ion-button icon-only>\n                <ion-icon name=""></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content no-scroll class="qrscanner" mode="md">\n  <div class="qrscanner-area" >\n  </div> \n   <div class="through-line"></div>\n  <div class="button-bottom">\n      <button tappable (click)="toggleLight()" ion-fab class="icon-camera" margin-right>\n          <ion-icon name="flash"></ion-icon>                  \n      </button>\n      <!--<button tappable (click)="toggleCamera()" ion-fab class="icon-camera">-->\n          <!--<ion-icon name="reverse-camera"></ion-icon>                  -->\n      <!--</button>-->\n  </div>    \n</ion-content>\n'/*ion-inline-end:"E:\newpays\src\pages\scan\scan.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_common_commonUtils__["a" /* CommonUtils */],
        __WEBPACK_IMPORTED_MODULE_5_ng2_translate__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__providers_updateApp_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], ScanPage);

//# sourceMappingURL=scan.js.map

/***/ }),

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanPageModule", function() { return ScanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scan__ = __webpack_require__(1037);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ScanPageModule = (function () {
    function ScanPageModule() {
    }
    return ScanPageModule;
}());
ScanPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__scan__["a" /* ScanPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__scan__["a" /* ScanPage */]),
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__scan__["a" /* ScanPage */]]
    })
], ScanPageModule);

//# sourceMappingURL=scan.module.js.map

/***/ })

});
//# sourceMappingURL=7.js.map