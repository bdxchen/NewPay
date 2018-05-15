import { Component } from '@angular/core';
import { IonicPage, NavController ,NavParams,AlertController} from 'ionic-angular';
import { AccountPubService } from '../../../providers/financial-service/account-pub-service';
import { ReqCheckFundPwd, AckCheckFundPwd} from '../../../providers/messages/account-pub-msg';
import { TranslateService } from 'ng2-translate';
@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html'
})
export class PasswordPage {
  titleName:string;
  nextPage:string;
  fundpwd:ReqCheckFundPwd = {userid:'123', fund_pwd:'111'};
  translateObj: any;
  constructor(public navCtrl: NavController,
              private pubservice:AccountPubService,
              private alertCtrl : AlertController,
              public navParams: NavParams,
              public translate:TranslateService){
    this.titleName=navParams.get("titleName");
    this.nextPage=navParams.get("nextPage");
    this.translate.get('password').subscribe((res: any) => {
      this.translateObj = res;
    });
  }

  goNextPage(nextPage){

    this.pubservice.checkFundpwd(this.fundpwd).then(allowed=> {
      if (allowed) {
        setTimeout(() => {
          //this.loading.dismiss();
          this.navCtrl.push(nextPage)
        })
      }else {
        this.showError(this.translateObj.addressDenied);
      }
    },
    error => {
      this.showError(error);
    });
  }

  showError(text){
     

    let alert = this.alertCtrl.create({
      title : this.translateObj.err,
      subTitle :text,
      buttons:[this.translateObj.ok]
    })
    alert.present(prompt);
  }
     

}
