webpackJsonp([16],{

/***/ 1028:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadUploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util_service_storage_service__ = __webpack_require__(214);
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
 * Generated class for the HeadUploadPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HeadUploadPage = (function () {
    function HeadUploadPage(navCtrl, navParams, camera, file, storageService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.file = file;
        this.storageService = storageService;
    }
    HeadUploadPage.prototype.openPhoto = function () {
        var _this = this;
        var options = {
            quality: 90,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        };
        this.camera.getPicture(options).then(function (imageData) {
            console.log("got file: " + imageData);
            alert(imageData);
            // If it's base64:
            // let base64Image = 'data:image/jpeg;base64,' + imageData;
            // this.path = base64Image;
            alert(_this.path);
            //If it's file URI
            _this.path = imageData;
            _this.upload();
        }, function (err) {
            // Handle error
        });
    };
    /**
     * 文件上传
     */
    HeadUploadPage.prototype.upload = function () {
        this.access_token = JSON.stringify(this.storageService.read('token'));
        var apiPath = "http://www.fcloudchain.com:8082/payservice/v1/file/uploadprofile";
        var headers = new Headers({
            'Content-Type': 'application/json'
        });
        headers.append('X-Auth-Token', this.access_token);
    };
    HeadUploadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HeadUploadPage');
    };
    return HeadUploadPage;
}());
HeadUploadPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-head-upload',template:/*ion-inline-start:"E:\newpays\src\pages\mine\head-upload\head-upload.html"*/'<!--\n  Generated template for the HeadUploadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar>\n    <ion-title>头像上传</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n      <button ion-button full (click)="upload()" > 文件上传</button>\n    <button ion-button (click)="openPhoto()">打开摄像头</button>\n    <button ion-button (click)="upload()">文件上传</button>\n    <button ion-button (click)="download()">文件下载</button>\n\n    <div>\n        <img [src]="path" />\n    </div>\n</ion-content>\n'/*ion-inline-end:"E:\newpays\src\pages\mine\head-upload\head-upload.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_4__providers_util_service_storage_service__["a" /* StorageService */]])
], HeadUploadPage);

//# sourceMappingURL=head-upload.js.map

/***/ }),

/***/ 910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadUploadPageModule", function() { return HeadUploadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__head_upload__ = __webpack_require__(1028);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HeadUploadPageModule = (function () {
    function HeadUploadPageModule() {
    }
    return HeadUploadPageModule;
}());
HeadUploadPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__head_upload__["a" /* HeadUploadPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__head_upload__["a" /* HeadUploadPage */]),
        ],
    })
], HeadUploadPageModule);

//# sourceMappingURL=head-upload.module.js.map

/***/ })

});
//# sourceMappingURL=16.js.map