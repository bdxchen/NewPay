import { Component } from '@angular/core';
import {ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import { ResetZJpsdPage } from '../reset-z-jpsd/reset-z-jpsd'
/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// let templateUrl='';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public navCtrl: NavController, public params: NavParams,public viewCtrl: ViewController,
              public modal:ModalController) {
      console.log(params.get('userId'))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

    // arr :string[];
    arr2:Array<any> = [];
    TabNum(event:Event){
    console.log(event)
        let target = event.target || event.srcElement ;
        if(target){
           let dataLabel= (<HTMLElement>event.target).getAttribute("data-label");
            if(dataLabel!="null"){
                let flexPwd = document.getElementsByClassName("flexable password");
                if(dataLabel!='del'){
                    if(this.arr2.length<6){
                        this.arr2.push(dataLabel)
                        if(this.arr2.length==6){
                            let pwd =this.arr2.join("").toString()
                            // console.log(pwd);
                            // console.log("点击 了关闭")
                            let data = { 'pwd': pwd,flag:'finish' };
                            this.viewCtrl.dismiss(data);
                        }
                    }
                    // console.log(this.arr2);

                    for(let i=0;i<this.arr2.length;i++){
                        // console.log(flexPwd);
                        let chi =<HTMLCollection>flexPwd[0].children;
                        // console.log(chi[i].getAttribute("style"))

                        chi[i].setAttribute('style','opacity: 1;');

                    }
                }else{
                    if(this.arr2.length!=0){
                        // console.log("del++++++++++++++");
                        debugger
                        let num;
                        if(this.arr2.length==0){
                            num =this.arr2.length;
                        }else{
                            num =this.arr2.length-1;
                        }
                        // console.log(flexPwd);
                        let chi =<HTMLCollection>flexPwd[0].children;
                        // console.log(chi[this.arr2.length-1].getAttribute("style"))
                        chi[num].setAttribute('style','opacity: 0;');
                        this.arr2.pop();
                    }
                }

            }



        }
        // console.log(this.arr2)
    }
    dismiss() {


        this.viewCtrl.dismiss();
    }

    closeModal(){
        // let data = { 'pwd': pwd };
        this.viewCtrl.dismiss();
    }
    fogetZijinPsd(){
        console.log("新modal");
        let data = { 'pwd': '',flag:'forgot' };
        this.viewCtrl.dismiss(data);
        // this.navCtrl.push('ResetZJpsdPage');
    }
}
