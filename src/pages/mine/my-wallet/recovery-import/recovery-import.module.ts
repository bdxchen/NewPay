import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecoveryImportPage } from './recovery-import';
import { TranslateModule} from 'ng2-translate';

@NgModule({
  declarations: [
    RecoveryImportPage,
  ],
  imports: [
    IonicPageModule.forChild(RecoveryImportPage),TranslateModule
  ],
})
export class RecoveryImportPageModule {}
