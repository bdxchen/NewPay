import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { TranslateModule} from 'ng2-translate';
@NgModule({
  imports: [
    IonicPageModule.forChild(HomePage),TranslateModule
  ],
  declarations: [
    HomePage
  ]
})
export class HomeModule {}
