import { Injectable } from '@angular/core';

@Injectable()
export class ConfService {

    constructor() { }

    //public baseUrl: string = 'http://192.168.0.156/payservice';

    //   public baseUrl: string = 'http://localhost:8080';
    //    public baseUrl: string = 'http://58.87.90.166';
    //    http://www.fcloudchain.com/img/profile/ff8080815fc4a5a2015fc7b68e810062_image.jpeg
    //    NP-Android-001
    //    NP-IOS-001
    public app_Android_id:string='NP-Android-001';
    public app_IOS_id:string='NP-IOS-001';
    public app_version ='V_20180319_01';
    public baseUrlTemp: string = 'assets/data/';
    // public initWS:string ='ws://1.119.143.222:9090';
    public initWS:string ='ws://47.94.252.36:8090';

    public hydrantHttp ='http://47.94.252.36:3000';

    //本地环境
    public baseImgUrl: string = 'http://www.fcloudchain.com/img';
    public baseUrl: string ='http://www.fcloudchain.com/payservice/v1/';
    // public baseUrl2: string ='http://www.fcloudchain.com:8082/payservice/v1/';

    //测试环境
    //   public baseImgUrl: string = 'http://www.fcloudchain.com/test/img';
    //   public baseUrl: string ='http://www.fcloudchain.com/test/payservice/v1/'

}
export const APP_DOWNLOAD = 'itms-apps://itunes.apple.com/cn/app/qq-2011/id444934666?mt=8';//app IOS下载地址
export const APK_DOWNLOAD = 'http://www.fcloudchain.com/app/download';//apk下载完整地址
