import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { AlertController } from 'ionic-angular';
import swal from 'sweetalert2'
import { MecanicaAprincipalPage } from '../mecanica-aprincipal/mecanica-aprincipal';
import { MecanicaBprincipalPage } from '../mecanica-bprincipal/mecanica-bprincipal';
import { EletricidadeprincipalPage } from '../eletricidadeprincipal/eletricidadeprincipal';
import { OndasprincipalPage } from '../ondasprincipal/ondasprincipal';


@IonicPage()
@Component({
  selector: 'page-fisica',
  templateUrl: 'fisica.html',  
  providers: [ScreenOrientation,]
            
})

export class FisicaPage {
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl:AlertController) {
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad FisicaPage');
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Caro Aluno',
      subTitle: 'Esta monitoria não esta disponivel no campus de POA !',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert1() {
   swal({
     backdrop:false,
      imageUrl: '../../assets/imgs/campus.png',
      imageWidth: 300,
      imageHeight: 100,
      imageAlt: 'Custom image',
      animation: false  ,
      //title: 'Select Ukraine',
      input: 'select',
      inputOptions: {
        'SLEO': 'São Leopoldo',
        'POA': 'Porto Alegre',        
      },
      inputPlaceholder: 'Selecione o Campus desejado',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === 'SLEO') {
            resolve()
            this.navCtrl.push(MecanicaAprincipalPage);
          } else if (value === 'POA') {
                  resolve()
                  this.showAlert();
                } else {
                  resolve('You need to select Ukraine :)')
          }
        })
      }
    })
  }
  showAlert2() {    
    swal({
       backdrop:false,
       imageUrl: '../../assets/imgs/campus.png',
       imageWidth: 300,
       imageHeight: 100,
       imageAlt: 'Custom image',
       animation: false  ,
       //title: 'Select Ukraine',
       input: 'select',
       inputOptions: {
         'SLEO': 'São Leopoldo',
         'POA': 'Porto Alegre',        
       },
       inputPlaceholder: 'Selecione o Campus desejado',
       showCancelButton: true,
       inputValidator: (value) => {
         return new Promise((resolve) => {
           if (value === 'SLEO') {
             resolve()
             this.navCtrl.push(MecanicaBprincipalPage);
           } else if (value === 'POA') {
                  resolve()
                  this.showAlert();
                } else {
                  resolve('You need to select Ukraine :)')
           }
         })
       }
     })
   }

   showAlert3() {    
    swal({
       backdrop:false,
       imageUrl: '../../assets/imgs/campus.png',
       imageWidth: 300,
       imageHeight: 100,
       imageAlt: 'Custom image',
       animation: false  ,
       //title: 'Select Ukraine',
       input: 'select',
       inputOptions: {
         'SLEO': 'São Leopoldo',
         'POA': 'Porto Alegre',        
       },
       inputPlaceholder: 'Selecione o Campus desejado',
       showCancelButton: true,
       inputValidator: (value) => {
         return new Promise((resolve) => {
           if (value === 'SLEO') {
             resolve()
             this.navCtrl.push(EletricidadeprincipalPage);
           } else if (value === 'POA') {
                  resolve()
                  this.showAlert();
                } else {
                  resolve('Voce precisa selecionar uma opção :)')
           }
         })
       }
     })
   }

   showAlert4() {    
    swal({
       backdrop:false,
       imageUrl: '../../assets/imgs/campus.png',
       imageWidth: 300,
       imageHeight: 100,
       imageAlt: 'Custom image',
       animation: false  ,
       //title: 'Select Ukraine',
       input: 'select',
       inputOptions: {
         'SLEO': 'São Leopoldo',
         'POA': 'Porto Alegre',        
       },
       inputPlaceholder: 'Selecione o Campus desejado',
       showCancelButton: true,
       inputValidator: (value) => {
         return new Promise((resolve) => {
           if (value === 'SLEO') {
             resolve()
             this.navCtrl.push(OndasprincipalPage);
           } else if (value === 'POA') {
                  resolve()
                  this.showAlert();
                } else {
                  resolve('Voce precisa selecionar uma opção :)')
           }
         })
       }
     })
   }

 }
