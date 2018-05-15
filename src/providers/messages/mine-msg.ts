export class ReqGetAliAcc{
	userid : string;
}
export class AckGetAliAcc{
	ret_code : string;
	ret_msg : string;
	aliaccs : Array<AliAccountInfo>;		    
}
export class AliAccountInfo {
	account : string; 	 //
	name : string;		//名字
}
