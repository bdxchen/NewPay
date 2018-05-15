import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferreceiptPage } from './transferreceipt';
import { TranslateModule} from 'ng2-translate';

@NgModule({
  declarations: [
    TransferreceiptPage,
  ],
  imports: [
    IonicPageModule.forChild(TransferreceiptPage),TranslateModule
  ],
})
export class TransferreceiptPageModule {}
