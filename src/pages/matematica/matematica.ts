import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Img } from 'ionic-angular';

import { AlgebraprincipalPage} from '../algebraprincipal/algebraprincipal';
import { AlertController } from 'ionic-angular';
import swal from 'sweetalert2'

import { CalculoIprincipalPage } from '../calculo-iprincipal/calculo-iprincipal';
import { CalculoIiprincipalPage } from '../calculo-iiprincipal/calculo-iiprincipal';
import { CalculoIiiprincipalPage } from '../calculo-iiiprincipal/calculo-iiiprincipal';
import { CalculoVariasVariaveisprincipalPage } from '../calculo-varias-variaveisprincipal/calculo-varias-variaveisprincipal';
import { EquacoesDiferenciaisprincipalPage } from '../equacoes-diferenciaisprincipal/equacoes-diferenciaisprincipal';
import { EquacoesDiferenciaisSeriesprincipalPage } from '../equacoes-diferenciais-seriesprincipal/equacoes-diferenciais-seriesprincipal';
import { MetodosNumericosprincipalPage } from '../metodos-numericosprincipal/metodos-numericosprincipal';
import { VariaveisComplexasprincipalPage } from '../variaveis-complexasprincipal/variaveis-complexasprincipal';
import { FundamentosMatematicosprincipalPage } from '../fundamentos-matematicosprincipal/fundamentos-matematicosprincipal';
import { MatematicaArquiteturaprincipalPage } from '../matematica-arquiteturaprincipal/matematica-arquiteturaprincipal';
import { PoaAlgebraVetorialPrincipalPage } from '../poa-algebra-vetorial-principal/poa-algebra-vetorial-principal';
import { PoaCalculoIPage } from '../poa-calculo-i/poa-calculo-i';
import { PoaCalculoIPrincipalPage } from '../poa-calculo-i-principal/poa-calculo-i-principal';
import { PoaCalculoIiPrincipalPage } from '../poa-calculo-ii-principal/poa-calculo-ii-principal';

@IonicPage()
@Component({
  selector: 'page-matematica',
  templateUrl: 'matematica.html',
})
export class MatematicaPage {

  private teste='hehehehe';
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatematicaPage');
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
            this.navCtrl.push(AlgebraprincipalPage);
          } else if (value === 'POA') {
                  resolve()
                  this.navCtrl.push(PoaAlgebraVetorialPrincipalPage);
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
             this.navCtrl.push(CalculoIprincipalPage);
           } else if (value === 'POA') {
                   resolve()
                   this.navCtrl.push(PoaCalculoIPrincipalPage);
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
             this.navCtrl.push(CalculoIiprincipalPage);
           } else if (value === 'POA') {
                   resolve()
                   this.navCtrl.push(PoaCalculoIiPrincipalPage);;
                 } else {
                   resolve('You need to select Ukraine :)')
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
             this.navCtrl.push(CalculoIiiprincipalPage);
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
   showAlert5() {
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
             this.navCtrl.push(CalculoVariasVariaveisprincipalPage);
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
   showAlert6() {
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
             this.navCtrl.push(EquacoesDiferenciaisprincipalPage);
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
   showAlert7() {
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
             this.navCtrl.push(EquacoesDiferenciaisSeriesprincipalPage);
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
   showAlert8() {
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
             this.navCtrl.push(MetodosNumericosprincipalPage);
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
   showAlert9(){
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
             this.navCtrl.push(VariaveisComplexasprincipalPage);
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
   showAlert10() {
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
             this.navCtrl.push(FundamentosMatematicosprincipalPage);
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
   showAlert11() {
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
             this.navCtrl.push(MatematicaArquiteturaprincipalPage);
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
}
