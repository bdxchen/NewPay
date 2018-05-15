import { Component } from '@angular/core';
import {Alert, AlertController, IonicPage, Loading, Modal, NavController, NavParams} from 'ionic-angular';
import { NewpayInstance } from 'newpay-wallet-js';
import 'rxjs/add/operator/toPromise';
import { Clipboard } from '@ionic-native/clipboard';
import { TranslateService } from 'ng2-translate';
import { CommonUtils} from  '../../../../providers/common/commonUtils'
/**
 * Generated class for the BackupsKeyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-backups-key',
  templateUrl: 'backups-key.html',
})
export class BackupsKeyPage {
  brainKey:string;
  alert:Alert;
    loading:Loading;
    modal:Modal;

    account:string;
    translateObj: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private commonUtils:CommonUtils,
              public clipboard:Clipboard,public alertCtrl:AlertController, public translate:TranslateService) {
   this.brainKey = this.navParams.get("brainKey");
   console.log(this.brainKey);
   this.account=localStorage.getItem('account');
    this.translate.get('backups_key').subscribe((res: any) => {
      this.translateObj = res;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BackupsKeyPage');
    console.log(this.brainKey);
  }
  copyBack(){
      this.clipboard.copy(this.brainKey).then((res)=>{
        this.CommonAlert();
      }).catch((err)=>{
          this.alertCommon('',err)
      });
  }
    alertCommon(title,subT){
        this.alert = this.alertCtrl.create({
            title: title,
            subTitle: subT,
            buttons: [
                {
                    text: this.translateObj.confirm,
                    handler: data => {
                    }
                }
            ]
        });
        this.alert.present();
    }
  CommonAlert(){
      this.alert = this.alertCtrl.create({
          title: this.translateObj.warning,
          subTitle: this.translateObj.warCopySuc,
          buttons: [
              {
                  text: this.translateObj.confirm,
                  handler: data => {
                  }
              }
          ]
      });
      this.alert.present();
  }
    goBack(){
      // this.navCtrl.pop();
        this.navCtrl.push("TabsPage");
        // this.navCtrl.parent.select(2);
    }
    ionViewWillLeave() {
        if (this.alert) {
            this.alert.dismiss();
        }
        if (this.loading) {
            this.loading.dismiss();
        }

        if (this.modal) {
            this.modal.dismiss();
        }
    }
}
