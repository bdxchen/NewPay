//此文件为公共消息定义文件

//应答中头两个字段是消息错误码/状态码及错误信息/状态信息。

//请求资金密码验证
//messageid : /account/checkfundpwd
export class ReqCheckFundPwd {
    userid:string; 	              //uid,用户账号
	fund_pwd:string;		        //fp,资金密码
}
export class verify{
    to_userid:string;//"183943948394",
    coin_type:string;//"BitCNY"

}
export class recImp{
    password:string;
}
//应答
export class AckCheckFundPwd {
  ret_code:number;        //rc,消息状态码
  ret_msg:string;          //rm,状态提示信息
}

export class Alipay{

    amount:string;  //转账金额
    comment:string; //备注
    coin_type:string;   //币种
}

export class SubmitOrder{
    channelType:string;
    account_no:string;
    amount:string;
    comment:string;
    coin_type:string;
}
export class ConfirmOrder{
     orderNo:string;
     payStatus:boolean;  //取消是false
}
