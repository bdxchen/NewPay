import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { accountPayPage } from './account-pay';
import { TranslateModule} from 'ng2-translate';

@NgModule({
  declarations: [
    accountPayPage
  ],
  imports: [
    IonicPageModule.forChild(accountPayPage), TranslateModule
  ],
  exports:[
    accountPayPage
  ]
})
export class accountPayModule {}
