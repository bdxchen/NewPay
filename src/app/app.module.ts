import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule,Http,JsonpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Clipboard } from '@ionic-native/clipboard';
import { Contacts } from '@ionic-native/contacts';
import { MyApp } from './app.component';
import { Keyboard } from '@ionic-native/keyboard';
import { Device } from '@ionic-native/device';
import { Camera } from '@ionic-native/camera';
import {File} from '@ionic-native/file';
import {Transfer} from '@ionic-native/transfer';
import { CityPickerModule } from  "ionic2-city-picker"
import {CityPickerService} from "../providers/city-picker-service";
import { AppVersion } from '@ionic-native/app-version';
import { NativeService } from '../providers/updateApp/NativeService'
import { QRScanner } from  '@ionic-native/qr-scanner'
import { Toast} from "@ionic-native/toast";
import {IndexListModule} from "../components/index";
import { PincodeInputModule } from  'ionic2-pincode-input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { Buffer } from 'buffer';
//service模块导入

import { SERVICES } from '../providers/service.imports';
import { BackbuttonService } from "../providers/backbutton-service"
import {ContactsT} from '../providers/contact/contacts'
import  {  ModalPage  } from '../pages/modal/modal';
import { AlertModalPage}  from  '../pages/alert-modal/alert-modal';
// import  { BankModalPage } from '../pages/bank-modal/bank-modal';
import {PaymentModePage} from '../pages/payment-mode/payment-mode';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { PipesModule } from '../pipes/pipes.module';
import { AppMinimize } from '@ionic-native/app-minimize';
import {SMS} from "@ionic-native/sms";
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { DragulaModule} from 'ng2-dragula';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { BankModelProvider } from '../providers/bank-model/bank-model';
import { FeelActionrateService} from '../providers/feelActionrate/feel-actionrate-service'
import * as ionicGalleryModal from 'ionic-gallery-modal';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { IonDigitKeyboard } from '../components/ion-digit-keyboard/ion-digit-keyboard.module';
import { IonicStorageModule } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';
import {ScreenOrientation} from "@ionic-native/screen-orientation";
export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}
@NgModule({
    //BankModalPage
  declarations: [
    MyApp,ModalPage,PaymentModePage,AlertModalPage
  ],
  imports: [
      CityPickerModule,
      IonDigitKeyboard,
      PincodeInputModule,
      BrowserAnimationsModule,
    BrowserModule,JsonpModule,
      ionicGalleryModal.GalleryModalModule,
    HttpModule,
      TranslateModule.forRoot({
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [Http]
      }),
      IonicModule.forRoot(MyApp,{
          tabsHideOnSubPages: 'true' ,       //隐藏全部子页面tabs
          iconMode: 'ios',
          mode: 'md',
          backButtonText: '',
          backButtonIcon: 'ios-arrow-back',
          scrollAssist:false,
          autoFocusAssit:false,
          modalEnter: 'modal-slide-in',
          modalLeave: 'modal-slide-out',
          pageTransition: 'md-transition',
          tabsPlacement: 'bottom',
      }),
      DragulaModule,
      PipesModule,
      IonicStorageModule.forRoot(),
      IndexListModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,ModalPage,PaymentModePage,AlertModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,Keyboard,Clipboard,Contacts,ContactsT,Device,AppMinimize,
      {provide: ErrorHandler, useClass: IonicErrorHandler},BackbuttonService,
      SERVICES,Camera,QRScanner,BarcodeScanner,SocialSharing,
      File,AppVersion,NativeService,Toast,NativePageTransitions,SMS,Transfer,ScreenOrientation,CityPickerService,FeelActionrateService,
      BankModelProvider,PhotoLibrary,{
          provide: HAMMER_GESTURE_CONFIG,
          useClass: ionicGalleryModal.GalleryModalHammerConfig,
      },
    ]
})
export class AppModule {}
