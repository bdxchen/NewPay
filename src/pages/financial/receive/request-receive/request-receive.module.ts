import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { requestReceivePage } from './request-receive';
import { TranslateModule} from 'ng2-translate';
@NgModule({
  declarations: [
    requestReceivePage
  ],
  imports: [
    IonicPageModule.forChild(requestReceivePage),TranslateModule
  ],
  exports:[
    requestReceivePage
  ]
})
export class requestReceivePageModule {}
