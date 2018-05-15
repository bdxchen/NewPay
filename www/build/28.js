webpackJsonp([28],{

/***/ 1018:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_auth_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_home_searchAcc_service__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_commonUtils__ = __webpack_require__(130);
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


// import { BarcodeScanner ,BarcodeScannerOptions} from '@ionic-native/barcode-scanner';





var HomePage = (function () {
    function HomePage(navCtrl, 
        // private barcodeScanner: BarcodeScanner,
        app, alertCtrl, toastCtrl, commonUtils, auth, ref, searchAcc, loader, translate, nativeService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.commonUtils = commonUtils;
        this.auth = auth;
        this.ref = ref;
        this.searchAcc = searchAcc;
        this.loader = loader;
        this.translate = translate;
        this.nativeService = nativeService;
        this.data = [];
        this.showToolbarImg = false;
        this.showToolbar = true;
        this.headerImgSize = '100%';
        this.headerImgUrl = '';
        this.transition = false;
        this.assistantsList = [];
        this.articles = new Array(10).fill('');
        console.log(this.content);
        // this.nativeService.detectionUpgrade();
        // console.log(this.translate.getBrowserLang());
        // //获取语言风格，相当于更详细的语言类型，比如zh-CN、zh-TW、en-US
        // console.log(this.translate.getBrowserCultureLang());
        translate.get('home').subscribe(function (res) {
            _this.translateObj = res;
        });
    }
    HomePage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '请先进行实名认证',
            buttons: [
                {
                    text: '取消',
                    handler: function () {
                        console.log('取消 clicked');
                    }
                },
                {
                    text: '去认证',
                    handler: function () {
                        console.log('去认证 clicked');
                        _this.navCtrl.push('IdentityAuthenticationPage');
                    }
                }
            ]
        });
        confirm.present();
    };
    HomePage.prototype.homeSeeMore = function (assistants) {
        this.navCtrl.push('BillDetailPage', { assistants: assistants, flag: 'home' });
    };
    HomePage.prototype.viewDetailPage = function (page) {
        if (this.nativeService.isIos()) {
            this.animate = false;
        }
        else {
            this.animate = true;
        }
        if (page == "payPage") {
            this.navCtrl.push('ScanPage', {}, { animate: this.animate });
        }
        else {
            this.navCtrl.push(page);
        }
    };
    HomePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.page = 1;
        this.orderSearch(this.page, refresher);
    };
    HomePage.prototype.isContains = function (str, substr) {
        return str.indexOf(substr) >= 0;
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        this.page++;
        var pageNum = { "num": this.page };
        console.log(this.page);
        this.auth.orderSMG(pageNum).then(function (success) {
            console.log(success);
            // if(success.assistantsList.length==0){
            //     this.showFlag=true
            // }
            infiniteScroll.complete();
            _this.assistantsList = _this.assistantsList.concat(success.assistantsList);
            if (infiniteScroll != null) {
                infiniteScroll.complete();
            }
            if (_this.assistantsList.length < 10) {
                infiniteScroll.enable(false);
                _this.showFlag = true;
            }
        }, function (error) {
            infiniteScroll.complete();
            // this.commonUtils.alertCommon('', this.translateObj.orderQueryFail)
        });
        // infiniteScroll.complete();
    };
    HomePage.prototype.ionViewDidLoad = function () {
        // this.page =1;
        // this.orderSearch(this.page,'');
        // this.suppCompar();
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.page = 1;
        this.orderSearch(this.page, '');
        this.suppCompar();
    };
    HomePage.prototype.suppCompar = function () {
        debugger;
    };
    HomePage.prototype.orderSearch = function (page, refresher) {
        var pageNum = { "num": page };
        console.log('ionViewDidLoad TransparentBarPage');
        this.headerImgUrl = '../assets/img/home/homeBg.png';
        // this.auth.orderSMG(pageNum).then(success => {
        //     if (refresher != '') {
        //         console.log(success)
        //         refresher.complete();
        //     }
        //     this.assistantsList = success.assistantsList;
        // }, error => {
        //     if (refresher != '') {
        //         refresher.complete();
        //     }
        //     // this.commonUtils.alertCommon('', this.translateObj.orderQueryFail)
        // })
    };
    HomePage.prototype.onScroll = function ($event) {
        // console.log($event.scrollTop)
        var scrollTop = $event.scrollTop;
        this.showToolbar = scrollTop < 130;
        this.showToolbarImg = scrollTop > 130;
        if (scrollTop < 0) {
            this.transition = true;
            this.headerImgSize = Math.abs(scrollTop) / 2 + 100 + "%";
        }
        else {
            this.transition = false;
            this.headerImgSize = '100%';
        }
        this.ref.detectChanges();
    };
    HomePage.prototype.ionViewWillLeave = function () {
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
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
], HomePage.prototype, "content", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"E:\newpays\src\pages\home\home.html"*/'<!--<ion-header>-->\n<!--<ion-navbar >-->\n<!--<ion-title style="text-align: center">NewPay</ion-title>-->\n<!--</ion-navbar>-->\n<!--</ion-header>-->\n<ion-header no-border>\n    <ion-navbar [class.show-background]="showToolbar">\n        <ion-title style="text-align: center">云投汇\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<!--[style.background-size]="headerImgSize"-->\n<!--[style.background-image]="\'url(\'+ headerImgUrl+ \')\'" -->\n<!--<ion-content  class="content"-->\n<!--(ionScroll)="onScroll($event)"-->\n<!--[class.transition]="transition"-->\n<!--cache-view="false">-->\n<ion-content class="no-scroll">\n\n    <div class="headerTopHome">\n        <ion-row padding>\n            <ion-col class="col-center" tappable (click)="viewDetailPage(\'payPage\')">\n                <ion-img class="myproperty" src="assets/img/home/syZhifu.png"></ion-img>\n                <h4>支付</h4>\n                <!--<p style="color: white">支付</p>-->\n            </ion-col>\n            <ion-col class="col-center" tappable (click)="viewDetailPage(\'TransferPage\')">\n                <ion-img class="myproperty" src="assets/img/home/syyue.png"></ion-img>\n                <!--<p style="color: white">余额</p>-->\n                <h4>转账</h4>\n            </ion-col>\n            <ion-col class="col-center" tappable (click)="viewDetailPage(\'receivePage\')">\n                <ion-img class="myproperty" src="assets/img/home/sySK.png"></ion-img>\n                <!--<p style="color: white">收款</p>-->\n                <h4>{{\'home.receive\' | translate }}</h4>\n            </ion-col>\n        </ion-row>\n    </div>\n    <!--<ion-card ion-item class=\'card-third-aplication\' no-border>-->\n    <!--<img  item-left src="assets/img/home/laba.png" alt="" style="width: 20px;margin-top: 5px;margin-left: 15.5px">-->\n    <!--<p no-margin item-left style="margin: 8px 1px 8px 0;"> 您有2条付款消息,</p>-->\n    <!--<button style="margin: 8px 1px 8px 0px!important;" ion-button item-left clear style="height: 20px">点击查看</button><p  item-left>！</p>-->\n    <!--</ion-card>-->\n    <ion-content class="content-scroll">\n        <!--<ion-refresher (ionRefresh)="doRefresh($event)">-->\n            <!--<ion-refresher-content>-->\n                <!--pullingIcon="arrow-dropdown"-->\n                <!--pullingText="Pull to refresh"-->\n                <!--refreshingSpinner="circles"-->\n                <!--refreshingText="Refreshing...">-->\n            <!--</ion-refresher-content>-->\n        <!--</ion-refresher>-->\n        <ion-list no-lines no-border>\n            <ion-item tappable (click)="homeSeeMore(assistants)" *ngFor="let assistants of assistantsList" style="margin-bottom: 1rem;">\n                <div>\n                    <!--<img style="margin-top: 4px; width: 21px;height:21px;vertical-align: middle" src="assets/img/home/zfzs.png">-->\n                    <p no-margin style="line-height: 30px; font-size: 1.5rem; color: #2A2B2D; font-weight: bold;">{{\'home.payAssistant\' | translate }}</p>\n                    <!--<ion-icon item-end name="ios-more"></ion-icon>-->\n                </div>\n                <div>\n                    <div class="currency">{{assistants.coin}}</div>\n                    <h2 style="font-size: 3rem; color: #2A2B2D; margin: 5px 0;"> {{assistants.quantity}}</h2>\n                </div>\n                <div style="height: 30px;line-height: 30px" *ngIf="assistants.asstype==\'TOPUP\'">\n                    <p *ngIf="assistants.status==\'0\'">{{\'home.unpaid\' | translate }} </p>\n                    <p *ngIf="assistants.status==\'1\'">{{\'home.paid\' | translate }} </p>\n                    <p *ngIf="assistants.status==\'2\'">{{\'home.paidAndConfirm\' | translate }} </p>\n                    <p *ngIf="assistants.status==\'3\'">{{\'home.topupCompleted\' | translate }} </p>\n                    <p *ngIf="assistants.status==\'7\'">{{\'home.userCancel\' | translate }} </p>\n                    <p *ngIf="assistants.status==\'8\'">{{\'home.systemCancel\' | translate }} </p>\n                    <p *ngIf="assistants.status==\'9\'">{{\'home.timeoutCancel\' | translate }} </p>\n                </div>\n                <div style="height: 30px;line-height: 30px" *ngIf="assistants.asstype==\'WITHDRAW\'">\n                    <p *ngIf="assistants.status==\'0\'">{{\'home.waitingTX\' | translate }} </p>\n                    <p *ngIf="assistants.status==\'1\'">{{\'home.transferred\' | translate }} </p>\n                    <p *ngIf="assistants.status==\'2\'">{{\'home.transferAndComfirm\' | translate }} </p>\n                    <p *ngIf="assistants.status==\'3\'">{{\'home.withdrawCompleted\' | translate }} </p>\n                    <p *ngIf="assistants.status==\'8\'">{{\'home.withdrawFail\' | translate }} </p>\n                    <p *ngIf="assistants.status==\'9\'">{{\'home.withdrawTimeout\' | translate }} </p>\n                </div>\n                <div style="height: 30px;line-height: 30px" *ngIf="assistants.asstype==\'TRANSFER\'">\n                    <p>{{\'home.transferSucc\' | translate }}</p>\n                </div>\n                <div style="height: 30px;line-height: 30px" *ngIf="assistants.asstype==\'WITHDRAWCOIN\'">\n                    <p>{{\'home.transferCoinSucc\' | translate }}</p>\n                </div>\n\n                <div>\n                    <p style=" font-size: 1.2rem; color: #2A2B2D; padding-bottom: 10px;">{{assistants.time}}</p>\n                </div>\n                <!--<ion-note>备注：请收款</ion-note>-->\n                <!--<div style="text-align: center">-->\n                <!--<button ion-button small outline color="light" style="line-height: 30px">查看更多</button>-->\n                <!--</div>-->\n                <div class="details">查看详情</div>\n            </ion-item>\n            <div *ngIf="showFlag" style="text-align: center;height: 50px;line-height: 50px;color: #888888">\n                {{\'home.noMore\' | translate }}\n            </div>\n        </ion-list>\n        <!--<ion-infinite-scroll *ngIf="!showFlag" (ionInfinite)="doInfinite($event)">-->\n            <!--<ion-infinite-scroll-content-->\n                    <!--loadingSpinner="bubbles"-->\n                    <!--loadingText="加载更多数据...">-->\n            <!--</ion-infinite-scroll-content>-->\n        <!--</ion-infinite-scroll>-->\n        <!--<div style="height: 165px"></div>-->\n    </ion-content>\n</ion-content>\n'/*ion-inline-end:"E:\newpays\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_common_commonUtils__["a" /* CommonUtils */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
        __WEBPACK_IMPORTED_MODULE_3__providers_home_searchAcc_service__["a" /* SearchAccService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5_ng2_translate__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_6__providers_updateApp_NativeService__["a" /* NativeService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(1018);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ })

});
//# sourceMappingURL=28.js.map