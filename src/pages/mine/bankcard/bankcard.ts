import { Component } from '@angular/core';
import {IonicPage, NavController, ActionSheetController, AlertController, Alert} from 'ionic-angular';
import {MineService} from "../../../providers/user-service/mine-service";
import {DelegatingHost} from "@angular/tsc-wrapped/src/compiler_host";
import {DeleteBankCard} from "../../../providers/messages/user-auth-msg";
import {CommonUtils} from '../../../providers/common/commonUtils';
import {TranslateService} from 'ng2-translate';

@IonicPage()
@Component({
    selector: 'page-bankcard',
    templateUrl: 'bankcard.html'
})
export class BankcardPage {

    flag:number =0;
    indexTags: Array<{DeleteBankCard}> =[];
    deleteBankCard : DeleteBankCard =  { account :'',name :'',bankname:'',branchName:'',time:''};
    translateObj: any;
    alert:Alert;
    constructor(public navCtrl: NavController
        ,public actionSheetCtrl: ActionSheetController
        ,public mineser:MineService,
                public alertCtrl:AlertController,
                public commonUtils:CommonUtils,
                public translate:TranslateService
    ) {

        this.showBankCrad();
        this.translate.get('bankcard').subscribe((res: any) => {
            this.translateObj = res;
        });
    }
    goBack(){
        this.navCtrl.parent.select(2);
    }
    goBankcardAddPage(){
        this.navCtrl.push("BankcardAddPage")
    }
    deleteCard(tag){
        this.deleteBankCard =tag;
        console.log("删除银行卡")
        this.showConfirm(tag)
    }
    showConfirm(tag) {
        this.alert = this.alertCtrl.create({
            title: '',
            message: this.translateObj.unbindWarning + tag.account.substring(tag.account.length - 4) + '?',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: this.translateObj.cancel,
                    handler: () => {
                        console.log('Disagree clicked');

                    }
                },
                {
                    text: this.translateObj.confirm,
                    handler: () => {
                        console.log('Agree clicked');
                        this.commonUtils.showLoading()
                        this.mineser.deleteBankCard(this.deleteBankCard).then(retData => {
                                this.commonUtils.HideLoading();
                                if (retData != null) {

                                    if (retData.ret_code == "1") {
                                        this.mineser.bankCardcclist().then(retData => {
                                                debugger
                                                if (retData != null) {
                                                    if (retData.ret_code == 1) {
                                                        if (retData.data.length > 0) {
                                                            this.flag = 1;
                                                            this.indexTags = retData.data;
                                                        } else if (retData.data.length == 0) {
                                                            this.flag = 0;
                                                            this.indexTags = [];
                                                        }

                                                    }
                                                } else {
                                                    console.log("ret_code = 0" + JSON.stringify(retData));
                                                }
                                            },
                                            error => {
                                                this.commonUtils.HideLoading();
                                                console.log("get frieds err");
                                            });
                                    }
                                } else {
                                    console.log("ret_code = 0" + JSON.stringify(retData));
                                }
                            },
                            error => {
                                this.commonUtils.HideLoading();
                                console.log("get frieds err");
                            });
                    }
                }
            ]
        });
        this.alert.present();
    }

    showBankCrad() {
        this.mineser.bankCardcclist().then(retData => {
                if (retData != null) {
                    if (retData.ret_code == 1) {
                        console.log(retData.ret_code)
                        if (retData.data.length > 0) {
                            this.flag = 1;
                            // for (let i = 0; i < retData.data.length; i++) {
                            //     let temp = [];
                                // retData.data[i].cardNumber = retData.data[i].account;//拷贝account的值到cardNumber方便回传

                                // for (let j = 0; j < retData.data[i].account.length; j++) {
                                //     let len = retData.data[i].account.length;
                                //     if (j >= 0 && j < 4) {
                                //         temp.push(retData.data[i].account[j])
                                //     }else if(j>=4 &&  j<len-4){
                                //         temp.push("*");
                                //     }else if(j>=len-4 && j<len){
                                //         if(len-4==j){
                                //             temp.push(" ");
                                //             temp.push(retData.data[i].account[j]);
                                //         }else{
                                //             temp.push(retData.data[i].account[j]);
                                //         }
                                //
                                //     }
                                //
                                // }
                                // console.log(temp)
                                // let str=temp.join("").replace(/(\d{4})/g,'$1 ').replace(/\s*$/,'');
                                // retData.data[i].account = str;

                            // }
                            this.indexTags = retData.data;
                        }else if(retData.data.length==0){
                            this.flag=0;
                            this.indexTags = retData.data;
                        }

                    }
                }else {
                    console.log("ret_code = 0" + JSON.stringify(retData));
                }
            },
            error => {
                console.log("get frieds err");
            });
    }
    ionViewWillLeave(){
        if(this.alert){
            this.alert.dismiss();
        }
        // if(this.loading){
        //     this.loading.dismiss();
        // }
        // if(this.actionSheet){
        //     this.actionSheet.dismiss();
        // }
        // if(this.modal){
        //     this.modal.dismiss();
        // }
    }
}

