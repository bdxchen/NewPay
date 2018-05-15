import { TransInfo } from './account-common-msg';
//应答中头两个字段是消息错误码/状态码及错误信息/状态信息。

//法币提现
//1、请求资金密码验证

//2、请求提现
//messageid : /account/withdraw
export class ReqWithdraw {
  userid:string; 	              //uid,用户账号
	trans_info:TransInfo;        //ti,金额信息
	financial_no:string;	        //fno,金融账户编号
}
//提现
export  class  WithdrawbaModel{
    coin_type:string;//"BTS"
    coin_quantity:string;//2000 //传入金额
}
//应答
export class AckWithdraw  {
  ret_code :number;        //rc,消息状态码
  ret_msg:string;          //rm,状态提示信息
	order_no:string;		        //ono,订单号
	trans_info:TransInfo;        //ti,金额信息
	ba_account:string;		    //baa,BA的公链账号或地址(注意防止中间人攻击????要买https证书)
}

//3、请求通知Ba,数币转账已完成（ba-〉digital coin）
//messageid : /account/transba-completed
export class ReqTransBaCompleted {
  userid:string; 	              //uid,用户账号
	order_no:string;		        //ono,订单号
	trans_id:string;             //ti,通过区块链完成交易后返回的链上交易ID
}
//应答
export class AckTransBaCompleted {
    ret_code :number;        //消息状态码
    ret_msg:string;          //状态提示信息
}


//4、请求提现状态(定时)
//messageid : /account/get-withdrawstate
export class ReqGetWithdrawState {
  userid:string; 	              //uid,用户账号
	order_no:string;		        //ono,订单号
}
//应答返回提现状态
export class AckGetWithdrawState {
  ret_code :number;        //rc,消息状态码
  ret_msg:string;          //rm,状态提示信息
	amount:number;		        //am,已提现额度
}
