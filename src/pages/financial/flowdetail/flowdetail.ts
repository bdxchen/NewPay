import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {TransferService} from "../../../providers/financial-service/account-transfer-service";

/**
 * Generated class for the FlowdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flowdetail',
  templateUrl: 'flowdetail.html',
})
export class FlowdetailPage {

    mData :object;
    createSuccess = false;
	indexTags: Array<{titletype: string, occurtime: string ,oppaccount:string,amount:string,status:string}>;
  constructor(public navCtrl: NavController,
              private alertCtrl : AlertController,
              public transfer:TransferService,
              public navParams: NavParams) {
  	this.indexTags = [
      { titletype: '充值', occurtime: '2017-07-18 12:30:00' ,oppaccount:"platform",amount:"10,000.00",status:"未完成"},
      { titletype: '提现', occurtime: '2017-07-18 12:30:00' ,oppaccount:"platform" ,amount:"20,000.00",status:"成功"},
      { titletype: '转账', occurtime: '2017-07-18 12:30:00'  ,oppaccount:"123@qq.com(晓晓)",amount:"12,000.00",status:"成功"},
      { titletype: '收款', occurtime: '2017-07-18 12:30:00'  ,oppaccount:"123@qq.com(晓晓)",amount:"1,000.00",status:"成功"},
      { titletype: '付款', occurtime: '2017-07-18 12:30:00' ,oppaccount:"123@qq.com(晓晓)",amount:"4,000.00",status:"成功"},
    ];

  }
  goBack(){
      this.navCtrl.pop();
  }
  billDetail(item){
        this.navCtrl.push('BillDetailPage',item)
  }
  ionViewDidLoad() {

      this.transfer.foundAssets().subscribe(result=> {

              if(result != null){
                  if(result.ret_code==1){
                     this.mData= result.data

                      // this.mData.a= "aaaaa"
                      // for(var  i = 0; i<this.mData.length; i++ ){
                      //     this.indexTags.push(this.mData);
                      //     this.mData.amount;
                      // }
                      // this.indexTags = result.data;
                      // result.json();

                  }else {
                      this.showPopup("",result.ret_msg);
                  }
              }
          },
          error => {
                this.showPopup("","您的网络有问题，请检查网络");
          });

  }

    showPopup(title, text) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: data => {
                        if (this.createSuccess) {
                            this.navCtrl.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    }
}
