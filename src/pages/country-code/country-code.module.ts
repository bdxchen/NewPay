import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CountryCodePage } from './country-code';

@NgModule({
  declarations: [
    CountryCodePage,
  ],
  imports: [
    IonicPageModule.forChild(CountryCodePage),
  ],
})
export class CountryCodePageModule {}
