import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ConfService } from '../util-service/conf-service';
import { HttpUtils } from '../util-service/http-utils';
import { ReqGetBalance,Digitals } from '../messages/account-currency-msg';
/*
  Generated class for the BackModelProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BankModelProvider {

  constructor(private confService: ConfService,public http: Http,
              public httpUtils:HttpUtils) {
    console.log('Hello BackModelProvider Provider');
  }

    getbankM() {
            return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'account/banks');
        }
    //account/thirdpart
    getThirdpart(){
        return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'account/thirdparts');
    }
    // account/digitals 查询全部数字货币账号  登录 成功以后 ，俩种情况
    // 1: 有账号 对比 本地账号 是否 与中心 的账号相同,如果相同则 那么说明 是正确的账户 如果不相同 清空本地数据，需要重新导入
    // 2: 没账号 需要创建新的账号  和 密码
    getdigitals(){
        return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'account/digitals');
    }
    //添加数字货币账号
    // account/digitals POST
// {
//     "account":"fcc001", //bts 账号，btc 地址
//     "coin_type":"bts" //bts btc eth
// }
    AddGetdigitals(digitals:Digitals){
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'account/digitals',digitals,'');
    }

}
