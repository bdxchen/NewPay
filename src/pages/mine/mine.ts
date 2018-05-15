import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams,Alert,ActionSheet,Modal,Loading} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AuthService} from '../../providers/user-service/user-auth-service';
import { TranslateService } from 'ng2-translate';
import { ConfService } from '../../providers/util-service/conf-service'
import { GalleryModal } from 'ionic-gallery-modal';
import { CommonUtils} from '../../providers/common/commonUtils'
/**
 * Generated class for the MinePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class MinePage {
    userPhone:string;
    userinfo:any={};
    translateObj: any;
    alert:Alert;
    modal:Modal;
    actionSheet:ActionSheet;
    loading:Loading
    profile_icon:string;
    account:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController,
              public auth:AuthService,
              private confService:ConfService,
               public translate:TranslateService,
              public modalCtr:ModalController,
              private commonUtils:CommonUtils) {
            this.account = localStorage.getItem("account")
    this.translate.get('forgetPassword').subscribe((res: any) => {
      this.translateObj = res;
    });

  }

  ionViewWillEnter(){
      this.userPhone =  localStorage.getItem("userid");
      console.log(localStorage.getItem('userid'))
        console.log('ionViewWIllLoad MinePage');

    }
  ionViewDidLoad() {
      console.log('ionViewDidLoad MinePage');
  }
  myMsg(){
    this.navCtrl.push("MymessagePage");
  }

  goAbout(){
    this.navCtrl.push("AboutPage");
  }

  goDocument(userinfo){

    this.navCtrl.push("DocumentPage",{userinfo:JSON.stringify(userinfo)})
  }

  goFlowdetail(){
    this.navCtrl.push("FlowdetailPage");
  }
  goSecuritycenter(){
      this.navCtrl.push("ChangepwdPage", {});
  }
  myWallet(){
    this.navCtrl.push('MyWalletPage');
  }

  setting(){
    console.log("设置");
    this.navCtrl.push('SettingPage');

  }
  goMyAlipay(){
    //this.navCtrl.push("MyAlipayPage")
          this.navCtrl.push("MyAlipayPage")
  }
  goBankCard(){
      if(this.userinfo.id_status =='1'){
          this.navCtrl.push("BankcardPage",{titleName:this.translateObj.passwordForBankCard,nextPage:"BankcardPage"})
      }else{
          if(this.userinfo.id_status =='0'){
              this.commonUtils.alertCommon('提示',this.translateObj.shenfenRZS0)
          }else if(this.userinfo.id_status =='2'){
              this.commonUtils.alertCommon('提示',this.translateObj.shenfenRZS2)
          }else{
              this.commonUtils.alertCommon('提示',this.translateObj.shenfenRZS3)
          }
      }

   // this.navCtrl.push("BankcardPage")
  }
  exit(){
    this.navCtrl.push("LoginPage");
  }
    openMaxIMG(){


        this.modal = this.modalCtr.create(GalleryModal, {
            photos: [{
                url: this.profile_icon,
                type: '',
            }],
            initialSlide: 1
        });
        this.modal.present();
    }
    ionViewWillLeave(){
        if(this.alert){
            this.alert.dismiss();
        }
        if(this.loading){
            this.loading.dismiss();
        }
        if(this.actionSheet){
            this.actionSheet.dismiss();
        }
        if(this.modal){
            this.modal.dismiss();
        }
    }
    goTestPage(){
        this.navCtrl.push("OnlyTestPage")
    }
}
