import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendsPage } from './friends';
import { PipesModule } from '../../pipes/pipes.module'
// import {IndexListModule} from "ionic3-index-list";
import { TranslateModule} from 'ng2-translate';
import {IndexListModule} from "../../components/index";
@NgModule({
  imports: [
    IonicPageModule.forChild(FriendsPage),PipesModule,IndexListModule, TranslateModule
  ],
  declarations: [
    FriendsPage
  ]
})
export class FriendsModule {}
