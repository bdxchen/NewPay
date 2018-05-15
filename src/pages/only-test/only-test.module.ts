import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnlyTestPage } from './only-test';

@NgModule({
  declarations: [
    OnlyTestPage,
  ],
  imports: [
    IonicPageModule.forChild(OnlyTestPage),
  ],
})
export class OnlyTestPageModule {}
