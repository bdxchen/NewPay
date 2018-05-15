import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingLanguagePage } from './setting-language';
import { TranslateModule} from 'ng2-translate';
@NgModule({
  declarations: [
    SettingLanguagePage,
  ],
  imports: [
    IonicPageModule.forChild(SettingLanguagePage),TranslateModule
  ],
})
export class SettingLanguagePageModule {}
