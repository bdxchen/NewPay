import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Transfer2Page } from './transfer2';
import { TranslateModule} from 'ng2-translate';

@NgModule({
  declarations: [
    Transfer2Page,
  ],
  imports: [
    IonicPageModule.forChild(Transfer2Page),TranslateModule
  ],
})
export class Transfer2PageModule {}
