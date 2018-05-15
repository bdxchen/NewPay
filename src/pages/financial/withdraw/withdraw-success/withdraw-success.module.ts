import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WithdrawSuccessPage } from './withdraw-success';

@NgModule({
  declarations: [
    WithdrawSuccessPage
  ],
  imports: [
    IonicPageModule.forChild(WithdrawSuccessPage),
  ],
  exports:[
    WithdrawSuccessPage
  ]
})
export class WithdrawSuccessPageModule {}
