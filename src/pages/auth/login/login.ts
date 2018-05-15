import { Component,  ElementRef,ViewChild } from '@angular/core';
import {
    IonicPage, NavController, NavParams, AlertController, LoadingController, Loading,
    Platform, ModalController, ToastController
} from 'ionic-angular';
import { AuthService } from '../../../providers/user-service/user-auth-service';
import { ReqLogin, Digitals, ReqLogout, AckLogout} from '../../../providers/messages/user-auth-msg';
import {StorageService} from  '../../../providers/util-service/storage-service';
import { Keyboard } from '@ionic-native/keyboard';
import { TranslateService } from 'ng2-translate';
import { NewpayInstance } from 'newpay-wallet-js';
import 'rxjs/add/operator/toPromise';
import { BackbuttonService } from  '../../../providers/backbutton-service'
import lodash from 'lodash';
import {CommonUtils} from '../../../providers/common/commonUtils'
import { BankModelProvider } from '../../../providers/bank-model/bank-model'
import {stringify} from "@angular/core/src/util";
import {CountryNumService} from '../../../providers/countryNum/country-num-service';

// import { ReconnectingWebSocket } from 'reconnecting-web-socket';
import {Jsonp} from "@angular/http";
import { ConfService } from '../../../providers/util-service/conf-service';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {RegisterPage
    // @ViewChild(Content) content: Content;
    //jason 手机号 15801568860
    browser:any;
    loginCredentials:any = {userid:'', password:'',appregisterid:'',country:'CN',devicesystype:'',devicetype:''};
    data: any;
    TempData:Array<{account:string,coin_type:string}>;
    digitals:Digitals={account:'',//"fcc001", //bts 账号，btc 地址
        coin_type:'NPT'};
    digitalsarr:Array<Digitals>;
    RadioOpen: boolean;
    RadioResult;
    times:any;
    selectOptions:any;
    regid:string;
    langs: [{}];
    accountname:string;
    cucumber: boolean;
    loader:Loading;
    countryN:any;
    country:any={countryName:'',phoneCode:'',countryCode:'86'};
    NEWcountry:string;
    IMGheight:string;
    reandoms:string;
    options:NativeTransitionOptions;
    sleletedOne:string;
    lineHeight;
    translateObj: any;
  //@ViewChild('player')
  //player:ElementRef;
    constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private socialSharing: SocialSharing,
      private auth:AuthService,
      private alertCtrl : AlertController,
      private loadingCtrl : LoadingController,
      private storageService:StorageService,
      public alerCtrl:AlertController,
      public translate:TranslateService,
      private platform:Platform,
        private commonUtils:CommonUtils,
      private confservice:ConfService,
      private nativePageTransitions: NativePageTransitions,
        public backButtonService:BackbuttonService,
      private bankModelProvider:BankModelProvider,
      private jsonp:Jsonp,
      public modalCtrl: ModalController,
      private countryNumService:CountryNumService,private toastCtrl:ToastController
    )
    {

      this.backButtonService.registerBackButtonAction(null);
      this.options = {
          direction: 'up',
          duration: 500,
          slowdownfactor: 3,
          slidePixels: 20,
          iosdelay: 100,
          androiddelay: 150,
          fixedPixelsTop: 0,
          fixedPixelsBottom: 60
      };

      this.IMGheight =JSON.stringify(document.documentElement.clientHeight) +'px';
      platform.ready().then(() => {


      });
      if(localStorage.getItem('language')){
          this.translate.setDefaultLang(localStorage.getItem('language'));
      }else
          {
          this.translate.setDefaultLang('zh');
      }
      this.translate.get('login').subscribe((res: any) => {
          this.translateObj = res;
          console.log(res)

      });
      // console.dir(lodash);

  }
    // ionViewWillLeave() {
    //     this.nativePageTransitions.slide(this.options)
    //         .then(this.onSuccess)
    //         .catch(this.onError);
    //
    // }
    testYY(){
        let file ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAWmUlEQVR4Xu3d7XIcuQ4DUOf9Hzq3xtmturUraX16wPSMg/wNzaZAgKTUH/Pj4+Pj58cL//v508L78ePHcjXqRyDZXVN8PGxfKcbJWB5rTWC2i1F9p/xovhP2D7abQhJXBR9KpAp4DW6K1JC6o6nGs3KWEl7KTwob8VMBC1ob2wQZ24E9ESnhpfz4Cp'
        this.socialSharing.share("标题", "啊啊啊啊", file, "").then().catch(err=>{

        })
    }


    /**
     * 是否真机环境
     * @return {boolean}
     */
    isMobile(): boolean {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    }

    /**
     * 是否android真机环境
     * @return {boolean}
     */
    isAndroid(): boolean {
        return this.isMobile() && this.platform.is('android');
    }

    /**
     * 是否ios真机环境
     * @return {boolean}
     */
    isIos(): boolean {
        return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
    }




    TaostGlobal(msg){
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
        });
        toast.present();
    }
  initIndexDB(){
      //indexeddb 初始化
      this.commonUtils.showLoading();
      NewpayInstance.init(this.confservice.initWS).then(()=>{
          console.log("init",'#######');
          this.commonUtils.HideLoading();
          this.AllDigitals(localStorage.getItem('account'));
      }).catch((err)=>{
          console.log(err);
          this.commonUtils.HideLoading();
          this.commonUtils.alertCommon('提示',this.translateObj.NetworkTimeout);
      });
  };
    createWallet() {

      this.initIndexDB();
      // this.navCtrl.push("TabsPage",{userid:this.loginCredentials.userid});
  }
  AllDigitals(account){
        //如果不是空的。 说明 要校验 中心 的账户 和本地的 账户是否相同 如果相同 正常登录 如果不相同 清空本地数据;
        //如果不是空的要验证密码是否存在，密码存在 密码不存在 密码不存在的话说明需要创建 链 账户
        // 判断资金密码是否存在
        this.navCtrl.push("FundpasswordPage");
        this.accountname= NewpayInstance.getCurAccountLocalKey();
        // this.nativePageTransitions.slide(this.options);
        // this.navCtrl.push("TabsPage",{userid:this.loginCredentials.userid});
  }
    importWallet(){
       this.navCtrl.push("RecoveryImportPage",{userid:this.loginCredentials.userid});

    }
  AddDigitals(digitals){
      let resAddData;
      this.bankModelProvider.AddGetdigitals(digitals).then((res)=>{
          this.commonUtils.HideLoading();
          resAddData= res.data;
          this.nativePageTransitions.slide(this.options);
          this.navCtrl.push("FundpasswordPage",{userid:this.loginCredentials.userid});
      },(err)=>{
          this.commonUtils.HideLoading();
      })

  }

  showError(text){
    let alert = this.alertCtrl.create({
        cssClass:'projectList',
      title : 'Fail',
      subTitle :text,
      buttons:['OK']
    })
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter LoginPage');
    localStorage.setItem("flagBack","1")
  }
  ionViewDidLoad() {

      console.log('ionViewDidLoad LoginPage');
  }

  showPopup(title, text) {
        let alert = this.alertCtrl.create({
            cssClass:'projectList',
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: this.translateObj.confirm,
                    handler: data => {
                    }
                }
            ]
        });
        alert.present();
    }
    private loading(content){
        this.loader = this.loadingCtrl.create({
            content:  content,
        });
        this.loader.present();
    }

    test(){
        NewpayInstance.init(this.confservice.initWS).then(()=>{
            let accountname = NewpayInstance.getCurAccountLocalKey();
            NewpayInstance.transfer(
                "npqp18811444788",
                "npqp13263258548",
                Number(100000)  * Math.pow(10, 6),
                "1.3.1",
                "您好，请收钱"
            ).then((result) => {

                //转账成功。生成时间戳 获取当前时间
                let date = new Date();

                console.log("txid", result.txid);
                //如果转账成功以后，那么去中心化提交 转账信息。
                this.commonUtils.alertCommon('','转账成功');

            }).catch(error => {
                this.showPopup(this.translateObj.warning, error)
                console.log("[AccountActions.js:90] ----- transfer error ----->", error);

            })
            }).catch((err)=>{
            console.log(err);
            this.commonUtils.alertCommon('','网络链接错误,请重试!');
        });

    }
    testQQQQQ(){
        let img ="file:///storage/emulated/0/MagazineUnlock/magazine-unlock-11-2.3.878-_c30156ff1fcf419e9742e1c13979bb29.jpg";
       let len =  img.split(".").length
        img.split(".")[len-1]
        console.log(img.split(".")[len-1])
        let akaka = NewpayInstance.getCurAccountLocalKey();
        console.log("AAKAKAKA",akaka)
        if(!NewpayInstance.getCurAccountLocalKey()){
            console.log("为空")
            alert(NewpayInstance.getCurAccountLocalKey())
        }else{
            console.log("不为空")
            alert(NewpayInstance.getCurAccountLocalKey())
        }
        // 定义服务器地址
        let wikiUrl = "http://192.168.1.139:8080/api/v1/coins/rate/CNY?callback=nbnb";
        // 定义参数
        var params = new URLSearchParams();
        // params.set('callback', 'nbnb123');
        // // params.set("callback", "__ng_jsonp__.__req0.finished");
        // // params.set("callback", "__ng_jsonp__.__req1.finished");
        params.set('callback', `__ng_jsonp__.__req{{this.times}}.finished`);
        this.times=this.times+1;
        // // 使用jsonp模块获取express后台返回的jsonp数据
        // this.jsonp.get(wikiUrl, {search: params})
        //     .map(res=> res)
        //     .subscribe((response) => {
        //         console.log(response);
        //     }, (error) => {
        //         console.error(error);
        //     });
        this.jsonp.request('http://192.168.1.139:8080/api/v1/coins/rate/CNY', {search: params})
            .map(res => res.json())
            .subscribe((response) => {
                console.log(response);
            }, (error) => {
                console.error(error);
            });
    }


}
