webpackJsonp([17],{

/***/ 1028:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdentityAuthenticationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_identity_ientity_auth__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_countryNum_country_num_service__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_service_conf_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_commonUtils__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_translate__ = __webpack_require__(212);
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
 * Generated class for the IdentityAuthenticationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IdentityAuthenticationPage = (function () {
    function IdentityAuthenticationPage(navCtrl, navParams, ientityAuth, countryNumService, camera, loadingCtrl, file, confService, actionSheetCtrl, commonUtils, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ientityAuth = ientityAuth;
        this.countryNumService = countryNumService;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.file = file;
        this.confService = confService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.commonUtils = commonUtils;
        this.translate = translate;
        this.uploadHeaderF = "";
        this.uploadHeaderB = "";
        this.CredentialNo = "";
        this.identityBean = { countryCode: '', idType: '', idNo: '', idName: '', ic_front: '', ic_back: '' };
        this.uploadHeaderFID = '';
        this.uploadHeaderBID = '';
        this.CredentialType = ""; //证件类型
        this.countryNum = "";
        this.Cardname = "";
        this.translate.get('identity_authentication').subscribe(function (res) {
            _this.translateObj = res;
        });
    }
    IdentityAuthenticationPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    IdentityAuthenticationPage.prototype.changeCountry = function () {
        console.log("this.countryNum", this.countryNum);
    };
    IdentityAuthenticationPage.prototype.changeCredenty = function () {
        console.log(this.CredentialType);
    };
    IdentityAuthenticationPage.prototype.submitAll = function () {
        var _this = this;
        debugger;
        if (this.countryNum == "") {
            this.commonUtils.alertCommon('', this.translateObj.chooseCountyCode);
            return;
        }
        if (this.Cardname == "") {
            this.commonUtils.alertCommon('', this.translateObj.nameEmpty);
            return;
        }
        if (this.CredentialType == "") {
            this.commonUtils.alertCommon('', this.translateObj.IDsTypeEmpty);
            return;
        }
        if (this.Cardname == "") {
            this.commonUtils.alertCommon('', this.translateObj.IDEmpty);
            return;
        }
        if (this.CredentialNo == "") {
            this.commonUtils.alertCommon('', this.translateObj.IDEmpty);
            return;
        }
        if (this.uploadHeaderF == '') {
            this.commonUtils.alertCommon('', '请上传正面照片');
            return;
        }
        if (this.uploadHeaderB == '') {
            this.commonUtils.alertCommon('', '请上传反面照片');
            return;
        }
        this.identityBean.countryCode = this.countryNum.split('::')[0];
        this.identityBean.idNo = this.CredentialNo;
        this.identityBean.idType = this.CredentialType;
        this.identityBean.idName = this.Cardname;
        this.identityBean.ic_front = this.uploadHeaderFID;
        this.identityBean.ic_back = this.uploadHeaderBID;
        //     "countryCode":"CN",
        //     "idType":"1",   //1身份证 2护照 3驾照
        //     "idNo":"210210199901010001"
        this.ientityAuth.identity(this.identityBean).then(function (res) {
            console.log(res);
            if (res.ret_code == '1') {
                _this.commonUtils.alertCommon('', _this.translateObj.submitSuccess);
                _this.navCtrl.parent.select(2);
            }
            else {
                _this.commonUtils.alertCommon('', '提交失败，请重试!');
            }
        }, function (err) {
            _this.commonUtils.alertCommon('', _this.translateObj.submitFail);
        });
    };
    IdentityAuthenticationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.countryNumService.getCountryNumber().then(function (success) {
            console.log(success);
            if (success) {
                _this.countryN = success.data;
                _this.selectOptions = {
                    title: _this.translateObj.inputCountyCode,
                    // subTitle: 'Select your toppings',
                    mode: 'md'
                };
                _this.selectOptionsQT = {
                    title: '',
                    mode: 'md'
                };
            }
        });
        console.log('ionViewDidLoad IdentityAuthenticationPage');
    };
    IdentityAuthenticationPage.prototype.presentActionSheet = function (photoFlag, flag) {
        var _this = this;
        if (flag == "1") {
            var actionSheet = this.actionSheetCtrl.create({
                title: this.translateObj.uploadThumb,
                cssClass: 'headChoice',
                buttons: [
                    {
                        text: this.translateObj.camera,
                        icon: 'ios-arrow-forward',
                        // role: 'destructive',
                        handler: function () {
                            console.log('调用照相机');
                            _this.takePhoto(photoFlag);
                        }
                    }, {
                        text: this.translateObj.album,
                        icon: 'ios-arrow-forward',
                        handler: function () {
                            console.log('调用相册');
                            _this.getPhoto(photoFlag);
                        }
                    }, {
                        text: this.translateObj.cancle,
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            actionSheet.present();
        }
        else {
            if (photoFlag == "front") {
                this.uploadHeaderF = "";
            }
            else {
                this.uploadHeaderB = "";
            }
        }
    };
    //读取相册文件夹
    IdentityAuthenticationPage.prototype.getPhoto = function (photoFlag) {
    };
    //拍照
    IdentityAuthenticationPage.prototype.takePhoto = function (photoFlag) {
        var _this = this;
        this.camera.getPicture().then(function (imageData) {
            _this.imageURLTemp = imageData;
            debugger;
            _this.upload(_this.imageURLTemp, photoFlag);
        }, function (err) {
            console.log(err);
        });
    };
    IdentityAuthenticationPage.prototype.upload = function (imgUrl, photoFlag) {
        var userid = localStorage.getItem('userid');
        this.loader = this.loadingCtrl.create({
            content: this.translateObj.uploading,
        });
        var imglen = imgUrl.split(".").length;
        if (imgUrl.split(".")[imglen - 1] != "jpg" && imgUrl.split(".")[imglen - 1] != "png") {
            this.commonUtils.alertCommon("提示", "请输入正确的类型,只支持jpg和png 类型");
            return;
        }
        this.apiPath = this.confService.baseUrl + "file/upload";
        this.commonUtils.showLoading();
    };
    IdentityAuthenticationPage.prototype.cardNOvalid = function (cardno) {
        this.CredentialNo = cardno.replace(/[\W]/g, '');
        this.CredentialNo = this.CredentialNo.replace("_", '');
        this.CredentialNo = this.CredentialNo.replace("+", '');
        this.CredentialNo = this.CredentialNo.replace(".", '');
        if (cardno.length > 25) {
            this.CredentialNo = cardno.substring(0, 25);
        }
    };
    IdentityAuthenticationPage.prototype.cardNamevalid = function (Cardname) {
        if (Cardname.length > 25) {
            this.Cardname = Cardname.substring(0, 25);
        }
    };
    IdentityAuthenticationPage.prototype.ionViewWillLeave = function () {
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
    return IdentityAuthenticationPage;
}());
IdentityAuthenticationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-identity-authentication',template:/*ion-inline-start:"E:\newpay\newpay\src\pages\mine\document\identity-authentication\identity-authentication.html"*/'<ion-header no-border cache-view="false">\n    <ion-toolbar color="secondary">\n        <ion-buttons left icon-only tappable (click)="goBack()">\n            <button ion-button icon-only>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title style="text-align: center">{{\'identity_authentication.title\' | translate }}</ion-title>\n        <ion-buttons end icon-only>\n            <button ion-button icon-only>\n                <ion-icon name=""></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-list no-border style="margin-top: 10px">\n        <ion-item no-lines>\n            <ion-label>{{\'identity_authentication.countyCode\' | translate }}</ion-label>\n            <ion-select [selectOptions]="selectOptions" name="country" [(ngModel)]="countryNum" okText="{{\'identity_authentication.ok\' | translate }}" cancelText="{{\'identity_authentication.cancel\' | translate }}"\n                        (ngModelChange)="countryNum=$event; changeCountry()">\n                <!--<ion-option selected  *ngIf="sleletedOne">{{sleletedOne}}</ion-option>-->\n                <ion-option value="{{country.countryCode}}::{{country.phoneCode}}::{{country.countryName}}"\n                            *ngFor="let country of countryN" >{{country.countryName}}\n                </ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item no-lines style="margin-top: 1px">\n            <ion-label>{{\'identity_authentication.name\' | translate }}</ion-label>\n            <ion-input text-end type="text" (keyup)="cardNamevalid(Cardname)" [(ngModel)]="Cardname"></ion-input>\n        </ion-item>\n        <ion-item no-lines style="margin-top: 1px">\n            <ion-label>{{\'identity_authentication.IDsType\' | translate }}</ion-label>\n            <ion-select [selectOptions]="selectOptionsQT" okText="{{\'identity_authentication.ok\' | translate }}"\n                        cancelText="{{\'identity_authentication.cancel\' | translate }}" name="card"\n                        [(ngModel)]="CredentialType" (ngModelChange)="CredentialType=$event; changeCredenty()">\n                <ion-option value="1">{{\'identity_authentication.IDCard\' | translate }}</ion-option>\n                <ion-option value="2">{{\'identity_authentication.passport\' | translate }}</ion-option>\n                <ion-option value="3">{{\'identity_authentication.drivingLicence\' | translate }}</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item no-lines style="margin-top: 1px">\n            <ion-label>{{\'identity_authentication.IDsCode\' | translate }}</ion-label>\n            <ion-input text-end type="text" (keyup)="cardNOvalid(CredentialNo)" [(ngModel)]="CredentialNo"></ion-input>\n        </ion-item>\n\n        <div no-lines style="margin-top: 10px;padding: 10px;background-color: white">\n            <ion-row><p style="color: #888; font-size: 1.5rem; margin: 5px;">{{\'identity_authentication.uploadImg\' | translate }}</p></ion-row>\n            <ion-row>\n                <ion-col *ngIf="uploadHeaderF==\'\'" tappable (click)="presentActionSheet(\'front\',\'1\')">\n                    <img src="assets/img/identity/scanningZ.png" width="100%">\n                    <img class="colP" src="assets/img/identity/scanning.png">\n                    <p class="colPp">{{\'identity_authentication.obverseSide\' | translate }}</p>\n                </ion-col>\n                <ion-col *ngIf="uploadHeaderF!=\'\'" (click)="presentActionSheet(\'front\',\'2\')">\n                    <img src="{{uploadHeaderF}}" width="100%">\n                </ion-col>\n                <ion-col *ngIf="uploadHeaderB==\'\'" tappable (click)="presentActionSheet(\'back\',\'1\')">\n                    <img src="assets/img/identity/scanningB.png" width="100%">\n                    <img class="colP" src="assets/img/identity/scanning.png">\n                    <p class="colPp">{{\'identity_authentication.reverseSide\' | translate }}</p>\n                </ion-col>\n                <ion-col *ngIf="uploadHeaderB!=\'\'" (click)="presentActionSheet(\'back\',\'2\')">\n                    <img src="{{uploadHeaderB}}" width="100%">\n                </ion-col>\n            </ion-row>\n            <ion-row><span class="colS">{{\'identity_authentication.memo\' | translate }}</span></ion-row>\n        </div>\n        <div class="btnDivCss">\n            <button ion-button full tappable (click)="submitAll()">{{\'identity_authentication.confirm\' | translate }}</button>\n        </div>\n        <p class="desc">{{\'identity_authentication.desc\' | translate }}</p>\n\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\newpay\newpay\src\pages\mine\document\identity-authentication\identity-authentication.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_identity_ientity_auth__["a" /* IentityAuth */], __WEBPACK_IMPORTED_MODULE_3__providers_countryNum_country_num_service__["a" /* CountryNumService */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_6__providers_util_service_conf_service__["b" /* ConfService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_7__providers_common_commonUtils__["a" /* CommonUtils */],
        __WEBPACK_IMPORTED_MODULE_8_ng2_translate__["c" /* TranslateService */]])
], IdentityAuthenticationPage);

//# sourceMappingURL=identity-authentication.js.map

/***/ }),

/***/ 910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityAuthenticationPageModule", function() { return IdentityAuthenticationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identity_authentication__ = __webpack_require__(1028);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var IdentityAuthenticationPageModule = (function () {
    function IdentityAuthenticationPageModule() {
    }
    return IdentityAuthenticationPageModule;
}());
IdentityAuthenticationPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__identity_authentication__["a" /* IdentityAuthenticationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__identity_authentication__["a" /* IdentityAuthenticationPage */]), __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], IdentityAuthenticationPageModule);

//# sourceMappingURL=identity-authentication.module.js.map

/***/ })

});
//# sourceMappingURL=17.js.map