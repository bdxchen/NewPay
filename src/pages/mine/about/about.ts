import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {ConfService} from '../../../providers/util-service/conf-service'
@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  app_version:any;
  constructor(public navCtrl: NavController,private confService:ConfService) {
    this.app_version = this.confService.app_version
  }
    goBack(){
        this.navCtrl.parent.select(2);
    }
}
