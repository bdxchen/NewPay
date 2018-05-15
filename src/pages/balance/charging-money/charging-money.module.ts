import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChargingMoneyPage } from './charging-money';
import { TranslateModule} from 'ng2-translate';
@NgModule({
  declarations: [
    ChargingMoneyPage,
  ],
  imports: [
    IonicPageModule.forChild(ChargingMoneyPage),TranslateModule
  ],
})
export class ChargingMoneyPageModule {}
