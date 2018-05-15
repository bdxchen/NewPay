//此文件为消息中通用结构定义文件

//字段定义说明：
//userid:账户,手机号,邮箱等,登录认证所用
//username:用户名
//nickname:用户昵称
//realname:用户真实姓名

//CA:currency accept merchant(法币承兑商)，简称CurA
//BA:bit currency accept merchant（数字货币承兑商），简称BitA

//金额信息结构
export class TransInfo {
		amount:number;	    //金额
		comment:string;	    //备注
		coin_type:string;	//币类型
}

//余额相关结构
export class BalanceInfo {
		avail_amount:number;	    //可用金额
		freeze_amount:number;		//冻结金额
		comment:string;	    //备注
		coin_type:string;	//币类型

}