//

//messageid : /auth/login
export class ReqLogin {
  userid :string;   //uid,手机或邮箱
  password : string;//pwd,
  appregisterid:string;
    country:string;
}
export class PwdCompar{
    oldPassword:string;
    newPassword:string;
}
export class AckLogin {
  ret_code :number;        //rc,消息状态码
  ret_msg:string;          //rm,状态提示信息
  token:string;	         	 //tk,验证token。
}

//messageid : /auth/logout
export class ReqLogout {
userid:string; 	          //uid,用户账号
}
export class AckLogout {
  ret_code :number;        //rc,消息状态码
  ret_msg:string;          //rm,状态提示信息
}

//messageid : /auth/register
export class ReqRegister {
    captcha:string;
    userid :string;   //
    password : string;  //
    country:string;   //电话区号 86
}
export class AckRegister {
  ret_code :number;        //rc,消息状态码
  ret_msg:string;          //rm,状态提示信息
}
//手机验证码
export class Code{
    nationCode: string;
    phoneNo: string;
}
//添加支付宝
export class AddAlipay{

    account: string;        //支付宝账号
    name:string;               //支付宝信息
}
//添加银行卡

export class AddBankCard{
    account:string;  //银行卡账号
    name: string; //持卡人姓名
    bankname: string; //银行卡名称
    branchName: string;  //开户行地址
}


export class DeleteBankCard{

    account: string; //银行卡账号
    name: string;   //持卡人姓名
    bankname: string; //银行卡名称
    branchName: string; //开户行地址
    time: string; //解绑时间
}

//验证用户设置资金密码
export class FundPassword{
    password: string;
}

//修改用户资料

export class SetUserInfo{

    nick_name: string;
    id_name:string;
    id_status:string;
    gender: string;
    province: string;
    city: string;
    profile_icon:string;

}
export class  Allinfo{

}

export  class Digitals{
    account:string;//"fcc001", //bts 账号，btc 地址
    coin_type:string;//"bts" //bts btc eth

}


//修改资金密码

export class ModifyFinpwd{

    oldPassword: string;
    newPassword: string;
}

//修改登录密码

export class ModifyLoginpwd{

    oldPassword:string;
    newPassword:string;
}


//检查用户是否已经注册New

export class ChecPhoneNumber{

    phoneno:string;

}
export class CheckPhoneCode{

    contacts:Array<ChecPhoneNumber>
}

//解绑支付宝

export class DeleteAlipay{

    account:string;  //账号
    name:string;       //姓名
}
