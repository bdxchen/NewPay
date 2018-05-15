import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ConfService } from '../util-service/conf-service';
import { HttpUtils } from '../util-service/http-utils';
@Injectable()
export class FeelActionrateService {
    constructor(private confService: ConfService,private httpUtils:HttpUtils) {
        console.log('Hello BalanceService Provider');
    }

    getActionrate(request:any) {
            //console.log(JSON.stringify(request));
            return this.httpUtils.postBodyToken(this.confService.baseUrl + 'coininfo/actionrate', request,'').then(res => {
                //解析后台服务返回的JSON为消息结构
                console.log(res);
                let data = res;
                return data;
            });
        }



}
