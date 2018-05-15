import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IdentityAuthenticationPage } from './identity-authentication';
import { TranslateModule} from 'ng2-translate';

@NgModule({
  declarations: [
    IdentityAuthenticationPage,
  ],
  imports: [
    IonicPageModule.forChild(IdentityAuthenticationPage),TranslateModule
  ],
})
export class IdentityAuthenticationPageModule {}
