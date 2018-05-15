import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MinePage } from './mine';
import { TranslateModule} from 'ng2-translate';

@NgModule({
  imports: [
    IonicPageModule.forChild(MinePage),TranslateModule
  ],
  declarations: [
    MinePage,
  ]
})
export class MineModule {}
