import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ConfService } from '../util-service/conf-service';
import { HttpUtils } from '../util-service/http-utils';

import { ReqGetPaycode, ReqTransCaCompleted,  ReqGetTopupState, AckGetPaycode, AckGetTopupState } from '../messages/account-topup-msg';

@Injectable()
export class TopupService {

  constructor(private confService: ConfService,
              private httpUtils:HttpUtils,
             ) {
    console.log('Hello TopupService Provider');
  }

  getPaycode(request: ReqGetPaycode): Observable<any> {
    if (request.userid === null ) {
      return Observable.throw("Please insert userid or password");
    } else {
      //console.log(JSON.stringify(request));
      let req = {uid:request.userid,ti:{am:request.trans_info.amount,com:request.trans_info.comment,ct:request.trans_info.coin_type}};
      return this.httpUtils.httppost(this.confService.baseUrl + '/app/account/get-paycode', JSON.stringify(req)).map(res => {
        //解析后台服务返回的JSON为消息结构
        let data = res.json();
        if(typeof(data) == "object" && Object.prototype.toString.call(data).toLowerCase() == "[object object]" && !data.length)
        {
          console.log(res.json());
          let ret = new AckGetPaycode();
          ret.ret_code = data.rc;
          ret.ret_msg = data.rm;
          ret.pay_code = data.pc;
          ret.order_no = data.ono;
          return ret;
        }
        return null;
      });
    }
  }

  tranCaFinished(request: ReqTransCaCompleted): Observable<any> {
    if (request.userid === null )  {
      return Observable.throw("Token Error,Try again!");
    } else {
      console.log(JSON.stringify(request));
      let req = {uid:request.userid,ono:request.order_no};
      return this.httpUtils.httppost(this.confService.baseUrl + '/app/auth/transca-completed', JSON.stringify(req)).map(res => {
        return res.json();
      });
    }
  }

  getTopupState(request: ReqGetTopupState): Observable<any> {
    if (request.userid === null )  {
      return Observable.throw("Please insert phone or password");
    } else {
      console.log(JSON.stringify(request));
      let req = {uid:request.userid,ono:request.order_no};
      return this.httpUtils.httppost(this.confService.baseUrl + '/app/auth/get-toppustate', JSON.stringify(req)).map(res => {
        //解析后台服务返回的JSON为消息结构
        let data = res.json();
        if(typeof(data) == "object" && Object.prototype.toString.call(data).toLowerCase() == "[object object]" && !data.length)
        {
          console.log(res.json());
          let ret = new AckGetTopupState();
          ret.ret_code = data.rc;
          ret.ret_msg = data.rm;
          ret.amount = data.am;
          return ret;
        }
        return null;
      });
    }
  }
}
