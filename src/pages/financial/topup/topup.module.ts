import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopupPage } from './topup';
import { TranslateModule} from 'ng2-translate';

@NgModule({
  declarations: [
    TopupPage,
  ],
  imports: [
    IonicPageModule.forChild(TopupPage),TranslateModule
  ],
})
export class TopupPageModule {}
