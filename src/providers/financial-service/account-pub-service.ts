import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ConfService } from '../util-service/conf-service';
import { HttpUtils } from '../util-service/http-utils';

import {ReqCheckFundPwd, ConfirmOrder, Alipay, SubmitOrder} from '../messages/account-pub-msg';

@Injectable()
export class AccountPubService {
  constructor(private confService: ConfService,private httpUtils:HttpUtils) {
    console.log('Hello AccountPubService Provider');
  }

  checkFundpwd(request: ReqCheckFundPwd){

      console.log(request);
      let pwdUrl = "api/json/pub/check_fundpwd.json"
      return this.httpUtils.getTokennoParamNoLoading(pwdUrl).then(res => {
        //解析后台服务返回的JSON为消息结构
        let data = res;
        return data;
      });

  }

   // getAlipay(): Observable<any>{
   //      debugger
   //      return this.httpUtils.httpget(this.confService.baseUrl + 'account/thirdparts/ba-qr').map(res => {
   //          return res.json();
   //      });
   //  }

    getAlipay(request: Alipay){

     console.log(JSON.stringify(request));

      return this.httpUtils.postBodyToken(this.confService.baseUrl + 'account/thirdparts/ba-qr', request,'').then(res => {
                //解析后台服务返回的JSON为消息结构
                let data = res;
                console.log(data);
                return data;
            });
    }

    submitOrder(request: SubmitOrder){

        console.log(JSON.stringify(request));

        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'topup/orders', request,'').then(res => {
            //解析后台服务返回的JSON为消息结构
            let data = res;
            console.log(data);
            return data;
        });
    }
    // "orderNo":"2",
    // "payStatus":true  //取消是false

    confirmOrderZ(request: ConfirmOrder) {

        console.log(JSON.stringify(request));

        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'topup/confirm', request,'').then(res => {
            //解析后台服务返回的JSON为消息结构
            let data = res;
            console.log(data);
            return data;
        });
    }
}
