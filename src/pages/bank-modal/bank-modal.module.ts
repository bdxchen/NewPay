/**
 * Created by cuiyujie on 17/12/8.
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BankModalPage } from './bank-modal';
import { TranslateModule} from 'ng2-translate';

@NgModule({
    declarations: [
        BankModalPage,
    ],
    imports: [
        IonicPageModule.forChild(BankModalPage),TranslateModule
    ],
})
export class BankModalPageModule {}
