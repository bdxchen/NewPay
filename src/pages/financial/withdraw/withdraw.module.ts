import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WithdrawPage } from './withdraw';
import { TranslateModule} from 'ng2-translate';

@NgModule({
  declarations: [
    WithdrawPage,
  ],
  imports: [
    IonicPageModule.forChild(WithdrawPage),TranslateModule
  ],
})
export class WithdrawPageModule {}
