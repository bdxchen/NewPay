import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CommonUtils} from '../../providers/common/commonUtils';


/**
 * Generated class for the OnlyTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-only-test',
  templateUrl: 'only-test.html',
})
export class OnlyTestPage {
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private commonUtils:CommonUtils) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnlyTestPage');
  }

  showloading() {
    this.commonUtils.showLoading();
    setTimeout(() => {
      this.commonUtils.HideLoading();
    }, 2000);
  }

  isMobile() {
    console.log(this.commonUtils.isMobile());
  }

  alertCommon() {
    this.commonUtils.alertCommon('弹框展示','这是一个弹框')
  }

  showToast() {
    this.commonUtils.showToast()
  }
}


