import { Component,Pipe, ViewChildren, ViewChild, ChangeDetectorRef } from '@angular/core';
import {
    IonicPage, NavController, NavParams, LoadingController, AlertController, Platform, Events,
    Alert, Loading, ActionSheet, Modal,Content
} from 'ionic-angular';
import { pinyin } from './pinyin';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Keyboard } from '@ionic-native/keyboard';
import { SMS } from '@ionic-native/sms';
// import  { InvitationPage } from '../invitation/invitation';
import { Contacts, Contact, ContactFindOptions, ContactFieldType,ContactField,ContactName } from '@ionic-native/contacts';
import { Device } from '@ionic-native/device';
import {letProto} from "rxjs/operator/let";
import {FriendService} from "../../providers/user-service/friend-service";
import {CheckPhoneCode, ChecPhoneNumber} from "../../providers/messages/user-auth-msg";
import { TranslateService } from 'ng2-translate';
import { CommonUtils} from '../../providers/common/commonUtils';
import {ContactsT} from '../../providers/contact/contacts';
@IonicPage()
@Component({
    selector: 'page-friends',
    templateUrl: 'friends.html',
})
export class FriendsPage {
    indexs =
         ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    // sections:any[] = Array.apply(null, Array(10)).map(function(item, i) {
    //     return 0;
    // });
    alert:Alert;
    loading:Loading;
    actionSheet:ActionSheet;
    modal:Modal;
    location: Location;
    searchInput: string;
    result:any=[];
    formatContacts: any = [];  //按首字母顺序格式化后的数组
    allSearchContacts = [];  //未排序供搜索的数组
    searchingItems = []; //搜索显示的数组;
    searchingItemsFilter=[];
    loader;
    oobj:any={} ;
    searchQuery: string = '';
    items: string[];
    isSearching = false;
    friendsinfo;
    translateObj: any;
    index: string = 'A';
    showModal: boolean = false;
    timeout: any;
    // indexes: Array<string> = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split('');
    offsetTops: Array<number> = [];
    contactsT: Array<any> = [];

    @ViewChildren('IonItemGroup') ionItemGroup;
    @ViewChild(Content) content: Content;
    constructor(public navCtrl: NavController, public navParams: NavParams,
                public alertCtrl: AlertController,
                public loadingCtrl: LoadingController,
                private contacts: Contacts,
                private device: Device,
                private sms:SMS,
                private contactsSer:ContactsT,
                private friendservice : FriendService,
                // private invitationFriends : FriendService,
                private keyboard: Keyboard,platform:Platform,private event: Events,
                public translate:TranslateService,
                private commonUtils:CommonUtils,
                public ref: ChangeDetectorRef) {
        // this.contactsSer.getContacts()
        //     .then(res => {
        //         this.contactsT = this.contactsSer.grouping(res);
        //         console.log(this.contacts)
        // })
        console.log('constructor+ContactPage');
        this.formatContacts=[];
            /*[{"key":"A",value:[{"displayName":"北京",phoneNumber:"010851111","pinyinName":'BeiJing','flag':1,'lastName':'个京地方'}]},{"key":"B",value:[{"displayName":"北京",phoneNumber:"010851111","pinyinName":'BeiJing','flag':1,'lastName':'京'}]},
        {"key":"C",value:[{"displayName":"上海",phoneNumber:"188333812183","pinyinName":'BeiJing','flag':1,'lastName':'京'},
            {"displayName":"北京",phone
            Number:"010851111","pinyinName":'BeiJing','flag':1,'lastName':'京'},
            {"displayName":"北京",phoneNumber:"010851111","pinyinName":'BeiJing','flag':1,'lastName':'京'},
            {"displayName":"北京",phoneNumber:"18301198774","pinyinName":'BeiJing','flag':1,'lastName':'京'}]},
        {"key":"D",value:[{"displayName":"北京",phoneNumber:"18600010001","pinyinName":'BeiJing','flag':1,'lastName':'京'},
            {"displayName":"北京",phoneNumber:"010851111","pinyinName":'BeiJing','flag':1,'lastName':'京'},
            {"displayName":"北京",phoneNumber:"010851111","pinyinName":'BeiJing','flag':1,'lastName':'京'}]},
            {"key":"E",value:[{"displayName":"北京",phoneNumber:"18831016233","pinyinName":'BeiJing','flag':1,'lastName':'京'},
                {"displayName":"北京",phoneNumber:"010851111","pinyinName":'BeiJing','flag':1,'lastName':'京'},
                {"displayName":"北京",phoneNumber:"010851111","pinyinName":'BeiJing','flag':1,'lastName':'京'}]},
            {"key":"F",value:[{"displayName":"北京",phoneNumber:"010851111","pinyinName":'','flag':1,'lastName':'京'}]},];*/



        this.allSearchContacts=[];
            // [{"displayName":"长安",phoneNumber:"010851111","pinyinName":'changan','flag':1},{"displayName":"北京",phoneNumber:"010851111","pinyinName":'BeiJing','flag':2},{"displayName":"北京",phoneNumber:"010851111","pinyinName":"BeiJing",'flag':3}];

        this.searchInput = "";
        this.translate.get('friends').subscribe((res: any) => {
            this.translateObj = res;

        });
    }

    getOffsetTops() {
        this.offsetTops = this.ionItemGroup._results.map(ele => {
            return ele.nativeElement.offsetTop
        })
    }
    // selectIndex(index: number) {
    //     this.index = this.indexes[index];
    //     const offsetTop = this.offsetTops[index];
    //     this.content.scrollTo(0, offsetTop, 300);
    //     this.createModal();
    // }
    createModal() {
        clearTimeout(this.timeout);
        this.showModal = true;
        this.timeout = setTimeout(() => {
            this.showModal = false;
            this.ref.detectChanges();
        }, 800)
    }
    // onScroll() {
    //     debugger
    //     const threshold = 42;
    //     console.log(this.content.scrollTop);
    //     if (this.content.scrollTop < threshold) {
    //         this.index = this.indexes[0];
    //         return;
    //     }
    //
    //     for (let i = this.offsetTops.length; i > 0; i--) {
    //         if (this.content.scrollTop + threshold >= this.offsetTops[i]) {
    //             this.index = this.indexes[i];
    //             this.ref.detectChanges();
    //             return;
    //         }
    //     }
    // }
    initializeItems() {
        this.searchingItems = this.allSearchContacts;
    }

    getItems(ev: any) {
        debugger
        console.log('getItems');
        this.isSearching = true;
        // document.getElementById("isSearchingQQQ").setAttribute("style","display: none")
        this.initializeItems();
        let val = ev.target.value;
        if (val && val.trim() != '') {
            this.searchingItems = this.searchingItems.filter((item) => {
                 console.log('filteritem==' + JSON.stringify(item));
                return (item.pinyinName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        } else {
            this.isSearching = false;
            // document.getElementById("friendnosearch").setAttribute("style","display: block")
        }
    }
    onCancelSearch(event) {
        this.isSearching = false;
        // document.getElementById("friendnosearch").setAttribute("style","display: block")
        this.searchingItems = [];
    }
    validate(item){
        this.friendservice.invitationContent('').then(retData=>{
            if(retData.ret_code == 1){
                item.messageTem = retData.data;

                console.log("邀请好友验证");
                //let messageTem = this.translateObj.message;
                var options = {
                    replaceLineBreaks: false, // true to replace \n by a new line, false by default
                    android: {
                        intent: 'INTENT'  // send SMS with the native android SMS messaging
                        //intent: '' // send SMS without open any other app
                    }
                };
                this.sms.send(item.phoneNumber, item.messageTem,options).then((res)=>{
                    console.log(res)
                }).catch((err)=>{
                    console.log(err)
                });
                // this.navCtrl.push('FrienddetailPage');
                event.stopPropagation();
            }
        });
        // alert(JSON.stringify(item))
    }
    presentLoading() {
        this.loader = this.loadingCtrl.create({
            content: this.translateObj.getAddressbook,
        });
        this.loader.present();
        // setTimeout(() => {
        //     this.loader.dismiss();
        // }, 1000);
    }
    searchByKeyword(event) {
        console.log('input value=' + this.searchInput);
        let camel = pinyin.getCamelChars(this.searchInput).substring(0, 1);
        console.log("camel==" + camel);
        this.goWhere('contact-' + camel);
        console.log('contacts objs sort==' + JSON.stringify(this.formatContacts));
    }

    goWhere(loc) {
        console.log('loc==' + loc);
        this.location.go(loc);
    }
    calling(item) {
        this.navCtrl.push('FrienddetailPage',{item:item});
    }

    all(){
        console.log("AAAAAAAAAAAA")
        this.formatContacts = [];
        this.allSearchContacts=[];
        // if(this.formatContacts.length == 0){
            let options = new ContactFindOptions();
            let fields: ContactFieldType[];
            fields = ["displayName", "phoneNumbers"];
            options.filter = "";
            options.multiple = true;
            options.hasPhoneNumber = true;
            this.presentLoading();
            // this.onSuccess(result, this);
            this.contacts.find(fields, options).then((result) => {
                console.log(result);
                if(result.length==0){
                   this.alertCommon('','通讯录为空,请添加通讯录。');
                    this.loader.dismiss();
                }else{
                    this.onSuccess(result, this);
                }

            }).catch(e => {
                this.loader.dismiss();
                console.log(e)
                if(e==20){
                    this.alert = this.alertCtrl.create({
                        title: this.translateObj.warning,
                        subTitle: this.translateObj.getAddressFail,
                        buttons: [
                            {
                                text: this.translateObj.confirm,
                                handler: () => {

                                }
                            }
                        ]
                    })
                    this.alert.present();
                }else{
                    this.alert = this.alertCtrl.create({
                        title: this.translateObj.warning,
                        subTitle: e,
                        buttons: [
                            {
                                text: this.translateObj.confirm,
                                handler: () => {

                                }
                            }
                        ]
                    })
                    this.alert.present();
                }

            });


        // }
    }
    alertCommon(title,subT){
        this.alert = this.alertCtrl.create({
            title: title,
            subTitle: subT,
            buttons: [this.translateObj.confirm]
        });
        this.alert.present();
    }
    onSuccess(contacts,context){
        // alert(JSON.stringify(contacts));
        let contactsLength = contacts.length;
        //显示的名称，Android ios不同
        let isAndroid = true;
        if (this.device.platform != 'Android') {
            console.log('is IOS');
            isAndroid = false;
        }
        for (let i = 0; i < contactsLength; i++) {
            console.log('obj for ' + JSON.stringify(contacts[i]));
            if (contacts[i]._objectInstance.phoneNumbers == null) {
                // console.log('非正常联系人信息 电话为空！==' + JSON.stringify(contacts[i]));
                continue;
            }
            let obj = {
                displayName: '',
                phoneNumber: '',
                pinyinName: '',
                flag:1,
                lastName:''
            };

            if (isAndroid) {
                if (contacts[i]._objectInstance.displayName != null) {
                    obj.displayName = contacts[i]._objectInstance.displayName;
                } else if (contacts[i]._objectInstance.name != null && contacts[i]._objectInstance.name.formatted != null) {
                    obj.displayName = contacts[i]._objectInstance.name.formatted;
                }
            } else {
                //ios 取一个不为空的name
                if (contacts[i]._objectInstance.name.formatted != null) {
                  obj.displayName = contacts[i]._objectInstance.name.formatted;
                } else if (contacts[i]._objectInstance.name.familyName != null) {
                  obj.displayName = contacts[i]._objectInstance.name.familyName;
                } else {
                  obj.displayName = contacts[i]._objectInstance.name.givenName;
                }
                if (contacts[i]._objectInstance.name != null && contacts[i]._objectInstance.name.formatted != null) {
                    obj.displayName = contacts[i]._objectInstance.name.formatted;
                }
            }
            // alert(JSON.stringify(obj))
            //去掉名称非汉字，英文的
            let reg = /^[A-Za-z]+$/;

            //名字为空或非字母，加到最后一组
            let phoneNumber = contacts[i]._objectInstance.phoneNumbers[0].value;
            obj.phoneNumber = phoneNumber.replace(/\s+/g,"");

            obj.pinyinName = pinyin.getFullChars(obj.displayName);
            if ( obj.displayName == '' || !reg.test(pinyin.getCamelChars(obj.displayName).substring(0, 1))) {
                // console.log('非正常联系人信息 名字不对==' + JSON.stringify(obj));
                let len = this.formatContacts.length;
                for (let j = 0; j < len; j++) {
                    // console.log("ffff");
                    if ((this.formatContacts[j] as any).key == 'Z') {
                        (this.formatContacts[j] as any).value.push(obj);
                        break;
                    }
                }
            } else {
                //不排序，供搜索使用的数组
                this.allSearchContacts.push(obj);
                let camelChar = pinyin.getCamelChars(obj.displayName).substring(0, 1);
                camelChar= camelChar.toLocaleUpperCase();
                if (reg.test(camelChar)) {
                    let j = 0;
                    let len = this.formatContacts.length;
                    for (j; j < len; j++) {
                        // this.allSearchContacts.push(obj);
                        // console.log("ffff");
                        if ((this.formatContacts[j] as any).key == camelChar) {
                            (this.formatContacts[j] as any).value.push(obj);
                            break;
                        }
                    }
                    if (j == len) {
                        // console.log('新增key');
                        let arr = new Array();
                        arr.push(obj);
                        this.formatContacts[len] = {
                            key: camelChar,
                            value: arr
                        };
                    }
                }
            }
            obj = null;
        }

        //
        // for(let o=0;o<this.indexes.length;o++){
        //     let flag= 0;
        //     for(let p =0 ;p<this.formatContacts.length;p++){
        //         if(this.indexes[o]==this.formatContacts[p].key){
        //             // {"key":"B","value":[{"displayName":"北京泛融云链科技有限公司","phoneNumber":"01086466413","pinyinName":"BeiJingFanRongYunLianKeJiYouXianGongSi","flag":1,"lastName":""}]}
        //             flag++;
        //         }
        //     }
        //     if(this.indexes[o]!="#")
        //     if(flag==0){
        //         let obj = {"key":this.indexes[o],"value":[]};
        //         this.formatContacts.push(obj);
        //     }
        //     this.formatContacts = this.sortContacts(this.formatContacts);
        //     if(this.indexes[o]=="#"){
        //         let obj = {"key":this.indexes[o],"value":[]};
        //         this.formatContacts.push(obj);
        //     }
        // }
        this.formatContacts = this.sortContacts(this.formatContacts);
        console.log(JSON.stringify(this.formatContacts))
        console.log('this.allSearchContacts==' + this.allSearchContacts.length);
        this.comPservice(this.formatContacts,this.allSearchContacts);
    }
    comPservice(formatContacts,allSearchContacts){
        this.oobj.contacts = null;
        var arr =[];
        for(let i = 0 ; i<this.formatContacts.length;i++){

            for(let j = 0 ; j <　this.formatContacts[i].value.length ; j ++){
                var obj ={ phoneno : '' }
                obj.phoneno= this.formatContacts[i].value[j].phoneNumber;
                arr.push(obj)

                // this.oobj.contacts.push(this.checkphonenumber);
            }
        }
        this.oobj.contacts = arr;
        console.log(arr);
        this.friendservice.checkPhoneNumeber(this.oobj).then(retData=> {
                this.loader.dismiss();
                if(retData != null){
                    if(retData.ret_code == 1){
                        if(retData.data.length >　0){
                            for(let i = 0 ; i<this.formatContacts.length;i++){
                                    for(let j = 0 ; j <　this.formatContacts[i].value.length ; j ++){
                                        for(let k = 0 ; k < retData.data.length ; k++){
                                            this.formatContacts[i].value[j].lastName = this.formatContacts[i].value[j].displayName.charAt(this.formatContacts[i].value[j].displayName.lenth-1);
                                            if(this.formatContacts[i].value[j].phoneNumber==retData.data[k].phoneno){
                                                this.formatContacts[i].value[j].flag = 2;
                                                console.log(this.formatContacts);
                                                console.log(this.formatContacts[i].value[j].lastName)
                                            }
                                        }
                                    }
                                }

                        }
                    }
                }else {
                }
            },
            error => {
                this.loader.dismiss();
                console.log("get frieds err");
            });
    }
    sortContacts(formatContacts) {
        //首字母排序
        formatContacts.sort(function (a, b) {
            if (a.key < b.key) {
                return -1;
            } else if (a.key > b.key) {
                return 1;
            } else {
                return 0;
            }
        });

        //每组内部排序
        for (let i = 0; i < formatContacts.length; i++) {
            formatContacts[i].value.sort(function (a, b) {
                if(a.key < b.key) {
                    return -1;
                }else if (a.key > b.key) {
                    return 1;
                }else {
                    return 0;
                }
            });
        }
        return formatContacts;

    }

    ionViewDidEnter(){
        console.log("didEnter");
        // this.getOffsetTops();
          this.all();

    }

    invitation(item){
        console.log(item);
        this.navCtrl.push('InvitationPage',item);
        event.stopPropagation();
    }
    ionViewDidLoad() {
       // let qq= document.getElementsByClassName('show-tabbar')[0].setAttribute('style','bottom: 0;display: none;');
       // console.log(qq);
       //  this.keyboard.onKeyboardShow().subscribe(() => this.event.publish('hideTabs'));
       //  this.keyboard.onKeyboardHide().subscribe(() => this.event.publish('showTabs'));
       console.log('ionViewDidLoad FriendsPage');
    }

    toDetail(item){
        this.navCtrl.push("FrienddetailPage", { item: item});
    }
    ionViewWillLeave(){
        this.searchingItems=[];
        this.formatContacts=[]
        this.allSearchContacts=[];
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
