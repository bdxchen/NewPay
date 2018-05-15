import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetCuMoneyPage } from './set-cu-money';
import { TranslateModule} from 'ng2-translate';

@NgModule({
  declarations: [
    SetCuMoneyPage,
  ],
  imports: [
    IonicPageModule.forChild(SetCuMoneyPage),TranslateModule
  ],
})
export class SetCuMoneyPageModule {}
