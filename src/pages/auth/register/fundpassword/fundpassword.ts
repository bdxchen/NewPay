import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {TransferService} from "../../../../providers/financial-service/account-transfer-service";
import {FundPassword} from "../../../../providers/messages/user-auth-msg";
import { CommonUtils} from '../../../../providers/common/commonUtils'
import { NewpayInstance } from 'newpay-wallet-js';
import 'rxjs/add/operator/toPromise';
import { TranslateService } from 'ng2-translate';
import {ConfService} from  '../../../../providers/util-service/conf-service'
import { PincodeController } from  'ionic2-pincode-input/dist/pincode'
/**
 * Generated class for the FundpasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fundpassword',
  templateUrl: 'fundpassword.html',
})
export class FundpasswordPage {
    userId:string;
    code:any;
    brainKey:string;
    accountName:string;
  // fundpassword:string;
  refundpassword:string;
  fundpassword: any = {password:''};
    translateObj: any;
    flag:boolean = false;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private confService:ConfService,
              private transfer: TransferService,
              public pincodeCtrl: PincodeController,
              public toastCtrl:ToastController,
              public commonUtils:CommonUtils,
              public translate:TranslateService) {
                console.log(this.navParams.get('userid'))
              this.userId = this.navParams.get('userid');
              this.translate.get('fundpassword').subscribe((res: any) => {
                  this.translateObj = res;
              });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FundpasswordPage');
    //清空indexDB 和loacal
  }
  goBack(){

    // this.showPopup("","资金密码设置失败，可能会影响您的正常使用");
      this.navCtrl.pop();

    // this.navCtrl.push("TabsPage");
    }

    registerFund(){
        var re = new RegExp("^[a-zA-Z]+$");

       //要包含数字的话是 new RegExp("^[a-zA-Z0-9]+$");
        NewpayInstance.checkAccountExists(this.accountName).then(res=>{
            this.flag =false;
            console.log(res)
            for(let i = 0 ;i< res.length; i++){
                console.log(res[i][0])
                if(this.accountName === res[i][0]){
                    this.flag=true
                }
            }
            if(this.flag){
                this.commonUtils.alertCommon('提示','该账户已经存在!')
                return;
            }else{
                if (re.test(this.accountName)) {
                    console.log("不支持")
                    this.commonUtils.alertCommon("提示","不支持高级名称注册");
                    return;
                }else {
                    console.log(NewpayInstance.checkAccountExists(this.accountName))
                    debugger
                    // if(){
                    //
                    // }

                    let pinCode = this.pincodeCtrl.create({
                        title: '输入密码'
                    });

                    pinCode.present();

                    pinCode.onDidDismiss((code, status) => {

                        if (status === 'done') {
                            this.code = code;
                            console.log(code)
                            // this.accountName = "" //账户的名字   账户存在 那么钱包是肯定存在的。 np +登陆名 电话号码
                            this.commonUtils.showLoading();
                            console.log(this.accountName);
                            let password = code
                            NewpayInstance.createWalletAndAccount("default", this.accountName, this.confService.hydrantHttp, password).then(() => { //钱包的名字
                                //如果是导入 WalletManagerStore.onSetWallet（ 钱包名，钱包密码，脑钥）返回的是 成功不成功
                                //先创建钱包 当钱包设置成功去 创建 账户
                                console.log("创建钱包成功");
                                this.commonUtils.HideLoading();
                                localStorage.setItem("account", this.accountName);
                                this.showToast(this.translateObj.resetPwSuccess);
                                this.brainKey = NewpayInstance.exportBrainKey()
                                console.log(this.brainKey);
                                localStorage.setItem("brainKey", this.brainKey);
                                //是否 进行备份 如果 备份  就跳转到备份页面，备份成功跳转到home页，如果不备份则直接跳转到home页
                                this.showConfirm();
                            }, (err) => {
                                console.log("AAAAAAAAAA")
                            }).catch(error => {
                                console.log("创建钱包失败");
                                console.log("ERROR AccountActions.createAccount", error);
                                let error_msg = error.base && error.base.length && error.base.length > 0 ? error.base[0] : "unknown error";
                                if (error.remote_ip) error_msg = error.remote_ip[0];
                                this.commonUtils.HideLoading();
                                this.showToast(error)
                            });
                        } else if (status === 'forgot') {

                            // forgot password
                        }

                    })
                }
            }
        })
    }
    showToast(content){
        let toast = this.toastCtrl.create({
            message: content,
            duration: 3000
        });
        toast.present();
    }

    showPopup(title, text) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: this.translateObj.confirm,
                }
            ]
        });
        alert.present();
    }


    showConfirm() {
        let confirm = this.alertCtrl.create({
            title: this.translateObj.backup_title,
            message: this.translateObj.backup_memo,
            buttons: [
                // {
                //     text: this.translateObj.cancel,
                //     handler: () => {
                //         console.log('Disagree clicked');
                //         this.navCtrl.push("TabsPage");
                //         //到主页
                //     }
                // },
                {
                    text: this.translateObj.confirm,
                    handler: () => {
                        console.log('Agree clicked');
                        //获取脑钥。
                     // this.brainKey =   WalletDb.getBrainKey()
                        console.log(this.brainKey);
                        this.navCtrl.push("BackupsKeyPage",{brainKey:this.brainKey});
                        //到备份页面
                    }
                }
            ]
        });
        confirm.present();
    }
}
