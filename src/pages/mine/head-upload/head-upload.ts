import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {File} from '@ionic-native/file';
import { StorageService } from '../../../providers/util-service/storage-service'

/**
 * Generated class for the HeadUploadPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-head-upload',
  templateUrl: 'head-upload.html',
})
export class HeadUploadPage {
    path: string;
    access_token: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private camera: Camera, private file: File,
              public storageService:StorageService) {
  }
    openPhoto() {
        const options: CameraOptions = {
            quality: 90,                                                   //相片质量 0 -100
            destinationType: this.camera.DestinationType.DATA_URL,        //DATA_URL 是 base64   FILE_URL 是文件路径
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: true,                                       //是否保存到相册
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY ,         //是打开相机拍照还是打开相册选择  PHOTOLIBRARY : 相册选择, CAMERA : 拍照,
        }

        this.camera.getPicture(options).then((imageData) => {
            console.log("got file: " + imageData);

            alert(imageData)
            // If it's base64:
            // let base64Image = 'data:image/jpeg;base64,' + imageData;
            // this.path = base64Image;
            alert(this.path)
            //If it's file URI
            this.path = imageData;

            this.upload();

        }, (err) => {
            // Handle error
        });
    }
    /**
     * 文件上传
     */
    upload() {
        this.access_token =   JSON.stringify(this.storageService.read('token'))
        const apiPath = "http://www.fcloudchain.com:8082/payservice/v1/file/uploadprofile";
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        headers.append('X-Auth-Token',this.access_token );
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeadUploadPage');
  }

}
