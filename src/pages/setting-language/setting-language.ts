import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
/**
 * Generated class for the SettingLanguagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting-language',
  templateUrl: 'setting-language.html',
})
export class SettingLanguagePage {
    relationship:any='zh';
    langs:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public translate:TranslateService) {
      console.log(this.relationship)
      if(localStorage.getItem('language')!=null){
          this.relationship = localStorage.getItem('language');
      }

      // this.langs = [{ language: "English", type: "en" }, { language: "简体中文", type: "zh" }, { language: "繁体中文", type: "tw" }]
      this.langs = [{ language: "简体中文", type: "zh" }];
  }
    selectedLan(){
     this.relationship;
        console.log(this.relationship);
        this.translate.use(this.relationship);
        localStorage.setItem('language',this.relationship);

    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingLanguagePage');
  }
  goBack(){
      this.navCtrl.pop();
  }

}
