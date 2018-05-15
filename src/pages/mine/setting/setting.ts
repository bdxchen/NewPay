import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../../providers/user-service/user-auth-service'
/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public auth:AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }
  goBack(){
    this.navCtrl.pop();
  }
  quit(){
   let  userId  =localStorage.getItem('userid');
   localStorage.removeItem("brainKey");
   // localStorage.setItem("password",'')

   this.navCtrl.push('LoginPage');
      // let activeNav: NavController = this.appCtrl.getActiveNav();
      // console.log(activeNav)
      // activeNav.push("LoginPage");
    // this.auth.logout(userId).then((res)=>{
    //  if(res.ret_code=='1'){
    //      this.navCtrl.push('LoginPage');
    //  }
    //
    // })
  }
  itemSelected(itemIndex){
    console.log(itemIndex)
      if(itemIndex==2){
          this.navCtrl.push('SettingLanguagePage')
      }

  }
}
