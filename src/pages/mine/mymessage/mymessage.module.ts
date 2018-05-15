import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MymessagePage } from './mymessage';

@NgModule({
  declarations: [
    MymessagePage,
  ],
  imports: [
    IonicPageModule.forChild(MymessagePage),
  ],
})
export class MymessagePageModule {}
