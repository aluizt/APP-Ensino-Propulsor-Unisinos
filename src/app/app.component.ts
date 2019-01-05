import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPage } from '../pages/intro/intro';

@Component({
  templateUrl: 'app.html'  
})
export class MyApp {
  //rootPage:any = TabsPage;
   rootPage:any = IntroPage;   // pagina inicial do app

 

  constructor(platform: Platform,    
              statusBar: StatusBar, 
              splashScreen: SplashScreen) {
                  platform.ready().then(() => {
                        statusBar.styleDefault();
                        splashScreen.hide();
                  });
  }

  ionViewDidLoad() {
 
    console.log('Carregado ionViewDidLoad app Component');
    
  }
}


