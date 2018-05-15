import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillDetailPage } from './bill-detail';
import { TranslateModule} from 'ng2-translate';

@NgModule({
  declarations: [
    BillDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BillDetailPage),TranslateModule
  ],
})
export class BillDetailPageModule {}
