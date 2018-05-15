import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ConfService } from '../util-service/conf-service';
import { HttpUtils } from '../util-service/http-utils';


import { ReqGetBalance } from '../messages/account-currency-msg';

@Injectable()
export class SearchAccService {
  constructor(private confService: ConfService,private httpUtils:HttpUtils) {
    console.log('Hello SearchAcc Provider');
  }

  getSearchAccM(){
      //console.log(JSON.stringify(request));
      return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'account/inquiry/supportcointype');
  }
  Adddigital(request){
        //console.log(JSON.stringify(request));
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'account/digitals/addasset',request,'');
    }
    //查询用户资产列表
//   account/digitals/assets  GET
    findAssets(){
        //console.log(JSON.stringify(request));
        return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'account/digitals/assets');
    }
    getStatus(){
        return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl+'users/identity/status');
    }
}
