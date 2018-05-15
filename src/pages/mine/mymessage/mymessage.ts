import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MymessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mymessage',
  templateUrl: 'mymessage.html',
})
export class MymessagePage {

	indexTags: Array<{title: string, status: string ,content:string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.indexTags = [
      { title: '您有一笔收款已到账', status: '1' ,content:"您于2017-07-18 15:44:01 收到好友55998811@163.com(小伙砸)BitCNY(100.00),请查收"},
      { title: '您有一笔付款(可乐)请求', status: '2',content:"您于2017-07-18 13:00:46 转账到12331@126.com(晓晓)，对方已经到账！" },
      { title: '您有一笔收款已到账', status: '1' ,content:"您于2017-07-18 12:06:12 充值BitCNY(200.00)已经到账，请查收"},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MymessagePage');
  }
    goBack(){
      this.navCtrl.pop();
    }
}
