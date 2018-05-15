import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ConfService } from '../util-service/conf-service';
import { HttpUtils } from '../util-service/http-utils';


import {ReqGetAliAcc , AckGetAliAcc,AliAccountInfo} from '../messages/mine-msg';
import {AddAlipay, AddBankCard, DeleteAlipay, DeleteBankCard, SetUserInfo} from "../messages/user-auth-msg";

@Injectable()
export class MineService {
  constructor(private confService: ConfService,
              private httpUtils:HttpUtils) {
    console.log('Hello FriendService Provider');
  }

  //查询当前账户绑定的支付宝账户
  aliacclist() {
    console.log('aliacclist begin');

      debugger
      return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'account/thirdparts').then(res => {
          return res;
      });
  }

  //解绑支付宝账户

    deleteAlipay(request: DeleteAlipay){
        debugger
        return this.httpUtils.postBodyToken(this.confService.baseUrl+'account/thirdparts/unbind',request,'').then(res => {

            let  data = res;

            return data;
        });
    }

  //查询当前绑定的有银行卡
  bankCardcclist(){
      debugger
      return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'account/banks').then(res => {
          return res;
      });
  }

  //解绑银行卡
  deleteBankCard(request: DeleteBankCard){

       return this.httpUtils.postBodyToken(this.confService.baseUrl+'account/banks/unbind',request,'').then(res => {

           let  data = res;


           return data;
       });
  }

  //查询默认的用户资料

    muserInfocclist(){

      debugger
        return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'users/userinfo').then(res => {
            return res;
        });
    }

      //修改用户资料
    setUserinfo(request: SetUserInfo){

        return this.httpUtils.postBodyToken(this.confService.baseUrl+'users/updateuser',request,'').then(res => {

            let  data = res;

            return data;
        });
    }

    //上传头像
    uploadHeader(id){
        let request = {"id":id};
        return this.httpUtils.postBodyToken(this.confService.baseUrl+'users/icon',request,'').then(res => {
            let  data = res;
            return data;
        });
    }

    //添加支付宝账号
    addAlipay(request: AddAlipay){
        debugger
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'account/thirdparts', request,'').then(res => {
            //解析后台服务返回的JSON为消息结构
            let data = res;

            return data;
        });
    }

    //添加银行卡
    addBankCard(request: AddBankCard){
        debugger
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'account/banks', JSON.stringify(request),'').then(res => {
            //解析后台服务返回的JSON为消息结构
            let data = res;

            return data;
        });
    }

    //自动补充某行银行卡 信息
    bankbinXXCard(id){
        debugger
        let request ={"bin":id};
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'account/banks/bankbin', request,'').then(res => {
            //解析后台服务返回的JSON为消息结构
            let data = res;
            return data;
        });
    }
}
