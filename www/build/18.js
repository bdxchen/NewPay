webpackJsonp([18],{

/***/ 1027:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_city_picker_service__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service_mine_service__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_util_service_conf_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_translate__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_common_commonUtils__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_keyboard__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__alert_modal_alert_modal__ = __webpack_require__(426);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var DocumentPage = (function () {
    function DocumentPage(navCtrl, alertCtrl, navParams, cityPickerSev, minservice, actionSheetCtrl, modalCtrl, camera, toast, platform, toastCtrl, commonUtils, loadingCtrl, file, confService, translate, keyboard) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.cityPickerSev = cityPickerSev;
        this.minservice = minservice;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.camera = camera;
        this.toast = toast;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.commonUtils = commonUtils;
        this.loadingCtrl = loadingCtrl;
        this.file = file;
        this.confService = confService;
        this.translate = translate;
        this.keyboard = keyboard;
        this.allinfo = { nick_name: '', gender: '', province: '北京', city: '', profile_icon: '', id_status: '', id_name: '' };
        this.uploadHeader = '';
        this.imageURLTemp = '';
        this.uploadHeaderTemp = '';
        this.cityName = '北京市-北京市-东城区'; //初始化城市名
        this.createSuccess = false;
        this.setuserinfo = { nick_name: '', gender: '', province: '', city: '', profile_icon: '' };
        this.setCityPickerData();
        console.log(this.navParams.get('userinfo'));
        this.allinfo = JSON.parse(this.navParams.get('userinfo'));
        if (this.allinfo.profile_icon == "") {
            this.uploadHeader = "assets/img/dufaultTX.png";
        }
        else {
            this.uploadHeader = this.confService.baseImgUrl + this.allinfo.profile_icon;
        }
        // this.uploadHeader =this.confService.baseImgUrl+ this.allinfo.profile_icon;
        this.nicknameL = this.allinfo.nick_name;
        this.sexradio = this.allinfo.gender;
        this.cityName = this.allinfo.city;
        // this.Allinfo.profile_icon;
        // this.Allinfo.province;
        this.translate.get('document').subscribe(function (res) {
            _this.translateObj = res;
        });
    }
    /**
     * 获取城市数据
     */
    DocumentPage.prototype.setCityPickerData = function () {
        var _this = this;
        this.cityPickerSev.getCitiesData()
            .then(function (data) {
            _this.cityData = data;
        });
        //
    };
    DocumentPage.prototype.applicationBusniess = function () {
        this.alert = this.alertCtrl.create({
            title: '',
            subTitle: this.translateObj.waiting,
            buttons: [this.translateObj.ok]
        });
        this.alert.present();
    };
    /**
     * 城市选择器被改变时触发的事件
     * @param event
     */
    DocumentPage.prototype.cityChange = function (event) {
        console.log(event);
        this.code = event['region'].value;
    };
    DocumentPage.prototype.goBack = function () {
        this.navCtrl.parent.select(2);
    };
    DocumentPage.prototype.saveDocument = function () {
        var _this = this;
        this.setuserinfo.nick_name = this.nicknameL;
        this.setuserinfo.gender = this.sexradio;
        // this.setuserinfo.city = this.cityName;
        this.setuserinfo.city = "";
        if (this.setuserinfo.nick_name == "") {
            this.showPopup("", this.translateObj.inputNewNickName);
            return;
        }
        this.showLoading();
        this.minservice.setUserinfo(this.setuserinfo).then(function (result) {
            debugger;
            _this.hideLoading();
            if (result != null) {
                if (result.ret_code == "1") {
                    // this.showPopupQ("", this.translateObj.modifySuccess);
                    _this.showToast(_this.translateObj.modifySuccess);
                    _this.navCtrl.popTo('MinePage');
                }
                else {
                    // this.showPopup("",result.ret_msg);
                    _this.showToast(result.ret_msg);
                }
            }
        }).catch(function (err) {
            debugger;
            console.log(err);
            _this.hideLoading();
        });
    };
    DocumentPage.prototype.nickname = function () {
        console.log("修改昵称");
        //this.showPrompt();
        this.showAlertModal();
        console.log(this.nicknameL);
    };
    DocumentPage.prototype.changesex = function () {
        console.log("修改性别");
        this.showRadio();
    };
    DocumentPage.prototype.changeAddress = function () {
        console.log("修改地址");
    };
    DocumentPage.prototype.headUpload = function () {
        this.presentActionSheet();
        // this.navCtrl.push('HeadUploadPage');
    };
    DocumentPage.prototype.presentActionSheet = function () {
        var _this = this;
        this.actionSheet = this.actionSheetCtrl.create({
            title: this.translateObj.uploadThumb,
            cssClass: 'headChoice',
            buttons: [
                {
                    text: this.translateObj.camera,
                    icon: 'ios-arrow-forward',
                    // role: 'destructive',
                    handler: function () {
                        console.log('调用照相机');
                        _this.takePhoto();
                    }
                }, {
                    text: this.translateObj.album,
                    icon: 'ios-arrow-forward',
                    handler: function () {
                        console.log('调用相册');
                        _this.getPhoto();
                    }
                }, {
                    text: this.translateObj.cancel,
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        this.actionSheet.present();
    };
    //读取相册文件夹
    DocumentPage.prototype.getPhoto = function () {
    };
    //拍照
    DocumentPage.prototype.takePhoto = function () {
        var _this = this;
        this.camera.getPicture().then(function (imageData) {
            _this.imageURLTemp = imageData;
            _this.uploadHeaderTemp = imageData;
            _this.upload(_this.imageURLTemp);
        }, function (err) {
            console.log(err);
        });
    };
    DocumentPage.prototype.upload = function (imgUrl) {
        var userid = localStorage.getItem('userid');
        this.loader = this.loadingCtrl.create({
            content: this.translateObj.uploading,
        });
        var imglen = imgUrl.split(".").length;
        if (imgUrl.split(".")[imglen - 1] != "jpg" && imgUrl.split(".")[imglen - 1] != "png") {
            this.commonUtils.alertCommon("请输入正确的类型,只支持jpg和png 类型", '');
            return;
        }
        // fileTransfer.upload(imgUrl,'',options)
        //     .then((data) => {
        //
        //         var rtnString=JSON.stringify(data);
        //         console.log(rtnString)
        //
        //     }, (err) => {
        //
        //     })
    };
    DocumentPage.prototype.showAlertModal = function () {
        var _this = this;
        var alertModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__alert_modal_alert_modal__["a" /* AlertModalPage */]);
        alertModal.onDidDismiss(function (data) {
            console.log(data);
            if (data.nikeName.length > 32) {
                var prompt_1 = _this.alertCtrl.create({
                    title: '提示',
                    message: "昵称长度不能超过32个字符!",
                    buttons: [
                        {
                            text: '确定',
                            handler: function () {
                                return;
                            }
                        }
                    ]
                });
                prompt_1.present();
                return false;
            }
            if (data) {
                _this.nicknameL = data.nikeName;
                console.log(data.nikeName);
            }
            else {
                var prompt_2 = _this.alertCtrl.create({
                    title: '提示',
                    message: "非法昵称!",
                    buttons: [
                        {
                            text: '确定',
                            handler: function () {
                                return;
                            }
                        }
                    ]
                });
                prompt_2.present();
            }
        });
        alertModal.present();
    };
    DocumentPage.prototype.showPrompt = function () {
        var _this = this;
        setTimeout(function () {
            _this.alert = _this.alertCtrl.create({
                title: _this.translateObj.modifyNickname,
                message: "",
                enableBackdropDismiss: false,
                cssClass: 'alertInpusCss',
                inputs: [
                    {
                        name: 'nicknameNC',
                        // autocomplete:'on',
                        placeholder: _this.translateObj.inputNickname,
                    },
                ],
                buttons: [
                    {
                        text: _this.translateObj.cancel,
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: _this.translateObj.ok,
                        handler: function (data) {
                            console.log('Saved clicked');
                            console.log(data);
                            if (data.nicknameNC.length > 32) {
                                var prompt_3 = _this.alertCtrl.create({
                                    title: '提示',
                                    message: "昵称长度不能超过32个字符!",
                                    buttons: [
                                        {
                                            text: '确定',
                                            handler: function () {
                                                return;
                                            }
                                        }
                                    ]
                                });
                                prompt_3.present();
                            }
                            else {
                                _this.nicknameL = data.nicknameNC;
                                console.log(data.nicknameNC);
                            }
                        }
                    }
                ]
            });
            // this.alert.addInput({
            //     type: 'text',
            //     name:'nicknameNC',
            //     placeholder: this.translateObj.inputNickname
            // })
            _this.keyboard.close();
            _this.alert.present();
        }, 0);
    };
    DocumentPage.prototype.showRadio = function () {
        var _this = this;
        this.alert = this.alertCtrl.create();
        this.alert.setTitle(this.translateObj.gender);
        this.alert.addInput({
            type: 'radio',
            label: this.translateObj.man,
            value: 'man',
            checked: true
        });
        this.alert.addInput({
            type: 'radio',
            label: this.translateObj.woman,
            value: 'woman',
        });
        this.alert.addButton(this.translateObj.cancel);
        this.alert.addButton({
            text: this.translateObj.confirm,
            handler: function (data) {
                console.log(data);
                if (data == "woman") {
                    _this.sexradio = _this.translateObj.woman;
                }
                else {
                    _this.sexradio = _this.translateObj.man;
                }
                // this.testRadioOpen = false;
                // this.testRadioResult = data;
            }
        });
        this.alert.present();
    };
    DocumentPage.prototype.showPopup = function (title, text) {
        this.alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: this.translateObj.confirm,
                }
            ]
        });
        this.alert.present();
    };
    DocumentPage.prototype.showPopupQ = function (title, text) {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: this.translateObj.confirm,
                    handler: function (data) {
                        console.log(data);
                        _this.navCtrl.parent.select(2);
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        this.alert.present();
    };
    DocumentPage.prototype.identityAuthentication = function () {
        debugger;
        if (this.allinfo.id_status == "0" || this.allinfo.id_status == "3") {
            this.navCtrl.push('IdentityAuthenticationPage');
        }
        else if (this.allinfo.id_status == "2") {
            this.commonUtils.alertCommon(this.translateObj.wiatingIdentity, '');
        }
    };
    /**
     * 是否真机环境
     */
    DocumentPage.prototype.isMobile = function () {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    };
    /**
     * 统一调用此方法显示提示信息
     * @param message 信息内容
     * @param duration 显示时长
     */
    DocumentPage.prototype.showToast = function (message, duration) {
        if (message === void 0) { message = '保存成功'; }
        if (duration === void 0) { duration = 2000; }
        if (this.isMobile()) {
            this.toast.show(message, String(duration), 'center').subscribe();
        }
        else {
            this.toastCtrl.create({
                message: message,
                duration: duration,
                position: 'middle',
                showCloseButton: false
            }).present();
        }
    };
    ;
    /**
     * 统一调用此方法显示loading
     * @param content 显示的内容
     */
    DocumentPage.prototype.showLoading = function (content) {
        if (content === void 0) { content = ''; }
        if (!this.loading) {
            var loading = this.loadingCtrl.create({
                content: content
            });
            loading.present();
            this.loading = loading;
        }
    };
    ;
    /**
     * 关闭loading
     */
    DocumentPage.prototype.hideLoading = function () {
        debugger;
        this.loading && this.loading.dismiss();
        this.loading = null;
    };
    ;
    DocumentPage.prototype.ionViewWillLeave = function () {
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
    return DocumentPage;
}());
DocumentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-document',template:/*ion-inline-start:"E:\newpays\src\pages\mine\document\document.html"*/'<ion-header no-border cache-view="false">\n    <ion-toolbar color="secondary">\n        <ion-buttons left icon-only tappable (click)="goBack()">\n            <button ion-button icon-only>\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title style="text-align: center">{{\'document.title\' | translate }}</ion-title>\n        <ion-buttons end icon-only>\n            <button ion-button icon-only>\n                <ion-icon name=""></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-item-group margin-top="15px">\n        <ion-item tappable (click)="headUpload()">\n            <p> {{\'document.myThumb\' | translate }}</p>\n            <img *ngIf="uploadHeader!=\'\'" item-right src="{{uploadHeader}}" style="width: 40px;\n    height: 40px;\n    border-radius: 50%;">\n\n            <img *ngIf="uploadHeader==\'\'" item-right src="assets/img/default.png" style="width: 40px;\n    height: 40px;\n    border-radius: 50%;">\n            <ion-note item-end>\n                <ion-icon name="ios-arrow-forward"></ion-icon>\n            </ion-note>\n        </ion-item>\n        <!--<ion-item no-lines>-->\n        <!--<p> 我的二维码</p>-->\n        <!--<ion-note item-end><ion-icon name="folder"></ion-icon> </ion-note>-->\n        <!--</ion-item>-->\n        <ion-item tappable (click)="nickname()">\n            <p>{{\'document.nickname\' | translate }}</p>\n            <ion-note item-end>{{nicknameL}}</ion-note>\n        </ion-item>\n        <ion-item tappable (click)="changesex()">\n            <p>{{\'document.gender\' | translate }}</p>\n            <ion-note item-right>{{sexradio}}</ion-note>\n            <ion-note item-end>\n                <ion-icon name="ios-arrow-forward"></ion-icon>\n            </ion-note>\n        </ion-item>\n    </ion-item-group>\n\n    <ion-item no-lines style="margin-top: 10px" tappable (click)="identityAuthentication()">\n        <p>{{\'document.indentity\' | translate }}</p>\n        <img *ngIf="allinfo.id_status !=\'1\' " item-right src="assets/img/Unauthorized.png" style="width: 17px;\n    height: 17px;\n    border-radius: 10%;">\n        <img *ngIf="allinfo.id_status ==\'1\'" item-right src="assets/img/authorized.png" style="width: 17px;\n    height: 17px;\n    border-radius: 10%;">\n        <!--<ion-note item-right>{{allinfo.id_name}}</ion-note>-->\n        <ion-note *ngIf="allinfo.id_status==\'0\'" item-right>未认证</ion-note>\n        <ion-note *ngIf="allinfo.id_status==\'2\'" item-right>审核中</ion-note>\n        <ion-note *ngIf="allinfo.id_status==\'1\'" item-right>已认证</ion-note>\n        <ion-note *ngIf="allinfo.id_status==\'3\'" item-right>审核未通过</ion-note>\n        <!--<ion-note item-end><ion-icon name="ios-arrow-forward"></ion-icon> </ion-note>-->\n    </ion-item>\n\n    <ion-item no-lines style="margin-top: 10px" tappable (click)="applicationBusniess()">\n        <ion-note item-start style="color: #0DACFA!important;">{{\'document.applyMerchant\' | translate }}</ion-note>\n    </ion-item>\n    <div class="docBtn">\n        <button ion-button full tappable (click)="saveDocument()">{{\'document.save\' | translate }}</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"E:\newpays\src\pages\mine\document\document.html"*/
    })
    //
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_city_picker_service__["a" /* CityPickerService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_service_mine_service__["a" /* MineService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__["a" /* Toast */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_9__providers_common_commonUtils__["a" /* CommonUtils */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_7__providers_util_service_conf_service__["b" /* ConfService */],
        __WEBPACK_IMPORTED_MODULE_8_ng2_translate__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_keyboard__["a" /* Keyboard */]])
], DocumentPage);

//# sourceMappingURL=document.js.map

/***/ }),

/***/ 909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentPageModule", function() { return DocumentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__document__ = __webpack_require__(1027);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_city_picker__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_translate__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DocumentPageModule = (function () {
    function DocumentPageModule() {
    }
    return DocumentPageModule;
}());
DocumentPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__document__["a" /* DocumentPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__document__["a" /* DocumentPage */]), __WEBPACK_IMPORTED_MODULE_3_ionic2_city_picker__["CityPickerModule"], __WEBPACK_IMPORTED_MODULE_4_ng2_translate__["b" /* TranslateModule */]
        ],
    })
], DocumentPageModule);

//# sourceMappingURL=document.module.js.map

/***/ })

});
//# sourceMappingURL=18.js.map