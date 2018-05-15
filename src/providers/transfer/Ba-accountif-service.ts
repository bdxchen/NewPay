import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ConfService } from '../util-service/conf-service';
import { HttpUtils } from '../util-service/http-utils';

import {verify} from '../messages/account-pub-msg';

@Injectable()
export class BaAccountifService {
    TemprecImp:verify={to_userid:'',coin_type:''};
    coin_type:any={coin_type:''};
    constructor(private confService: ConfService,private httpUtils:HttpUtils) {
        console.log('Hello AccountPubService Provider');
    }
    //请求收款方账户有效性验证
    recImport(request){
        this.TemprecImp.to_userid=request;
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'users/verify',this.TemprecImp,'')
    }
    monetaryxchangeRate(coin_type){
        this.coin_type.coin_type ='';
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'account/digitals/rate',this.coin_type,'')
    };


}
