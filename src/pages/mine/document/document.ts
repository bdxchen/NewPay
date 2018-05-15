import { Component } from '@angular/core';
import {
    IonicPage, NavController, AlertController, NavParams, ActionSheetController,
    LoadingController, Alert, Loading, ActionSheet, Modal, ToastController, Platform, ModalController
} from 'ionic-angular';
import { CityPickerModule } from  "ionic2-city-picker"
import {CityPickerService} from "../../../providers/city-picker-service";
import {MineService} from "../../../providers/user-service/mine-service";
import {SetUserInfo,Allinfo} from "../../../providers/messages/user-auth-msg";
import { File } from '@ionic-native/file';
import {Toast} from "@ionic-native/toast";
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ConfService} from '../../../providers/util-service/conf-service';
import { TranslateService } from 'ng2-translate';
import { CommonUtils} from '../../../providers/common/commonUtils'
import { Keyboard } from '@ionic-native/keyboard';
import { AlertModalPage } from '../../alert-modal/alert-modal';
@IonicPage()
@Component({
    selector: 'page-document',
    templateUrl: 'document.html'
})
//
export class DocumentPage {
    allinfo:SetUserInfo={nick_name:'',gender:'',province:'北京',city:'',profile_icon:'',id_status:'',id_name:''};
    nicknameL:string;
    alert:Alert;

    modal:Modal;
    actionSheet:ActionSheet;
    loading:Loading;
    uploadHeader:any='';
    access_token:string;
    imageURLTemp:any='';
    uploadHeaderTemp:string='';
    sexradio:string;
    cityData: any[]; //城市数据
    cityName:string = '北京市-北京市-东城区'; //初始化城市名
    code:string; //城市编码
    createSuccess = false;
    imageURL:string;
    photoUrl:string;
    uploadHeaderID:string;
    loader:Loading;
    translateObj: any;

    setuserinfo: any = {nick_name:'',gender:'',province:'',city:'',profile_icon:''};
    constructor( public navCtrl: NavController,
                 public alertCtrl: AlertController,public navParams: NavParams,
                 public cityPickerSev: CityPickerService,
                 public minservice:  MineService,public actionSheetCtrl:ActionSheetController,
                 public modalCtrl:ModalController
        ,private camera:Camera,
                 private toast: Toast,
                 private platform:Platform,
                 private toastCtrl: ToastController,
                 private commonUtils:CommonUtils,
                 private loadingCtrl:LoadingController,
                 private file: File,
                 private confService:ConfService,
                 public translate:TranslateService,
                 private keyboard: Keyboard) {
        this.setCityPickerData();
        console.log(this.navParams.get('userinfo'));
        this.allinfo  = JSON.parse(this.navParams.get('userinfo'));
        if(this.allinfo.profile_icon==""){
            this.uploadHeader ="assets/img/dufaultTX.png";
        }else{
            this.uploadHeader =this.confService.baseImgUrl+ this.allinfo.profile_icon;
        }
        // this.uploadHeader =this.confService.baseImgUrl+ this.allinfo.profile_icon;
        this.nicknameL= this.allinfo.nick_name;
        this.sexradio =  this.allinfo.gender;
        this.cityName =   this.allinfo.city;
        // this.Allinfo.profile_icon;
        // this.Allinfo.province;
        this.translate.get('document').subscribe((res: any) => {
            this.translateObj = res;
        });
    }
    /**
     * 获取城市数据
     */
    setCityPickerData(){
        this.cityPickerSev.getCitiesData()
            .then( data => {
                this.cityData = data;
            });
        //
    }
    applicationBusniess(){
        this.alert = this.alertCtrl.create({
            title: '',
            subTitle: this.translateObj.waiting,
            buttons: [this.translateObj.ok]
        });
        this.alert.present();
    }
    /**
     * 城市选择器被改变时触发的事件
     * @param event
     */
    cityChange(event){
        console.log(event);
        this.code = event['region'].value
    }
    goBack(){
        this.navCtrl.parent.select(2);
    }
    saveDocument(){
        this.setuserinfo.nick_name = this.nicknameL;
        this.setuserinfo.gender = this.sexradio;
        // this.setuserinfo.city = this.cityName;
        this.setuserinfo.city ="";

        if(this.setuserinfo.nick_name == ""){
            this.showPopup("", this.translateObj.inputNewNickName);
            return;
        }
        this.showLoading();
        this.minservice.setUserinfo(this.setuserinfo).then(result=> {
            debugger;
            this.hideLoading();
            if(result != null){
                if(result.ret_code=="1"){
                    // this.showPopupQ("", this.translateObj.modifySuccess);
                    this.showToast(this.translateObj.modifySuccess);
                    this.navCtrl.popTo('MinePage')
                }else {
                    // this.showPopup("",result.ret_msg);
                    this.showToast(result.ret_msg);
                }
            }
        }).catch(err=>{
            debugger;
            console.log(err);
            this.hideLoading();
        });
    }
    nickname(){
        console.log("修改昵称");
        //this.showPrompt();
        this.showAlertModal();
        console.log(this.nicknameL)
    }
    changesex(){
        console.log("修改性别");
        this.showRadio()
    }
    changeAddress(){
        console.log("修改地址")
    }
    headUpload(){
        this.presentActionSheet();
        // this.navCtrl.push('HeadUploadPage');
    }
    presentActionSheet() {
        this.actionSheet = this.actionSheetCtrl.create({
            title:  this.translateObj.uploadThumb,
            cssClass:'headChoice',

            buttons: [
                {
                    text: this.translateObj.camera,
                    icon: 'ios-arrow-forward',
                    // role: 'destructive',
                    handler: () => {
                        console.log('调用照相机');
                        this.takePhoto()

                    }
                },{
                    text: this.translateObj.album,
                    icon: 'ios-arrow-forward',
                    handler: () => {
                        console.log('调用相册');
                        this.getPhoto();
                    }
                },{
                    text: this.translateObj.cancel,
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        this.actionSheet.present();
    }
    //读取相册文件夹
    getPhoto(){

    }
    //拍照
    takePhoto(){
        this.camera.getPicture().then((imageData) => {
            this.imageURLTemp = imageData;
            this.uploadHeaderTemp = imageData;
            this.upload(this.imageURLTemp)
        }, (err) => {
            console.log(err);
        });
    }

    upload(imgUrl :any){

        let userid = localStorage.getItem('userid');
        this.loader = this.loadingCtrl.create({
            content: this.translateObj.uploading,
        })

        let imglen =imgUrl.split(".").length
        if(imgUrl.split(".")[imglen-1]!="jpg" && imgUrl.split(".")[imglen-1]!="png" ){
            this.commonUtils.alertCommon("请输入正确的类型,只支持jpg和png 类型",'');
            return;
        }
        // fileTransfer.upload(imgUrl,'',options)
        //     .then((data) => {
        //
        //         var rtnString=JSON.stringify(data);
        //         console.log(rtnString)
        //
        //     }, (err) => {
        //
        //     })
    }
    showAlertModal(){
        let alertModal = this.modalCtrl.create(AlertModalPage);
        alertModal.onDidDismiss(data => {
            console.log(data);
            if(data.nikeName.length>32){
                let prompt = this.alertCtrl.create({
                    title: '提示',
                    message: "昵称长度不能超过32个字符!",
                    buttons: [
                        {
                            text: '确定',
                            handler: () => {
                                return;
                            }
                        }
                    ]
                });
                prompt.present();
                return false;
            }

            if(data){
                this.nicknameL = data.nikeName;
                console.log(data.nikeName)
            }else {
                let prompt = this.alertCtrl.create({
                    title: '提示',
                    message: "非法昵称!",
                    buttons: [
                        {
                            text: '确定',
                            handler: () => {
                                return;
                            }
                        }
                    ]
                });
                prompt.present();
            }
        });
        alertModal.present();
    }
    showPrompt() {

        setTimeout(() =>{
            this.alert = this.alertCtrl.create({
                title: this.translateObj.modifyNickname,
                message: "",
                enableBackdropDismiss:false,
                cssClass:'alertInpusCss',
                inputs: [
                    {
                        name: 'nicknameNC',
                        // autocomplete:'on',
                        placeholder: this.translateObj.inputNickname,
                    },
                ],
                buttons: [
                    {
                        text: this.translateObj.cancel,
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: this.translateObj.ok,
                        handler: data => {
                            console.log('Saved clicked');
                            console.log(data)
                            if( data.nicknameNC.length> 32){
                                let prompt = this.alertCtrl.create({
                                    title: '提示',
                                    message: "昵称长度不能超过32个字符!",
                                    buttons: [
                                        {
                                            text: '确定',
                                            handler: () => {
                                                return;
                                            }
                                        }
                                    ]
                                });
                                prompt.present();

                            }else{
                                this.nicknameL =  data.nicknameNC;
                                console.log(data.nicknameNC)
                            }

                        }
                    }
                ]
            });
            // this.alert.addInput({
            //     type: 'text',
            //     name:'nicknameNC',
            //     placeholder: this.translateObj.inputNickname
            // })
            this.keyboard.close();
            this.alert.present();
        }, 0);

    }
    showRadio() {
        this.alert = this.alertCtrl.create();
        this.alert.setTitle(this.translateObj.gender);

        this.alert.addInput({
            type: 'radio',
            label: this.translateObj.man,
            value: 'man',
            checked: true
        });
        this.alert.addInput({
            type: 'radio',
            label: this.translateObj.woman,
            value: 'woman',
            // checked: true
        });
        this.alert.addButton(this.translateObj.cancel);
        this.alert.addButton({
            text: this.translateObj.confirm,
            handler: data => {
                console.log(data)
                if(data=="woman"){
                    this.sexradio =this.translateObj.woman
                }else{
                    this.sexradio =this.translateObj.man;
                }

                // this.testRadioOpen = false;
                // this.testRadioResult = data;
            }
        });
        this.alert.present();
    }

    showPopup(title, text) {
        this.alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: this.translateObj.confirm,
                }
            ]
        });
        this.alert.present();
    }
    showPopupQ(title,text){
        this.alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: this.translateObj.confirm,
                    handler: data => {
                        console.log(data)
                        this.navCtrl.parent.select(2);
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        this.alert.present();
    }
    identityAuthentication() {
        debugger
        if (this.allinfo.id_status == "0" || this.allinfo.id_status == "3") {
            this.navCtrl.push('IdentityAuthenticationPage');
        }else if(this.allinfo.id_status == "2"){
            this.commonUtils.alertCommon(this.translateObj.wiatingIdentity,'');
        }
    }
    /**
     * 是否真机环境
     */
    isMobile(): boolean {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    }
    /**
     * 统一调用此方法显示提示信息
     * @param message 信息内容
     * @param duration 显示时长
     */

    showToast(message: string = '保存成功', duration: number = 2000): void {
        if (this.isMobile()) {
            this.toast.show(message, String(duration), 'center').subscribe();
        } else {
            this.toastCtrl.create({
                message: message,
                duration: duration,
                position: 'middle',
                showCloseButton: false
            }).present();
        }
    };

    /**
     * 统一调用此方法显示loading
     * @param content 显示的内容
     */
    showLoading(content: string = ''): void {
        if (!this.loading) {//如果loading已经存在则不再打开
            let loading = this.loadingCtrl.create({
                content: content
            });
            loading.present();
            this.loading = loading;
        }
    };

    /**
     * 关闭loading
     */
    hideLoading(): void {
        debugger
        this.loading && this.loading.dismiss();
        this.loading = null;
    };
    ionViewWillLeave(){
        if(this.alert){
            this.alert.dismiss();
        }
        if(this.loading){
            this.loading.dismiss();
        }
        if(this.actionSheet){
            this.actionSheet.dismiss();
        }
        if(this.modal){
            this.modal.dismiss();
        }
    }
}
