import { Component, ElementRef, Renderer, ViewChild } from '@angular/core';
import {IonicPage, NavController, NavParams, Events, Tabs, Platform} from 'ionic-angular';
import { BackbuttonService } from '../../providers/backbutton-service';
import { TranslateService } from 'ng2-translate';
import { HomePage } from '../home/home';
import {FriendsPage} from "../friends/friends"
@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
    tabRoots: Object[];
    @ViewChild('myTabs') tabRef: Tabs;

  tab1Root = "HomePage";
  tab2Root = "MinePage";
  // tab3Root = "";
    mb: any;
    appSplashHeight:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private elementRef: ElementRef, private renderer: Renderer, private event: Events,public backButtonService:BackbuttonService,
              private platform:Platform, public translate:TranslateService) {

      this.appSplashHeight = document.documentElement.clientHeight;
      platform.ready().then(() => {

          this.backButtonService.registerBackButtonAction(this.tabRef);
      });
  }
    ionViewWillEnter() {
        console.log('ionViewWillEnter LoginPage');
        localStorage.setItem("flagBack","2")
    }
    ionViewDidLoad() {
        let tabs = this.queryElement(this.elementRef.nativeElement, '.tabbar');
        this.event.subscribe('hideTabs', () => {
            this.renderer.setElementStyle(tabs, 'display', 'none');
            let SelectTab = this.tabRef.getSelected()._elementRef.nativeElement;
            let content = this.queryElement(SelectTab, '.scroll-content');
            this.mb = content.style['margin-bottom'];
            this.renderer.setElementStyle(content, 'margin-bottom', '0')
        });
        this.event.subscribe('showTabs', () => {
            this.renderer.setElementStyle(tabs, 'display', '');
            let SelectTab = this.tabRef.getSelected()._elementRef.nativeElement;
            let content = this.queryElement(SelectTab, '.scroll-content');
            this.renderer.setElementStyle(content, 'margin-bottom', this.mb)
        })
    }

    queryElement(elem: HTMLElement, q: string): HTMLElement {
        return <HTMLElement>elem.querySelector(q);
    }
}
