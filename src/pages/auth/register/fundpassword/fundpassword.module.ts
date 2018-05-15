import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FundpasswordPage } from './fundpassword';
import { TranslateModule} from 'ng2-translate';
@NgModule({
  declarations: [
    FundpasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(FundpasswordPage),TranslateModule
  ],
})
export class FundpasswordPageModule {}
