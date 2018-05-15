import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { receivePage } from './receive';
import { QRCodeModule } from 'angularx-qrcode';
import { TranslateModule} from 'ng2-translate';
@NgModule({
  declarations: [
    receivePage
  ],
  imports: [
    IonicPageModule.forChild(receivePage),QRCodeModule, TranslateModule
  ],
})
export class receivePageModule {}
