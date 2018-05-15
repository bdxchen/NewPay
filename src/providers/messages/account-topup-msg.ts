import { TransInfo } from './account-common-msg';
//应答中头两个字段是消息错误码/状态码及错误信息/状态信息。

//法币充值流程消息
//1、请求获得CA的支付码
//messageid : /account/get-paycode
export class ReqGetPaycode {
  userid:string; 	              //uid,用户账号
  trans_info:TransInfo;         //ti,金额信息
}
//应答返回CA的支付码
export class AckGetPaycode {
  ret_code :number;        //rc,消息状态码
  ret_msg:string;          //rm,状态提示信息
  pay_code:string;		    //pc,CA支付码
  order_no:string;		    //ono,订单号
}

//2、请求通知Ca,法币转账已完成
//messageid : /account/transca-completed
export class ReqTransCaCompleted {
  userid:string; 	        //uid,用户账号
  order_no:string;		    //ono,订单号
}

//3、请求充值状态(定时)
//messageid : /account/get-toppustate
export class ReqGetTopupState {
  userid:string; 	        //uid,用户账号
  order_no:string;		    //ono,订单号
}
//应答返回充值状态
export class AckGetTopupState {
  ret_code :number;        //rc,消息状态码
  ret_msg:string;          //rm,状态提示信息
  amount:number;	        //am,已充值额度
}
