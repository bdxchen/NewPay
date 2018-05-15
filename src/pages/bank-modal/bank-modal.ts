import { Component } from '@angular/core';
import {  NavController, NavParams ,ViewController} from 'ionic-angular';
import  { BankModelProvider } from '../../providers/bank-model/bank-model';
import  {bankModel,Thirdpart} from '../../providers/messages/bankModel';
import { TranslateService } from 'ng2-translate';
/**
 * Generated class for the BankModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-bank-modal',
  templateUrl: 'bank-modal.html',
})
export class BankModalPage {
    checked;
    langForm;
    account: string;//"6225881998787763",
    name: string; //"银行卡姓名",
    bankname: string //"银行名称",
    branchName:string //"开户行"
    bankData:Array<bankModel>;
    thirdpart:Array<Thirdpart>;
    translateObj: any;
    constructor(public navCtrl: NavController, public navParams: NavParams,public  viewCtrl :ViewController,
                private bankModelservice:BankModelProvider, public translate:TranslateService) {
        this.translate.get('login').subscribe((res: any) => {
            this.translateObj = res;
        });
    }
    closeModal(){
        this.viewCtrl.dismiss()
    }

  ionViewDidLoad() {
      console.log('ionViewDidLoad BankModalPage');
      // this.bankModelservice.getbankM().then((res) => {
      //     console.log(res);
      //     this.bankData = res.data
      // },(err)=>{
      //
      // })
      this.bankModelservice.getThirdpart().then((res)=>{
          console.log(res);
          if(res.ret_code=="1"){
              if(res.data){
                  this.thirdpart = res.data
              }
          }


      })
  }
    bankchose(bank,type){
        console.log(bank);
        this.viewCtrl.dismiss(bank,type);
    }
}
