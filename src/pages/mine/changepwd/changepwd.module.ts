import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangepwdPage } from './changepwd';
import { TranslateModule} from 'ng2-translate';

@NgModule({
  declarations: [
    ChangepwdPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangepwdPage),TranslateModule
  ],
})
export class ChangepwdPageModule {}
