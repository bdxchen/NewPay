import {Component, NgZone, ChangeDetectorRef, ViewChild} from '@angular/core';
import {
    App, IonicPage, NavController, Content, LoadingController, ToastController, Alert,
    ActionSheet, Modal, Loading, AlertController
} from 'ionic-angular';

import {NewpayInstance} from 'newpay-wallet-js';
// import { BarcodeScanner ,BarcodeScannerOptions} from '@ionic-native/barcode-scanner';
import {AuthService} from "../../providers/user-service/user-auth-service";
import {SearchAccService} from '../../providers/home/searchAcc-service';
import {CommonUtils} from '../../providers/common/commonUtils'
import {Buffer} from 'buffer';
import {TranslateModule, TranslateService} from 'ng2-translate';
import {NativeService} from '../../providers/updateApp/NativeService';

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    @ViewChild(Content) content: Content;
    page: number;
    alert: Alert;
    actionSheet: ActionSheet;
    modal: Modal;
    loading: Loading;
    animate: boolean;
    showFlag: boolean;
    data: Array<{ SearchD: object }> = [];
    showToolbarImg: boolean = false;
    showToolbar: boolean = true;
    headerImgSize: string = '100%';
    headerImgUrl: string = '';
    transition: boolean = false;
    textJson: string;
    assistantsList: any = [];
    articles: Array<any> = new Array(10).fill('');
    //括号中的值在html页面中标注的时候，名称不能其他属性相同。如该文件已经有一个pnavs的变量，则会报错。
    // @ViewChild('pnavs') sticknavs;
    // @ViewChild('evaluate') stickevaluate;
    // @ViewChild('detail') stickdetail;

    indexTags: Array<{ account_no: string, accont_name: string, amount: string, comment: string, coin_type: string, status: string }>;
    balance: string;
    translateObj: any;

    constructor(public navCtrl: NavController,
                // private barcodeScanner: BarcodeScanner,
                public app: App,
                private alertCtrl: AlertController,
                public toastCtrl: ToastController,
                public commonUtils: CommonUtils,
                private auth: AuthService,
                public ref: ChangeDetectorRef,
                public searchAcc: SearchAccService,
                public loader: LoadingController,
                private translate: TranslateService,
                private nativeService: NativeService) {
        console.log(this.content);
        // this.nativeService.detectionUpgrade();
        // console.log(this.translate.getBrowserLang());
        // //获取语言风格，相当于更详细的语言类型，比如zh-CN、zh-TW、en-US
        // console.log(this.translate.getBrowserCultureLang());
        translate.get('home').subscribe((res: string) => {
            this.translateObj = res;
        });
    }

    showConfirm() {
        let confirm = this.alertCtrl.create({
            title: '请先进行实名认证',
            buttons: [
                {
                    text: '取消',
                    handler: () => {
                        console.log('取消 clicked');
                    }
                },
                {
                    text: '去认证',
                    handler: () => {
                        console.log('去认证 clicked');
                        this.navCtrl.push('IdentityAuthenticationPage');
                    }
                }
            ]
        });
        confirm.present();
    }

    homeSeeMore(assistants) {
        this.navCtrl.push('BillDetailPage', {assistants: assistants, flag: 'home'})
    }

    viewDetailPage(page) {
        if (this.nativeService.isIos()) {
            this.animate = false;
        } else {
            this.animate = true;
        }

        if (page == "payPage") {
                this.navCtrl.push('ScanPage', {}, {animate: this.animate});
        } else {
                        this.navCtrl.push(page);
        }
    }

    doRefresh(refresher) {
        console.log('Begin async operation', refresher);
        this.page = 1;
        this.orderSearch(this.page, refresher);


    }

    isContains(str, substr) {
        return str.indexOf(substr) >= 0;
    }

    doInfinite(infiniteScroll) {
        console.log('Begin async operation');
        this.page++;
        let pageNum = {"num": this.page}
        console.log(this.page)
        this.auth.orderSMG(pageNum).then(success => {

            console.log(success)
            // if(success.assistantsList.length==0){
            //     this.showFlag=true
            // }
            infiniteScroll.complete();

            this.assistantsList = this.assistantsList.concat(success.assistantsList);
            if (infiniteScroll != null) {
                infiniteScroll.complete();
            }

            if (this.assistantsList.length < 10) {
                infiniteScroll.enable(false);

                this.showFlag = true
            }
        }, error => {
            infiniteScroll.complete();
            // this.commonUtils.alertCommon('', this.translateObj.orderQueryFail)
        })
        // infiniteScroll.complete();
    }

    ionViewDidLoad() {
        // this.page =1;
        // this.orderSearch(this.page,'');
        // this.suppCompar();
    }

    ionViewWillEnter() {
        this.page = 1;
        this.orderSearch(this.page, '');
        this.suppCompar();
    }

    suppCompar() {
        debugger
    }

    orderSearch(page, refresher) {
        let pageNum = {"num": page};
        console.log('ionViewDidLoad TransparentBarPage');
        this.headerImgUrl = '../assets/img/home/homeBg.png';
        // this.auth.orderSMG(pageNum).then(success => {
        //     if (refresher != '') {
        //         console.log(success)
        //         refresher.complete();
        //     }
        //     this.assistantsList = success.assistantsList;
        // }, error => {
        //     if (refresher != '') {
        //         refresher.complete();
        //     }
        //     // this.commonUtils.alertCommon('', this.translateObj.orderQueryFail)
        // })
    }

    onScroll($event: any) {
        // console.log($event.scrollTop)
        let scrollTop = $event.scrollTop;
        this.showToolbar = scrollTop < 130;
        this.showToolbarImg = scrollTop > 130
        if (scrollTop < 0) {
            this.transition = true;
            this.headerImgSize = `${ Math.abs(scrollTop) / 2 + 100}%`;
        } else {
            this.transition = false;
            this.headerImgSize = '100%'
        }
        this.ref.detectChanges();
    }

    ionViewWillLeave() {
        if (this.alert) {
            this.alert.dismiss();
        }
        if (this.loading) {
            this.loading.dismiss();
        }
        if (this.actionSheet) {
            this.actionSheet.dismiss();
        }
        if (this.modal) {
            this.modal.dismiss();
        }
    }
}
