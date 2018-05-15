import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetMoneyPage } from './set-money';
import { TranslateModule} from 'ng2-translate';

@NgModule({
  declarations: [
    SetMoneyPage,
  ],
  imports: [
    IonicPageModule.forChild(SetMoneyPage),TranslateModule
  ],
})
export class SetMoneyPageModule {}
