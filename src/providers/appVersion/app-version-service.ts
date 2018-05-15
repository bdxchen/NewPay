import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ConfService } from '../util-service/conf-service';
import { HttpUtils } from '../util-service/http-utils';

@Injectable()
export class AppVersionService {
  constructor(private confService: ConfService,private httpUtils:HttpUtils) {
    console.log('Hello BalanceService Provider');
  }
  getAppVersion(request): Observable<any> {
    if (request.userid === null ) {
      return Observable.throw("Please insert userid or password");
    } else {
      //console.log(JSON.stringify(request));
      //  let appId = this.confService.app_id;
      let req  =  {"app_id": '11111'};
      return this.httpUtils.httppost(this.confService.baseUrl + '/app/version', JSON.stringify(req)).map(res => {
        //解析后台服务返回的JSON为消息结构
        console.log(res.json());
        let data = res.json();
        return data;
      });
    }
  }



}
