import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  userForm: any;

  constructor(public navCtrl: NavController) {

  
  }
  enviaEmail(){
    console.log("email");
  }

}
