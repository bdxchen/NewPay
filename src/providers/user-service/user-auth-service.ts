import { Injectable } from '@angular/core';
import { isDefined } from "ionic-angular/util/util";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ReqLogin, PwdCompar, ReqLogout, AckLogout,  ReqRegister, AckRegister,Code } from '../messages/user-auth-msg';
import { ConfService } from '../util-service/conf-service';
import { HttpUtils } from '../util-service/http-utils';

@Injectable()
export class AuthService {

  constructor(private confService: ConfService,private httpUtils:HttpUtils) {
    console.log('Hello AuthService Provider');
  }

  login(request: ReqLogin){
      return this.httpUtils.postBodyNotoken(this.confService.baseUrl + 'auth/login',request,'正在登录，等稍等...')
  }

  logout(request){
      let obj = { "userid":request};
      return this.httpUtils.postBodyToken(this.confService.baseUrl + 'auth/logout', obj,'');

  }

  register(request: ReqRegister) {

      console.log(JSON.stringify(request));
      let proxyUrl ="/api"
      return this.httpUtils.postBodyToken(this.confService.baseUrl + 'auth/register', request,'').then(res => {
        //解析后台服务返回的JSON为消息结构
        let data = res;
        console.log(data);
        return data;

      });

  }

  getCode(request: Code){
          console.log(JSON.stringify(request));
          return this.httpUtils.postBodyNotoken(this.confService.baseUrl + 'authcaptcha/sms', request,'').then(res => {
              //解析后台服务返回的JSON为消息结构
              let data = res;
              console.log(data);
              return data;
          });


  }

    orderSearch(){
      debugger
        return this.httpUtils.httpget(this.confService.baseUrl + 'topup/orders/newly').map(res => {
            let data = res;
            return data;
        });
    }

    checkOrders(){

        return this.httpUtils.httpget(this.confService.baseUrl + 'topup/orders').map(res => {
            let data = res;
            return data;
        });

    }

    //查询当前账户是否有资金密码
    checkFundingPassword() {
        return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'users/security/financial/exist').then(res => {
            let data = res;
            return data;
        });

    }
// /users/userinfo 查询用户个人资料
    userInfo(){
        return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'users/userinfo');
    }

    //4 资金密码修改
    changeFinancialPwd(req) {
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'users/security/financial/modification', req,'').then(res => {
            let data = res;
            return data;
        });

    }
    //4 登陆密码修改
    changeLoginPwdSer(req){
        console.log(req)
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'users/security/login/modification', req,'').then(res => {
            let data = res;
            return data;
        });

    }
    //获取重置资金密码验证短信 已经登录
    getZiJinPwdValid(){
        debugger
            // console.log(JSON.stringify(request));
            return this.httpUtils.getTokennoParam(this.confService.baseUrl + 'users/security/financial/resetcaptcha','').then(res => {
                //解析后台服务返回的JSON为消息结构
                let data = res;
                console.log(data);
                return data;
            });
    }
    //重置资金密码 已经登录
    getZiJinPwd(request){
        debugger
        // console.log(JSON.stringify(request));
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'users/security/financial/resetpwd',request,'').then(res => {
            //解析后台服务返回的JSON为消息结构
            let data = res;
            console.log(data);
            return data;
        });
    }
    //获取重置密码验证短信
    getResetLoginPwCode(request: Code){
            console.log(request);
            return this.httpUtils.postBodyNotoken(this.confService.baseUrl + 'users/security/login/resetcaptcha',request,'').then(res => {
                //解析后台服务返回的JSON为消息结构
                let data = res;
                console.log(data);
                return data;
            });
    }
    //验证  重置登录密码  的验证码是否正确
    getveryficaptcha(req){
        return  this.httpUtils.postBodyNotoken(this.confService.baseUrl+'users/security/login/veryficaptcha',req,'').then(res=>{
            console.log(res)
            let data = res;
            return data;
        })
    }
    //发送修改登陆密码验证码
    getloginCaptchaM(){
        return  this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl+'users/security/login/modificationcaptcha').then(res=>{
            console.log(res)
            let data = res;
            return data;
        })
    }
    //发送修改资金密码验证码
    getfinancialCaptchaM(){
        return  this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl+'users/security/financial/modificationcaptcha').then(res=>{
            console.log(res)
            let data = res;
            return data;
        })
    }
    //重置登录密码
    resetLoginPwdSer(req){
        console.log(JSON.stringify(req))
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'users/security/login/resetpwd', req,'').then(res => {
            let data = res;
            return data;
        });

    }
    //订单助手
    orderSMG(req) {
        console.log(JSON.stringify(req))
        return this.httpUtils.postBodyToken(this.confService.baseUrl + 'assistant/list', req,'').then(res => {
            let data = res;
            return data;
        });

    }

    //订单详情
    orderDetail(type,req){
        console.log(JSON.stringify(req))
        return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'assistant/'+type+'/'+req).then(res => {
            let data = res;
            return data;
        });

    }
    //订单详情
    verifytoken (){
        return this.httpUtils.getTokennoParamNoLoading(this.confService.baseUrl + 'verifytoken').then(res => {
            let data = res;
            return data;
        });

    }

}
