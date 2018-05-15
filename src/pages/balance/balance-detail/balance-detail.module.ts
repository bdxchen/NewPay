import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BalanceDetailPage } from './balance-detail';
import { TranslateModule} from 'ng2-translate';
import {DragulaModule } from 'ng2-dragula';
@NgModule({
  declarations: [
    BalanceDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BalanceDetailPage),TranslateModule,DragulaModule
  ],
})
export class BalanceDetailPageModule {}
