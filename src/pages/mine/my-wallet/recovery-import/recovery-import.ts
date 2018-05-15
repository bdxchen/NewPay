import { Component } from '@angular/core';
import {
    Alert, AlertController, IonicPage, NavController, NavParams, ModalController,
    ToastController, Loading, Modal
} from 'ionic-angular';
import { NewpayInstance } from 'newpay-wallet-js';
import 'rxjs/add/operator/toPromise';
import { ModalPage } from  '../../../modal/modal';
import  { RecoveryImportService } from '../../../../providers/wallet/recovery-import-service'
import {StorageService} from  '../../../../providers/util-service/storage-service';
import { CommonUtils} from '../../../../providers/common/commonUtils'
import {lifecycleHookToNodeFlag} from "@angular/compiler/src/view_compiler/provider_compiler";
import { TranslateService } from 'ng2-translate';
import { PincodeController } from  'ionic2-pincode-input/dist/pincode'
/**
 * Generated class for the RecoveryImportPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recovery-import',
  templateUrl: 'recovery-import.html',
})
export class RecoveryImportPage {
    opts :string;
    alert:Alert;
    modal:Modal;
    loading:Loading;
    accountname:string;
    getKeyBrain:string='';
    account:any;
    brainKey:string;
    indexedDB = window.indexedDB ;
    translateObj: any;
    if(indexedDB)
    {
    console.log("你的浏览器不支持IndexedDB");
    }
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl:AlertController,
              public modalCtrl:ModalController,
              public toastCtrl:ToastController,
              public pincodeCtrl: PincodeController,
              public storageService:StorageService,
              public recoveryImportService:RecoveryImportService,
              public commonUtils:CommonUtils,
              public translate:TranslateService) {

        this.account = storageService.read('userid');
      this.translate.get('recovery_import').subscribe((res: any) => {
          this.translateObj = res;
      });
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad RecoveryImportPage');
  }

    goBack(){
        this.navCtrl.pop();
    }
  alertCommon(title,subTitle){
      this.alert = this.alertCtrl.create({
          title: title,
          subTitle: subTitle,
          buttons: [
              {
                  text: this.translateObj.ok,
                  handler: data => {
                  }
              }
          ]
      });
      this.alert.present();
  }
  returnZXH(zhanghuming){
        console.log("zhanghuming",zhanghuming);
        return new Promise((resolve, reject)=>{
            localStorage.setItem("account",zhanghuming);
            let obj={
                    flag:0,
                    // value: this.translateObj.accountExists
                    account:zhanghuming
            };
            resolve(obj)
            // if(zhanghuming==user){  //和规则相同 允许导入
            //     let obj={
            //         flag:0,
            //         value: this.translateObj.accountExists
            //     };
            //     resolve(obj)
            //     // //链 导入脑钥 和生成规则不相同，那就肯定不能导入了
            //     // if(localStorage.getItem("account") != NewpayInstance.getCurAccountLocalKey() ){
            //     //     this.alertCommon(this.translateObj.warning, this.translateObj.IfMatching);
            //     //     console.log("不为null")
            //     //     return;
            //     // }
            // }else if(zhanghuming !=user){
            //     let obj={
            //         flag:1,
            //         value: this.translateObj.accountNoExists
            //     };
            //     resolve(obj)
            //     // this.commonUtils.alertCommon('提示','账户在本系统不存在');
            //     //return;
            // }
        }).catch()

    }
  recoveryKey(){
      if(this.getKeyBrain.length==0){
          this.alertCommon(this.translateObj.warning, this.translateObj.inputBrainKey);
          return;
      }
      if(this.getKeyBrain.length<50){
          this.alertCommon(this.translateObj.warning, this.translateObj.morethen15);
          return;
      }
      let pinCode =  this.pincodeCtrl.create({
          title:'输入密码'
      });

      pinCode.present();

      pinCode.onDidDismiss( (code,status) => {
    console.log(this.getKeyBrain.length)
      //创建之前 要 删除本地数据库的数据 获取getRootDatabaseName getDatabaseName
            console.log(code)
            console.log(NewpayInstance.validatePassword(code))
          if(NewpayInstance.validatePassword(code)){
              // 先验证密码的正确性，如果密码都不正确后续操作全部不能执行。 如果密码正确 验证账户的正确性账户为当前登录用户 那就恢复脑钥
              this.commonUtils.showLoading();
              //验证成功&& WalletDb.validatePassword(data.pwd, true)
              console.log(this.getKeyBrain)
              // 初始化
              NewpayInstance.importBrainKey("default", this.getKeyBrain, this.returnZXH.bind(this),code).then(() => {
                  this.commonUtils.HideLoading();

                  //重置密码，导入成功，   提交到中心 服务器
                  console.log("导入成功");
                  console.log( NewpayInstance.getCurAccountLocalKey())
                  this.brainKey =  NewpayInstance.exportBrainKey()
                  console.log(this.brainKey);
                  localStorage.setItem("brainKey",this.brainKey);
                  //如果是导入 WalletManagerStore.onSetWallet（ 钱包名，钱包密码，脑钥）返回的是 成功不成功
                  this.navCtrl.push('TabsPage');
              }).catch((err) => {
                  this.commonUtils.HideLoading();
                  console.log(err);
                  this.alertCommon('提示', '脑钥错误,请重新导入');
              })
          }else{
            this.commonUtils.alertCommon("","密码错误")
          }

      })
  }
    ionViewWillLeave(){
        if(this.alert){
            this.alert.dismiss();
        }
        if(this.loading){
            this.loading.dismiss();
        }

        if(this.modal){
            this.modal.dismiss();
        }
    }
}
