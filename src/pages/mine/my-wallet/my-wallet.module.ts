import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyWalletPage } from './my-wallet';
import { TranslateModule} from 'ng2-translate';

@NgModule({
  declarations: [
    MyWalletPage,
  ],
  imports: [
    IonicPageModule.forChild(MyWalletPage),TranslateModule
  ],
})
export class MyWalletPageModule {}
