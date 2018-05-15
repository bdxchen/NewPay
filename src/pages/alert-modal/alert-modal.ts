import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController,AlertController } from 'ionic-angular';

/**
 * Generated class for the AlertModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-alert-modal',
  templateUrl: 'alert-modal.html',
})
export class AlertModalPage {
  nikeName:string="";

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public modalCtrl:ModalController,
      public viewCtrl: ViewController,
      public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertModalPage');
  }

  cancel(){
    this.viewCtrl.dismiss();
  }

  confirm(){
    this.nikeName = this.nikeName.replace(/(^\s*)|(\s*$)/g, "");
    this.viewCtrl.dismiss({nikeName:this.nikeName});
  }

}


