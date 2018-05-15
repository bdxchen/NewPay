import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeadUploadPage } from './head-upload';

@NgModule({
  declarations: [
    HeadUploadPage,
  ],
  imports: [
    IonicPageModule.forChild(HeadUploadPage),
  ],
})
export class HeadUploadPageModule {}
