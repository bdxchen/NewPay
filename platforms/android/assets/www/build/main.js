webpackJsonp([52],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonUtils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommonUtils = (function () {
    function CommonUtils(alertCtr, loadingCtrl, platform, toast, toastCtrl) {
        this.alertCtr = alertCtr;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.toast = toast;
        this.toastCtrl = toastCtrl;
        console.log('Hello BalanceService Provider');
    }
    CommonUtils.prototype.alertCommon = function (title, message) {
        this.alert = this.alertCtr.create({
            title: title,
            message: message,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: '确定',
                    handler: function () {
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        this.alert.present();
    };
    /**
     * 是否真机环境
     */
    CommonUtils.prototype.isMobile = function () {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    };
    /**
     * 统一调用此方法显示提示信息
     * @param message 信息内容
     * @param duration 显示时长
     */
    CommonUtils.prototype.showToast = function (message, duration) {
        if (message === void 0) { message = '保存成功'; }
        if (duration === void 0) { duration = 2000; }
        if (this.isMobile()) {
            this.toast.show(message, String(duration), 'bottom').subscribe();
        }
        else {
            this.toastCtrl.create({
                message: message,
                duration: duration,
                // position: 'middle',
                showCloseButton: false
            }).present();
        }
    };
    ;
    /**
     * 统一调用此方法显示loading
     * @param content 显示的内容
     */
    CommonUtils.prototype.showLoading = function (content) {
        if (content === void 0) { content = '请稍等...'; }
        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                content: content
            });
            this.loading.present();
        }
    };
    ;
    /**
     * 关闭loading
     */
    CommonUtils.prototype.HideLoading = function () {
        debugger;
        this.loading && this.loading.dismiss();
        this.loading = null;
    };
    ;
    return CommonUtils;
}());
CommonUtils = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* ToastController */]])
], CommonUtils);

//# sourceMappingURL=commonUtils.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ConfService; });
/* unused harmony export APP_DOWNLOAD */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APK_DOWNLOAD; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfService = (function () {
    function ConfService() {
        //public baseUrl: string = 'http://192.168.0.156/payservice';
        //   public baseUrl: string = 'http://localhost:8080';
        //    public baseUrl: string = 'http://58.87.90.166';
        //    http://www.fcloudchain.com/img/profile/ff8080815fc4a5a2015fc7b68e810062_image.jpeg
        //    NP-Android-001
        //    NP-IOS-001
        this.app_Android_id = 'NP-Android-001';
        this.app_IOS_id = 'NP-IOS-001';
        this.app_version = 'V_20180319_01';
        this.baseUrlTemp = 'assets/data/';
        // public initWS:string ='ws://1.119.143.222:9090';
        this.initWS = 'ws://47.94.252.36:8090';
        this.hydrantHttp = 'http://47.94.252.36:3000';
        //本地环境
        this.baseImgUrl = 'http://www.fcloudchain.com/img';
        this.baseUrl = 'http://www.fcloudchain.com/payservice/v1/';
    }
    return ConfService;
}());
ConfService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ConfService);

var APP_DOWNLOAD = 'itms-apps://itunes.apple.com/cn/app/qq-2011/id444934666?mt=8'; //app IOS下载地址
//app IOS下载地址
var APK_DOWNLOAD = 'http://www.fcloudchain.com/app/download'; //apk下载完整地址
//# sourceMappingURL=conf-service.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpUtils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_util_service_storage_service__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_toast__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HttpUtils = (function () {
    //isDebug:boolean = false;
    function HttpUtils(http, storageService, toastCtrl, loadingCtrl, appCtrl, platform, toast) {
        this.http = http;
        this.storageService = storageService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.appCtrl = appCtrl;
        this.platform = platform;
        this.toast = toast;
        this.isDebug = false;
        console.log('Hello HttpRequestService Provider');
    }
    /*
     需要token验证的httppost
     */
    HttpUtils.prototype.httppost = function (url, request) {
        if (this.isDebug) {
            return this.httpget(url);
        }
        if (url === "" || url === null) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw("Url Error,Try again!");
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json'
            });
            headers.append('X-Auth-Token', this.storageService.read('token') + "");
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
                headers: headers
            });
            return this.http.post(url, request, options).timeout(5000);
        }
    };
    /*
     不需要token验证的httppost
     */
    HttpUtils.prototype.httpPostNoToken = function (url, request) {
        if (this.isDebug) {
            return this.httpget(url);
        }
        if (url === "" || url === null) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw("Url Error,Try again!");
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json'
            });
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
                headers: headers
            });
            debugger;
            return this.http.post(url, request, options).timeout(5000);
        }
    };
    /*
     需要token验证的httpget
     */
    HttpUtils.prototype.httpget = function (url) {
        if (url === "" || url === null) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw("Url Error,Try again!");
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json;charset=UTF-8'
            });
            headers.append('X-Auth-Token', this.storageService.read('token') + "");
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
                headers: headers
            });
            return this.http.get(url, options);
        }
    };
    /*
     不需要token验证的httpget
     */
    HttpUtils.prototype.httpgetNoToken = function (url) {
        if (url === "" || url === null) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw("Url Error,Try again!");
        }
        else {
            /*  let headers = new Headers();
             let options = new RequestOptions({
             headers: headers
             });*/
            return this.http.get(url);
        }
    };
    HttpUtils.prototype.getNotoken = function (url, paramObj) {
        var _this = this;
        // this.showLoading();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        return this.http.get(url + this.toQueryString(paramObj), new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({ headers: headers }))
            .timeout(5000)
            .toPromise()
            .then(function (res) { return _this.handleSuccess(res.json()); })
            .catch(function (error) { return _this.handleError(error); });
    };
    HttpUtils.prototype.postNotoken = function (url, paramObj) {
        var _this = this;
        // this.showLoading();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(url, this.toBodyString(paramObj), new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({ headers: headers }))
            .timeout(5000)
            .toPromise()
            .then(function (res) { return _this.handleSuccess(res.json()); })
            .catch(function (error) { return _this.handleError(error); });
    };
    HttpUtils.prototype.postBodyNotoken = function (url, paramObj, content) {
        var _this = this;
        // this.showLoading();
        // this.loading(content)
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(url, paramObj, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({ headers: headers }))
            .timeout(5000)
            .toPromise()
            .then(function (res) { return _this.handleSuccess(res.json()); })
            .catch(function (error) { return _this.handleError(error); });
    };
    HttpUtils.prototype.getTokennoParamNoLoading = function (url) {
        var _this = this;
        // this.showLoading();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('X-Auth-Token', this.storageService.read('token') + "");
        return this.http.get(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({ headers: headers }))
            .timeout(3000)
            .toPromise()
            .then(function (res) { return _this.handleSuccess1(res.json()); })
            .catch(function (error) { return _this.handleError(error); });
    };
    HttpUtils.prototype.getTokennoParam = function (url, content) {
        var _this = this;
        // this.showLoading();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('X-Auth-Token', this.storageService.read('token') + "");
        return this.http.get(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({ headers: headers }))
            .timeout(5000)
            .toPromise()
            .then(function (res) { return _this.handleSuccess(res.json()); })
            .catch(function (error) { return _this.handleError(error); });
    };
    HttpUtils.prototype.getToken = function (url, paramObj, content) {
        var _this = this;
        // this.showLoading();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('X-Auth-Token', this.storageService.read('token') + "");
        return this.http.get(url + this.toQueryString(paramObj))
            .timeout(5000)
            .toPromise()
            .then(function (res) { return _this.handleSuccess(res.json()); })
            .catch(function (error) { return _this.handleError(error); });
    };
    HttpUtils.prototype.postToken = function (url, paramObj, content) {
        var _this = this;
        // this.showLoading();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        headers.append('X-Auth-Token', this.storageService.read('token') + "");
        return this.http.post(url, this.toBodyString(paramObj), new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({ headers: headers }))
            .timeout(5000)
            .toPromise()
            .then(function (res) { return _this.handleSuccess(res.json()); })
            .catch(function (error) { return _this.handleError(error); });
    };
    HttpUtils.prototype.postBodyToken = function (url, paramObj, content) {
        var _this = this;
        // this.showLoading();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-Auth-Token', this.storageService.read('token') + "");
        return this.http.post(url, paramObj, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({ headers: headers }))
            .timeout(5000)
            .toPromise()
            .then(function (res) { return _this.handleSuccess(res.json()); })
            .catch(function (error) { return _this.handleError(error); });
    };
    HttpUtils.prototype.handleSuccess = function (result) {
        // this.hideLoading();
        if (result.ret_code == "1") {
            // alert(result.ret_msg);//这里使用ToastController
            // this.TaostGlobal(result.ret_msg)
        }
        else if (result.ret_code = '0') {
            // alert(result.ret_msg);//这里使用ToastController
        }
        return result;
    };
    HttpUtils.prototype.handleSuccess1 = function (result) {
        // this.hideLoading();
        if (result.ret_code == "1") {
            // alert(result.ret_msg);//这里使用ToastController
            // this.TaostGlobal(result.ret_msg)
        }
        else if (result.ret_code = '0') {
            // alert(result.ret_msg);//这里使用ToastController
            // this.TaostGlobal(result.ret_msg)
        }
        return result;
    };
    HttpUtils.prototype.handleError = function (error) {
    };
    HttpUtils.prototype.TaostGlobal = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
        });
        toast.present();
    };
    /**
     * 是否真机环境
     */
    HttpUtils.prototype.isMobile = function () {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    };
    /**
     * 统一调用此方法显示提示信息
     * @param message 信息内容
     * @param duration 显示时长
     */
    HttpUtils.prototype.showToast = function (message, duration) {
        if (message === void 0) { message = '保存成功'; }
        if (duration === void 0) { duration = 2000; }
        if (this.isMobile()) {
            this.toast.show(message, String(duration), 'bottom').subscribe();
        }
        else {
            this.toastCtrl.create({
                message: message,
                duration: duration,
                // position: 'middle',
                showCloseButton: false
            }).present();
        }
    };
    ;
    /**
     * 统一调用此方法显示loading
     * @param content 显示的内容
     */
    HttpUtils.prototype.showLoading = function (content) {
        if (content === void 0) { content = ''; }
        if (!this.loading) {
            var loading = this.loadingCtrl.create({
                content: "请稍等..."
            });
            loading.present();
            this.loading = loading;
        }
    };
    ;
    /**
     * 关闭loading
     */
    HttpUtils.prototype.hideLoading = function () {
        this.loading && this.loading.dismiss();
        this.loading = null;
    };
    ;
    // private loading(content){
    //
    //     this.loader = this.loadingCtr.create({
    //         // spinner: 'hide',
    //         content:  content,
    //         // duration: 3000
    //     });
    //     this.loader.present();
    // }
    /**
     * @param obj　参数对象
     * @return {string}　参数字符串
     * @example
     *  声明: var obj= {'name':'',age:23};
     *  调用: toQueryString(obj);
     *  返回: "?name=%E5%B0%8F%E5%86%9B&age=23"
     */
    HttpUtils.prototype.toQueryString = function (obj) {
        var ret = [];
        for (var key in obj) {
            key = encodeURIComponent(key);
            var values = obj[key];
            if (values && values.constructor == Array) {
                var queryValues = [];
                for (var i = 0, len = values.length, value = void 0; i < len; i++) {
                    value = values[i];
                    queryValues.push(this.toQueryPair(key, value));
                }
                ret = ret.concat(queryValues);
            }
            else {
                ret.push(this.toQueryPair(key, values));
            }
        }
        return '?' + ret.join('&');
    };
    /**
     *
     * @param obj
     * @return {string}
     *  声明: var obj= {'name':'',age:23};
     *  调用: toQueryString(obj);
     *  返回: "name=%E5%B0%8F%E5%86%9B&age=23"
     */
    HttpUtils.prototype.toBodyString = function (obj) {
        var ret = [];
        for (var key in obj) {
            key = encodeURIComponent(key);
            var values = obj[key];
            if (values && values.constructor == Array) {
                var queryValues = [];
                for (var i = 0, len = values.length, value = void 0; i < len; i++) {
                    value = values[i];
                    queryValues.push(this.toQueryPair(key, value));
                }
                ret = ret.concat(queryValues);
            }
            else {
                ret.push(this.toQueryPair(key, values));
            }
        }
        return ret.join('&');
    };
    HttpUtils.prototype.toQueryPair = function (key, value) {
        if (typeof value == 'undefined') {
            return key;
        }
        return key + '=' + encodeURIComponent(value === null ? '' : String(value));
    };
    return HttpUtils;
}());
HttpUtils = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_7__providers_util_service_storage_service__["a" /* StorageService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_toast__["a" /* Toast */]])
], HttpUtils);

//# sourceMappingURL=http-utils.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_service_conf_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_service_http_utils__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(confService, httpUtils) {
        this.confService = confService;
        this.httpUtils = httpUtils;
        console.log('Hello AuthService Provider');
    }
    AuthService.prototype.login = function (request) {
        return this.httpUtils.postBodyNotoken(this.confService.baseUrl + 'auth/login', request, '正在登录，等稍等...');
    };
    AuthService.prototype.logout = function (request) {
        var obj = { "userid": request };
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'auth/logout', obj, '');
    };
    AuthService.prototype.register = function (request) {
        console.log(JSON.stringify(request));
        var proxyUrl = "/api";
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'auth/register', request, '').then(function (res) {
            //解析后台服务返回的JSON为消息结构
            var data = res;
            console.log(data);
            return data;
        });
    };
    AuthService.prototype.getCode = function (request) {
        console.log(JSON.stringify(request));
        return this.httpUtils.postBodyNotoken(this.confService.baseUrl + 'authcaptcha/sms', request, '').then(function (res) {
            //解析后台服务返回的JSON为消息结构
            var data = res;
            console.log(data);
            return data;
        });
    };
    AuthService.prototype.orderSearch = function () {
        debugger;
        return this.httpUtils.httpget(this.confService.baseUrl + 'topup/orders/newly').map(function (res) {
            var data = res;
            return data;
        });
    };
    AuthService.prototype.checkOrders = function () {
        return this.httpUtils.httpget(this.confService.baseUrl + 'topup/orders').map(function (res) {
            var data = res;
            return data;
        });
    };
    //查询当前账户是否有资金密码
    AuthService.prototype.checkFundingPassword = function () {
        return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'users/security/financial/exist').then(function (res) {
            var data = res;
            return data;
        });
    };
    // /users/userinfo 查询用户个人资料
    AuthService.prototype.userInfo = function () {
        return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'users/userinfo');
    };
    //4 资金密码修改
    AuthService.prototype.changeFinancialPwd = function (req) {
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'users/security/financial/modification', req, '').then(function (res) {
            var data = res;
            return data;
        });
    };
    //4 登陆密码修改
    AuthService.prototype.changeLoginPwdSer = function (req) {
        console.log(req);
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'users/security/login/modification', req, '').then(function (res) {
            var data = res;
            return data;
        });
    };
    //获取重置资金密码验证短信 已经登录
    AuthService.prototype.getZiJinPwdValid = function () {
        debugger;
        // console.log(JSON.stringify(request));
        return this.httpUtils.getTokennoParam(this.confService.baseUrl + 'users/security/financial/resetcaptcha', '').then(function (res) {
            //解析后台服务返回的JSON为消息结构
            var data = res;
            console.log(data);
            return data;
        });
    };
    //重置资金密码 已经登录
    AuthService.prototype.getZiJinPwd = function (request) {
        debugger;
        // console.log(JSON.stringify(request));
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'users/security/financial/resetpwd', request, '').then(function (res) {
            //解析后台服务返回的JSON为消息结构
            var data = res;
            console.log(data);
            return data;
        });
    };
    //获取重置密码验证短信
    AuthService.prototype.getResetLoginPwCode = function (request) {
        console.log(request);
        return this.httpUtils.postBodyNotoken(this.confService.baseUrl + 'users/security/login/resetcaptcha', request, '').then(function (res) {
            //解析后台服务返回的JSON为消息结构
            var data = res;
            console.log(data);
            return data;
        });
    };
    //验证  重置登录密码  的验证码是否正确
    AuthService.prototype.getveryficaptcha = function (req) {
        return this.httpUtils.postBodyNotoken(this.confService.baseUrl + 'users/security/login/veryficaptcha', req, '').then(function (res) {
            console.log(res);
            var data = res;
            return data;
        });
    };
    //发送修改登陆密码验证码
    AuthService.prototype.getloginCaptchaM = function () {
        return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'users/security/login/modificationcaptcha').then(function (res) {
            console.log(res);
            var data = res;
            return data;
        });
    };
    //发送修改资金密码验证码
    AuthService.prototype.getfinancialCaptchaM = function () {
        return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'users/security/financial/modificationcaptcha').then(function (res) {
            console.log(res);
            var data = res;
            return data;
        });
    };
    //重置登录密码
    AuthService.prototype.resetLoginPwdSer = function (req) {
        console.log(JSON.stringify(req));
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'users/security/login/resetpwd', req, '').then(function (res) {
            var data = res;
            return data;
        });
    };
    //订单助手
    AuthService.prototype.orderSMG = function (req) {
        console.log(JSON.stringify(req));
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'assistant/list', req, '').then(function (res) {
            var data = res;
            return data;
        });
    };
    //订单详情
    AuthService.prototype.orderDetail = function (type, req) {
        console.log(JSON.stringify(req));
        return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'assistant/' + type + '/' + req).then(function (res) {
            var data = res;
            return data;
        });
    };
    //订单详情
    AuthService.prototype.verifytoken = function () {
        return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'verifytoken').then(function (res) {
            var data = res;
            return data;
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__util_service_conf_service__["b" /* ConfService */], __WEBPACK_IMPORTED_MODULE_3__util_service_http_utils__["a" /* HttpUtils */]])
], AuthService);

//# sourceMappingURL=user-auth-service.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StorageService = (function () {
    function StorageService() {
    }
    StorageService.prototype.write = function (key, value) {
        if (value) {
            //value = ""+ value
            value = value;
        }
        localStorage.setItem(key, value);
    };
    StorageService.prototype.read = function (key) {
        var value = localStorage.getItem(key);
        if (value && value != "undefined" && value != "null") {
            return value;
        }
        return null;
    };
    return StorageService;
}());
StorageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], StorageService);

//# sourceMappingURL=storage-service.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_service_conf_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_service_http_utils__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_commonUtils__ = __webpack_require__(130);
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
 * Created by wupeng88163@163.com on 12-19.
 */








var NativeService = (function () {
    function NativeService(platform, alertCtrl, transfer, appVersion, file, confService, httpUtils, commonUtils, loadingCtrl) {
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.transfer = transfer;
        this.appVersion = appVersion;
        this.file = file;
        this.confService = confService;
        this.httpUtils = httpUtils;
        this.commonUtils = commonUtils;
        this.loadingCtrl = loadingCtrl;
        this.appId = "";
        this.text = '下载进度：0% ';
        // Schedule a single notification
        // this.localNotifications.schedule({
        //     id: 1,
        //     text: 'Single ILocalNotification',
        //     sound: null,
        //     data: { secret: '1011010101' }
        // });
    }
    /**
     * 检查app是否需要升级
     */
    NativeService.prototype.detectionUpgrade = function () {
        var _this = this;
        //这里连接后台获取app最新版本号,然后与当前app版本号(this.getVersionNumber())对比
        //版本号不一样就需要申请,不需要升级就return
        // console.log(this.achieveNewVersion());
        //  let appId = this.confService.app_Android_id;
        if (!this.isMobile()) {
            this.appId = this.confService.app_Android_id;
        }
        if (this.isAndroid()) {
            this.appId = this.confService.app_Android_id;
        }
        if (this.isIos()) {
            this.appId = this.confService.app_IOS_id;
        }
        var date = new Date();
        this.nowDate = this.formatDate(date);
        console.log(this.nowDate);
        var req = { "app_id": this.appId };
        this.achieveNewVersion(req).subscribe(function (res) {
            console.log(JSON.parse(res).data.version_no);
            _this.downloadUrl = JSON.parse(res).data.url;
            console.log(_this.downloadUrl);
            if (_this.isMobile()) {
                _this.downloadUrl = JSON.parse(res).data.url;
                console.log(_this.getVersionNumber());
                _this.getVersionNumber().then(function (version) {
                    if (JSON.parse(res).data.version_no != version) {
                        // this.getVersionNumber()
                        _this.alert = _this.alertCtrl.create({
                            title: '升级',
                            subTitle: '发现新版本,是否立即升级？',
                            buttons: [{ text: '取消' },
                                {
                                    text: '更新',
                                    handler: function () {
                                        _this.downloadApp();
                                    }
                                }
                            ]
                        }).present();
                    }
                    else {
                        return;
                    }
                });
            }
        }, function (err) {
            console.log(err);
            // this.commonUtils.alertCommon("提示","读取版本信息失败！")
        });
    };
    NativeService.prototype.achieveNewVersion = function (req) {
        return this.httpUtils.httppost(this.confService.baseUrl + '/app/version', JSON.stringify(req)).map(function (res) {
            console.log(res);
            return res._body;
        }, function (err) {
            console.log(err);
        });
    };
    /**
     * 下载安装app
     */
    NativeService.prototype.downloadApp = function () {
        var _this = this;
        if (this.isAndroid()) {
            // this.alert = this.alertCtrl.create({
            //     title: '下载进度：0%',
            //     enableBackdropDismiss: false,
            //     buttons: [
            //         {
            //             text: '后台下载',
            //             handler: () => {
            //                 // this.localNotifications.schedule({
            //                 //     id: 10000,
            //                 //     text: this.text,
            //                 //     sound: this.isAndroid() ? 'file://sound1.mp3': 'file://beep1.caf'
            //                 // });
            //             }
            //         }
            //     ]
            //     // buttons: ['后台下载']
            // });
            // this.alert.present();
            var fileTransfer = this.transfer.create();
            var date = new Date();
            this.nowDate = this.formatDate(date);
            var apk = this.file.externalRootDirectory + 'newPay' + this.nowDate + '.apk'; //apk保存的目录
            var loading_1 = this.loadingCtrl.create({
                content: '下载进度：0%',
                dismissOnPageChange: false
            });
            loading_1.present();
            var no_1 = 1;
            fileTransfer.onProgress(function (event) {
                if (event.lengthComputable) {
                    no_1 = Math.floor(event.loaded / event.total * 100);
                }
                // let num = Math.floor(event.loaded / event.total * 100);
                // if (num === 100) {
                //     // this.alert.dismiss();
                //     loading.dismiss();
                // } else {
                //     let title = document.getElementsByClassName('alert-title')[0];
                //     title && (title.innerHTML = '下载进度：' + num + '%');
                // }
            });
            var timer_1 = setInterval(function () {
                loading_1.setContent("下载进度：" + Math.floor(no_1) + "%");
                if (no_1 >= 99) {
                    clearInterval(timer_1);
                }
            }, 300);
            fileTransfer.download(__WEBPACK_IMPORTED_MODULE_5__util_service_conf_service__["a" /* APK_DOWNLOAD */] + this.downloadUrl, apk).then(function (entry) {
                // window['install'].install(apk.replace('file://', ''));
                if (timer_1)
                    clearInterval(timer_1);
                loading_1.dismiss();
                // 打开下载下来的APP
                // this.fileOpener.open(apk, 'application/vnd.android.package-archive')
                //     .then(() => console.log('File is opened')).catch(err=>{
                //     console.log("打开apk")
                // })
            }).catch(function (err) {
                console.log(err);
                if (timer_1)
                    clearInterval(timer_1);
                loading_1.dismiss();
                _this.loadingCtrl.create({ spinner: 'hide', content: '出错了，请尝试从应用市场安装更新！', duration: 2000 }).present();
            });
        }
        if (this.isIos()) {
            // this.openUrlByBrowser(APP_DOWNLOAD);
        }
    };
    NativeService.prototype.formatDate = function (date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '-' + m + '-' + d;
    };
    ;
    /**
     * 是否真机环境
     * @return {boolean}
     */
    NativeService.prototype.isMobile = function () {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    };
    /**
     * 是否android真机环境
     * @return {boolean}
     */
    NativeService.prototype.isAndroid = function () {
        return this.isMobile() && this.platform.is('android');
    };
    /**
     * 是否ios真机环境
     * @return {boolean}
     */
    NativeService.prototype.isIos = function () {
        return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
    };
    /**
     * 获得app版本号,如0.01
     * @description  对应/config.xml中version的值
     * @returns {Promise<string>}
     */
    NativeService.prototype.getVersionNumber = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.appVersion.getVersionNumber().then(function (value) {
                console.log(value);
                resolve(value);
            }).catch(function (err) {
                console.log('getVersionNumber:' + err);
            });
        });
    };
    //js判断是否是苹果设备
    NativeService.prototype.checkIsAppleDevice = function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        var ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        var iPad = u.indexOf('iPad') > -1;
        var iPhone = u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1;
        if (ios || iPad || iPhone) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * 获取网络类型 如`unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
     */
    NativeService.prototype.getNetworkType = function () {
        if (!this.isMobile()) {
            return 'wifi';
        }
        // return this.network.type;
    };
    /**
     * 判断是否有网络
     */
    NativeService.prototype.isConnecting = function () {
        return this.getNetworkType() != 'none';
    };
    //js判断是否为Android设备
    NativeService.prototype.checkIsAndroidDevice = function () {
        var u = navigator.userAgent;
        if (u.indexOf('Android') > -1 || u.indexOf('Adr') > -1) {
            return true;
        }
        else {
            return false;
        }
    };
    // if (checkIsAppleDevice()) {
    //     window.location.href = "https://itunes.apple.com/us/app/998dian-wan-cheng/id1135278767?mt=8";//跳转到AppStore或者Android应用市场
    // } else {
    //     window.location.href = "http://mbdownload.998dw.net/998dwcPackage/android/DWC_GW.apk";//打开apk
    // }
    //js判断终端访问
    NativeService.prototype.checkIsTerminal = function () {
        var u = navigator.userAgent;
        var trident = u.indexOf('Trident') > -1; //IE内核
        var presto = u.indexOf('Presto') > -1; //opera内核
        var webkit = u.indexOf('AppleWebKit') > -1; //苹果。谷歌内核
        var gecko = u.indexOf('Gecko') > -1; //火狐内核
        var mobile = !!u.match(/AppleWebjit.*Mobile,*/); //移动终端
        var android = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //Android终端
        var ios = !!u.match(/\(i[^;]( U;)? CPU.+Mac OS X/); //ios终端
        var iphone = u.indexOf('iPhone') > -1; //iPhone或者QQHD浏览器
        var ipad = u.indexOf('iPad') > -1; //iPad
        var webapp = u.indexOf('Safari') == -1; //web应用程序没有头部与底部
        var weixin = u.indexOf('MicroMessenger') > -1; //微信
        // let qq = u.match(/\sQQ/i) == "qq";//QQ
    };
    return NativeService;
}());
NativeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__["a" /* Transfer */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__["a" /* AppVersion */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_5__util_service_conf_service__["b" /* ConfService */],
        __WEBPACK_IMPORTED_MODULE_6__util_service_http_utils__["a" /* HttpUtils */],
        __WEBPACK_IMPORTED_MODULE_7__common_commonUtils__["a" /* CommonUtils */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
], NativeService);

//# sourceMappingURL=NativeService.js.map

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 228;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/auth/forget-password/forgetpassword.module": [
		870,
		51
	],
	"../pages/auth/forget-password/password-reset/password-reset.module": [
		871,
		50
	],
	"../pages/auth/login/login.module": [
		872,
		49
	],
	"../pages/auth/password/password.module": [
		874,
		48
	],
	"../pages/auth/register/fundpassword/fundpassword.module": [
		873,
		47
	],
	"../pages/auth/register/register.module": [
		875,
		46
	],
	"../pages/balance/balance-detail/balance-detail.module": [
		877,
		45
	],
	"../pages/balance/charging-money/charging-money.module": [
		876,
		44
	],
	"../pages/balance/currency-detail/currency-detail.module": [
		878,
		43
	],
	"../pages/balance/currency/currency.module": [
		879,
		1
	],
	"../pages/balance/set-cu-money/set-cu-money.module": [
		880,
		42
	],
	"../pages/country-code/country-code.module": [
		881,
		41
	],
	"../pages/financial/flowdetail/bill-detail/bill-detail.module": [
		882,
		40
	],
	"../pages/financial/flowdetail/flowdetail.module": [
		883,
		39
	],
	"../pages/financial/pay/account-pay/account-pay.module": [
		884,
		38
	],
	"../pages/financial/receive/receive-success/receiv-success.module": [
		885,
		37
	],
	"../pages/financial/receive/receive.module": [
		888,
		0
	],
	"../pages/financial/receive/request-receive/request-receive.module": [
		889,
		36
	],
	"../pages/financial/receive/request-setting/request-setting.module": [
		887,
		35
	],
	"../pages/financial/receive/set-money/set-money.module": [
		886,
		34
	],
	"../pages/financial/topup/topup.module": [
		890,
		33
	],
	"../pages/financial/transfer/transfer.module": [
		891,
		4
	],
	"../pages/financial/transfer2/transfer2.module": [
		893,
		32
	],
	"../pages/financial/transferreceipt/transferreceipt.module": [
		892,
		31
	],
	"../pages/financial/withdraw/withdraw-success/withdraw-success.module": [
		895,
		30
	],
	"../pages/financial/withdraw/withdraw.module": [
		894,
		3
	],
	"../pages/friends/frienddetail/frienddetail.module": [
		900,
		29
	],
	"../pages/friends/friends.module": [
		899,
		2
	],
	"../pages/home/home.module": [
		896,
		28
	],
	"../pages/home/opening/openging.module": [
		897,
		27
	],
	"../pages/invitation/invitation.module": [
		901,
		26
	],
	"../pages/mine/about/about.module": [
		898,
		25
	],
	"../pages/mine/alipay/alipay-add/alipay-add.module": [
		903,
		24
	],
	"../pages/mine/alipay/alipay.module": [
		902,
		23
	],
	"../pages/mine/bankcard-add/bankcard-add.module": [
		905,
		22
	],
	"../pages/mine/bankcard/bankcard.module": [
		911,
		21
	],
	"../pages/mine/changepwd/changepwd.module": [
		907,
		20
	],
	"../pages/mine/contact/contact.module": [
		904,
		19
	],
	"../pages/mine/document/document.module": [
		906,
		18
	],
	"../pages/mine/document/identity-authentication/identity-authentication.module": [
		910,
		17
	],
	"../pages/mine/head-upload/head-upload.module": [
		909,
		16
	],
	"../pages/mine/mine.module": [
		908,
		15
	],
	"../pages/mine/my-wallet/backups-key/backups-key.module": [
		913,
		14
	],
	"../pages/mine/my-wallet/my-wallet.module": [
		915,
		13
	],
	"../pages/mine/my-wallet/recovery-import/recovery-import.module": [
		912,
		12
	],
	"../pages/mine/mymessage/mymessage.module": [
		916,
		11
	],
	"../pages/mine/setting/setting.module": [
		917,
		10
	],
	"../pages/only-test/only-test.module": [
		914,
		9
	],
	"../pages/reset-z-jpsd/reset-z-jpsd.module": [
		920,
		8
	],
	"../pages/scan/scan.module": [
		918,
		7
	],
	"../pages/setting-language/setting-language.module": [
		921,
		6
	],
	"../pages/tabs/tabs.module": [
		919,
		5
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 271;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_cell__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexSectionComponent = (function () {
    function IndexSectionComponent(elementRef) {
        this.elementRef = elementRef;
        this._current = false;
    }
    IndexSectionComponent.prototype.getElementRef = function () {
        return this.elementRef;
    };
    IndexSectionComponent.prototype.ngAfterViewChecked = function () {
        // setTimeout(()=>{
        //   if (this._listOfIndexCell && this._listOfIndexCell.length) {
        //     const listArray = this._listOfIndexCell.toArray();
        //     listArray[listArray.length - 1]._lastItem = true;
        //   }
        // })
    };
    return IndexSectionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], IndexSectionComponent.prototype, "index", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_1__index_cell__["a" /* IndexCellComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], IndexSectionComponent.prototype, "_listOfIndexCell", void 0);
IndexSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ion-index-section',
        template: "\n      <div class=\"index-section\" [class.index-section-current]=\"_current\">\n            <!-- group-->\n            <div class=\"index-section-index\" >\n              {{index}}\n            </div>\n\n            <!--\u5206\u7EC4\u4E0B\u7684\u8BE6\u7EC6\u5185\u5BB9-->\n            <div class=\"index-section-main\">\n              <ng-content>\n\n              </ng-content>\n            </div>\n        </div>\n    ",
        styles: ["\n    .index-section-index{\n      margin: 0;\n      padding: 2px 10px 2px 10px;\n      background-color: #fafafa;\n      border-bottom: 1px solid #dedede;\n    }\n\n    .index-section-main{\n      /*border-bottom: 1px solid #dedede;*/\n    }\n\n    .index-section-current .index-section-index{\n        position: sticky;\n        position: -webkit-sticky;\n        top: 0px;\n        left: 0px;\n        width: 100%;\n        z-index: 3;\n        transform: translateZ(0px);\n    }\n  "]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], IndexSectionComponent);

//# sourceMappingURL=index-section.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexCellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexCellComponent = (function () {
    function IndexCellComponent() {
    }
    IndexCellComponent.prototype.ngOnInit = function () { };
    return IndexCellComponent;
}());
IndexCellComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ion-index-cell',
        template: "\n      <div class=\"index-cell\">\n        <div class=\"index-cell-item\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    ",
        styles: ["\n      .index-cell{\n        background-color: #fff;\n        padding-left:10px\n      }\n\n      .index-cell-item{\n        box-sizing: border-box;\n        color: inherit;\n        min-height: 48px;\n        display: block;\n        overflow: hidden;\n        position: relative;\n        text-decoration: none;\n        border-bottom: 1px solid #dcd8d8;\n        width: 100%;\n        display: flex;\n        align-items: center;\n      }\n    "]
    }),
    __metadata("design:paramtypes", [])
], IndexCellComponent);

//# sourceMappingURL=index-cell.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_service_conf_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_service_http_utils__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_account_transfer_msg__ = __webpack_require__(560);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransferService = (function () {
    function TransferService(confService, httpUtils) {
        this.confService = confService;
        this.httpUtils = httpUtils;
        console.log('Hello TransferService Provider');
    }
    TransferService.prototype.checkPayee = function (request) {
        console.log(JSON.stringify(request));
        var req = { uid: request.to_userid, un: request.to_userid };
        return this.httpUtils.postBodyToken(this.confService.baseUrl + '/app/auth/checkpyaee', req, '').then(function (res) {
            //解析后台服务返回的JSON为消息结构
            var data = res;
            if (typeof (data) == "object" && Object.prototype.toString.call(data).toLowerCase() == "[object object]" && !data.length) {
                console.log(res);
                var ret = new __WEBPACK_IMPORTED_MODULE_3__messages_account_transfer_msg__["a" /* AckCheckPayee */]();
                ret.ret_code = data.rc;
                ret.ret_msg = data.rm;
                return ret;
            }
            return null;
        });
    };
    // 请求收款方账户有效性验证
    TransferService.prototype.checkUserid = function (request) {
        debugger;
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'users/verify', request, '');
    };
    TransferService.prototype.submitTransInfo = function (request) {
        debugger;
        console.log(JSON.stringify(request));
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'transfer/orders', request, '').then(function (res) {
            //解析后台服务返回的JSON为消息结构
            var data = res;
            return data;
        });
    };
    // /withdraw/coin
    TransferService.prototype.submitwithdrawInfo = function (request) {
        debugger;
        console.log(JSON.stringify(request));
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'withdraw/coin', request, '').then(function (res) {
            //解析后台服务返回的JSON为消息结构
            var data = res;
            return data;
        });
    };
    //设置资金密码
    TransferService.prototype.setFundPassword = function (request) {
        debugger;
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'users/security/financial', request, '').then(function (res) {
            //解析后台服务返回的JSON为消息结构
            var data = res;
            return data;
        });
    };
    TransferService.prototype.transCompleted = function (request) {
        console.log(JSON.stringify(request));
        var req = { uid: request.userid, ono: request.order_no, tid: request.trans_id };
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'app/auth/trans-completed', req, '').then(function (res) {
            return res;
        });
    };
    TransferService.prototype.checkBill = function () {
        debugger;
        return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'transfer/orders').then(function (res) {
            return res;
        });
    };
    TransferService.prototype.digitalCurrency = function (request) {
        debugger;
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'account/digitals/ba', request, '').then(function (res) {
            //解析后台服务返回的JSON为消息结构
            var data = res;
            return data;
        });
    };
    TransferService.prototype.withdrawal = function (request) {
        debugger;
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'withdraw/confirm', request, '').then(function (res) {
            //解析后台服务返回的JSON为消息结构
            var data = res;
            return data;
        });
    };
    //订单查询
    TransferService.prototype.foundAssets = function () {
        debugger;
        return this.httpUtils.httpget(this.confService.baseUrl + 'topup/orders').map(function (res) {
            return res.json();
        });
    };
    return TransferService;
}());
TransferService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__util_service_conf_service__["b" /* ConfService */], __WEBPACK_IMPORTED_MODULE_2__util_service_http_utils__["a" /* HttpUtils */]])
], TransferService);

//# sourceMappingURL=account-transfer-service.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoveryImportService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_service_conf_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_service_http_utils__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecoveryImportService = (function () {
    function RecoveryImportService(confService, httpUtils) {
        this.confService = confService;
        this.httpUtils = httpUtils;
        this.TemprecImp = { password: '' };
        console.log('Hello AccountPubService Provider');
    }
    RecoveryImportService.prototype.recImport = function (request) {
        this.TemprecImp.password = request;
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'users/security/financial/verify', this.TemprecImp, '');
    };
    return RecoveryImportService;
}());
RecoveryImportService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__util_service_conf_service__["b" /* ConfService */], __WEBPACK_IMPORTED_MODULE_2__util_service_http_utils__["a" /* HttpUtils */]])
], RecoveryImportService);

//# sourceMappingURL=recovery-import-service.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryNumService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_service_conf_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_service_http_utils__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CountryNumService = (function () {
    function CountryNumService(confService, httpUtils) {
        this.confService = confService;
        this.httpUtils = httpUtils;
        console.log('Hello BalanceService Provider');
    }
    CountryNumService.prototype.getCountryNumber = function () {
        //console.log(JSON.stringify(request));
        return this.httpUtils.getNotoken(this.confService.baseUrlTemp + 'country/chineseCountryJson.json', '').then(function (res) {
            //解析后台服务返回的JSON为消息结构
            console.log(res);
            var data = res;
            return data;
        });
    };
    return CountryNumService;
}());
CountryNumService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__util_service_conf_service__["b" /* ConfService */], __WEBPACK_IMPORTED_MODULE_3__util_service_http_utils__["a" /* HttpUtils */]])
], CountryNumService);

//# sourceMappingURL=country-num-service.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MineService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_service_conf_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_service_http_utils__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MineService = (function () {
    function MineService(confService, httpUtils) {
        this.confService = confService;
        this.httpUtils = httpUtils;
        console.log('Hello FriendService Provider');
    }
    //查询当前账户绑定的支付宝账户
    MineService.prototype.aliacclist = function () {
        console.log('aliacclist begin');
        debugger;
        return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'account/thirdparts').then(function (res) {
            return res;
        });
    };
    //解绑支付宝账户
    MineService.prototype.deleteAlipay = function (request) {
        debugger;
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'account/thirdparts/unbind', request, '').then(function (res) {
            var data = res;
            return data;
        });
    };
    //查询当前绑定的有银行卡
    MineService.prototype.bankCardcclist = function () {
        debugger;
        return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'account/banks').then(function (res) {
            return res;
        });
    };
    //解绑银行卡
    MineService.prototype.deleteBankCard = function (request) {
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'account/banks/unbind', request, '').then(function (res) {
            var data = res;
            return data;
        });
    };
    //查询默认的用户资料
    MineService.prototype.muserInfocclist = function () {
        debugger;
        return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'users/userinfo').then(function (res) {
            return res;
        });
    };
    //修改用户资料
    MineService.prototype.setUserinfo = function (request) {
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'users/updateuser', request, '').then(function (res) {
            var data = res;
            return data;
        });
    };
    //上传头像
    MineService.prototype.uploadHeader = function (id) {
        var request = { "id": id };
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'users/icon', request, '').then(function (res) {
            var data = res;
            return data;
        });
    };
    //添加支付宝账号
    MineService.prototype.addAlipay = function (request) {
        debugger;
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'account/thirdparts', request, '').then(function (res) {
            //解析后台服务返回的JSON为消息结构
            var data = res;
            return data;
        });
    };
    //添加银行卡
    MineService.prototype.addBankCard = function (request) {
        debugger;
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'account/banks', JSON.stringify(request), '').then(function (res) {
            //解析后台服务返回的JSON为消息结构
            var data = res;
            return data;
        });
    };
    //自动补充某行银行卡 信息
    MineService.prototype.bankbinXXCard = function (id) {
        debugger;
        var request = { "bin": id };
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'account/banks/bankbin', request, '').then(function (res) {
            //解析后台服务返回的JSON为消息结构
            var data = res;
            return data;
        });
    };
    return MineService;
}());
MineService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__util_service_conf_service__["b" /* ConfService */],
        __WEBPACK_IMPORTED_MODULE_3__util_service_http_utils__["a" /* HttpUtils */]])
], MineService);

//# sourceMappingURL=mine-service.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackbuttonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_minimize__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BackbuttonService = (function () {
    //构造函数 依赖注入
    function BackbuttonService(platform, appCtrl, toastCtrl, appMinimize, keyboard, alertCtr, statusbar, splashscreen
        // private ionicApp:IonicApp
    ) {
        var _this = this;
        this.platform = platform;
        this.appCtrl = appCtrl;
        this.toastCtrl = toastCtrl;
        this.appMinimize = appMinimize;
        this.keyboard = keyboard;
        this.alertCtr = alertCtr;
        this.statusbar = statusbar;
        this.splashscreen = splashscreen;
        //控制硬件返回按钮是否触发，默认false
        this.backButtonPressed = false;
        platform.ready().then(function () {
            _this.statusbar.styleDefault();
            _this.splashscreen.hide();
        }).catch();
    }
    //注册方法registerBackButtonAction
    BackbuttonService.prototype.registerBackButtonAction = function (tabRef) {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            localStorage.getItem("flagBack");
            //获取NavController
            debugger;
            if (_this.keyboard.isOpen()) {
                _this.keyboard.close();
                return;
            }
            var activeNav = _this.appCtrl.getActiveNav();
            console.log(_this.appCtrl);
            console.log(activeNav);
            //如果可以返回上一页，则执行pop
            if (localStorage.getItem("flagBack") == "1") {
                if (tabRef == null || tabRef._selectHistory[tabRef._selectHistory.length - 1] === tabRef.getByIndex(0).id) {
                    //执行退出
                    _this.showExit();
                }
                else {
                    //选择首页第一个的标签
                    // this.alert.dismiss();
                    tabRef.select(0);
                }
            }
            else {
                if (activeNav.canGoBack()) {
                    activeNav.pop();
                }
                else {
                    if (tabRef == null || tabRef._selectHistory[tabRef._selectHistory.length - 1] === tabRef.getByIndex(0).id) {
                        //执行退出
                        _this.showExit();
                    }
                    else {
                        //选择首页第一个的标签
                        // this.alert.dismiss();
                        tabRef.select(0);
                    }
                }
            }
        });
    };
    BackbuttonService.prototype.alertT = function (content) {
        this.alert = this.alertCtr.create({
            // spinner: 'hide',
            title: '',
            enableBackdropDismiss: false,
        });
        this.alert.present();
    };
    //退出应用方法
    BackbuttonService.prototype.showExit = function () {
        var _this = this;
        //如果为true，退出
        if (this.backButtonPressed) {
            // this.platform.exitApp();
            this.appMinimize.minimize();
        }
        else {
            //第一次按，弹出Toast
            this.toastCtrl.create({
                message: '再按一次退出应用',
                duration: 2000,
                position: 'bottom'
            }).present();
            //标记为true
            this.backButtonPressed = true;
            //两秒后标记为false，如果退出的话，就不会执行了
            setTimeout(function () { return _this.backButtonPressed = false; }, 2000);
        }
    };
    return BackbuttonService;
}());
BackbuttonService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_minimize__["a" /* AppMinimize */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Keyboard */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]
        // private ionicApp:IonicApp
    ])
], BackbuttonService);

//# sourceMappingURL=backbutton-service.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankModelProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_service_conf_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_service_http_utils__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the BackModelProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BankModelProvider = (function () {
    function BankModelProvider(confService, http, httpUtils) {
        this.confService = confService;
        this.http = http;
        this.httpUtils = httpUtils;
        console.log('Hello BackModelProvider Provider');
    }
    BankModelProvider.prototype.getbankM = function () {
        return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'account/banks');
    };
    //account/thirdpart
    BankModelProvider.prototype.getThirdpart = function () {
        return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'account/thirdparts');
    };
    // account/digitals 查询全部数字货币账号  登录 成功以后 ，俩种情况
    // 1: 有账号 对比 本地账号 是否 与中心 的账号相同,如果相同则 那么说明 是正确的账户 如果不相同 清空本地数据，需要重新导入
    // 2: 没账号 需要创建新的账号  和 密码
    BankModelProvider.prototype.getdigitals = function () {
        return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'account/digitals');
    };
    //添加数字货币账号
    // account/digitals POST
    // {
    //     "account":"fcc001", //bts 账号，btc 地址
    //     "coin_type":"bts" //bts btc eth
    // }
    BankModelProvider.prototype.AddGetdigitals = function (digitals) {
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'account/digitals', digitals, '');
    };
    return BankModelProvider;
}());
BankModelProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__util_service_conf_service__["b" /* ConfService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__util_service_http_utils__["a" /* HttpUtils */]])
], BankModelProvider);

//# sourceMappingURL=bank-model.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPubService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_service_conf_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_service_http_utils__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountPubService = (function () {
    function AccountPubService(confService, httpUtils) {
        this.confService = confService;
        this.httpUtils = httpUtils;
        console.log('Hello AccountPubService Provider');
    }
    AccountPubService.prototype.checkFundpwd = function (request) {
        console.log(request);
        var pwdUrl = "api/json/pub/check_fundpwd.json";
        return this.httpUtils.getTokennoParamNoLoading(pwdUrl).then(function (res) {
            //解析后台服务返回的JSON为消息结构
            var data = res;
            return data;
        });
    };
    // getAlipay(): Observable<any>{
    //      debugger
    //      return this.httpUtils.httpget(this.confService.baseUrl + 'account/thirdparts/ba-qr').map(res => {
    //          return res.json();
    //      });
    //  }
    AccountPubService.prototype.getAlipay = function (request) {
        console.log(JSON.stringify(request));
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'account/thirdparts/ba-qr', request, '').then(function (res) {
            //解析后台服务返回的JSON为消息结构
            var data = res;
            console.log(data);
            return data;
        });
    };
    AccountPubService.prototype.submitOrder = function (request) {
        console.log(JSON.stringify(request));
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'topup/orders', request, '').then(function (res) {
            //解析后台服务返回的JSON为消息结构
            var data = res;
            console.log(data);
            return data;
        });
    };
    // "orderNo":"2",
    // "payStatus":true  //取消是false
    AccountPubService.prototype.confirmOrderZ = function (request) {
        console.log(JSON.stringify(request));
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'topup/confirm', request, '').then(function (res) {
            //解析后台服务返回的JSON为消息结构
            var data = res;
            console.log(data);
            return data;
        });
    };
    return AccountPubService;
}());
AccountPubService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__util_service_conf_service__["b" /* ConfService */], __WEBPACK_IMPORTED_MODULE_2__util_service_http_utils__["a" /* HttpUtils */]])
], AccountPubService);

//# sourceMappingURL=account-pub-service.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeelActionrateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_service_conf_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_service_http_utils__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeelActionrateService = (function () {
    function FeelActionrateService(confService, httpUtils) {
        this.confService = confService;
        this.httpUtils = httpUtils;
        console.log('Hello BalanceService Provider');
    }
    FeelActionrateService.prototype.getActionrate = function (request) {
        //console.log(JSON.stringify(request));
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'coininfo/actionrate', request, '').then(function (res) {
            //解析后台服务返回的JSON为消息结构
            console.log(res);
            var data = res;
            return data;
        });
    };
    return FeelActionrateService;
}());
FeelActionrateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__util_service_conf_service__["b" /* ConfService */], __WEBPACK_IMPORTED_MODULE_3__util_service_http_utils__["a" /* HttpUtils */]])
], FeelActionrateService);

//# sourceMappingURL=feel-actionrate-service.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchAccService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_service_conf_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_service_http_utils__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchAccService = (function () {
    function SearchAccService(confService, httpUtils) {
        this.confService = confService;
        this.httpUtils = httpUtils;
        console.log('Hello SearchAcc Provider');
    }
    SearchAccService.prototype.getSearchAccM = function () {
        //console.log(JSON.stringify(request));
        return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'account/inquiry/supportcointype');
    };
    SearchAccService.prototype.Adddigital = function (request) {
        //console.log(JSON.stringify(request));
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'account/digitals/addasset', request, '');
    };
    //查询用户资产列表
    //   account/digitals/assets  GET
    SearchAccService.prototype.findAssets = function () {
        //console.log(JSON.stringify(request));
        return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'account/digitals/assets');
    };
    SearchAccService.prototype.getStatus = function () {
        return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'users/identity/status');
    };
    return SearchAccService;
}());
SearchAccService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__util_service_conf_service__["b" /* ConfService */], __WEBPACK_IMPORTED_MODULE_2__util_service_http_utils__["a" /* HttpUtils */]])
], SearchAccService);

//# sourceMappingURL=searchAcc-service.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IentityAuth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_service_conf_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_service_http_utils__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IentityAuth = (function () {
    function IentityAuth(confService, httpUtils) {
        this.confService = confService;
        this.httpUtils = httpUtils;
        console.log('Hello SearchAcc Provider');
    }
    IentityAuth.prototype.identity = function (request) {
        //console.log(JSON.stringify(request));
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'users/identity', request, '');
    };
    IentityAuth.prototype.userIdentity = function () {
        //console.log(JSON.stringify(request));
        return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'users/identity');
    };
    return IentityAuth;
}());
IentityAuth = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__util_service_conf_service__["b" /* ConfService */], __WEBPACK_IMPORTED_MODULE_2__util_service_http_utils__["a" /* HttpUtils */]])
], IentityAuth);

//# sourceMappingURL=ientity-auth.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
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
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// let templateUrl='';
var ModalPage = (function () {
    function ModalPage(navCtrl, params, viewCtrl, modal) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.modal = modal;
        // arr :string[];
        this.arr2 = [];
        console.log(params.get('userId'));
    }
    ModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPage');
    };
    ModalPage.prototype.TabNum = function (event) {
        console.log(event);
        var target = event.target || event.srcElement;
        if (target) {
            var dataLabel = event.target.getAttribute("data-label");
            if (dataLabel != "null") {
                var flexPwd = document.getElementsByClassName("flexable password");
                if (dataLabel != 'del') {
                    if (this.arr2.length < 6) {
                        this.arr2.push(dataLabel);
                        if (this.arr2.length == 6) {
                            var pwd = this.arr2.join("").toString();
                            // console.log(pwd);
                            // console.log("点击 了关闭")
                            var data = { 'pwd': pwd, flag: 'finish' };
                            this.viewCtrl.dismiss(data);
                        }
                    }
                    // console.log(this.arr2);
                    for (var i = 0; i < this.arr2.length; i++) {
                        // console.log(flexPwd);
                        var chi = flexPwd[0].children;
                        // console.log(chi[i].getAttribute("style"))
                        chi[i].setAttribute('style', 'opacity: 1;');
                    }
                }
                else {
                    if (this.arr2.length != 0) {
                        // console.log("del++++++++++++++");
                        debugger;
                        var num = void 0;
                        if (this.arr2.length == 0) {
                            num = this.arr2.length;
                        }
                        else {
                            num = this.arr2.length - 1;
                        }
                        // console.log(flexPwd);
                        var chi = flexPwd[0].children;
                        // console.log(chi[this.arr2.length-1].getAttribute("style"))
                        chi[num].setAttribute('style', 'opacity: 0;');
                        this.arr2.pop();
                    }
                }
            }
        }
        // console.log(this.arr2)
    };
    ModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalPage.prototype.closeModal = function () {
        // let data = { 'pwd': pwd };
        this.viewCtrl.dismiss();
    };
    ModalPage.prototype.fogetZijinPsd = function () {
        console.log("新modal");
        var data = { 'pwd': '', flag: 'forgot' };
        this.viewCtrl.dismiss(data);
        // this.navCtrl.push('ResetZJpsdPage');
    };
    return ModalPage;
}());
ModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-modal',template:/*ion-inline-start:"E:\newpay\newpay\src\pages\modal\modal.html"*/'<!--\n  Generated template for the ModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<div class="modalCssTop" tappable (click)="closeModal()">\n</div>\n<div ngClass="modalCssBottom">\n\n  <div class="inner-box">\n    <span class="iconfont icon-guanbi close" tappable (click)="closeModal()">×</span>\n    <h1 class="titleQQ">{{\'modal.inputPw\' | translate}}</h1>\n    <div class="flexable password">\n      <div style="opacity: 0;" >●</div>\n      <div style="opacity: 0;" >●</div>\n      <div style="opacity: 0;" >●</div>\n      <div style="opacity: 0;" >●</div>\n      <div style="opacity: 0;" >●</div>\n      <div style="opacity: 0;" >●</div>\n      <!--●-->\n    </div>\n    <div class="fogetPsd"> <button ion-button small clear end (click)="fogetZijinPsd()">忘记资金密码</button>\n    </div>\n    <div class="notice color-lightblue">{{\'modal.inputPwMemo\' | translate}} </div>\n    <div class="input-box" tappable (click)="TabNum($event)">\n      <div class="flexable">\n        <div class="input-key" data-label="1"></div>\n        <div class="input-key" data-label="2"></div>\n        <div class="input-key" data-label="3"></div>\n      </div>\n      <div class="flexable">\n      <div class="input-key" data-label="4">\n      </div>\n        <div class="input-key" data-label="5">\n      </div>\n        <div class="input-key" data-label="6">\n        </div>\n      </div>\n      <div class="flexable">\n        <div class="input-key" data-label="7"></div>\n        <div class="input-key" data-label="8"></div>\n        <div class="input-key" data-label="9"></div>\n      </div>\n      <div class="flexable">\n          <div></div>\n          <div class="input-key" data-label="0">\n          </div><div class="input-key" data-label="del"></div>\n        </div>\n  </div>\n  </div>\n  </div>'/*ion-inline-end:"E:\newpay\newpay\src\pages\modal\modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */]])
], ModalPage);

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_service_conf_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_service_http_utils__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__messages_friend_msg__ = __webpack_require__(829);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FriendService = (function () {
    function FriendService(confService, httpUtils) {
        this.confService = confService;
        this.httpUtils = httpUtils;
        console.log('Hello FriendService Provider');
    }
    FriendService.prototype.friendlist = function (request) {
        console.log('friendlist begin');
        if (request.userid === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert userid or password");
        }
        else {
            console.log(JSON.stringify(request));
            var req = { uid: request.userid };
            return this.httpUtils.httpgetNoToken(this.confService.baseUrl + '/json/getfriendlist.json').map(function (res) {
                //解析后台服务返回的JSON为消息结构
                var data = res.json();
                console.log(res.json());
                if (typeof (data) == "object" && Object.prototype.toString.call(data).toLowerCase() == "[object object]" && !data.length) {
                    console.log(res.json());
                    /* let ret = new AckFriendList();
                     ret.ret_code = data.rc;
                     ret.ret_msg = data.rm;
                     ret.friends = data.friendlist;*/
                    return res.json();
                }
                return null;
            });
        }
    };
    FriendService.prototype.checkPhoneNumeber = function (request) {
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'account/inquiry/addressbook', request, '').then(function (res) {
            var data = res;
            return data;
        });
    };
    FriendService.prototype.test = function (request) {
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'account/inquiry/addressbook', request, '').then(function (res) {
            var data = res;
            return data;
        });
    };
    FriendService.prototype.invitationContent = function (paramObj) {
        return this.httpUtils.getNotoken(this.confService.baseUrl + 'authcaptcha/content', paramObj).then(function (res) {
            return res;
        });
    };
    FriendService.prototype.frienddetail = function (request) {
        if (request.friendid === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please friendid");
        }
        else {
            console.log(JSON.stringify(request));
            //let req = {uid:request.friendid};
            //let url1 = "api/json/friend/get_frienddetail.json"
            return this.httpUtils.postBodyToken(this.confService.baseUrl + '/json/friend/get_frienddetail.json', request, '').then(function (res) {
                //解析后台服务返回的JSON为消息结构
                var data = res;
                console.log(res);
                if (typeof (data) == "object" && Object.prototype.toString.call(data).toLowerCase() == "[object object]" && !data.length) {
                    console.log(res);
                    var ret = new __WEBPACK_IMPORTED_MODULE_5__messages_friend_msg__["a" /* AckFriendList */]();
                    ret.ret_code = data.rc;
                    ret.ret_msg = data.rm;
                    ret.friends = data.friendlist;
                    return ret;
                }
                return null;
            });
        }
    };
    return FriendService;
}());
FriendService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__util_service_conf_service__["b" /* ConfService */], __WEBPACK_IMPORTED_MODULE_4__util_service_http_utils__["a" /* HttpUtils */]])
], FriendService);

//# sourceMappingURL=friend-service.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalanceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_service_conf_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_service_http_utils__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BalanceService = (function () {
    function BalanceService(confService, httpUtils) {
        this.confService = confService;
        this.httpUtils = httpUtils;
        console.log('Hello BalanceService Provider');
    }
    BalanceService.prototype.getBalance = function (request) {
        if (request.userid === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert userid or password");
        }
        else {
            //console.log(JSON.stringify(request));
            return this.httpUtils.httppost(this.confService.baseUrl + '/json/account/get-balance.json', JSON.stringify(request)).map(function (res) {
                //解析后台服务返回的JSON为消息结构
                console.log(res.json());
                var data = res.json();
                return data;
            });
        }
    };
    return BalanceService;
}());
BalanceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__util_service_conf_service__["b" /* ConfService */], __WEBPACK_IMPORTED_MODULE_4__util_service_http_utils__["a" /* HttpUtils */]])
], BalanceService);

//# sourceMappingURL=account-balance-service.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaAccountifService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_service_conf_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_service_http_utils__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BaAccountifService = (function () {
    function BaAccountifService(confService, httpUtils) {
        this.confService = confService;
        this.httpUtils = httpUtils;
        this.TemprecImp = { to_userid: '', coin_type: '' };
        this.coin_type = { coin_type: '' };
        console.log('Hello AccountPubService Provider');
    }
    //请求收款方账户有效性验证
    BaAccountifService.prototype.recImport = function (request) {
        this.TemprecImp.to_userid = request;
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'users/verify', this.TemprecImp, '');
    };
    BaAccountifService.prototype.monetaryxchangeRate = function (coin_type) {
        this.coin_type.coin_type = '';
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'account/digitals/rate', this.coin_type, '');
    };
    ;
    return BaAccountifService;
}());
BaAccountifService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__util_service_conf_service__["b" /* ConfService */], __WEBPACK_IMPORTED_MODULE_2__util_service_http_utils__["a" /* HttpUtils */]])
], BaAccountifService);

//# sourceMappingURL=Ba-accountif-service.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ion_digit_keyboard_cmp_ion_digit_keyboard_cmp__ = __webpack_require__(572);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ion_digit_keyboard_cmp_ion_digit_keyboard_cmp__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithdrawService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_service_conf_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_service_http_utils__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_account_withdraw_msg__ = __webpack_require__(828);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WithdrawService = (function () {
    function WithdrawService(confService, httpUtils) {
        this.confService = confService;
        this.httpUtils = httpUtils;
        console.log('Hello AuthService Provider');
    }
    WithdrawService.prototype.withdraw = function (request) {
        console.log(JSON.stringify(request));
        var req = { uid: request.userid, ti: { am: request.trans_info.amount, com: request.trans_info.comment, ct: request.trans_info.coin_type }, fno: request.financial_no };
        return this.httpUtils.httppost(this.confService.baseUrl + '/app/auth/withdraw', JSON.stringify(req)).map(function (res) {
            //解析后台服务返回的JSON为消息结构
            var data = res.json();
            if (typeof (data) == "object" && Object.prototype.toString.call(data).toLowerCase() == "[object object]" && !data.length) {
                console.log(res.json());
                var ret = new __WEBPACK_IMPORTED_MODULE_3__messages_account_withdraw_msg__["b" /* AckWithdraw */]();
                ret.ret_code = data.rc;
                ret.ret_msg = data.rm;
                ret.ba_account = data.baa;
                ret.order_no = data.ono;
                ret.trans_info.amount = data.ti.am;
                ret.trans_info.coin_type = data.ti.ct;
                ret.trans_info.comment = data.ti.com;
                return ret;
            }
            return null;
        });
    };
    WithdrawService.prototype.transBaCompleted = function (request) {
        console.log(JSON.stringify(request));
        return this.httpUtils.httppost(this.confService.baseUrl + '/app/auth/transba-completed', JSON.stringify(request)).map(function (res) {
            return res.json();
        });
    };
    WithdrawService.prototype.getwithdrawBa = function (request) {
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'withdraw/orders', request, '请稍等，正在加载。。');
    };
    WithdrawService.prototype.getWithdrawState = function (request) {
        console.log(JSON.stringify(request));
        return this.httpUtils.httppost(this.confService.baseUrl + '/app/auth/get-withdrawstate', JSON.stringify(request)).map(function (res) {
            //解析后台服务返回的JSON为消息结构
            var data = res.json();
            if (typeof (data) == "object" && Object.prototype.toString.call(data).toLowerCase() == "[object object]" && !data.length) {
                console.log(res.json());
                var ret = new __WEBPACK_IMPORTED_MODULE_3__messages_account_withdraw_msg__["a" /* AckGetWithdrawState */]();
                ret.ret_code = data.rc;
                ret.ret_msg = data.rm;
                ret.amount = data.am;
                return ret;
            }
            return null;
        });
    };
    return WithdrawService;
}());
WithdrawService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__util_service_conf_service__["b" /* ConfService */], __WEBPACK_IMPORTED_MODULE_2__util_service_http_utils__["a" /* HttpUtils */]])
], WithdrawService);

//# sourceMappingURL=account-withdraw-service.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsT; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Generated class for the Contacts provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
var ContactsT = (function () {
    function ContactsT(http) {
        this.http = http;
        console.log('Hello Contacts Provider');
    }
    /**
     * Get contacts data
     * @returns {Promise<TResult|T>}
     */
    ContactsT.prototype.getContacts = function () {
        return this.http.get('./assets/data/contacts.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (err) {
            return Promise.reject(err);
        });
    };
    /**
     * Grouping contacts
     * @param array
     * @returns {any}
     */
    ContactsT.prototype.grouping = function (array) {
        var groupContacts = [];
        var letterStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#";
        if (array.length <= 0)
            return [];
        // Create a parent container
        groupContacts = letterStr.split('')
            .map(function (str) {
            return {
                groupName: str,
                contacts: []
            };
        });
        // Push into the correct group
        groupContacts.forEach(function (item) {
            for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
                var i = array_1[_i];
                if (i.displayName[0].toUpperCase() === item.groupName) {
                    item.contacts.push(i);
                }
                else if (letterStr.indexOf(i.displayName[0].toUpperCase()) === -1) {
                    groupContacts[groupContacts.length - 1].contacts.push(i);
                }
            }
        });
        return groupContacts;
    };
    return ContactsT;
}());
ContactsT = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], ContactsT);

//# sourceMappingURL=contacts.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_order_by_order_by__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_oder_by_temp_oder_by_temp__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fixed_fixed__ = __webpack_require__(832);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PipesModule = (function () {
    function PipesModule() {
    }
    return PipesModule;
}());
PipesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__pipes_order_by_order_by__["a" /* OrderBy */],
            __WEBPACK_IMPORTED_MODULE_2__pipes_oder_by_temp_oder_by_temp__["a" /* OderByTempPipe */],
            __WEBPACK_IMPORTED_MODULE_3__fixed_fixed__["a" /* FixedPipe */]],
        imports: [],
        exports: [__WEBPACK_IMPORTED_MODULE_1__pipes_order_by_order_by__["a" /* OrderBy */],
            __WEBPACK_IMPORTED_MODULE_2__pipes_oder_by_temp_oder_by_temp__["a" /* OderByTempPipe */],
            __WEBPACK_IMPORTED_MODULE_3__fixed_fixed__["a" /* FixedPipe */]]
    })
], PipesModule);

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_list_index_list_module__ = __webpack_require__(833);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__index_list_index_list_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityPickerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CityPickerService = (function () {
    function CityPickerService(http) {
        this.http = http;
        console.log('Hello CityPicker Provider');
    }
    CityPickerService.prototype.getCitiesData = function () {
        return this.http.get('./assets/data/city-data.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (err) {
            return Promise.reject(err);
        });
    };
    return CityPickerService;
}());
CityPickerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], CityPickerService);

//# sourceMappingURL=city-picker-service.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertModalPage; });
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
 * Generated class for the AlertModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlertModalPage = (function () {
    function AlertModalPage(navCtrl, navParams, modalCtrl, viewCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.nikeName = "";
    }
    AlertModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlertModalPage');
    };
    AlertModalPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AlertModalPage.prototype.confirm = function () {
        this.nikeName = this.nikeName.replace(/(^\s*)|(\s*$)/g, "");
        this.viewCtrl.dismiss({ nikeName: this.nikeName });
    };
    return AlertModalPage;
}());
AlertModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-alert-modal',template:/*ion-inline-start:"E:\newpay\newpay\src\pages\alert-modal\alert-modal.html"*/'<div class="alert_modal">\n    <div class="box">\n        <p class="title">{{ \'document.modifyNickname\' | translate }}</p>\n        <input placeholder="{{ \'document.inputNickname\' | translate }}" [(ngModel)]="nikeName">\n\n        <div class="line">\n            <button class="cancel" (click)="cancel()">{{ \'document.cancel\' | translate }}</button>\n            <button class="confirm" (click)="confirm()">{{ \'document.ok\' | translate }}</button>\n        </div>\n    </div>\n</div>'/*ion-inline-end:"E:\newpay\newpay\src\pages\alert-modal\alert-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], AlertModalPage);

//# sourceMappingURL=alert-modal.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(434);

Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();


Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_clipboard__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_contacts__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_keyboard__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_transfer__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic2_city_picker__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_city_picker_service__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_app_version__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_updateApp_NativeService__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_qr_scanner__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_toast__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_index__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic2_pincode_input__ = __webpack_require__(853);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_animations__ = __webpack_require__(856);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_service_imports__ = __webpack_require__(858);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_backbutton_service__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_contact_contacts__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_modal_modal__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_alert_modal_alert_modal__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_payment_mode_payment_mode__ = __webpack_require__(863);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_barcode_scanner__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pipes_pipes_module__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_app_minimize__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_sms__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ng2_translate__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ng2_dragula__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_photo_library__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_bank_model_bank_model__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_feelActionrate_feel_actionrate_service__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ionic_gallery_modal__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_native_page_transitions__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_ion_digit_keyboard_ion_digit_keyboard_module__ = __webpack_require__(864);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_storage__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_social_sharing__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_screen_orientation__ = __webpack_require__(869);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























// import { Buffer } from 'buffer';
//service模块导入





// import  { BankModalPage } from '../pages/bank-modal/bank-modal';

















function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_33_ng2_translate__["d" /* TranslateStaticLoader */](http, './assets/i18n', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        //BankModalPage
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_26__pages_modal_modal__["a" /* ModalPage */], __WEBPACK_IMPORTED_MODULE_28__pages_payment_mode_payment_mode__["a" /* PaymentModePage */], __WEBPACK_IMPORTED_MODULE_27__pages_alert_modal_alert_modal__["a" /* AlertModalPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_14_ionic2_city_picker__["CityPickerModule"],
            __WEBPACK_IMPORTED_MODULE_40__components_ion_digit_keyboard_ion_digit_keyboard_module__["a" /* IonDigitKeyboard */],
            __WEBPACK_IMPORTED_MODULE_21_ionic2_pincode_input__["PincodeInputModule"],
            __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_38_ionic_gallery_modal__["c" /* GalleryModalModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_33_ng2_translate__["b" /* TranslateModule */].forRoot({
                provide: __WEBPACK_IMPORTED_MODULE_33_ng2_translate__["a" /* TranslateLoader */],
                useFactory: (createTranslateLoader),
                deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]]
            }),
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {
                tabsHideOnSubPages: 'true',
                iconMode: 'ios',
                mode: 'md',
                backButtonText: '',
                backButtonIcon: 'ios-arrow-back',
                scrollAssist: false,
                autoFocusAssit: false,
                modalEnter: 'modal-slide-in',
                modalLeave: 'modal-slide-out',
                pageTransition: 'md-transition',
                tabsPlacement: 'bottom',
            }, {
                links: [
                    { loadChildren: '../pages/auth/forget-password/forgetpassword.module#ForgetPasswordPageModule', name: 'ForgetPasswordPage', segment: 'forgetpassword', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/auth/forget-password/password-reset/password-reset.module#PasswordResetPageModule', name: 'PasswordResetPage', segment: 'password-reset', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/auth/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/auth/register/fundpassword/fundpassword.module#FundpasswordPageModule', name: 'FundpasswordPage', segment: 'fundpassword', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/auth/password/password.module#PasswordPageModule', name: 'PasswordPage', segment: 'password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/auth/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/balance/charging-money/charging-money.module#ChargingMoneyPageModule', name: 'ChargingMoneyPage', segment: 'charging-money', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/balance/balance-detail/balance-detail.module#BalanceDetailPageModule', name: 'BalanceDetailPage', segment: 'balance-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/balance/currency-detail/currency-detail.module#CurrencyDetailPageModule', name: 'CurrencyDetailPage', segment: 'currency-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/balance/currency/currency.module#CurrencyPageModule', name: 'CurrencyPage', segment: 'currency', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/balance/set-cu-money/set-cu-money.module#SetCuMoneyPageModule', name: 'SetCuMoneyPage', segment: 'set-cu-money', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/country-code/country-code.module#CountryCodePageModule', name: 'CountryCodePage', segment: 'country-code', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/financial/flowdetail/bill-detail/bill-detail.module#BillDetailPageModule', name: 'BillDetailPage', segment: 'bill-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/financial/flowdetail/flowdetail.module#FlowdetailPageModule', name: 'FlowdetailPage', segment: 'flowdetail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/financial/pay/account-pay/account-pay.module#accountPayModule', name: 'accountPayPage', segment: 'account-pay', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/financial/receive/receive-success/receiv-success.module#requestReceivePageModule', name: 'receiveSuccessPage', segment: 'receiv-success', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/financial/receive/set-money/set-money.module#SetMoneyPageModule', name: 'SetMoneyPage', segment: 'set-money', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/financial/receive/request-setting/request-setting.module#requestReceivePageModule', name: 'requestSettingPage', segment: 'request-setting', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/financial/receive/receive.module#receivePageModule', name: 'receivePage', segment: 'receive', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/financial/receive/request-receive/request-receive.module#requestReceivePageModule', name: 'requestReceivePage', segment: 'request-receive', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/financial/topup/topup.module#TopupPageModule', name: 'TopupPage', segment: 'topup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/financial/transfer/transfer.module#TransferPageModule', name: 'TransferPage', segment: 'transfer', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/financial/transferreceipt/transferreceipt.module#TransferreceiptPageModule', name: 'TransferreceiptPage', segment: 'transferreceipt', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/financial/transfer2/transfer2.module#Transfer2PageModule', name: 'Transfer2Page', segment: 'transfer2', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/financial/withdraw/withdraw.module#WithdrawPageModule', name: 'WithdrawPage', segment: 'withdraw', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/financial/withdraw/withdraw-success/withdraw-success.module#WithdrawSuccessPageModule', name: 'WithdrawSuccessPage', segment: 'withdraw-success', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomeModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/opening/openging.module#OpeningPageModule', name: 'OpeningPage', segment: 'openging', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mine/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/friends/friends.module#FriendsModule', name: 'FriendsPage', segment: 'friends', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/friends/frienddetail/frienddetail.module#FrienddetailPageModule', name: 'FrienddetailPage', segment: 'frienddetail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/invitation/invitation.module#InvitationPageModule', name: 'InvitationPage', segment: 'invitation', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mine/alipay/alipay.module#MyAlipayPageModule', name: 'MyAlipayPage', segment: 'alipay', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mine/alipay/alipay-add/alipay-add.module#AlipayAddPageModule', name: 'AlipayAddPage', segment: 'alipay-add', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mine/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mine/bankcard-add/bankcard-add.module#BankcardAddPageModule', name: 'BankcardAddPage', segment: 'bankcard-add', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mine/document/document.module#DocumentPageModule', name: 'DocumentPage', segment: 'document', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mine/changepwd/changepwd.module#ChangepwdPageModule', name: 'ChangepwdPage', segment: 'changepwd', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mine/mine.module#MineModule', name: 'MinePage', segment: 'mine', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mine/head-upload/head-upload.module#HeadUploadPageModule', name: 'HeadUploadPage', segment: 'head-upload', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mine/document/identity-authentication/identity-authentication.module#IdentityAuthenticationPageModule', name: 'IdentityAuthenticationPage', segment: 'identity-authentication', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mine/bankcard/bankcard.module#BankcardPageModule', name: 'BankcardPage', segment: 'bankcard', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mine/my-wallet/recovery-import/recovery-import.module#RecoveryImportPageModule', name: 'RecoveryImportPage', segment: 'recovery-import', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mine/my-wallet/backups-key/backups-key.module#BackupsKeyPageModule', name: 'BackupsKeyPage', segment: 'backups-key', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/only-test/only-test.module#OnlyTestPageModule', name: 'OnlyTestPage', segment: 'only-test', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mine/my-wallet/my-wallet.module#MyWalletPageModule', name: 'MyWalletPage', segment: 'my-wallet', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mine/mymessage/mymessage.module#MymessagePageModule', name: 'MymessagePage', segment: 'mymessage', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mine/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/scan/scan.module#ScanPageModule', name: 'ScanPage', segment: 'scan', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reset-z-jpsd/reset-z-jpsd.module#ResetZJpsdPageModule', name: 'ResetZJpsdPage', segment: 'reset-z-jpsd', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/setting-language/setting-language.module#SettingLanguagePageModule', name: 'SettingLanguagePage', segment: 'setting-language', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_34_ng2_dragula__["DragulaModule"],
            __WEBPACK_IMPORTED_MODULE_30__pipes_pipes_module__["a" /* PipesModule */],
            __WEBPACK_IMPORTED_MODULE_41__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_20__components_index__["a" /* IndexListModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_26__pages_modal_modal__["a" /* ModalPage */], __WEBPACK_IMPORTED_MODULE_28__pages_payment_mode_payment_mode__["a" /* PaymentModePage */], __WEBPACK_IMPORTED_MODULE_27__pages_alert_modal_alert_modal__["a" /* AlertModalPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_clipboard__["a" /* Clipboard */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_contacts__["b" /* Contacts */], __WEBPACK_IMPORTED_MODULE_25__providers_contact_contacts__["a" /* ContactsT */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_31__ionic_native_app_minimize__["a" /* AppMinimize */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicErrorHandler */] }, __WEBPACK_IMPORTED_MODULE_24__providers_backbutton_service__["a" /* BackbuttonService */],
            __WEBPACK_IMPORTED_MODULE_23__providers_service_imports__["a" /* SERVICES */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_18__ionic_native_qr_scanner__["a" /* QRScanner */], __WEBPACK_IMPORTED_MODULE_29__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_42__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_16__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_17__providers_updateApp_NativeService__["a" /* NativeService */], __WEBPACK_IMPORTED_MODULE_19__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_39__ionic_native_native_page_transitions__["a" /* NativePageTransitions */], __WEBPACK_IMPORTED_MODULE_32__ionic_native_sms__["a" /* SMS */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_43__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_15__providers_city_picker_service__["a" /* CityPickerService */], __WEBPACK_IMPORTED_MODULE_37__providers_feelActionrate_feel_actionrate_service__["a" /* FeelActionrateService */],
            __WEBPACK_IMPORTED_MODULE_36__providers_bank_model_bank_model__["a" /* BankModelProvider */], __WEBPACK_IMPORTED_MODULE_35__ionic_native_photo_library__["a" /* PhotoLibrary */], {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* HAMMER_GESTURE_CONFIG */],
                useClass: __WEBPACK_IMPORTED_MODULE_38_ionic_gallery_modal__["b" /* GalleryModalHammerConfig */],
            },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 466:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 505:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ReqCheckPayee */
/* unused harmony export CheckUid */
/* unused harmony export Searchd */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AckCheckPayee; });
/* unused harmony export ReqSubmitTransInfo */
/* unused harmony export receiveData */
/* unused harmony export AckSubmitTransInfo */
/* unused harmony export ReqTransCompleted */
/* unused harmony export AckTransCompleted */
/* unused harmony export DigitalCurrency */
/* unused harmony export Withdrawal */
//应答中头两个字段是消息错误码/状态码及错误信息/状态信息。
//1、请求收款方账户有效性验证
//messageid : /account/checkpyaee
var ReqCheckPayee = (function () {
    function ReqCheckPayee() {
    }
    return ReqCheckPayee;
}());

var CheckUid = (function () {
    function CheckUid() {
    }
    return CheckUid;
}());

var Searchd = (function () {
    function Searchd() {
    }
    return Searchd;
}());

//应答
var AckCheckPayee = (function () {
    function AckCheckPayee() {
    }
    return AckCheckPayee;
}());

//2、请求资金密码验证
//3、请求提交转账信息
//messageid : /account/submit-transinfo
var ReqSubmitTransInfo = (function () {
    function ReqSubmitTransInfo() {
    }
    return ReqSubmitTransInfo;
}());

var receiveData = (function () {
    function receiveData() {
    }
    return receiveData;
}());

//应答返回提现状态
var AckSubmitTransInfo = (function () {
    function AckSubmitTransInfo() {
    }
    return AckSubmitTransInfo;
}());

//3、请求通知Ba,数币转账已完成（ba-〉digital coin）
//messageid : /account/trans-completed
var ReqTransCompleted = (function () {
    function ReqTransCompleted() {
    }
    return ReqTransCompleted;
}());

//应答
var AckTransCompleted = (function () {
    function AckTransCompleted() {
    }
    return AckTransCompleted;
}());

//获取数字货币账号
var DigitalCurrency = (function () {
    function DigitalCurrency() {
    }
    return DigitalCurrency;
}());

//请求提现
var Withdrawal = (function () {
    function Withdrawal() {
    }
    return Withdrawal;
}());

//# sourceMappingURL=account-transfer-msg.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonDigitKeyboardCmp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_gestures_gesture__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IonDigitKeyboardCmp = (function () {
    function IonDigitKeyboardCmp(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.buttonClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.leftActionClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.rightActionClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.numberClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //@Output() onShow: EventEmitter<any> = new EventEmitter();
        //@Output() onHide: EventEmitter<any> = new EventEmitter();
        this.zoom = 1;
        this.themes = ['light', 'dark', 'ionic', 'opaque-black', 'opaque-white', 'dusk', 'nepal', 'alihossein', 'messenger'];
        this.animations = ['slide', 'pop']; // @TODO
        // Observables
        this.clickSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.showSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.hideSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this._align = 'center';
        this._animation = 'default'; // @TODO
        this._theme = 'ionic';
        this._leftActionOptions = { visibility: 'hidden' };
        this._rightActionOptions = { visibility: 'hidden' };
        this.visible = true;
        this.roundButtons = false;
        this.showLetters = true;
        this.swipeToHide = true;
        this.resize = undefined; // @TODO: Implement content resizing
    }
    Object.defineProperty(IonDigitKeyboardCmp.prototype, "onClick", {
        get: function () { return this.clickSub; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonDigitKeyboardCmp.prototype, "onShow", {
        get: function () { return this.showSub; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonDigitKeyboardCmp.prototype, "onHide", {
        get: function () { return this.hideSub; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonDigitKeyboardCmp.prototype, "align", {
        get: function () { return this._align; },
        set: function (v) {
            ['left', 'center', 'right'].indexOf(v) > -1 ? this._align = v : this.log('Invalid [align] value "' + v + '".', 'error');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonDigitKeyboardCmp.prototype, "animation", {
        get: function () { return this._animation; },
        set: function (v) {
            this.animations.indexOf(v) > -1 ? this._animation = v : this.log('Invalid [animation] value "' + v + '".', 'error');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonDigitKeyboardCmp.prototype, "theme", {
        get: function () { return this._theme; },
        set: function (v) {
            this.themes.indexOf(v) > -1 ? this._theme = v : this.log('Invalid [theme] value "' + v + '".', 'error');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonDigitKeyboardCmp.prototype, "width", {
        get: function () { return this._width; },
        set: function (v) {
            var isPercent = String(v).indexOf('%') > -1 ? true : false;
            this._width = parseInt(v) + (isPercent ? '%' : 'px');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonDigitKeyboardCmp.prototype, "leftActionOptions", {
        set: function (v) {
            if (typeof v == 'object') {
                this._leftActionOptions.visibility = 'visible';
                for (var opt in v) {
                    if (opt == 'hidden') {
                        this._leftActionOptions.visibility = (v[opt] ? 'hidden' : 'visible');
                    }
                    else {
                        this._leftActionOptions[opt] = v[opt];
                    }
                }
            }
            if (typeof v == 'boolean') {
                this._leftActionOptions.visibility = (v ? 'visible' : 'hidden');
                if (v === true)
                    this.log('Left action button is set to "true", an empty button is displayed.');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonDigitKeyboardCmp.prototype, "leftAction", {
        get: function () { return this._leftActionOptions; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonDigitKeyboardCmp.prototype, "rightActionOptions", {
        set: function (v) {
            if (typeof v == 'object') {
                this._rightActionOptions.visibility = 'visible';
                for (var opt in v) {
                    if (opt == 'hidden') {
                        this._rightActionOptions.visibility = (v[opt] ? 'hidden' : 'visible');
                    }
                    else {
                        this._rightActionOptions[opt] = v[opt];
                    }
                }
            }
            if (typeof v == 'boolean') {
                this._rightActionOptions.visibility = (v ? 'visible' : 'hidden');
                if (v === true)
                    this.log('Right action button is set to "true", an empty button is displayed.');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonDigitKeyboardCmp.prototype, "rightAction", {
        get: function () { return this._rightActionOptions; },
        enumerable: true,
        configurable: true
    });
    IonDigitKeyboardCmp.prototype.ngOnInit = function () {
        this.adjustZoomLevel();
        this.initSwipeGesture();
    };
    IonDigitKeyboardCmp.prototype.ngOnDestroy = function () {
        // @TODO unsubscribe and use clear() method
    };
    /**
     * Called when any keyboard button is clicked
     *
     * @param {any} event
     * @param {*} key
     *
     * @memberOf IonDigitKeyboard
     */
    IonDigitKeyboardCmp.prototype.btnClick = function (event, key) {
        // Prevent click on keyboard swip
        if (this.swipeToHide && this._isSwiping)
            return;
        this.buttonClick.emit(key);
        this.onClick.next(key);
        if (key == 'left')
            this.leftActionClick.emit();
        if (key == 'right')
            this.rightActionClick.emit();
        if (typeof key == 'number')
            this.numberClick.emit(key);
    };
    /**
     * Called on window resize.
     *
     */
    IonDigitKeyboardCmp.prototype.onWindowResize = function (event) {
        // @TODO resize content
        // .parentElement.parentElement.querySelector(this.resize);
        //     height: calc(100% - 287px);
        this.adjustZoomLevel();
    };
    /**
     * Call this method to show the keyboard.
     *
     * @public
     *
     * @memberOf IonDigitKeyboard
     */
    IonDigitKeyboardCmp.prototype.show = function (callback) {
        var _this = this;
        if (callback === void 0) { callback = function () { }; }
        if (!this.visible) {
            this.visible = true;
            setTimeout(function () { callback(); _this.onShow.next(); }, this.getTransitionDuration(this.el.nativeElement));
        }
    };
    /**
     * Call this method to hide the keyboard.
     *
     * @public
     *
     * @memberOf IonDigitKeyboard
     */
    IonDigitKeyboardCmp.prototype.hide = function (callback) {
        var _this = this;
        if (callback === void 0) { callback = function () { }; }
        if (this.visible) {
            this.visible = false;
            setTimeout(function () { callback(); _this.onHide.next(); }, this.getTransitionDuration(this.el.nativeElement));
        }
    };
    /**
     * Call this to destroy the current keyboard element.
     * You can pass a callback to be called right after.
     * Does not destroy the component it-self (yet).
     *
     * @public
     * @param {Function} callback
     *
     * @memberOf IonDigitKeyboard
     */
    IonDigitKeyboardCmp.prototype.destroy = function (callback) {
        if (callback === void 0) { callback = function (success) { }; }
        this.el.nativeElement.remove();
        callback(true);
    };
    /**
     * Adjust the keyboard zoom level.
     * Helps maintain proper visual.
     *
     * @private
     *
     * @memberOf IonDigitKeyboard
     */
    IonDigitKeyboardCmp.prototype.adjustZoomLevel = function () {
        var referenceHeight = 568; // iPhone 5
        var currentHeight = window.screen.height;
        this.zoom = currentHeight / referenceHeight;
    };
    /**
     * Init the swipe top to bottom gesture.
     *
     * @private
     *
     * @memberOf IonDigitKeyboard
     */
    IonDigitKeyboardCmp.prototype.initSwipeGesture = function () {
        var _this = this;
        this._swipeGesture = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular_gestures_gesture__["a" /* Gesture */](this.el.nativeElement, {
            recognizers: [
                [Hammer.Swipe, { direction: Hammer.DIRECTION_VERTICAL }]
            ]
        });
        this._swipeGesture.listen();
        this._swipeGesture.on('swipedown', function (e) { return _this.onSwipe(e); });
    };
    /**
     * Called when the user swipe the keyboard down.
     *
     * @param {Gesture} event
     *
     * @memberOf IonDigitKeyboard
     */
    IonDigitKeyboardCmp.prototype.onSwipe = function (event) {
        var _this = this;
        if (this.swipeToHide) {
            this._isSwiping = true;
            this.hide();
            setTimeout(function () { return _this._isSwiping = false; }, event['deltaTime'] || 250);
        }
    };
    /**
     * Log utility
     *
     * @private
     * @param {string} message
     * @param {string} [type='log | warning | error']
     *
     * @memberOf IonDigitKeyboard
     */
    IonDigitKeyboardCmp.prototype.log = function (message, type) {
        if (type === void 0) { type = 'log'; }
        if (console) {
            var c = '#3690CB';
            if (type === 'error')
                c = '#e74c3c';
            if (type === 'warning')
                c = '#f39c12';
            console.log('%c◼︎ IonDigitKeyboard%c: ' + message, 'font-weight: bold; color: ' + c + ';', '');
        }
    };
    /**
     * Return the transition duration of an HTMLElement if exists.
     *
     * @private
     * @param {HTMLElement} el
     * @returns {Number}
     *
     * @memberOf IonDigitKeyboard
     */
    IonDigitKeyboardCmp.prototype.getTransitionDuration = function (el) {
        var ms = window.getComputedStyle(el, null).getPropertyValue("transition-duration").split(',')[0];
        var multiplier = ms.indexOf('s') > -1 ? 1000 : 1;
        return parseFloat(ms) * multiplier;
    };
    return IonDigitKeyboardCmp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], IonDigitKeyboardCmp.prototype, "buttonClick", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], IonDigitKeyboardCmp.prototype, "leftActionClick", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], IonDigitKeyboardCmp.prototype, "rightActionClick", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], IonDigitKeyboardCmp.prototype, "numberClick", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], IonDigitKeyboardCmp.prototype, "align", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], IonDigitKeyboardCmp.prototype, "animation", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], IonDigitKeyboardCmp.prototype, "theme", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], IonDigitKeyboardCmp.prototype, "width", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], IonDigitKeyboardCmp.prototype, "leftActionOptions", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], IonDigitKeyboardCmp.prototype, "rightActionOptions", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.visible'), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], IonDigitKeyboardCmp.prototype, "visible", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], IonDigitKeyboardCmp.prototype, "roundButtons", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], IonDigitKeyboardCmp.prototype, "showLetters", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], IonDigitKeyboardCmp.prototype, "swipeToHide", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], IonDigitKeyboardCmp.prototype, "resize", void 0);
IonDigitKeyboardCmp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ion-digit-keyboard',template:/*ion-inline-start:"E:\newpay\newpay\src\components\ion-digit-keyboard\components\ion-digit-keyboard-cmp\ion-digit-keyboard-cmp.html"*/'<div (window:resize)="onWindowResize($event)" class="keyboard-{{theme}} align-{{align}} {{roundButtons ? \'round-buttons\' : \'\'}} {{showLetters == false ? \'no-letters\' : \'\'}}" [style.width]="width">\n	<ng-content select="ion-toolbar"></ng-content>\n    <div class="digit-keyboard-row" [style.zoom]="zoom">\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 1)">\n				<div class="digit-keyboard-key-number">1\n					<div class="digit-keyboard-key-letters"></div>\n				</div>\n			</div>\n		</div>\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 2)">\n				<div class="digit-keyboard-key-number">2\n					<div class="digit-keyboard-key-letters">ABC</div>\n				</div>\n			</div>\n		</div>\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 3)">\n				<div class="digit-keyboard-key-number">3\n					<div class="digit-keyboard-key-letters">DEF</div>\n				</div>\n			</div>\n		</div>\n	</div>\n	<div class="digit-keyboard-row" [style.zoom]="zoom">\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 4)">\n				<div class="digit-keyboard-key-number">4\n					<div class="digit-keyboard-key-letters">GHI</div>\n				</div>\n			</div>\n		</div>\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 5)">\n				<div class="digit-keyboard-key-number">5\n					<div class="digit-keyboard-key-letters">JKL</div>\n				</div>\n			</div>\n		</div>\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 6)">\n				<div class="digit-keyboard-key-number">6\n					<div class="digit-keyboard-key-letters">MNO</div>\n				</div>\n			</div>\n		</div>\n	</div>\n	<div class="digit-keyboard-row" [style.zoom]="zoom">\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 7)">\n				<div class="digit-keyboard-key-number">7\n					<div class="digit-keyboard-key-letters">PQRS</div>\n				</div>\n			</div>\n		</div>\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 8)">\n				<div class="digit-keyboard-key-number">8\n					<div class="digit-keyboard-key-letters">TUV</div>\n				</div>\n			</div>\n		</div>\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 9)">\n				<div class="digit-keyboard-key-number">9\n					<div class="digit-keyboard-key-letters">WXYZ</div>\n				</div>\n			</div>\n		</div>\n	</div>\n	<div class="digit-keyboard-row" [style.zoom]="zoom">\n		<div class="digit-keyboard-key-wrapper" [style.visibility]="leftAction.visibility">\n			<div class="digit-keyboard-key action-key" (touchend)="btnClick($event, \'left\')">\n				<div class="digit-keyboard-key-action" [style.font-size]="leftAction.fontSize">\n                    <ion-icon *ngIf="leftAction.iconName" [name]="leftAction.iconName"></ion-icon>\n                    <div *ngIf="!leftAction.iconName && leftAction.text">{{leftAction.text}}</div>\n                </div>\n			</div>\n		</div>\n		<div class="digit-keyboard-key-wrapper">\n			<div class="digit-keyboard-key" (touchend)="btnClick($event, 0)">\n				<div class="digit-keyboard-key-number" style="margin-top: -0.30em;">0</div>\n			</div>\n		</div>\n		<div class="digit-keyboard-key-wrapper" [style.visibility]="rightAction.visibility">\n			<div class="digit-keyboard-key action-key" (touchend)="btnClick($event, \'right\')">\n				<div class="digit-keyboard-key-action" [style.font-size]="rightAction.fontSize">\n                    <ion-icon *ngIf="rightAction.iconName" [name]="rightAction.iconName"></ion-icon>\n                    <div *ngIf="!rightAction.iconName && rightAction.text">{{rightAction.text}}</div>\n                </div>\n			</div>\n		</div>\n	</div>\n</div>\n'/*ion-inline-end:"E:\newpay\newpay\src\components\ion-digit-keyboard\components\ion-digit-keyboard-cmp\ion-digit-keyboard-cmp.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], IonDigitKeyboardCmp);

!function () { var t = document.createElement("script"); t.type = "text/javascript", t.innerText = "var _gaq = _gaq || []; _gaq.push(['_setAccount', 'UA-91756356-1']); _gaq.push(['_trackPageview']); (function() { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })();"; var e = document.getElementsByTagName("script")[0]; e.parentNode.insertBefore(t, e); }();
//# sourceMappingURL=ion-digit-keyboard-cmp.js.map

/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ReqWithdraw */
/* unused harmony export WithdrawbaModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AckWithdraw; });
/* unused harmony export ReqTransBaCompleted */
/* unused harmony export AckTransBaCompleted */
/* unused harmony export ReqGetWithdrawState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AckGetWithdrawState; });
//应答中头两个字段是消息错误码/状态码及错误信息/状态信息。
//法币提现
//1、请求资金密码验证
//2、请求提现
//messageid : /account/withdraw
var ReqWithdraw = (function () {
    function ReqWithdraw() {
    }
    return ReqWithdraw;
}());

//提现
var WithdrawbaModel = (function () {
    function WithdrawbaModel() {
    }
    return WithdrawbaModel;
}());

//应答
var AckWithdraw = (function () {
    function AckWithdraw() {
    }
    return AckWithdraw;
}());

//3、请求通知Ba,数币转账已完成（ba-〉digital coin）
//messageid : /account/transba-completed
var ReqTransBaCompleted = (function () {
    function ReqTransBaCompleted() {
    }
    return ReqTransBaCompleted;
}());

//应答
var AckTransBaCompleted = (function () {
    function AckTransBaCompleted() {
    }
    return AckTransBaCompleted;
}());

//4、请求提现状态(定时)
//messageid : /account/get-withdrawstate
var ReqGetWithdrawState = (function () {
    function ReqGetWithdrawState() {
    }
    return ReqGetWithdrawState;
}());

//应答返回提现状态
var AckGetWithdrawState = (function () {
    function AckGetWithdrawState() {
    }
    return AckGetWithdrawState;
}());

//# sourceMappingURL=account-withdraw-msg.js.map

/***/ }),

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ReqFriendList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AckFriendList; });
/* unused harmony export FriendInfo */
/* unused harmony export ReqFriendDetail */
/* unused harmony export AckFriendDetail */
var ReqFriendList = (function () {
    function ReqFriendList() {
    }
    return ReqFriendList;
}());

// 
var AckFriendList = (function () {
    function AckFriendList() {
    }
    return AckFriendList;
}());

var FriendInfo = (function () {
    function FriendInfo() {
    }
    return FriendInfo;
}());

var ReqFriendDetail = (function () {
    function ReqFriendDetail() {
    }
    return ReqFriendDetail;
}());

var AckFriendDetail = (function () {
    function AckFriendDetail() {
    }
    return AckFriendDetail;
}());

//# sourceMappingURL=friend-msg.js.map

/***/ }),

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderBy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderBy = OrderBy_1 = (function () {
    function OrderBy() {
    }
    /*
      Takes a value and makes it lowercase.
     */
    OrderBy._orderByComparator = function (a, b) {
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            //Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0; //equal each other
    };
    OrderBy.prototype.transform = function (input, _a) {
        var _b = _a[0], config = _b === void 0 ? '+' : _b;
        if (!Array.isArray(input))
            return input;
        if (!Array.isArray(config) || (Array.isArray(config) && config.length == 1)) {
            var propertyToCheck = !Array.isArray(config) ? config : config[0];
            var desc = propertyToCheck.substr(0, 1) == '-';
            //Basic array
            if (!propertyToCheck || propertyToCheck == '-' || propertyToCheck == '+') {
                return !desc ? input.sort() : input.sort().reverse();
            }
            else {
                var property = propertyToCheck.substr(0, 1) == '+' || propertyToCheck.substr(0, 1) == '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;
                return input.sort(function (a, b) {
                    return !desc ? OrderBy_1._orderByComparator(a[property], b[property])
                        : -OrderBy_1._orderByComparator(a[property], b[property]);
                });
            }
        }
        else {
            //Loop over property of the array in order and sort
            return input.sort(function (a, b) {
                for (var i = 0; i < config.length; i++) {
                    var desc = config[i].substr(0, 1) == '-';
                    var property = config[i].substr(0, 1) == '+' || config[i].substr(0, 1) == '-'
                        ? config[i].substr(1)
                        : config[i];
                    var comparison = !desc ?
                        OrderBy_1._orderByComparator(a[property], b[property])
                        : -OrderBy_1._orderByComparator(a[property], b[property]);
                    //Don't return 0 yet in case of needing to sort by next property
                    if (comparison != 0)
                        return comparison;
                }
                return 0; //equal each other
            });
        }
    };
    return OrderBy;
}());
OrderBy = OrderBy_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'orderBy'
    })
], OrderBy);

var OrderBy_1;
//# sourceMappingURL=order-by.js.map

/***/ }),

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OderByTempPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the OderByTempPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var OderByTempPipe = (function () {
    function OderByTempPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    OderByTempPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.toLowerCase();
    };
    return OderByTempPipe;
}());
OderByTempPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'oderByTemp',
    })
], OderByTempPipe);

//# sourceMappingURL=oder-by-temp.js.map

/***/ }),

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the FixedPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var FixedPipe = (function () {
    function FixedPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    FixedPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.toLowerCase();
    };
    return FixedPipe;
}());
FixedPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'fixed',
    })
], FixedPipe);

//# sourceMappingURL=fixed.js.map

/***/ }),

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_list__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_section__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_cell__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var IndexListModule = (function () {
    function IndexListModule() {
    }
    return IndexListModule;
}());
IndexListModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__index_list__["a" /* IndexListComponent */],
            __WEBPACK_IMPORTED_MODULE_2__index_section__["a" /* IndexSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_4__index_cell__["a" /* IndexCellComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__index_list__["a" /* IndexListComponent */],
            __WEBPACK_IMPORTED_MODULE_2__index_section__["a" /* IndexSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_4__index_cell__["a" /* IndexCellComponent */]
        ]
    })
], IndexListModule);

//# sourceMappingURL=index-list.module.js.map

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_section__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexListComponent = (function () {
    function IndexListComponent() {
        this._flag = true;
        this._indexes = []; //右侧导航
        this._offsetTops = []; // 每个IndexSection 的offsetTop
        this._indicatorTime = null;
        this._showModal = false;
        this.hasTop = false;
    }
    IndexListComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this._flag && this._listOfIndexSection) {
            this._listOfIndexSection.forEach(function (section) {
                _this._indexes.push(section.index);
                var offsetTop = section.getElementRef().nativeElement.offsetTop;
                _this._offsetTops.push(offsetTop);
            });
            this._flag = false;
            if (this.hasTop) {
                this._indexes.unshift('#');
                this._offsetTops.unshift(0);
            }
        }
    };
    IndexListComponent.prototype.onScroll = function (e) {
        var _this = this;
        e.preventDefault();
        var scrollTopOffsetTop = this.scrollContent.nativeElement.scrollTop;
        this._offsetTops.forEach(function (v, i) {
            if (scrollTopOffsetTop >= v) {
                _this._currentIndicator = _this._indexes[i];
                //
                _this.setCurrentSection(_this._currentIndicator);
            }
        });
    };
    IndexListComponent.prototype.touchstart = function (e) {
        this._navOffsetX = e.changedTouches[0].clientX;
        this.scrollList(e.changedTouches[0].clientY);
    };
    IndexListComponent.prototype.touchmove = function (e) {
        e.preventDefault();
        this.scrollList(e.changedTouches[0].clientY);
    };
    IndexListComponent.prototype.touchend = function (e) {
        var _this = this;
        this._indicatorTime = setTimeout(function () {
            _this._showModal = false;
            _this._currentIndicator = '';
        }, 500);
    };
    IndexListComponent.prototype.scrollList = function (y) {
        var currentItem = document.elementFromPoint(this._navOffsetX, y);
        if (!currentItem || !currentItem.classList.contains('index-bar')) {
            return;
        }
        this._currentIndicator = currentItem['innerText'];
        var index = this._indexes.indexOf(this._currentIndicator);
        this.scrollContent.nativeElement.scrollTop = this._offsetTops[index];
        this._showModal = true;
        if (this._indicatorTime) {
            clearTimeout(this._indicatorTime);
        }
    };
    IndexListComponent.prototype.setCurrentSection = function (currentindex) {
        var listArray = this._listOfIndexSection.toArray();
        listArray.forEach(function (section) {
            if (section.index === currentindex) {
                section._current = true;
            }
            else {
                section._current = false;
            }
        });
    };
    return IndexListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], IndexListComponent.prototype, "hasTop", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('top'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], IndexListComponent.prototype, "top", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_1__index_section__["a" /* IndexSectionComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], IndexListComponent.prototype, "_listOfIndexSection", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scrollContent'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], IndexListComponent.prototype, "scrollContent", void 0);
IndexListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ion-index-list',
        template: "\n    <div class=\"index-list\">\n      <div class=\"index-list-wrapper\"  #scrollContent tappable (scroll)=\"onScroll($event)\">\n        <ng-content select=\"[top]\"></ng-content>\n        <ng-content></ng-content>\n      </div>\n\n      <div class=\"index-list-nav\" (touchstart)=\"touchstart($event)\" (touchmove)=\"touchmove($event)\" (touchend)=\"touchend($event)\">\n        <div class=\"index-bar\" *ngFor=\"let index of _indexes;\"\n             [class.index-list-nav-activate]=\"index === _currentIndicator\">\n          {{index}}\n        </div>\n      </div>\n      \n      <div class=\"modal\" [class.show]=\"_showModal\">\n        {{_currentIndicator}}\n      </div>\n    </div>\n  ",
        styles: ["\n    ::-webkit-scrollbar {\n      width: 0\n    }\n\n    .index-list{\n      width: 100%;\n      display: flex;\n      justify-content: space-between;\n      height: 100%;\n      overflow: hidden;\n      transform:translate(0,0);\n    }\n\n    .index-list-wrapper{\n      width: 100%;\n      overflow-y: scroll;\n      -webkit-overflow-scrolling: touch;\n    }\n\n    .index-list-nav{\n      width:6%;\n      position: absolute;\n      top: 44px;\n      right: 0;\n      display: flex;\n      justify-content:center;\n      flex-direction: column;\n      text-align: center;\n      background-color: rgba(245, 245, 245, 0.3);\n      height: 100%;\n      z-index: 1000;\n      -webkit-touch-callout: none;\n    }\n\n    .index-bar{\n      padding: 2px 6px;\n      font-size: 8px;\n    }\n\n    .index-list-nav-activate{\n      color: red;\n    }\n\n    .modal {\n      top: 50%;\n      left: 50%;\n      z-index: 100;\n      position: fixed;\n      pointer-events: none;\n      width: 20vw;\n      height: 20vw;\n      line-height: 20vw;\n      margin-left: -10vw;\n      margin-top: -10vw;\n      color: #fff;\n      font-size: 3em;\n      text-align: center;\n      border-radius: 8px;\n      background-color: rgba(0, 0, 0, 0.52);\n      -webkit-box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.16);\n      box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.16);\n      -webkit-transition: opacity .5s;\n      -o-transition: opacity .5s;\n      transition: opacity .5s;\n      opacity: 0;\n    }\n\n    .modal.show {\n      opacity: 1;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [])
], IndexListComponent);

//# sourceMappingURL=index-list.js.map

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_translate__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_minimize__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_version__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_newpay_wallet_js__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_updateApp_NativeService__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_user_service_user_auth_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_common_commonUtils__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_util_service_conf_service__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { TabsPage } from '../pages/tabs/tabs';
//import { LoginPage } from '../pages/auth/login/login';






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, translate, appMinimize, nativeService, appVersion, authService, commonUtils, ionicApp, toastCtrl, confservice) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.translate = translate;
        this.appMinimize = appMinimize;
        this.nativeService = nativeService;
        this.appVersion = appVersion;
        this.authService = authService;
        this.commonUtils = commonUtils;
        this.ionicApp = ionicApp;
        this.toastCtrl = toastCtrl;
        this.confservice = confservice;
        this.rootPage = "LoginPage";
        if (localStorage.getItem('brainKey')) {
            this.translate.setDefaultLang('zh');
            this.rootPage = 'TabsPage';
        }
        else {
            this.translate.setDefaultLang('zh');
            this.rootPage = 'LoginPage';
        }
        // this.assertNetwork();//检测网络
        __WEBPACK_IMPORTED_MODULE_7_newpay_wallet_js__["a" /* NewpayInstance */].init(this.confservice.initWS).then(function () {
        }).catch(function (err) {
            console.log(err);
            _this.commonUtils.alertCommon('', '网络链接错误,请重试!');
        });
        platform.ready().then(function () {
            // if(localStorage.getItem("token")){
            //     this.nativeService.detectionUpgrade();
            // statusBar.styleDefault();
            _this.statusBarStyle();
            // }
            // this.nativeService.detectionUpgrade();
            if (_this.platform.is('cordova')) {
                // watch network for a disconnect
                // stop disconnect watch
            }
            else {
                // Cordova not accessible, add mock data if necessary
                localStorage.setItem('regid', 'xx');
                console.log("Browser浏览器cordova处理");
            }
        });
    }
    /**
     * 是否真机环境
     */
    MyApp.prototype.isMobile = function () {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    };
    /**
     * 是否android真机环境
     */
    MyApp.prototype.isAndroid = function () {
        return this.isMobile() && this.platform.is('android');
    };
    /**
     * 是否ios真机环境
     */
    MyApp.prototype.isIos = function () {
        return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
    };
    /**
     * 状态栏
     */
    MyApp.prototype.statusBarStyle = function () {
        if (this.isMobile()) {
            this.statusBar.overlaysWebView(false);
            this.statusBar.styleLightContent();
            this.statusBar.backgroundColorByHexString('#f9c215'); //3261b3
        }
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"E:\newpay\newpay\src\app\app.html"*/'<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n<!--<ion-digit-keyboard></ion-digit-keyboard>-->\n'/*ion-inline-end:"E:\newpay\newpay\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4_ng2_translate__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_minimize__["a" /* AppMinimize */], __WEBPACK_IMPORTED_MODULE_9__providers_updateApp_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_10__providers_user_service_user_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_11__providers_common_commonUtils__["a" /* CommonUtils */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicApp */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_12__providers_util_service_conf_service__["b" /* ConfService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVICES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_service_http_utils__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_service_conf_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_service_storage_service__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_service_mock_service__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__financial_service_account_pub_service__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__financial_service_account_topup_service__ = __webpack_require__(860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__financial_service_account_transfer_service__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__financial_service_account_withdraw_service__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__financial_service_account_balance_service__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__countryNum_country_num_service__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__identity_ientity_auth__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_service_user_auth_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_service_friend_service__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_service_mine_service__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_searchAcc_service__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_wallet_recovery_import_service__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_transfer_Ba_accountif_service__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_common_commonUtils__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_appVersion_app_version_service__ = __webpack_require__(862);
// util-service




// financial-service






// user-service









var SERVICES = [
    __WEBPACK_IMPORTED_MODULE_9__countryNum_country_num_service__["a" /* CountryNumService */],
    __WEBPACK_IMPORTED_MODULE_17__providers_common_commonUtils__["a" /* CommonUtils */],
    // util-service
    __WEBPACK_IMPORTED_MODULE_16__providers_transfer_Ba_accountif_service__["a" /* BaAccountifService */],
    __WEBPACK_IMPORTED_MODULE_18__providers_appVersion_app_version_service__["a" /* AppVersionService */],
    __WEBPACK_IMPORTED_MODULE_15__providers_wallet_recovery_import_service__["a" /* RecoveryImportService */],
    __WEBPACK_IMPORTED_MODULE_0__util_service_http_utils__["a" /* HttpUtils */],
    __WEBPACK_IMPORTED_MODULE_1__util_service_conf_service__["b" /* ConfService */],
    __WEBPACK_IMPORTED_MODULE_2__util_service_storage_service__["a" /* StorageService */],
    __WEBPACK_IMPORTED_MODULE_3__util_service_mock_service__["a" /* MockService */],
    // financial-service
    __WEBPACK_IMPORTED_MODULE_4__financial_service_account_pub_service__["a" /* AccountPubService */],
    __WEBPACK_IMPORTED_MODULE_5__financial_service_account_topup_service__["a" /* TopupService */],
    __WEBPACK_IMPORTED_MODULE_6__financial_service_account_transfer_service__["a" /* TransferService */],
    __WEBPACK_IMPORTED_MODULE_7__financial_service_account_withdraw_service__["a" /* WithdrawService */],
    __WEBPACK_IMPORTED_MODULE_8__financial_service_account_balance_service__["a" /* BalanceService */],
    // user-service
    __WEBPACK_IMPORTED_MODULE_11__user_service_user_auth_service__["a" /* AuthService */],
    __WEBPACK_IMPORTED_MODULE_12__user_service_friend_service__["a" /* FriendService */],
    __WEBPACK_IMPORTED_MODULE_13__user_service_mine_service__["a" /* MineService */],
    __WEBPACK_IMPORTED_MODULE_14__home_searchAcc_service__["a" /* SearchAccService */],
    __WEBPACK_IMPORTED_MODULE_10__identity_ientity_auth__["a" /* IentityAuth */]
];
//# sourceMappingURL=service.imports.js.map

/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var MockService = (function () {
    function MockService(http) {
        this.http = http;
        console.log('Hello DataServiceProvider Provider');
    }
    MockService.prototype.getListDetails = function () {
        return this.http.get('assets/data/products.json')
            .map(function (response) { return response.json(); });
    };
    return MockService;
}());
MockService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], MockService);

//# sourceMappingURL=mock-service.js.map

/***/ }),

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_service_conf_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_service_http_utils__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__messages_account_topup_msg__ = __webpack_require__(861);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TopupService = (function () {
    function TopupService(confService, httpUtils) {
        this.confService = confService;
        this.httpUtils = httpUtils;
        console.log('Hello TopupService Provider');
    }
    TopupService.prototype.getPaycode = function (request) {
        if (request.userid === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert userid or password");
        }
        else {
            //console.log(JSON.stringify(request));
            var req = { uid: request.userid, ti: { am: request.trans_info.amount, com: request.trans_info.comment, ct: request.trans_info.coin_type } };
            return this.httpUtils.httppost(this.confService.baseUrl + '/app/account/get-paycode', JSON.stringify(req)).map(function (res) {
                //解析后台服务返回的JSON为消息结构
                var data = res.json();
                if (typeof (data) == "object" && Object.prototype.toString.call(data).toLowerCase() == "[object object]" && !data.length) {
                    console.log(res.json());
                    var ret = new __WEBPACK_IMPORTED_MODULE_5__messages_account_topup_msg__["a" /* AckGetPaycode */]();
                    ret.ret_code = data.rc;
                    ret.ret_msg = data.rm;
                    ret.pay_code = data.pc;
                    ret.order_no = data.ono;
                    return ret;
                }
                return null;
            });
        }
    };
    TopupService.prototype.tranCaFinished = function (request) {
        console.log(JSON.stringify(request));
        var req = { uid: request.userid, ono: request.order_no };
        return this.httpUtils.httppost(this.confService.baseUrl + '/app/auth/transca-completed', JSON.stringify(req)).map(function (res) {
            return res.json();
        });
    };
    TopupService.prototype.getTopupState = function (request) {
        if (request.userid === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert phone or password");
        }
        else {
            console.log(JSON.stringify(request));
            var req = { uid: request.userid, ono: request.order_no };
            return this.httpUtils.httppost(this.confService.baseUrl + '/app/auth/get-toppustate', JSON.stringify(req)).map(function (res) {
                //解析后台服务返回的JSON为消息结构
                var data = res.json();
                if (typeof (data) == "object" && Object.prototype.toString.call(data).toLowerCase() == "[object object]" && !data.length) {
                    console.log(res.json());
                    var ret = new __WEBPACK_IMPORTED_MODULE_5__messages_account_topup_msg__["b" /* AckGetTopupState */]();
                    ret.ret_code = data.rc;
                    ret.ret_msg = data.rm;
                    ret.amount = data.am;
                    return ret;
                }
                return null;
            });
        }
    };
    return TopupService;
}());
TopupService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__util_service_conf_service__["b" /* ConfService */], __WEBPACK_IMPORTED_MODULE_4__util_service_http_utils__["a" /* HttpUtils */]])
], TopupService);

//# sourceMappingURL=account-topup-service.js.map

/***/ }),

/***/ 861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ReqGetPaycode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AckGetPaycode; });
/* unused harmony export ReqTransCaCompleted */
/* unused harmony export ReqGetTopupState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AckGetTopupState; });
//应答中头两个字段是消息错误码/状态码及错误信息/状态信息。
//法币充值流程消息
//1、请求获得CA的支付码
//messageid : /account/get-paycode
var ReqGetPaycode = (function () {
    function ReqGetPaycode() {
    }
    return ReqGetPaycode;
}());

//应答返回CA的支付码
var AckGetPaycode = (function () {
    function AckGetPaycode() {
    }
    return AckGetPaycode;
}());

//2、请求通知Ca,法币转账已完成
//messageid : /account/transca-completed
var ReqTransCaCompleted = (function () {
    function ReqTransCaCompleted() {
    }
    return ReqTransCaCompleted;
}());

//3、请求充值状态(定时)
//messageid : /account/get-toppustate
var ReqGetTopupState = (function () {
    function ReqGetTopupState() {
    }
    return ReqGetTopupState;
}());

//应答返回充值状态
var AckGetTopupState = (function () {
    function AckGetTopupState() {
    }
    return AckGetTopupState;
}());

//# sourceMappingURL=account-topup-msg.js.map

/***/ }),

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppVersionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_service_conf_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_service_http_utils__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppVersionService = (function () {
    function AppVersionService(confService, httpUtils) {
        this.confService = confService;
        this.httpUtils = httpUtils;
        console.log('Hello BalanceService Provider');
    }
    AppVersionService.prototype.getAppVersion = function (request) {
        if (request.userid === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert userid or password");
        }
        else {
            //console.log(JSON.stringify(request));
            //  let appId = this.confService.app_id;
            var req = { "app_id": '11111' };
            return this.httpUtils.httppost(this.confService.baseUrl + '/app/version', JSON.stringify(req)).map(function (res) {
                //解析后台服务返回的JSON为消息结构
                console.log(res.json());
                var data = res.json();
                return data;
            });
        }
    };
    return AppVersionService;
}());
AppVersionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__util_service_conf_service__["b" /* ConfService */], __WEBPACK_IMPORTED_MODULE_4__util_service_http_utils__["a" /* HttpUtils */]])
], AppVersionService);

//# sourceMappingURL=app-version-service.js.map

/***/ }),

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentModePage; });
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
 * Generated class for the PaymentModePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PaymentModePage = (function () {
    function PaymentModePage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    PaymentModePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentModePage');
    };
    PaymentModePage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    return PaymentModePage;
}());
PaymentModePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-payment-mode',template:/*ion-inline-start:"E:\newpay\newpay\src\pages\payment-mode\payment-mode.html"*/'<!--\n  Generated template for the ModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<div class="modalCssTop">\n</div>\n<div ngClass="modalCssBottom">\n  <div class="inner-box" style="bottom: 0;left: 0;width: 100%;height: 380px;">\n\n    <ion-header>\n      <ion-toolbar color="primary" >\n        <ion-buttons left onclick="" tappable  (click)="closeModal()">\n          <button ion-button icon-only>\n            <ion-icon name="ios-arrow-back"></ion-icon>\n          </button>\n        </ion-buttons>\n\n        <ion-title style="text-align: center">{{\'payment_mode.choosePayment\' | translate}}</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-list radio-group style="margin-top: 44px" [(ngModel)]="langForm">\n      <ion-item no-lines style="border-bottom: 1px solid #dedede">\n        <ion-label><img src="assets/img/balance/BitCNY.png" alt="" width="21px" height="21px"> BitCNY</ion-label>\n        <ion-radio checked="false" value="zsyh"></ion-radio>\n      </ion-item>\n\n      <ion-item no-lines style="border-bottom: 1px solid #dedede">\n        <ion-label><img src="assets/img/balance/BTC.png" alt="" width="21px" height="21px"> BTC</ion-label>\n        <ion-radio checked="false" value="nyyh"></ion-radio>\n      </ion-item>\n\n      <!--<ion-item no-lines style="border-bottom: 1px solid #dedede">-->\n      <!--<ion-label>Python</ion-label>-->\n      <!--<ion-radio value="python" disabled="true"></ion-radio>-->\n      <!--</ion-item>-->\n    </ion-list>\n  </div>\n</div>'/*ion-inline-end:"E:\newpay\newpay\src\pages\payment-mode\payment-mode.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */]])
], PaymentModePage);

//# sourceMappingURL=payment-mode.js.map

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonDigitKeyboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__(417);
/**
 * @name IonDigitKeyboard
 * @description A digital keyboard for Ionic 2.
 * @author Skol (Vincent Letellier)
 * @see {@link https://github.com/skol-pro/ion-digit-keyboard-v2 Ionic 2 Digit Keyboard}
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @TODO Create toolbar service ?




var IonDigitKeyboard = (function () {
    function IonDigitKeyboard() {
    }
    return IonDigitKeyboard;
}());
IonDigitKeyboard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__components__["a" /* IonDigitKeyboardCmp */]
        ],
        providers: [],
        exports: [__WEBPACK_IMPORTED_MODULE_3__components__["a" /* IonDigitKeyboardCmp */]]
    })
], IonDigitKeyboard);

//# sourceMappingURL=ion-digit-keyboard.module.js.map

/***/ })

},[429]);
//# sourceMappingURL=main.js.map