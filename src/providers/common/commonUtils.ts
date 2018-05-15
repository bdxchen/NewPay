import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AlertController, LoadingController, Loading, Platform, ToastController, Alert} from 'ionic-angular';
import {Toast} from "@ionic-native/toast";
@Injectable()
export class CommonUtils {
    loading:Loading;
    alert:Alert;
    constructor(public alertCtr:AlertController,public loadingCtrl:LoadingController,private platform:Platform,private toast:Toast,private toastCtrl:ToastController) {
        console.log('Hello BalanceService Provider');
    }
    alertCommon(title,message){
        this.alert = this.alertCtr.create({
            title: title,
            message: message,
            enableBackdropDismiss:false,
            buttons: [
                {
                    text: '确定',
                    handler: () => {
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        this.alert.present();
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
            this.toast.show(message, String(duration), 'bottom').subscribe();
        } else {
            this.toastCtrl.create({
                message: message,
                duration: duration,
                // position: 'middle',
                showCloseButton: false
            }).present();
        }
    };

    /**
     * 统一调用此方法显示loading
     * @param content 显示的内容
     */
    showLoading(content: string = '请稍等...'): void {
        if (!this.loading) {//如果loading已经存在则不再打开
            this.loading = this.loadingCtrl.create({
                content: content
            });
            this.loading.present();
        }
    };

    /**
     * 关闭loading
     */
    HideLoading(): void {
        debugger
        this.loading && this.loading.dismiss();
        this.loading = null;
    };
}