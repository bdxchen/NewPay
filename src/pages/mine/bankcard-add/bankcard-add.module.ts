import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {  BankcardAddPage } from './bankcard-add';
import { TranslateModule} from 'ng2-translate';

@NgModule({
  declarations: [
    BankcardAddPage,
  ],
  imports: [
    IonicPageModule.forChild(BankcardAddPage),TranslateModule
  ],
})
export class BankcardAddPageModule {}
