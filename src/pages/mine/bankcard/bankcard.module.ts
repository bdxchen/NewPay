import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BankcardPage } from './bankcard';
import { TranslateModule} from 'ng2-translate';

@NgModule({
  declarations: [
    BankcardPage,
  ],
  imports: [
    IonicPageModule.forChild(BankcardPage),TranslateModule
  ],
})
export class BankcardPageModule {}
