import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),TranslateModule
  ],
})
export class LoginPageModule {}
