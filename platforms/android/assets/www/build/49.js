webpackJsonp([49],{

/***/ 872:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(957);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 957:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_auth_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_service_storage_service__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_translate__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_newpay_wallet_js__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_backbutton_service__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_common_commonUtils__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_bank_model_bank_model__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_countryNum_country_num_service__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_util_service_conf_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_page_transitions__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_social_sharing__ = __webpack_require__(407);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











// import { ReconnectingWebSocket } from 'reconnecting-web-socket';




var LoginPage = (function () {
    //@ViewChild('player')
    //player:ElementRef;
    function LoginPage(navCtrl, navParams, socialSharing, auth, alertCtrl, loadingCtrl, storageService, alerCtrl, translate, platform, commonUtils, confservice, nativePageTransitions, backButtonService, bankModelProvider, jsonp, modalCtrl, countryNumService, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socialSharing = socialSharing;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storageService = storageService;
        this.alerCtrl = alerCtrl;
        this.translate = translate;
        this.platform = platform;
        this.commonUtils = commonUtils;
        this.confservice = confservice;
        this.nativePageTransitions = nativePageTransitions;
        this.backButtonService = backButtonService;
        this.bankModelProvider = bankModelProvider;
        this.jsonp = jsonp;
        this.modalCtrl = modalCtrl;
        this.countryNumService = countryNumService;
        this.toastCtrl = toastCtrl;
        this.loginCredentials = { userid: '', password: '', appregisterid: '', country: 'CN', devicesystype: '', devicetype: '' };
        this.digitals = { account: '',
            coin_type: 'NPT' };
        this.country = { countryName: '', phoneCode: '', countryCode: '86' };
        this.backButtonService.registerBackButtonAction(null);
        this.options = {
            direction: 'up',
            duration: 500,
            slowdownfactor: 3,
            slidePixels: 20,
            iosdelay: 100,
            androiddelay: 150,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 60
        };
        this.IMGheight = JSON.stringify(document.documentElement.clientHeight) + 'px';
        platform.ready().then(function () {
        });
        if (localStorage.getItem('language')) {
            this.translate.setDefaultLang(localStorage.getItem('language'));
        }
        else {
            this.translate.setDefaultLang('zh');
        }
        this.translate.get('login').subscribe(function (res) {
            _this.translateObj = res;
            console.log(res);
        });
        // console.dir(lodash);
    }
    // ionViewWillLeave() {
    //     this.nativePageTransitions.slide(this.options)
    //         .then(this.onSuccess)
    //         .catch(this.onError);
    //
    // }
    LoginPage.prototype.testYY = function () {
        var file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAWmUlEQVR4Xu3d7XIcuQ4DUOf9Hzq3xtmturUraX16wPSMg/wNzaZAgKTUH/Pj4+Pj58cL//v508L78ePHcjXqRyDZXVN8PGxfKcbJWB5rTWC2i1F9p/xovhP2D7abQhJXBR9KpAp4DW6K1JC6o6nGs3KWEl7KTwob8VMBC1ob2wQZ24E9ESnhpfz4Cp';
        this.socialSharing.share("标题", "啊啊啊啊", file, "").then().catch(function (err) {
        });
    };
    /**
     * 是否真机环境
     * @return {boolean}
     */
    LoginPage.prototype.isMobile = function () {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    };
    /**
     * 是否android真机环境
     * @return {boolean}
     */
    LoginPage.prototype.isAndroid = function () {
        return this.isMobile() && this.platform.is('android');
    };
    /**
     * 是否ios真机环境
     * @return {boolean}
     */
    LoginPage.prototype.isIos = function () {
        return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
    };
    LoginPage.prototype.TaostGlobal = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
        });
        toast.present();
    };
    LoginPage.prototype.initIndexDB = function () {
        var _this = this;
        //indexeddb 初始化
        this.commonUtils.showLoading();
        __WEBPACK_IMPORTED_MODULE_5_newpay_wallet_js__["a" /* NewpayInstance */].init(this.confservice.initWS).then(function () {
            console.log("init", '#######');
            _this.commonUtils.HideLoading();
            _this.AllDigitals(localStorage.getItem('account'));
        }).catch(function (err) {
            console.log(err);
            _this.commonUtils.HideLoading();
            _this.commonUtils.alertCommon('提示', _this.translateObj.NetworkTimeout);
        });
    };
    ;
    LoginPage.prototype.createWallet = function () {
        this.initIndexDB();
        // this.navCtrl.push("TabsPage",{userid:this.loginCredentials.userid});
    };
    LoginPage.prototype.AllDigitals = function (account) {
        //如果不是空的。 说明 要校验 中心 的账户 和本地的 账户是否相同 如果相同 正常登录 如果不相同 清空本地数据;
        //如果不是空的要验证密码是否存在，密码存在 密码不存在 密码不存在的话说明需要创建 链 账户
        // 判断资金密码是否存在
        this.navCtrl.push("FundpasswordPage");
        this.accountname = __WEBPACK_IMPORTED_MODULE_5_newpay_wallet_js__["a" /* NewpayInstance */].getCurAccountLocalKey();
        // this.nativePageTransitions.slide(this.options);
        // this.navCtrl.push("TabsPage",{userid:this.loginCredentials.userid});
    };
    LoginPage.prototype.importWallet = function () {
        this.navCtrl.push("RecoveryImportPage", { userid: this.loginCredentials.userid });
    };
    LoginPage.prototype.AddDigitals = function (digitals) {
        var _this = this;
        var resAddData;
        this.bankModelProvider.AddGetdigitals(digitals).then(function (res) {
            _this.commonUtils.HideLoading();
            resAddData = res.data;
            _this.nativePageTransitions.slide(_this.options);
            _this.navCtrl.push("FundpasswordPage", { userid: _this.loginCredentials.userid });
        }, function (err) {
            _this.commonUtils.HideLoading();
        });
    };
    LoginPage.prototype.showError = function (text) {
        var alert = this.alertCtrl.create({
            cssClass: 'projectList',
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter LoginPage');
        localStorage.setItem("flagBack", "1");
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.showPopup = function (title, text) {
        var alert = this.alertCtrl.create({
            cssClass: 'projectList',
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: this.translateObj.confirm,
                    handler: function (data) {
                    }
                }
            ]
        });
        alert.present();
    };
    LoginPage.prototype.loading = function (content) {
        this.loader = this.loadingCtrl.create({
            content: content,
        });
        this.loader.present();
    };
    LoginPage.prototype.test = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_newpay_wallet_js__["a" /* NewpayInstance */].init(this.confservice.initWS).then(function () {
            var accountname = __WEBPACK_IMPORTED_MODULE_5_newpay_wallet_js__["a" /* NewpayInstance */].getCurAccountLocalKey();
            __WEBPACK_IMPORTED_MODULE_5_newpay_wallet_js__["a" /* NewpayInstance */].transfer("npqp18811444788", "npqp13263258548", Number(100000) * Math.pow(10, 6), "1.3.1", "您好，请收钱").then(function (result) {
                //转账成功。生成时间戳 获取当前时间
                var date = new Date();
                console.log("txid", result.txid);
                //如果转账成功以后，那么去中心化提交 转账信息。
                _this.commonUtils.alertCommon('', '转账成功');
            }).catch(function (error) {
                _this.showPopup(_this.translateObj.warning, error);
                console.log("[AccountActions.js:90] ----- transfer error ----->", error);
            });
        }).catch(function (err) {
            console.log(err);
            _this.commonUtils.alertCommon('', '网络链接错误,请重试!');
        });
    };
    LoginPage.prototype.testQQQQQ = function () {
        var img = "file:///storage/emulated/0/MagazineUnlock/magazine-unlock-11-2.3.878-_c30156ff1fcf419e9742e1c13979bb29.jpg";
        var len = img.split(".").length;
        img.split(".")[len - 1];
        console.log(img.split(".")[len - 1]);
        var akaka = __WEBPACK_IMPORTED_MODULE_5_newpay_wallet_js__["a" /* NewpayInstance */].getCurAccountLocalKey();
        console.log("AAKAKAKA", akaka);
        if (!__WEBPACK_IMPORTED_MODULE_5_newpay_wallet_js__["a" /* NewpayInstance */].getCurAccountLocalKey()) {
            console.log("为空");
            alert(__WEBPACK_IMPORTED_MODULE_5_newpay_wallet_js__["a" /* NewpayInstance */].getCurAccountLocalKey());
        }
        else {
            console.log("不为空");
            alert(__WEBPACK_IMPORTED_MODULE_5_newpay_wallet_js__["a" /* NewpayInstance */].getCurAccountLocalKey());
        }
        // 定义服务器地址
        var wikiUrl = "http://192.168.1.139:8080/api/v1/coins/rate/CNY?callback=nbnb";
        // 定义参数
        var params = new URLSearchParams();
        // params.set('callback', 'nbnb123');
        // // params.set("callback", "__ng_jsonp__.__req0.finished");
        // // params.set("callback", "__ng_jsonp__.__req1.finished");
        params.set('callback', "__ng_jsonp__.__req{{this.times}}.finished");
        this.times = this.times + 1;
        // // 使用jsonp模块获取express后台返回的jsonp数据
        // this.jsonp.get(wikiUrl, {search: params})
        //     .map(res=> res)
        //     .subscribe((response) => {
        //         console.log(response);
        //     }, (error) => {
        //         console.error(error);
        //     });
        this.jsonp.request('http://192.168.1.139:8080/api/v1/coins/rate/CNY', { search: params })
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
        }, function (error) {
            console.error(error);
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"E:\newpay\newpay\src\pages\auth\login\login.html"*/'<ion-content fullscreen isScrolling=false>\n    <div class="login-container" [style.height]="IMGheight">\n        <!--<img class="logo" src="assets/img/logo/logo.png"/>-->\n        <!--<ion-item no-lines style="border-bottom: 1px solid #FFFFFF;">-->\n        <!--<ion-label><p *ngIf="country.countryCode==\'\'"></p><img *ngIf="country.countryCode!=\'\'" src="assets/img/country/{{country.countryCode}}.png"  style="width: 30px;height: 17px"/></ion-label>-->\n        <!--<ion-select class="select-alert-button-group" [selectOptions]="selectOptions" name="country" [(ngModel)]="NEWcountry" (ngModelChange)="NEWcountry=$event; changeCountry()">-->\n        <!--&lt;!&ndash;<ion-option selected  *ngIf="sleletedOne">{{sleletedOne}}</ion-option>&ndash;&gt;-->\n        <!--<ion-option value="{{country.countryCode}}::{{country.phoneCode}}::{{country.countryName}}" *ngFor="let country of countryN"  okText="Okay" cancelText="Dismiss">{{country.countryName}}</ion-option>-->\n        <!--</ion-select>-->\n        <!--</ion-item>-->\n        <ion-list style="width: 70%;\n        position: absolute;\n        top: 150px;\n        left: 15%;">\n        <!--输入手机号-->\n        <!--<ion-item no-lines style="border-bottom: 1px solid #FFFFFF">-->\n            <!--&lt;!&ndash;(click)="checkedGUOJBM()"&ndash;&gt;-->\n            <!--<div item-start style="color: white; height: 24px;" tappable>+{{country.countryCode}}-->\n                <!--<ion-icon ios="md-arrow-dropdown" md="md-arrow-dropdown"></ion-icon>-->\n            <!--</div>-->\n            <!--<ion-input type="number" placeholder="{{\'login.inputtelphonenumber\' | translate}}"-->\n                       <!--[(ngModel)]="loginCredentials.userid" (keyup)="inputNameKu(loginCredentials.userid)"-->\n                       <!--clearInput></ion-input>-->\n        <!--</ion-item>-->\n        <!--输入密码-->\n        <!--<ion-item no-lines style="border-bottom: 1px solid #FFFFFF">-->\n            <!--<ion-input placeholder="{{\'login.inputpw\' | translate}}" type="password" name="password" maxlength="25"-->\n                       <!--[(ngModel)]="loginCredentials.password" clearInput></ion-input>-->\n        <!--</ion-item>-->\n        <!--&lt;!&ndash;记住密码&ndash;&gt;-->\n        <!--<ion-item no-lines no-padding no-margin class="text-right">-->\n            <!--<ion-label class="f14">-->\n                <!--<span class="f-right">{{\'login.rememberPw\' | translate}}</span>-->\n                <!--<ion-checkbox class="f-right" checked="false" [(ngModel)]="cucumber"-->\n                              <!--(ionChange)="updateCucumber()"></ion-checkbox>-->\n            <!--</ion-label>-->\n\n        <!--</ion-item>-->\n        <!--快速注册 忘记密码-->\n        <div>\n            <button ion-button full class="loginBtn" tappable (click)="createWallet()">\n                <div style="color: #faa81c; font-size: 1.5rem;">创建钱包</div>\n            </button>\n            <!--<p>-->\n            <!--<span class="f-left" (click)="createAccount()">{{\'login.register\' | translate }}</span>-->\n            <!--<span class="f-right" (click)="forgetPassword()">{{\'login.forgetPw\' | translate }}</span>-->\n            <!--<span class="clear"></span>-->\n            <!--</p>-->\n        </div>\n            <div>\n                <button ion-button full class="loginBtn" tappable (click)="importWallet()">\n                    <div style="color: #faa81c; font-size: 1.5rem;">{{\'login.importWallet\' | translate}}</div>\n                </button>\n                <!--<p>-->\n                <!--<span class="f-left" (click)="createAccount()">{{\'login.register\' | translate }}</span>-->\n                <!--<span class="f-right" (click)="forgetPassword()">{{\'login.forgetPw\' | translate }}</span>-->\n                <!--<span class="clear"></span>-->\n                <!--</p>-->\n            </div>\n\n            <!--<button (click)="test()">测试</button>-->\n        </ion-list>\n        <!--<div>-->\n        <!--<button (click)="ChangeLanguage()" ion-button color="light">设置语言</button>-->\n        <!--<button (click)="inappbrowser()" ion-button color="light">打开内置浏览器</button>-->\n        <!--<button (click)="test3()" ion-button color="light">打开内部推送消息栏</button>-->\n        <!--<button (click)="testYY()" ion-button color="light">分享</button>-->\n        <!--</div>-->\n        <!--<ion-grid>-->\n\n        <!--旧版快速注册及忘记密码<ion-row>\n            <ion-col col-6 style="text-align: start">\n                <button ion-button icon-right small clear tappable (click)="createAccount()">\n                    {{\'login.register\' | translate }}\n                    <ion-icon name="md-arrow-round-forward"></ion-icon>\n                </button>\n            </ion-col>\n            <ion-col col-6 style="text-align: end">\n                <button ion-button icon-right small clear tappable (click)="forgetPassword()">\n                    {{\'login.forgetPw\' | translate }}\n                    <ion-icon name="md-help"></ion-icon>\n                </button>\n            </ion-col>\n        </ion-row>-->\n\n\n        <!--<button (click)="testQQQQQ()">测试1</button>-->\n\n        <!--</ion-grid>-->\n        <!--<ion-grid margin-top="10%">-->\n        <!--<ion-row align-items-center >-->\n        <!--<ion-col col-3 ><hr class="lineCss" /></ion-col>-->\n        <!--<ion-col col-6>使用第三方账号登录 </ion-col>-->\n        <!--<ion-col col-3><hr class="lineCss" /></ion-col>-->\n        <!--</ion-row>-->\n        <!--</ion-grid>-->\n        <!--<div>-->\n        <!--<button (click)="ChangeLanguage()" ion-button color="light">设置语言</button>-->\n        <!--<h2>{{ \'HOME.CONTENT\' | translate }}</h2>-->\n        <!--</div>-->\n\n        <!--<ion-grid margin-top="10%">-->\n        <!--<ion-row align-items-center >-->\n        <!--<ion-col col-6 ><div class="facebook"><img src="assets/img/logo/facebook.png" alt="" width="60px" height="60px"></div></ion-col>-->\n\n        <!--<ion-col col-6><div><img src="assets/img/logo/weixin.png" alt="" width="60px" height="60px"></div></ion-col>-->\n        <!--</ion-row>-->\n        <!--</ion-grid>-->\n    </div>\n</ion-content>\n\n\n<!--\n<ion-content class="login-content" padding>\n  <ion-row class="logo-row">\n    <ion-col></ion-col>\n    <ion-col width-67>\n      <img src=""/>\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n  <div class="login-box">\n    <form #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            <ion-item>\n              <ion-input type="text" placeholder="Phone" name="phone" [(ngModel)]="registerCredentials.phone" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid" (click)="login()">Login</button>\n          <button ion-button class="register-btn" block clear (click)="createAccount()">Create New Account</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </div>\n</ion-content>-->\n'/*ion-inline-end:"E:\newpay\newpay\src\pages\auth\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_14__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_util_service_storage_service__["a" /* StorageService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4_ng2_translate__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_8__providers_common_commonUtils__["a" /* CommonUtils */],
        __WEBPACK_IMPORTED_MODULE_12__providers_util_service_conf_service__["b" /* ConfService */],
        __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
        __WEBPACK_IMPORTED_MODULE_7__providers_backbutton_service__["a" /* BackbuttonService */],
        __WEBPACK_IMPORTED_MODULE_9__providers_bank_model_bank_model__["a" /* BankModelProvider */],
        __WEBPACK_IMPORTED_MODULE_11__angular_http__["d" /* Jsonp */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_10__providers_countryNum_country_num_service__["a" /* CountryNumService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=49.js.map