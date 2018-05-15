import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResetZJpsdPage } from './reset-z-jpsd';
import { TranslateModule} from 'ng2-translate';
@NgModule({
  declarations: [
    ResetZJpsdPage,
  ],
  imports: [
    IonicPageModule.forChild(ResetZJpsdPage),TranslateModule
  ],
})
export class ResetZJpsdPageModule {}
