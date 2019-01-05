import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [MoovieProvider]
  
})
export class FeedPage {

  public nome_usuario:String = "Alexandre";

  public ob_feed = {
    imagem:"assets/imgs/fisica.jpg",
    titulo:"Festa do evento",
    data:"28 de agosto",
    descricao:"Comemoração dos 5 anos dos acontecimentos que atencedem etc",

  };
  public ob2_feed = {
    imagem:"assets/imgs/port.jpg",
    titulo:"Livro Portugues",
    data:"20 de setembro",
    descricao:"Lançamento do livro da professora x",

  };

  public lista_filmes = new Array<any>();// cria um array do tipo any


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private movieProvider: MoovieProvider) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad FeedPage');
    //this.somaDoisNumeros(5,15);
    /*this.movieProvider.getLastMovies().subscribe(
      data =>{
        const response = (data as any); // cast para o tupo any
       
        this.lista_filmes = response.results;
        console.log(this.lista_filmes);
      },error =>{
        console.log(error);
      }
    ) */
    this.lista_filmes[0]=this.ob_feed;
    this.lista_filmes[1]=this.ob2_feed;
    
  }

}
