import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InvitationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invitation',
  templateUrl: 'invitation.html',
})
export class InvitationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let item = this.navParams.data;
      console.log(item)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitationPage');
  }
  goBack(){
    this.navCtrl.pop();
  }

}
