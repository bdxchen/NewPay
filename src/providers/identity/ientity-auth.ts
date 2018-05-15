import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ConfService } from '../util-service/conf-service';
import { HttpUtils } from '../util-service/http-utils';
import {CountryNumService} from '../../providers/countryNum/country-num-service';

import { ReqGetBalance } from '../messages/account-currency-msg';

@Injectable()
export class IentityAuth {

  constructor(private confService: ConfService,private httpUtils:HttpUtils) {
    console.log('Hello SearchAcc Provider');


  }
  identity(request){
        //console.log(JSON.stringify(request));
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'users/identity',request,'');
  }

    userIdentity(){
        //console.log(JSON.stringify(request));
        return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'users/identity');
    }

}
