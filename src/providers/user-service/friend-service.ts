import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import { ConfService } from '../util-service/conf-service';
import { HttpUtils } from '../util-service/http-utils';
import {CheckPhoneCode, ChecPhoneNumber} from "../../providers/messages/user-auth-msg";

import { ReqFriendList,AckFriendList,ReqFriendDetail} from '../messages/friend-msg';

@Injectable()
export class FriendService {
  constructor(private confService: ConfService,private httpUtils:HttpUtils) {
    console.log('Hello FriendService Provider');
  }

  friendlist(request: ReqFriendList): Observable<any> {
    console.log('friendlist begin');
    if (request.userid === null ) {
      return Observable.throw("Please insert userid or password");
    } else {
      console.log(JSON.stringify(request));
      let req = {uid:request.userid};

      return this.httpUtils.httpgetNoToken(this.confService.baseUrl + '/json/getfriendlist.json' ).map(res => {
        //解析后台服务返回的JSON为消息结构
        let data = res.json();
        console.log(res.json());
        if(typeof(data) == "object" && Object.prototype.toString.call(data).toLowerCase() == "[object object]" && !data.length)
        {
          console.log(res.json());
         /* let ret = new AckFriendList();
          ret.ret_code = data.rc;
          ret.ret_msg = data.rm;
          ret.friends = data.friendlist;*/

          return res.json();
        }
        return null;
      });
    }
  }
    checkPhoneNumeber(request: CheckPhoneCode){
        return this.httpUtils.postBodyToken(this.confService.baseUrl+'account/inquiry/addressbook',request,'').then(res => {

            let data = res;

            return data;
        });

    }

    test(request: CheckPhoneCode){
        return this.httpUtils.postBodyToken(this.confService.baseUrl+'account/inquiry/addressbook',request,'').then(res => {

            let  data = res;

            return data;
        });
    }
    invitationContent(paramObj:'') {
        return this.httpUtils.getNotoken(this.confService.baseUrl + 'authcaptcha/content',paramObj).then(res =>{
            return res;
        })
    }

  frienddetail(request: ReqFriendDetail) {
    if (request.friendid === null ) {
      return Observable.throw("Please friendid");
    } else {
      console.log(JSON.stringify(request));
      //let req = {uid:request.friendid};
      //let url1 = "api/json/friend/get_frienddetail.json"
      return this.httpUtils.postBodyToken(this.confService.baseUrl + '/json/friend/get_frienddetail.json' , request,'').then(res => {
        //解析后台服务返回的JSON为消息结构
        let data = res;
        console.log(res);
        if(typeof(data) == "object" && Object.prototype.toString.call(data).toLowerCase() == "[object object]" && !data.length)
        {
          console.log(res);
          let ret = new AckFriendList();
          ret.ret_code = data.rc;
          ret.ret_msg = data.rm;
          ret.friends = data.friendlist;
          
          return ret;
        }
        return null;
      });
    }
  }

}
