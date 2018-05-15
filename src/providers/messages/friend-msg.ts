export class ReqFriendList {
  userid:string; 	              //uid,用户账号
}
// 
export class AckFriendList {
  ret_code :number;        //rc,消息状态码
  ret_msg:string;          //rm,状态提示信息
  friends : Array<FriendInfo>;		    //朋友信息数组
}
export class FriendInfo {
	account : string; 	 //号码
	name : string;		//名字
	profile : string;		//照片路径
	status : string;		//状态
}

export class ReqFriendDetail{
	friendid : string;
}
export class AckFriendDetail{
	ret_code : string;
	ret_msg : string;
	account : string;
	name : string;
	profile : string;
	status : string;
} 