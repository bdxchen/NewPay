import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {IonicApp, LoadingController, ToastController, Loading, NavController, App, Platform} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import {StorageService} from  '../../providers/util-service/storage-service';
import {Toast} from "@ionic-native/toast";
import {timeout} from "rxjs/operator/timeout";

@Injectable()
export class HttpUtils {

    loading:Loading;
  isDebug:boolean = false;
  //isDebug:boolean = false;
  constructor(private http: Http,
              private storageService:StorageService,
              public toastCtrl :ToastController,public loadingCtrl:LoadingController,
              public appCtrl: App,
              private platform:Platform,
              private toast:Toast,
              ) {

    console.log('Hello HttpRequestService Provider');
  }

  /*
   需要token验证的httppost
   */
  httppost(url:string,request: any): Observable<any> {
    if(this.isDebug){
      return this.httpget(url);
    }
    if (url==="" || url===null) {
      return Observable.throw("Url Error,Try again!");
    } else {
      let headers = new Headers({
        'Content-Type': 'application/json'
      });
      headers.append('X-Auth-Token', this.storageService.read('token')+"");
      let options = new RequestOptions({
        headers: headers
      });
      return this.http.post(url, request, options).timeout(5000);
    }
  }

  /*
   不需要token验证的httppost
   */
  httpPostNoToken(url:string,request: any): Observable<any> {
      if(this.isDebug){
          return this.httpget(url);
      }
    if (url==="" || url===null) {
      return Observable.throw("Url Error,Try again!");
    } else {
      let headers = new Headers({
        'Content-Type': 'application/json'
      });
      let options = new RequestOptions({
        headers: headers
      });
      debugger
      return this.http.post(url, request, options).timeout(5000);
    }
  }

  /*
   需要token验证的httpget
   */
  httpget(url:string): Observable<any> {
    if (url==="" || url===null) {
      return Observable.throw("Url Error,Try again!");
    } else {
      let headers = new Headers({
        'Content-Type': 'application/json;charset=UTF-8'
      });
      headers.append('X-Auth-Token', this.storageService.read('token')+"");
      let options = new RequestOptions({
        headers: headers
      });
      return this.http.get(url, options );
    }
  }

  /*
   不需要token验证的httpget
   */
  httpgetNoToken(url:string): Observable<any> {
    if (url === "" || url === null) {
      return Observable.throw("Url Error,Try again!");
    } else {
      /*  let headers = new Headers();
       let options = new RequestOptions({
       headers: headers
       });*/
      return this.http.get(url);
    }
  }
    public getNotoken(url: string, paramObj: any) {
      // this.showLoading();
        let headers = new Headers();
        return this.http.get(url + this.toQueryString(paramObj), new RequestOptions({headers: headers}))
            .timeout(5000)
            .toPromise()
            .then(res => this.handleSuccess(res.json()))
            .catch(error => this.handleError(error));
    }

    public postNotoken(url: string, paramObj: any) {
      // this.showLoading();
        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        return this.http.post(url, this.toBodyString(paramObj), new RequestOptions({headers: headers}))
            .timeout(5000)
            .toPromise()
            .then(res => this.handleSuccess(res.json()))
            .catch(error => this.handleError(error));
    }

    public postBodyNotoken(url: string, paramObj: any,content:string) {
      // this.showLoading();
        // this.loading(content)
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(url, paramObj, new RequestOptions({headers: headers}))
            .timeout(5000)
            .toPromise()
            .then(res => this.handleSuccess(res.json()))
            .catch(error => this.handleError(error));
    }
    public getTokennoParamNoLoading(url: string) {
      // this.showLoading();
        let headers = new Headers();
        headers.append('X-Auth-Token', this.storageService.read('token')+"");
        return this.http.get(url,new RequestOptions({headers: headers}))
            .timeout(3000)
            .toPromise()
            .then(res => this.handleSuccess1(res.json()))
            .catch(error => this.handleError(error));
    }
    public getTokennoParam(url: string,content:string) {
        // this.showLoading();
        let headers = new Headers();
        headers.append('X-Auth-Token', this.storageService.read('token')+"");
        return this.http.get(url,new RequestOptions({headers: headers}))
            .timeout(5000)
            .toPromise()
            .then(res => this.handleSuccess(res.json()))
            .catch(error => this.handleError(error));
    }
    public getToken(url: string, paramObj: any,content:string) {
        // this.showLoading();
        let headers = new Headers();
        headers.append('X-Auth-Token', this.storageService.read('token')+"");
        return this.http.get(url + this.toQueryString(paramObj))
            .timeout(5000)
            .toPromise()
            .then(res => this.handleSuccess(res.json()))
            .catch(error => this.handleError(error));
    }

    public postToken(url: string, paramObj: any,content:string) {
        // this.showLoading();
        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        headers.append('X-Auth-Token', this.storageService.read('token')+"");
    return this.http.post(url, this.toBodyString(paramObj), new RequestOptions({headers: headers}))
    .timeout(5000)
    .toPromise()
    .then(res => this.handleSuccess(res.json()))
    .catch(error => this.handleError(error));
    }

    public postBodyToken(url: string, paramObj: any,content:string) {
      // this.showLoading();
        let headers = new Headers({'Content-Type': 'application/json'});
        headers.append('X-Auth-Token', this.storageService.read('token')+"");
        return this.http.post(url, paramObj, new RequestOptions({headers: headers}))
            .timeout(5000)
            .toPromise()
            .then(res => this.handleSuccess(
                res.json()
            ))
            .catch(error => this.handleError(error));
    }
    private handleSuccess(result) {
      // this.hideLoading();
        if (result.ret_code =="1") {//由于和后台约定好,所有请求均返回一个包含success,msg,data三个属性的对象,所以这里可以这样处理
            // alert(result.ret_msg);//这里使用ToastController
            // this.TaostGlobal(result.ret_msg)
        }else if(result.ret_code='0'){
            // alert(result.ret_msg);//这里使用ToastController
        }
        return result;
    }
    private handleSuccess1(result){
      // this.hideLoading();
        if (result.ret_code =="1") {//由于和后台约定好,所有请求均返回一个包含success,msg,data三个属性的对象,所以这里可以这样处理
            // alert(result.ret_msg);//这里使用ToastController
            // this.TaostGlobal(result.ret_msg)
        }else if(result.ret_code='0'){
            // alert(result.ret_msg);//这里使用ToastController
            // this.TaostGlobal(result.ret_msg)
        }
        return result;
    }

    private handleError(error: Response | any) {

    }
    TaostGlobal(msg){
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
        });
        toast.present();
    }
    /**
     * 是否真机环境
     */
    isMobile(): boolean {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    }
    /**
     * 统一调用此方法显示提示信息
     * @param message 信息内容
     * @param duration 显示时长
     */

    showToast(message: string = '保存成功', duration: number = 2000): void {
        if (this.isMobile()) {
            this.toast.show(message, String(duration), 'bottom').subscribe();
        } else {
            this.toastCtrl.create({
                message: message,
                duration: duration,
                // position: 'middle',
                showCloseButton: false
            }).present();
        }
    };
    /**
     * 统一调用此方法显示loading
     * @param content 显示的内容
     */
    showLoading(content: string = ''): void {
        if (!this.loading) {//如果loading已经存在则不再打开
            let loading = this.loadingCtrl.create({
                content: "请稍等..."
            });
            loading.present();
            this.loading = loading;
        }
    };

    /**
     * 关闭loading
     */
    hideLoading(): void {
        this.loading && this.loading.dismiss();
        this.loading = null;
    };
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
    private toQueryString(obj) {
        let ret = [];
        for (let key in obj) {
            key = encodeURIComponent(key);
            let values = obj[key];
            if (values && values.constructor == Array) {//数组
                let queryValues = [];
                for (let i = 0, len = values.length, value; i < len; i++) {
                    value = values[i];
                    queryValues.push(this.toQueryPair(key, value));
                }
                ret = ret.concat(queryValues);
            } else { //字符串
                ret.push(this.toQueryPair(key, values));
            }
        }
        return '?' + ret.join('&');
    }

    /**
     *
     * @param obj
     * @return {string}
     *  声明: var obj= {'name':'',age:23};
     *  调用: toQueryString(obj);
     *  返回: "name=%E5%B0%8F%E5%86%9B&age=23"
     */
    private toBodyString(obj) {
        let ret = [];
        for (let key in obj) {
            key = encodeURIComponent(key);
            let values = obj[key];
            if (values && values.constructor == Array) {//数组
                let queryValues = [];
                for (let i = 0, len = values.length, value; i < len; i++) {
                    value = values[i];
                    queryValues.push(this.toQueryPair(key, value));
                }
                ret = ret.concat(queryValues);
            } else { //字符串
                ret.push(this.toQueryPair(key, values));
            }
        }
        return ret.join('&');
    }

    private toQueryPair(key, value) {
        if (typeof value == 'undefined') {
            return key;
        }
        return key + '=' + encodeURIComponent(value === null ? '' : String(value));
    }

}
