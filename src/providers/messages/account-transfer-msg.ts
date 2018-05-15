//转账
import { TransInfo } from './account-common-msg';
//应答中头两个字段是消息错误码/状态码及错误信息/状态信息。


//1、请求收款方账户有效性验证
//messageid : /account/checkpyaee
export class ReqCheckPayee {
 // userid:string; 	              //uid,用户账号
    to_userid:string; //收款账户
    amount: number; // 金额
    asset_id: string;  //id
    precision: number;   //精度
    coin_type: string //币种
    symbol:string;
    nickname:string;//昵称
    coin_account:string;//数字货币账号

}
export class CheckUid{
    to_userid:string;//"183943948394",
    coin_type:string;//"BitCNY"

}
export class Searchd {
    amount: number; // 金额
    asset_id: string;  //id
    precision: number;   //精度
    symbol: string //币种

}

//应答
export class AckCheckPayee  {
  ret_code :number;        //rc,消息状态码
  ret_msg:string;          //rm,状态提示信息
}

//2、请求资金密码验证

//3、请求提交转账信息
//messageid : /account/submit-transinfo
export class ReqSubmitTransInfo {
    amount: number;          //转账金额
    fee:number;             //手续费
    comment:string;             //备注
    coin_type: string;      //转账币种
    to_userid:string;       //收款方账户(手机/邮箱)
    coin_account: string;   //数字货币账号
    txid: string;              //收款方公链帐号或地址（从链获取）

}
export class receiveData{
    Account:string;
    currecy:string;
    money:string;
    remark:string;
}
//应答返回提现状态
export class AckSubmitTransInfo {
  ret_code :number;        //rc,消息状态码
  ret_msg:string;          //rm,状态提示信息
  payee_account:string;     //pa,收款方公链帐号或地址(注意防止中间人攻击????要买https证书)
  order_no:string;		        //ono,订单号
}

//3、请求通知Ba,数币转账已完成（ba-〉digital coin）
//messageid : /account/trans-completed
export class ReqTransCompleted {
  userid:string; 	              //uid,用户账号
  order_no:string;		        //ono,订单号
  trans_id:string;             //tid,通过区块链完成交易后返回的链上交易ID
}
//应答
export class AckTransCompleted  {
  ret_code :number;        //消息状态码
  ret_msg:string;          //状态提示信息
}
//获取数字货币账号
export class DigitalCurrency{
    coin_type:string;
}

//请求提现

export class Withdrawal{
    financial_account_type:string;
    financial_account:string;
    from_digital_account: string;
    to_digital_account: string;
    amount: string;
    fee: number;
    coin_type: string;
    comment: string;
    txid: string;
}


