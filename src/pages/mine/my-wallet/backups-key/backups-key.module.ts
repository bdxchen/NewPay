import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BackupsKeyPage } from './backups-key';
import { TranslateModule} from 'ng2-translate';

@NgModule({
  declarations: [
    BackupsKeyPage,
  ],
  imports: [
    IonicPageModule.forChild(BackupsKeyPage),TranslateModule
  ],
})
export class BackupsKeyPageModule {}
