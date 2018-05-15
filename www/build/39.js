webpackJsonp([39],{

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowdetailPageModule", function() { return FlowdetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flowdetail__ = __webpack_require__(968);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FlowdetailPageModule = (function () {
    function FlowdetailPageModule() {
    }
    return FlowdetailPageModule;
}());
FlowdetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__flowdetail__["a" /* FlowdetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__flowdetail__["a" /* FlowdetailPage */]),
        ],
    })
], FlowdetailPageModule);

//# sourceMappingURL=flowdetail.module.js.map

/***/ }),

/***/ 968:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_financial_service_account_transfer_service__ = __webpack_require__(394);
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
 * Generated class for the FlowdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FlowdetailPage = (function () {
    function FlowdetailPage(navCtrl, alertCtrl, transfer, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.transfer = transfer;
        this.navParams = navParams;
        this.createSuccess = false;
        this.indexTags = [
            { titletype: '充值', occurtime: '2017-07-18 12:30:00', oppaccount: "platform", amount: "10,000.00", status: "未完成" },
            { titletype: '提现', occurtime: '2017-07-18 12:30:00', oppaccount: "platform", amount: "20,000.00", status: "成功" },
            { titletype: '转账', occurtime: '2017-07-18 12:30:00', oppaccount: "123@qq.com(晓晓)", amount: "12,000.00", status: "成功" },
            { titletype: '收款', occurtime: '2017-07-18 12:30:00', oppaccount: "123@qq.com(晓晓)", amount: "1,000.00", status: "成功" },
            { titletype: '付款', occurtime: '2017-07-18 12:30:00', oppaccount: "123@qq.com(晓晓)", amount: "4,000.00", status: "成功" },
        ];
    }
    FlowdetailPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    FlowdetailPage.prototype.billDetail = function (item) {
        this.navCtrl.push('BillDetailPage', item);
    };
    FlowdetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.transfer.foundAssets().subscribe(function (result) {
            if (result != null) {
                if (result.ret_code == 1) {
                    _this.mData = result.data;
                    // this.mData.a= "aaaaa"
                    // for(var  i = 0; i<this.mData.length; i++ ){
                    //     this.indexTags.push(this.mData);
                    //     this.mData.amount;
                    // }
                    // this.indexTags = result.data;
                    // result.json();
                }
                else {
                    _this.showPopup("", result.ret_msg);
                }
            }
        }, function (error) {
            _this.showPopup("", "您的网络有问题，请检查网络");
        });
    };
    FlowdetailPage.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.createSuccess) {
                            _this.navCtrl.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    return FlowdetailPage;
}());
FlowdetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-flowdetail',template:/*ion-inline-start:"E:\newpays\src\pages\financial\flowdetail\flowdetail.html"*/'<!--\n  Generated template for the FlowdetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>-->\n\n  <!--<ion-navbar>-->\n    <!--<ion-title>流水明细</ion-title>-->\n  <!--</ion-navbar>-->\n\n<!--</ion-header>-->\n\n<ion-header no-border cache-view="false" mode="md">\n	<ion-toolbar color="secondary">\n		<ion-buttons left icon-only tappable (click)="goBack()">\n			<button ion-button icon-only>\n				<ion-icon name="ios-arrow-back"></ion-icon>\n			</button>\n		</ion-buttons>\n		<ion-title style="text-align: center">我的账单</ion-title>\n		<ion-buttons end icon-only >\n			<button ion-button icon-only>\n				<ion-icon name=""></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-toolbar>\n</ion-header>\n<ion-content>\n	<ion-list *ngFor="let tag of indexTags">\n		<ion-list-header no-lines style="margin-top: 1px">\n		  <ion-note>{{tag.occurtime}}</ion-note>\n		</ion-list-header>\n		<ion-item no-lines style="margin-top: 1px" tappable (click)="billDetail(item)">\n			<ion-avatar item-start>\n				<img src="assets/img/message/msgpush.png">\n			</ion-avatar>\n			<p item-left style="width: 80px">{{tag.occurtime}}</p>\n			<div>\n				<h4>+{{tag.amount}}</h4>\n				<p>{{tag.coin_type}}</p>\n			</div>\n			<ion-note item-end><ion-icon  name="ios-arrow-forward"></ion-icon></ion-note>\n\n\n\n\n		</ion-item>\n		<!--<ion-item no-lines style="margin-top: 1px">对方:{{tag.oppaccount}}</ion-item>-->\n		<!--<ion-item>金额:{{tag.amount}}</ion-item>-->\n		<!--<ion-item>金额:{{tag.amount}}</ion-item>-->\n	</ion-list>\n  <!--<ion-list>-->\n  	<!--<ion-card *ngFor="let tag of indexTags">-->\n	  <!--<ion-card-header>-->\n	    <!--{{tag.titletype}}-->\n	  <!--</ion-card-header>-->\n	  <!--<ion-card-content>-->\n	    <!--<p>时间:{{tag.occurtime}}</p>-->\n	    <!--<p>对方:{{tag.oppaccount}}</p>-->\n	    <!--<p>金额:{{tag.amount}}</p>-->\n	  <!--</ion-card-content>-->\n	  <!--<ion-card-content>-->\n	    <!--<p>状态:{{tag.status}}</p>-->\n	  <!--</ion-card-content>-->\n	<!--</ion-card>-->\n\n  <!--</ion-list>-->\n</ion-content>\n'/*ion-inline-end:"E:\newpays\src\pages\financial\flowdetail\flowdetail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_financial_service_account_transfer_service__["a" /* TransferService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
], FlowdetailPage);

//# sourceMappingURL=flowdetail.js.map

/***/ })

});
//# sourceMappingURL=39.js.map