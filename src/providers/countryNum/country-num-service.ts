import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ConfService } from '../util-service/conf-service';
import { HttpUtils } from '../util-service/http-utils';


@Injectable()
export class  CountryNumService{
    constructor(private confService: ConfService,private httpUtils:HttpUtils) {
        console.log('Hello BalanceService Provider');
    }

    getCountryNumber() {
            //console.log(JSON.stringify(request));
            return this.httpUtils.getNotoken(this.confService.baseUrlTemp + 'country/chineseCountryJson.json','').then(res => {
                //解析后台服务返回的JSON为消息结构
                console.log(res);
                let data = res;
                return data;
            });
    }



}
