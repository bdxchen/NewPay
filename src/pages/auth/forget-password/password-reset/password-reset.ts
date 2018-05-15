import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {AuthService} from '../../../../providers/user-service/user-auth-service'
import {CommonUtils} from '../../../../providers/common/commonUtils'
import {TranslateService} from 'ng2-translate';

/**
 * Generated class for the PasswordResetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-password-reset',
    templateUrl: 'password-reset.html',
})
export class PasswordResetPage {
    countryCode: "";
    phoneCode: "";
    verificationCode: "";
    newloginpwd: string = '';
    comloginpwd: string = '';
    pwdCompar: any = {nationCode: '', phoneNo: '', newPassword: '', captcha: ''};
    translateObj: any;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, public authService: AuthService,
                public translate: TranslateService) {
        this.countryCode = this.navParams.get('country');
        this.phoneCode = this.navParams.get('phoneCode');
        this.verificationCode = this.navParams.get('idcardno');
        console.log('this.countryCode', this.countryCode)
        console.log('this.phoneCode', this.phoneCode)
        console.log('this.verificationCode', this.verificationCode)
        // this.translate.get('password_reset').subscribe((res: any) => {
        //   this.translateObj = res;
        //   console.log("password_reset", res);
        // });
        this.translate.get('password_reset').subscribe((res: any) => {
            this.translateObj = res;
            console.log("password_reset", res);
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PasswordResetPage');
    }

    goBack() {
        this.navCtrl.pop();
    }

    confirm() {
        if(this.newloginpwd !== this.comloginpwd){
            this.alertCommon('', this.translateObj.PwNotSame);
            return;
        }
        if (this.newloginpwd == "" || this.comloginpwd == "") {
            this.alertCommon('', this.translateObj.newPwEmpty);
            return;
        }

        let reg = /^[a-zA-Z]{1}([a-zA-Z0-9]|[_]){7,19}$/;//字母开头8-20位，字母数字或的下划线组合
        if (!reg.test(this.newloginpwd)) {
            this.alertCommon("", this.translateObj.psw_Reg);
            return;
        }
        // if(this.comloginpwd==""){
        //   this.alertCommon('',this.translateObj.confirmPwEmpty);
        //   return;
        // }
        // if(this.comloginpwd != this.newloginpwd){
        //   this.alertCommon('',this.translateObj.PwNotSame);
        //   return;
        // }
        this.pwdCompar.nationCode = this.countryCode;
        this.pwdCompar.phoneNo = this.phoneCode;
        this.pwdCompar.newPassword = this.newloginpwd;
        this.pwdCompar.captcha = this.verificationCode;
        console.log("this.pwdCompar", this.pwdCompar)
        this.authService.resetLoginPwdSer(this.pwdCompar).then(success => {
            console.log(success)
            if (success.ret_code == "1") {
                let alert = this.alertCtrl.create({
                    title: this.translateObj.resetSuccess,
                    buttons: [{
                        text: this.translateObj.OK,
                        handler: () => {
                            this.navCtrl.push("LoginPage")
                            //let navTransition = alert.dismiss();
                            //return false;
                        }
                    }]
                });
                alert.present();
            } else {
                let alert = this.alertCtrl.create({
                    title: '',
                    message: success.ret_msg,
                    buttons: [{
                        text: this.translateObj.OK,
                        handler: () => {
                            // this.navCtrl.parent.select(2);
                            //let navTransition = alert.dismiss();
                            //return false;
                        }
                    }]
                });
                alert.present();
            }
        })


    }

    alertCommon(title, message) {
        let alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [{
                text: this.translateObj.OK,
                handler: () => {
                    // this.navCtrl.parent.select(2);
                }
            }]
        });
        alert.present();
    }

    resetValid(newloginpwd) {
        if (newloginpwd.length > 20) {
            this.newloginpwd = newloginpwd.substring(0, 20);
        }
    }
}
