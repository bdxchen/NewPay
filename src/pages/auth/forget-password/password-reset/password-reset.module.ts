import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasswordResetPage } from './password-reset';
import { TranslateModule} from 'ng2-translate';
@NgModule({
  declarations: [
    PasswordResetPage,
  ],
  imports: [
    IonicPageModule.forChild(PasswordResetPage),TranslateModule
  ],
})
export class PasswordResetPageModule {}
