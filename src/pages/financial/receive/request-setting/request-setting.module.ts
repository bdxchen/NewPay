import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { requestSettingPage } from './request-setting';
import { TranslateModule} from 'ng2-translate';
@NgModule({
  declarations: [
    requestSettingPage
  ],
  imports: [
    IonicPageModule.forChild(requestSettingPage),TranslateModule
  ],
  exports:[
    requestSettingPage
  ]
})
export class requestReceivePageModule {}
