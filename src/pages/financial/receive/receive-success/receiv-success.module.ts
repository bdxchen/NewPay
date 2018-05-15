import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { receiveSuccessPage } from './receiv-success';

@NgModule({
  declarations: [
    receiveSuccessPage
  ],
  imports: [
    IonicPageModule.forChild(receiveSuccessPage),
  ],
  exports:[
    receiveSuccessPage
  ]
})
export class requestReceivePageModule {}
