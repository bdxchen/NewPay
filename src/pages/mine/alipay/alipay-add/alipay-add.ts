import { Component } from '@angular/core';
import {Alert, AlertController, IonicPage, Loading, NavController} from 'ionic-angular';
import {AddAlipay} from "../../../../providers/messages/user-auth-msg";
import {MineService} from "../../../../providers/user-service/mine-service";
import { TranslateService } from 'ng2-translate';
import {CommonUtils} from '../../../../providers/common/commonUtils';
import { IentityAuth} from '../../../../providers/identity/ientity-auth'
@IonicPage()
@Component({
    selector: 'alipay-add',
    templateUrl: 'alipay-add.html'
})
export class AlipayAddPage {
    alert:Alert;
    loading:Loading;
    createSuccess = false;
    addAlipay: AddAlipay = {account:'',name:''};
    translateObj: any;

    constructor(public navCtrl: NavController

        ,private mineService : MineService
        ,private alertCtrl: AlertController,
                public translate:TranslateService,
                private commonUtils:CommonUtils,
                private ientityAuth:IentityAuth) {
        this.translate.get('alipay_add').subscribe((res: any) => {
            this.translateObj = res;
        });
    }
    goBack(){
        this.navCtrl.pop();
    }
    ionViewDidLoad() {
        this.commonUtils.showLoading()
        this.ientityAuth.userIdentity().then((res)=>{
            this.commonUtils.HideLoading()
            console.log(res);
            if(res.ret_code=='1'){
              this.addAlipay.name =  res.data.idName
            }

            }
        ).catch(err=>{
            this.commonUtils.HideLoading()
            this.commonUtils.alertCommon('',err);
            console.log(err)
        })

    }
    confirm(){
        // this.addAlipay.account
        // var regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,
        //     regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;
        this.addAlipay.account= this.addAlipay.account.trim();
        if(this.addAlipay.account.trim()==""){
            this.commonUtils.alertCommon('',this.translateObj.empty)
            return false;
        }

        // if(regEn.test(this.addAlipay.account) || regCn.test(this.addAlipay.account)) {
        //     this.commonUtils.alertCommon('',this.translateObj.specialValid)
        //     return false;
        // }

        this.mineService.addAlipay(this.addAlipay).then(success => {
                if (success != null) {
                    this.createSuccess = true;
                    if(success.ret_code == 1){
                        this.commonUtils.showToast(this.translateObj.bindSuccess);
                        this.addAlipay={
                            name:"",
                            account:""
                        }
                        this.navCtrl.push("MyAlipayPage")
                    }else {
                        this.showPopup("", success.ret_msg);
                    }
                } else {
                    this.showPopup("", this.translateObj.serviceErr);
                }
            },
            error => {
                this.showPopup("", this.translateObj.netErr);
            });
    }

    reset(){
        this.addAlipay={
            name:"",
            account:""
        }
    }

    showPopup(title, text) {
        this.alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
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
    XZlx(acc){
        if(acc){
            // this.addAlipay.account = acc.replace(/[^\d]/g,'');
            if(acc.length>20){
                this.addAlipay.account  =acc.substring(0,20);

            }
        }

    }
    ionViewWillLeave(){
        if(this.alert){
            this.alert.dismiss();
        }
        if(this.loading){
            this.loading.dismiss();
        }
        // if(this.actionSheet){
        //     this.actionSheet.dismiss();
        // }
        // if(this.modal){
        //     this.modal.dismiss();
        // }
    }
}
