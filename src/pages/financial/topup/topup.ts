import {Component} from '@angular/core';
import {ActionSheet, Alert, AlertController, IonicPage, Loading, Modal, NavController, NavParams} from 'ionic-angular';
import {AccountPubService} from "../../../providers/financial-service/account-pub-service";
import {Alipay, SubmitOrder, ConfirmOrder} from "../../../providers/messages/account-pub-msg";
import {ReqCheckPayee, Searchd, CheckUid} from "../../../providers/messages/account-transfer-msg";
import {BankModelProvider} from '../../../providers/bank-model/bank-model'
import {CommonUtils} from '../../../providers/common/commonUtils'
import {TranslateService} from 'ng2-translate';
import {FeelActionrateService} from '../../../providers/feelActionrate/feel-actionrate-service'

//提交
/**
 * Generated class for the TopupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-topup',
    templateUrl: 'topup.html',
})
export class TopupPage {
    order: any = {coin: '', comment: '', oppaccountno: '', orderno: '', payType: '', quantity: '', status: '', time: ''}
    qr_code: string;
    alert: Alert;
    loading: Loading;
    actionSheet: ActionSheet;
    modal: Modal;
    account: string = '';
    name: string;
    flag: boolean;
    feelrate: any;
    feel: any = 0;
    feelrequest: any;
    accountName: string;
    accountNo: string;
    topupComments: string;
    orderNo: string;
    currency: string;
    payStatus: boolean;
    SearchD: any = {amount: '', asset_id: '', precision: 0, symbol: ''};
    alipay: Alipay = {amount: '0.00', comment: '', coin_type: ''};
    submitOrder: any = {amount: '', comment: '', coin_type: '', account_no: '', channelType: '', topupComments:''};
    confirmOrder: ConfirmOrder = {orderNo: '', payStatus: true};
    translateObj: any;
    precision: any;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private accountPubService: AccountPubService,
                private bankmodelProvider: BankModelProvider,
                private commonUtils: CommonUtils,
                public translate: TranslateService,
                private alertCtrl: AlertController,
                private feelService: FeelActionrateService) {
        this.order = this.navParams.get('order');
        console.log(this.order)
        if (this.order) {
            this.alipay.coin_type = this.order.coin;
        } else {
            this.SearchD = this.navParams.get('SearchD')
            console.log(this.SearchD)
            this.alipay.coin_type = this.SearchD.symbol;
            this.precision = this.SearchD.precision;
        }
        this.translate.get('topup').subscribe((res: any) => {
            this.translateObj = res;
        });

    }

    ionViewDidLoad() {
        this.currency = localStorage.getItem('currency');
        this.feelrequest = {
            "coinid": this.alipay.coin_type,//币种类型
            "actiontype": "2" //类型1 topupcoin 2topup 3withdrawcoin 4 withdraw
        }

        this.feelService.getActionrate(this.feelrequest).then((res) => {
            console.log(res)
            this.feelrate = res;
            // console.log("fell",res.minfee);
        }, error => {
            this.commonUtils.alertCommon('', '网络连接失败，请重试！')
        })

        // this.accountPubService.getAlipay(this.alipay).subscribe(success => {
        //         if (success !=null){
        //             console.log("数据响应：："+success)
        //             this.submitOrder.account_no = success.account_no
        //             this.qr_code= success.qr_code
        //         }
        //     },
        //     error => {
        //         console.log("请求异常：："+error)
        //     });
        console.log('ionViewDidLoad TopupPage');
        this.getAccount();
        console.log(this.account);

    }

    getAccount() {
        this.commonUtils.showLoading()
        this.bankmodelProvider.getThirdpart().then((res) => {
            this.commonUtils.HideLoading();
            console.log(res)
            if (res.data.length == 0) {
                this.flag = false;
                // this.commonUtils.alertCommon('','请添加支付宝账号');
                return;
            } else {
                this.account = res.data[0].account;
                this.name = res.data[0].name;
                console.log(this.account);
            }

        }).catch((err) => {
            this.commonUtils.alertCommon('', err);
        })
    }

    public skipToAlipay() {
        debugger
        this.submitOrder.coin_type = this.alipay.coin_type;
        this.submitOrder.channelType = '2';
        this.submitOrder.account_no = this.account;
        if (this.submitOrder.amount === '') {
            this.alertCommon(this.translateObj.warning, '金额不能为空!');
            return;
        }
        if(Number(this.submitOrder.amount)===0){
            this.alertCommon(this.translateObj.warning, this.translateObj.isNoZero);
            return false;
        }
        if (Number(this.submitOrder.amount) < 100) {
            this.alertCommon(this.translateObj.warning, '金额不能小于100!');
            return;
        }
        if (Number(this.submitOrder.amount) > 50000) {
            this.alertCommon(this.translateObj.warning, '金额不能大于50000!');
            return;
        }
        if (this.submitOrder.account_no == '') {
            this.alertCommon(this.translateObj.warning, '请添加支付宝账号');
            return;
        } else {
            this.alertSkipAP();
        }
        // this.browserService.open("https://qr.alipay.com/tsx02605cjazchk0vqvhnc6");
    }
    alertCommon(title,subT){
        this.alert = this.alertCtrl.create({
            title: title,
            subTitle: subT,
            buttons: [
                {
                    text: this.translateObj.confirm,
                    handler: data => {

                    }
                }
            ]
        });
        this.alert.present();
    }
    alertSkipAP() {
        this.commonUtils.showLoading();
        this.accountPubService.submitOrder(this.submitOrder).then(success => {
                this.accountNo = success.accountNo;
                this.accountName = success.accountName;
                this.topupComments = success.topupComments;
                this.commonUtils.HideLoading();
                if (success.ret_code == "1") {

                    this.alert = this.alertCtrl.create({
                        title: this.translateObj.warning,
                        message:
                        '<div class="topupMess"> <p class="text-center f12 hui tips">请按提示信息向该账户汇款</p></div>' +
                        '<div class="topupMess"> <p class="text-left">充值账号</p> <p class="text-right">' + this.accountNo + '(承兑商)</p></div>' +

                        // '<div class="topupMess"> <p class="text-left">充值金额</p> <p class="text-right">' + this.submitOrder.amount + '</p></div>'+
                        // '<div class="topupMess"> <p class="text-left">备注(请务必填写)</p> <p class="text-right cheng">1234567890</p></div>',
                        // inputs: [
                        //     {
                        //         label: '备注',
                        //         name: '备注',
                        //         placeholder: '备注(请务必填写)'
                        //     },
                        // ],

                        '<div class="topupMess"> <p class="text-left">充值金额</p> <p class="text-right">' + this.submitOrder.amount + '</p></div>' +
                        '<div class="topupMess"> <p class="text-left">备注</p> <p class="text-right cheng">' + this.topupComments + '</p></div>',
                        /*inputs: [
                            {
                                label: '备注',
                                name: '备注',
                                placeholder: '备注(请务必填写)',
                            },
                        ],*/
                        buttons: [
                            {
                                text: this.translateObj.Cancel,
                                role: 'cancel',
                                handler: data => {
                                    // this.chncel();
                                    console.log('Cancel clicked');
                                    localStorage.setItem('qrCode', success.qrCode);
                                    console.log('取消支付');
                                    this.payStatus = false;
                                    this.confirmOrderCon(this.orderNo, this.payStatus);
                                }
                            },
                            {
                                text: this.translateObj.goTopup,
                                handler: data => {
                                    console.log('Saved clicked');
                                    //获取
                                    //弹出
                                    debugger;
                                    console.log(success.qr_code);
                                    localStorage.setItem('qrCode', success.qrCode);
                                    this.accountNo = success.accountNo;
                                    this.topupComments = success.topupComments;
                                    setTimeout(() => {
                                        setTimeout(() => {
                                            this.showConfirm(success);
                                        }, 2000);
                                    })
                                }
                            }
                        ]
                    });
                    // this.alert.addInput({type:'radio',label:'Blue',value:'blue',checked:true});

                    this.alert.present();

                } else if (success.ret_code == "0") {
                       // this.commonUtils.alertCommon('',success.ret_msg);
                    this.alert = this.alertCtrl.create({
                        title: this.translateObj.warning,
                        message: success.ret_msg,
                        enableBackdropDismiss:false,
                        buttons: [
                            {
                                text: this.translateObj.confirm,
                                handler: data => {
                                    this.navCtrl.push('BillDetailPage', {assistants: success.orderNo, flag: 'topup'})
                                }
                            }
                        ]
                    });
                    this.alert.present();
                  }else if(success.ret_code =="2"){
                      this.showAlert(success.orderNo);
                  }
              },
              error => {
                  console.log("请求异常：："+error)
                  this.commonUtils.HideLoading();
                  this.commonUtils.alertCommon(this.translateObj.warning,this.translateObj.submitFail);
              });
  }
  chncel(){

      this.alert = this.alertCtrl.create({
          title: this.translateObj.warning,
          message: 'this.translateObj.comcancel',
          enableBackdropDismiss:false,
          buttons: [
              {
                  text: this.translateObj.Cancel,
                  role: 'cancel',
                  handler: data => {
                      console.log('Cancel clicked');
                      let navTransition = this.alert.dismiss();
                  }
              },
              {
                  text: this.translateObj.confirm,
                  handler: data => {
                       this.alert.dismiss();
                  }
              }
          ]
      });
      this.alert.present();
  }

    goBack() {
        this.navCtrl.pop();
    }

    confirmOrderCon(orderNo, payStatus) {
        this.confirmOrder.orderNo = orderNo;
        this.confirmOrder.payStatus = payStatus;
        this.accountPubService.confirmOrderZ(this.confirmOrder).then(success => {
            console.log(success)
        }, error => {

        })
    }

    showAlert(ordernO) {
        this.alert = this.alertCtrl.create({
            title: '提示',
            message: '有取消的订单,请查看详情！',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: this.translateObj.incomplete,
                    handler: () => {
                        this.navCtrl.push('BillDetailPage', {assistants: ordernO, flag: 'topup'})
                    }
                }
            ]
        });
        this.alert.present();
    }

    showConfirm(success) {
        console.log(success)
        this.orderNo = success.orderNo //订单号

        if (success.qrCode) { //二维码

        }
        // "accountNo" : "1", //收款账号
        //     "accountName" : "1",//收款名字
            this.alert = this.alertCtrl.create({

            title: this.translateObj.confirm,
            message: this.translateObj.isCompletePayment,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: this.translateObj.incomplete,
                    handler: () => {
                        this.navCtrl.parent.select(0);
                    }
                },
                {
                    text: this.translateObj.complete,
                    handler: () => {
                        console.log('已付款');
                        this.payStatus = true;
                        this.confirmOrderCon(this.orderNo, this.payStatus);
                        this.navCtrl.parent.select(0);
                    }
                }
            ]
        });
        this.alert.present();
    }

    toDecimal2(x) {
        var f = parseFloat(x);
        if (isNaN(f)) {
            return false;
        }
        f = Math.round(x * 100) / 100;
        var s = f.toString();
        var rs = s.indexOf('.');
        if (rs < 0) {
            rs = s.length;
            s += '.';
        }
        while (s.length <= rs + 2) {
            s += '0';
        }
        return s;
    }

    tofix(amount) {
        console.log(amount);
        this.submitOrder.amount = amount.toString();
        // this.submitOrder.amount = Math.floor(amount * 100) / 100;
        console.log(amount)
        if (this.submitOrder.amount.split(".")[0] == "") {
            this.submitOrder.amount = this.submitOrder.amount.substring(0, 0)
        }
        this.submitOrder.amount = this.submitOrder.amount.replace(/[^\d.]/g, "");  //清除“数字”和“.”以外的字符
        this.submitOrder.amount = this.submitOrder.amount.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
        if (this.submitOrder.amount.indexOf(".") > -1 && this.submitOrder.amount != "") {

            // this.submitOrder.amount =this.submitOrder.amount.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
            // this.submitOrder.amount = this.submitOrder.amount.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');//只能输入两个小数
            var newstr;
            if (this.submitOrder.amount.indexOf(".") != -1) {//如果存在小数点
                var pos = this.submitOrder.amount.indexOf(".");//小数点的位置
                newstr = this.submitOrder.amount.substring(pos + 1);//小数点后面的值
                var yong = this.submitOrder.amount.substring(0, pos + 1);
                newstr = newstr.replace(/[^0-9]/ig, "");
                console.log("this.precision:++++++",this.precision);
                if(this.precision==""){
                    this.precision=2;
                }
                if (newstr.length >= this.precision + 1) {
                    newstr = newstr.substring(0, (newstr.length - 1));
                }
                this.submitOrder.amount = yong + newstr;
            } else {
                this.submitOrder.amount = this.submitOrder.amount.replace(/[^0-9\.]/ig, "");
            }
        }
        if (this.submitOrder.amount.indexOf(".") < 0 && this.submitOrder.amount != "") {//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
            this.submitOrder.amount = parseFloat(this.submitOrder.amount);
        }
        if (amount > 50000) {
            this.submitOrder.amount = 50000;
            this.feel = 50000 * this.feelrate.normalrate;
        }
    }

    changAmount(e) {
        console.log(e)
        // this.submitOrder.amount = Number(this.submitOrder.amount).toFixed(2);
        e = e.replace(/[^\d.]/g, "");
        if (e == "") {
            this.feel = 0;
        }
        var re = /^[0-9]+.?[0-9]*$/;   //判断字符串是否为数字     //判断正整数 /^[1-9]+[0-9]*]*$/
        if (!re.test(e)) {
            // alert("请输入数字");
            return false;
        } else {
            console.log(e);
            if (Number(e) == 0) {
                this.feel = 0;
            } else {
                console.log(this.feelrate);
                // 手续费分 最大 和最小 值，  当超出指定范围 按最大最小值算
                if (Number(e) * this.feelrate.normalrate < this.feelrate.minfee) {
                    this.feel = this.feelrate.minfee;
                } else if (Number(e) * this.feelrate.normalrate > this.feelrate.maxfee) {
                    this.feel = this.feelrate.maxfee;
                } else {
                    this.feel = Number(e) * this.feelrate.normalrate;
                }

            }
            this.feel = this.feel.toFixed(2);
            console.log(this.feel);
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
