import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FriendService } from '../../../providers/user-service/friend-service';
import { ReqFriendDetail} from '../../../providers/messages/friend-msg';
/**
 * Generated class for the FrienddetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-frienddetail',
  templateUrl: 'frienddetail.html',
})
export class FrienddetailPage {

  friendinfo: Array<{displayName: string, phoneNumber: string ,pinyinName:string,flag:string}>;
  friendinfotemp : ReqFriendDetail = {friendid:'1212121212'};
  constructor(public navCtrl: NavController, 
            public friend:FriendService, 
            public navParams: NavParams) {
    // this.friend.frienddetail(this.friendinfotemp);
  	this.friendinfo = navParams.get('item');
  	//alert(this.friendinfo.name);
  	 
  }

  
  goBack(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FrienddetailPage');
  }

  toTrans(acc) {

    this.navCtrl.push("CurrencyselPage", { account : acc});
    console.log('toTopup CurrencyDetailPage');
  }

}
