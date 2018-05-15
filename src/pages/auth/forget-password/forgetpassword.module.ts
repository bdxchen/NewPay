import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgetPasswordPage } from './forgetpassword';
import { TranslateModule} from 'ng2-translate';

@NgModule({
  declarations: [
    ForgetPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(ForgetPasswordPage),TranslateModule
  ],
})
export class ForgetPasswordPageModule {}
