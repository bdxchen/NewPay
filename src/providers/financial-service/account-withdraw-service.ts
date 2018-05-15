import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ConfService } from '../util-service/conf-service';
import { HttpUtils } from '../util-service/http-utils';

import { ReqWithdraw, ReqTransBaCompleted, ReqGetWithdrawState, AckWithdraw, AckGetWithdrawState,WithdrawbaModel } from '../messages/account-withdraw-msg';

@Injectable()
export class WithdrawService {
  constructor(private confService: ConfService,private httpUtils:HttpUtils) {
    console.log('Hello AuthService Provider');
  }

  withdraw(request: ReqWithdraw): Observable<any> {
      console.log(JSON.stringify(request));
      let req = {uid:request.userid,ti:{am:request.trans_info.amount,com:request.trans_info.comment,ct:request.trans_info.coin_type},fno:request.financial_no};
      return this.httpUtils.httppost(this.confService.baseUrl + '/app/auth/withdraw', JSON.stringify(req)).map(res => {
        //解析后台服务返回的JSON为消息结构
        let data = res.json();
        if(typeof(data) == "object" && Object.prototype.toString.call(data).toLowerCase() == "[object object]" && !data.length)
        {
          console.log(res.json());
          let ret = new AckWithdraw();
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
  }

  transBaCompleted(request: ReqTransBaCompleted): Observable<any> {
      console.log(JSON.stringify(request));
      return this.httpUtils.httppost(this.confService.baseUrl + '/app/auth/transba-completed', JSON.stringify(request)).map(res => {
        return res.json();
      });

  }
  getwithdrawBa(request: any){
      return this.httpUtils.postBodyToken(this.confService.baseUrl + 'withdraw/orders',request,'请稍等，正在加载。。')
  }
  getWithdrawState(request: ReqGetWithdrawState): Observable<any> {
      console.log(JSON.stringify(request));
      return this.httpUtils.httppost(this.confService.baseUrl + '/app/auth/get-withdrawstate', JSON.stringify(request)).map(res => {
        //解析后台服务返回的JSON为消息结构
        let data = res.json();
        if(typeof(data) == "object" && Object.prototype.toString.call(data).toLowerCase() == "[object object]" && !data.length)
        {
          console.log(res.json());
          let ret = new AckGetWithdrawState();
          ret.ret_code = data.rc;
          ret.ret_msg = data.rm;
          ret.amount = data.am;
          return ret;
        }
        return null;
      });

  }

}
