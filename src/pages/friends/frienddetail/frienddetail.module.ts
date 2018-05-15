import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FrienddetailPage } from './frienddetail';
import { TranslateModule} from 'ng2-translate';

@NgModule({
  declarations: [
    FrienddetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FrienddetailPage),TranslateModule
  ],
})
export class FrienddetailPageModule {}
