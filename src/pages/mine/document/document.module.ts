import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocumentPage } from './document';
import { CityPickerModule } from  "ionic2-city-picker";
import { TranslateModule} from 'ng2-translate';

@NgModule({
  declarations: [
    DocumentPage
  ],
  imports: [
    IonicPageModule.forChild(DocumentPage),CityPickerModule, TranslateModule
  ],
})
export class DocumentPageModule {}
