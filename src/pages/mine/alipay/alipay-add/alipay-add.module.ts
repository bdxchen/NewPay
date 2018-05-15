import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlipayAddPage } from './alipay-add';
import { TranslateModule} from 'ng2-translate';

@NgModule({
    declarations: [
        AlipayAddPage,
    ],
    imports: [
        IonicPageModule.forChild(AlipayAddPage),TranslateModule
    ],
})
export class AlipayAddPageModule {}
