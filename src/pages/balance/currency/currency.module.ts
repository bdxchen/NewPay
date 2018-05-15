import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrencyPage } from './currency';
import { QRCodeModule } from 'angularx-qrcode';
import { TranslateModule} from 'ng2-translate';

@NgModule({
  declarations: [
    CurrencyPage,
  ],
  imports: [
    IonicPageModule.forChild(CurrencyPage),QRCodeModule, TranslateModule
  ],
})
export class CurrencyPageModule {}

