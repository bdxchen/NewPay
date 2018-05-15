webpackJsonp([11],{

/***/ 1033:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MymessagePage; });
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
 * Generated class for the MymessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MymessagePage = (function () {
    function MymessagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.indexTags = [
            { title: '您有一笔收款已到账', status: '1', content: "您于2017-07-18 15:44:01 收到好友55998811@163.com(小伙砸)BitCNY(100.00),请查收" },
            { title: '您有一笔付款(可乐)请求', status: '2', content: "您于2017-07-18 13:00:46 转账到12331@126.com(晓晓)，对方已经到账！" },
            { title: '您有一笔收款已到账', status: '1', content: "您于2017-07-18 12:06:12 充值BitCNY(200.00)已经到账，请查收" },
        ];
    }
    MymessagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MymessagePage');
    };
    MymessagePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    return MymessagePage;
}());
MymessagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-mymessage',template:/*ion-inline-start:"E:\newpays\src\pages\mine\mymessage\mymessage.html"*/'<!--\n  Generated template for the MymessagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-toolbar color="secondary">\n		<ion-buttons left icon-only tappable (click)="goBack()">\n			<button ion-button icon-only>\n				<ion-icon name="ios-arrow-back"></ion-icon>\n			</button>\n		</ion-buttons>\n		<ion-title style="text-align: center">消息管理</ion-title>\n\n	</ion-toolbar>\n</ion-header>\n<ion-content>\n	<img class="bgImg" src="assets/img/mine/meinv.jpg" >\n	<ion-list>\n		<ion-item no-lines margin-top="10px">\n			<img item-left src="assets/img/message/msgpush.png" style="width: 21px;\n			height: 21px;\n			border-radius: 50%;">\n			<ion-note item-left>张三</ion-note>\n		</ion-item>\n		<ion-item no-lines style="margin-top:1px" *ngFor="let tag of indexTags">\n\n			<div *ngIf="tag.status==\'1\'" style="display: flex;justify-content: center;align-items: Center" item-left>\n				<img item-left src="assets/img/message/msgpush.png" style="width: 21px;\n			height: 21px;\n			border-radius: 50%;">\n				<p  style="flex: 150px" >{{tag.title}}</p>\n				<button style="flex: 1;" ion-button small clear>点击查看</button>\n			</div>\n			<div *ngIf="tag.status==\'2\'" style="display: flex;justify-content: center;align-items: Center">\n				<img item-left src="assets/img/message/msgpop.png" style="width: 21px;\n			height: 21px;\n			border-radius: 50%;">\n				<p style="flex: 150px">{{tag.title}}!</p><button style="flex:1;" ion-button small clear style="color: yellow">点击操作</button>\n			</div>\n\n\n		</ion-item>\n		<!--<ion-card *ngFor="let tag of indexTags">-->\n		  <!--<ion-card-header>-->\n		    <!--{{tag.title}}({{tag.status}})-->\n		  <!--</ion-card-header>-->\n		  <!--<ion-card-content>-->\n		    <!--{{tag.content}}-->\n		  <!--</ion-card-content>-->\n		  <!--<ion-card-content >-->\n\n	          <!--<p>-&#45;&#45;查看详细-&#45;&#45;</p>-->\n\n		  <!--</ion-card-content>-->\n		<!--</ion-card>-->\n		 \n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\newpays\src\pages\mine\mymessage\mymessage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
], MymessagePage);

//# sourceMappingURL=mymessage.js.map

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MymessagePageModule", function() { return MymessagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mymessage__ = __webpack_require__(1033);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MymessagePageModule = (function () {
    function MymessagePageModule() {
    }
    return MymessagePageModule;
}());
MymessagePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__mymessage__["a" /* MymessagePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mymessage__["a" /* MymessagePage */]),
        ],
    })
], MymessagePageModule);

//# sourceMappingURL=mymessage.module.js.map

/***/ })

});
//# sourceMappingURL=11.js.map