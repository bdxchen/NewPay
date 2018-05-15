import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {CountryNumService} from '../../providers/countryNum/country-num-service';

/**
 * Generated class for the CountryCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-country-code',
  templateUrl: 'country-code.html',
})
export class CountryCodePage {
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl:ViewController,
              private countryNumService:CountryNumService) {
  }

  ionViewDidLoad() {
    this.countryNumService.getCountryNumber().then(res=>{
      console.log(res.data);
      this.data =res.data;
    },err=>{
      console.log(err);
    })
    console.log('ionViewDidLoad CountryCodePage');
  }
    closeModal(){
        let data = "";
        this.viewCtrl.dismiss(data);
    }
    checkedCountry(item){
      console.log(item)
      let data = item;
      this.viewCtrl.dismiss(data);
    }
}
