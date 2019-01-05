import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { platformBrowser } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-menu-campus',
  templateUrl: 'menu-campus.html',
})
export class MenuCampusPage {

  pet: string = "puppies";
  isAndroid: boolean =false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuCampusPage');
  }
  
  
}
