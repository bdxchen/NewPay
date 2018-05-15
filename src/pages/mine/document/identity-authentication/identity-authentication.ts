import { Component } from '@angular/core';
import {
    IonicPage, NavController, NavParams, LoadingController, Loading, ActionSheetController,
    Alert, Modal, ActionSheet
} from 'ionic-angular';
import { IentityAuth } from '../../../../providers/identity/ientity-auth'
import {CountryNumService} from '../../../../providers/countryNum/country-num-service';
import { File } from '@ionic-native/file';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ConfService} from '../../../../providers/util-service/conf-service';
import { CommonUtils } from '../../../../providers/common/commonUtils';
import { TranslateService } from 'ng2-translate';
/**
 * Generated class for the IdentityAuthenticationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-identity-authentication',
  templateUrl: 'identity-authentication.html',
})
export class IdentityAuthenticationPage {
  name:string;
  alert:Alert;
  loading:Loading;
  modal:Modal;
  actionSheet:ActionSheet;
  uploadHeaderF:string="";
  uploadHeaderB:string="";
  imageURLTemp:any;
  apiPath:string;
  CredentialNo:string="";
  identityBean:any={countryCode:'',idType:'',idNo:'',idName:'',ic_front:'',ic_back:''};
  countryN:string[];
  uploadHeaderFID:string='';
  uploadHeaderBID:string='';
  CredentialType:string="";//证件类型
  selectOptions:any;
selectOptionsQT:any;
  countryNum:string="";
  imageURL:string;
  photoUrl:string;
  loader:Loading;
  Cardname:string="";
    translateObj: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private ientityAuth:IentityAuth,private countryNumService:CountryNumService,
              private camera:Camera,
              private loadingCtrl:LoadingController,
              private file: File,
              private confService:ConfService,
              private actionSheetCtrl:ActionSheetController,private  commonUtils:CommonUtils,
              public translate:TranslateService) {
      this.translate.get('identity_authentication').subscribe((res: any) => {
          this.translateObj = res;
      });
  }
    goBack(){
      this.navCtrl.pop();
    }
    changeCountry(){
        console.log("this.countryNum",this.countryNum)

    }
    changeCredenty(){
        console.log(this.CredentialType)
    }
  submitAll(){
        debugger
      if(this.countryNum==""){
         this.commonUtils.alertCommon('', this.translateObj.chooseCountyCode);
         return;
      }
      if(this.Cardname==""){
          this.commonUtils.alertCommon('', this.translateObj.nameEmpty);
          return;
      }
      if(this.CredentialType==""){
          this.commonUtils.alertCommon('', this.translateObj.IDsTypeEmpty);
          return;
      }
      if(this.Cardname==""){
          this.commonUtils.alertCommon('', this.translateObj.IDEmpty);
          return;
      }
      if(this.CredentialNo==""){
          this.commonUtils.alertCommon('',this.translateObj.IDEmpty);
          return;
      }
      if(this.uploadHeaderF==''){
          this.commonUtils.alertCommon('','请上传正面照片');
          return;
      }
      if(this.uploadHeaderB==''){
          this.commonUtils.alertCommon('','请上传反面照片');
          return;
      }
      this.identityBean.countryCode = this.countryNum.split('::')[0];
      this.identityBean.idNo= this.CredentialNo;
      this.identityBean.idType=this.CredentialType;
      this.identityBean.idName= this.Cardname;
      this.identityBean.ic_front = this.uploadHeaderFID;
      this.identityBean.ic_back = this.uploadHeaderBID;
      //     "countryCode":"CN",
      //     "idType":"1",   //1身份证 2护照 3驾照
      //     "idNo":"210210199901010001"
      this.ientityAuth.identity(this.identityBean).then((res)=>{
            console.log(res)
          if(res.ret_code=='1'){
                this.commonUtils.alertCommon('', this.translateObj.submitSuccess);
              this.navCtrl.parent.select(2);
          }else{
              this.commonUtils.alertCommon('','提交失败，请重试!');
          }
      },(err)=>{
          this.commonUtils.alertCommon('', this.translateObj.submitFail);
      })
  }
  ionViewDidLoad() {
      this.countryNumService.getCountryNumber().then(success=>{
          console.log(success)
          if(success){
              this.countryN =  success.data;
              this.selectOptions = {
                  title:  this.translateObj.inputCountyCode,
                  // subTitle: 'Select your toppings',
                  mode: 'md'
              };
              this.selectOptionsQT = {
                  title:  '',
                  mode: 'md'
              };
          }
      })
    console.log('ionViewDidLoad IdentityAuthenticationPage');
  }
  presentActionSheet(photoFlag,flag) {
      if(flag=="1"){
          let actionSheet = this.actionSheetCtrl.create({
              title: this.translateObj.uploadThumb,
              cssClass:'headChoice',
              buttons: [
                  {
                      text: this.translateObj.camera,
                      icon: 'ios-arrow-forward',
                      // role: 'destructive',
                      handler: () => {
                          console.log('调用照相机');
                          this.takePhoto(photoFlag)

                      }
                  },{
                      text: this.translateObj.album,
                      icon: 'ios-arrow-forward',
                      handler: () => {
                          console.log('调用相册');
                          this.getPhoto(photoFlag);
                      }
                  },{
                      text: this.translateObj.cancle,
                      role: 'cancel',
                      handler: () => {
                          console.log('Cancel clicked');
                      }
                  }
              ]
          });
          actionSheet.present();
      }else{
          if(photoFlag=="front"){
              this.uploadHeaderF="";
          }else {
              this.uploadHeaderB="";
          }

      }

    }
    //读取相册文件夹
    getPhoto(photoFlag){

    }
    //拍照
    takePhoto(photoFlag){
        this.camera.getPicture().then((imageData) => {
            this.imageURLTemp = imageData;
            debugger

            this.upload(this.imageURLTemp,photoFlag)
        }, (err) => {
            console.log(err);
        });
    }

    upload(imgUrl :any,photoFlag){
        let userid = localStorage.getItem('userid');
        this.loader = this.loadingCtrl.create({
            content: this.translateObj.uploading,
        });
        let imglen =imgUrl.split(".").length
        if(imgUrl.split(".")[imglen-1]!="jpg" && imgUrl.split(".")[imglen-1]!="png" ){
            this.commonUtils.alertCommon("提示","请输入正确的类型,只支持jpg和png 类型");
            return;
        }
        this.apiPath =this.confService.baseUrl +"file/upload";
        this.commonUtils.showLoading();

    }
    cardNOvalid(cardno){
        this.CredentialNo= cardno.replace(/[\W]/g,'');
        this.CredentialNo= this.CredentialNo.replace("_",'');
        this.CredentialNo= this.CredentialNo.replace("+",'');
        this.CredentialNo= this.CredentialNo.replace(".",'');
        if(cardno.length>25){
            this.CredentialNo =cardno.substring(0,25);
        }

    }
    cardNamevalid(Cardname){
     if(Cardname.length>25){
         this.Cardname =Cardname.substring(0,25);
     }
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
