//此文件为currency信息，包括币种，可用金额、冻结金额、Icon等
import { BalanceInfo } from './account-common-msg';

//应答中头两个字段是消息错误码/状态码及错误信息/状态信息。

//请求资金密码验证
//messageid : /account/checkfundpwd
export class ReqGetBalance {
  userid:string; 	              //用户账号
}
//应答
export class AckGetBalance {
  ret_code:number;        //消息状态码
  ret_msg:string;          //状态提示信息
  balance_info:Array<BalanceInfo>;         //余额信息
}
export class Digitals{
    account:string;//"fcc001", //bts 账号，btc 地址
    coin_type:string;//"bts" //bts btc eth
}