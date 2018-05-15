import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { TranslateModule} from 'ng2-translate';

@NgModule({
  imports: [
    IonicPageModule.forChild(TabsPage),TranslateModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule {}
