import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ConfService } from '../util-service/conf-service';
import { HttpUtils } from '../util-service/http-utils';

import { ReqGetBalance } from '../messages/account-currency-msg';

@Injectable()
export class BalanceService {
  constructor(private confService: ConfService,private httpUtils:HttpUtils) {
    console.log('Hello BalanceService Provider');
  }

  getBalance(request: ReqGetBalance): Observable<any> {
    if (request.userid === null ) {
      return Observable.throw("Please insert userid or password");
    } else {
      //console.log(JSON.stringify(request));
      return this.httpUtils.httppost(this.confService.baseUrl + '/json/account/get-balance.json', JSON.stringify(request)).map(res => {
        //解析后台服务返回的JSON为消息结构
        console.log(res.json());
        let data = res.json();
        return data;
      });
    }
  }



}
