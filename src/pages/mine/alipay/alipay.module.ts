import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyAlipayPage } from './alipay';
import { TranslateModule} from 'ng2-translate';

@NgModule({
  declarations: [
    MyAlipayPage,
  ],
  imports: [
    IonicPageModule.forChild(MyAlipayPage),TranslateModule
  ],
})
export class MyAlipayPageModule {}
