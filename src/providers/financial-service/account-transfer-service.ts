import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ConfService } from '../util-service/conf-service';
import { HttpUtils } from '../util-service/http-utils';
import {
    ReqCheckPayee, ReqSubmitTransInfo, ReqTransCompleted, AckCheckPayee, AckSubmitTransInfo,
    DigitalCurrency, Withdrawal,CheckUid

} from '../messages/account-transfer-msg';
import {FundPassword} from "../messages/user-auth-msg";

@Injectable()
export class TransferService {
  constructor(private confService: ConfService,private httpUtils:HttpUtils) {
    console.log('Hello TransferService Provider');
  }

  checkPayee(request: ReqCheckPayee) {
        console.log(JSON.stringify(request));
      let req = {uid:request.to_userid,un:request.to_userid};
      return this.httpUtils.postBodyToken(this.confService.baseUrl + '/app/auth/checkpyaee', req,'').then(res => {
        //解析后台服务返回的JSON为消息结构
        let data = res;
        if(typeof(data) == "object" && Object.prototype.toString.call(data).toLowerCase() == "[object object]" && !data.length)
        {
          console.log(res);
          let ret = new AckCheckPayee();
          ret.ret_code = data.rc;
          ret.ret_msg = data.rm;
          return ret;
        }
        return null;
      });
  }
    // 请求收款方账户有效性验证
    checkUserid(request: CheckUid){
        debugger
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'users/verify', request,'')
    }

  submitTransInfo(request: ReqSubmitTransInfo) {
      debugger
      console.log(JSON.stringify(request));
      return this.httpUtils.postBodyToken(this.confService.baseUrl + 'transfer/orders', request,'').then(res => {
        //解析后台服务返回的JSON为消息结构
        let data = res;

        return data;
      });
  }
// /withdraw/coin
    submitwithdrawInfo(request: any) {
        debugger
        console.log(JSON.stringify(request));
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'withdraw/coin', request,'').then(res => {
            //解析后台服务返回的JSON为消息结构
            let data = res;

            return data;
        });
    }
    //设置资金密码
  setFundPassword(request: any){

      debugger
      return this.httpUtils.postBodyToken(this.confService.baseUrl + 'users/security/financial', request,'').then(res => {
          //解析后台服务返回的JSON为消息结构
          let data = res;

          return data;
      });

  }

  transCompleted(request: ReqTransCompleted) {

      console.log(JSON.stringify(request));
      let req = {uid:request.userid,ono:request.order_no,tid:request.trans_id};
      return this.httpUtils.postBodyToken(this.confService.baseUrl + 'app/auth/trans-completed', req,'').then(res => {
        return res;
      });
    }

    checkBill(){
        debugger
        return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'transfer/orders').then(res => {
            return res;
        });
    }

    digitalCurrency(request: DigitalCurrency){

        debugger
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'account/digitals/ba', request,'').then(res => {
            //解析后台服务返回的JSON为消息结构
            let data = res;

            return data;
        });
    }

    withdrawal(request: any){
        debugger
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'withdraw/confirm', request,'').then(res => {
            //解析后台服务返回的JSON为消息结构
            let data = res;

            return data;
        });
    }


    //订单查询
    foundAssets(): Observable<any>{
        debugger
        return this.httpUtils.httpget(this.confService.baseUrl + 'topup/orders').map(res => {
            return res.json();
        });
    }

}
