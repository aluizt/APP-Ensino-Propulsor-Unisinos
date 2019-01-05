import { Component, ViewChild} from '@angular/core';
import { NavController, Content, NavParams, LoadingController } from 'ionic-angular';

import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import $ from 'jquery';


@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',  
})

export class ChatPage {

  @ViewChild(Content) private content: Content;
  


  private serverUrl = 'http://localhost:8080/socket'
  //private serverUrl = 'https://tavares007.herokuapp.com/socket'


  
  private entrada = false;

  private salaChat:string;
  private nomeUsuario:string;
  private email:string;
  private salaNome:string;

    
  private stompClient;
  public usuarioNome1="alexandre";
 
  private mensagem="";  
  private obj ={};
  private offStatus:boolean = false;
  

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController ) {

    this.salaChat = this.navParams.get("param1");
    this.nomeUsuario = this.navParams.get("param2");
    this.email = this.navParams.get("param3");
    this.salaNome = this.navParams.get("param4");
    this.entrada=false;
   
    this.initializeWebSocketConnection();
  }

  
  
  ionViewDidEnter(){
    
    this.content.scrollToBottom(300);//300ms animation speed
  }

  initializeWebSocketConnection(){
    
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws); // abre a conexao

    let that = this;

    this.stompClient.connect({}, function(frame) {      
      
      that.presentLoading();

      let sala = "";
      if(that.salaChat=="1"){          
        sala = "/chat/fisica";
      }
      if(that.salaChat=="2"){          
        sala = "/chat/portugues";
      }
      if(that.salaChat=="3"){          
        sala = "/chat/quimica";
      }
      if(that.salaChat=="4"){          
        sala = "/chat/matematica";        
      }
      if(that.salaChat=="5"){          
        sala = "/chat/estatistica";
      }
      
      console.log("****** entrada****** = "+that.entrada);

      that.stompClient.subscribe(sala, (message) => {   


        if(message.body) {
          
          console.log("Chegou msg");
          console.log("Mensagem no corpo message = "+message.body);
          this.obj = JSON.parse(message.body);
  
          let usuarioNome=that.nomeUsuario;
          let usuario=this.obj.usuario;
          console.log("entrada com corpo message= "+that.entrada);
          console.log("id da mensagem : "+this.obj.id);

          if (this.obj.id != null && that.entrada==false && this.obj.subUsuario ==usuarioNome){
         
            console.log("id=null e entrada = false")
            console.log(this.obj.subUsuario);
            console.log(usuarioNome);

            if(usuario == usuarioNome){

              console.log("usuario = usuario da message")
              console.log(usuario);
              console.log(usuarioNome);

              if(this.obj.tipo == 1 ){
                console.log("obj.tipo = 1");

                $(".chat").append("<p></P>"+
                "<div class='chat-status'  text-center >"+
                    "<div class='right-bubble'>"+
                      "<span class='chat-date'>"+"Eu em "+"</span>"+ 
                      "<span class='chat-date'>"+this.obj.data+"</span>"+ 
                      "<span class='chat-content-center'>"+this.obj.msg+"</span>"+
                    "</div>"+
                  "</div>"                              
                );
              }else if(this.obj.tipo == 2){
                        console.log("obj.tipo = 1");
                        $(".chat").append("<p></P>"+
                        "<div class='chat-message'  text-right >"+
                            "<div class='right-bubble'>"+
                              "<span class='chat-date'>"+"Eu em "+"</span>"+ 
                              "<span class='chat-date'>"+this.obj.data+"</span>"+ 
                              "<p text-wrap>"+this.obj.msg+"</p>"+
                            "</div>"+
                          "</div>"                              
                        );
              }

            } else if(this.obj.tipo == 1){
                      $(".chat").append("<p></P>"+
                      "<div class='chat-status'  text-center >"+
                          "<div class='right-bubble'>"+
                            "<span class='chat-date'>"+"Eu em "+"</span>"+ 
                            "<span class='chat-date'>"+this.obj.data+"</span>"+ 
                            "<span class='chat-content-center'>"+this.obj.msg+"</span>"+
                          "</div>"+
                        "</div>"                              
                      );
                    } else {
                            $(".chat").append("<p></P>"+
                            "<div class='chat-message'  text-left >"+
                              "<div class='left-bubble'>"+
                                "<span class='chat-date'>"+this.obj.usuario+" em "+"</span>"+ 
                                "<span class='chat-date'>"+this.obj.data+"</span>"+ 
                                "<p text-wrap>"+this.obj.msg+"</p>"+
                              "</div>"+
                            "</div>"                              
                            );
                    }
                    setTimeout(() => {
                       if(that.offStatus === false) {
                         that.content.scrollToBottom(300);
                       }
                    }, 1000);     
                     
          }else if(this.obj.id == null) {
                  if(usuario == usuarioNome){

                    if(this.obj.tipo == 1 ){
                      $(".chat").append("<p></P>"+
                      "<div class='chat-status'  text-center >"+
                          "<div class='right-bubble'>"+
                            "<span class='chat-date'>"+"Eu em "+"</span>"+ 
                            "<span class='chat-date'>"+this.obj.data+"</span>"+ 
                            "<span class='chat-content-center'>"+this.obj.msg+"</span>"+
                          "</div>"+
                        "</div>"                              
                      );
                    }else  if(this.obj.tipo == 2)  {
                              $(".chat").append("<p></P>"+
                              "<div class='chat-message'  text-right >"+
                                  "<div class='right-bubble'>"+
                                    "<span class='chat-date'>"+"Eu em "+"</span>"+ 
                                    "<span class='chat-date'>"+this.obj.data+"</span>"+ 
                                    "<p text-wrap>"+this.obj.msg+"</p>"+
                                  "</div>"+
                                "</div>"                              
                              );
                            }
                   } else if(this.obj.tipo == 1 ) {
                                  $(".chat").append("<p></P>"+
                                  "<div class='chat-status'  text-center >"+
                                    "<div class='left-bubble'>"+
                                      "<span class='chat-date'>"+this.obj.usuario+" em "+"</span>"+ 
                                      "<span class='chat-date'>"+this.obj.data+"</span>"+ 
                                      "<span class='chat-content-center'>"+this.obj.msg+"</span>"+
                                    "</div>"+
                                  "</div>"                              
                                  );                             
                              
                           } else if(this.obj.tipo == 2)  {
                                    $(".chat").append("<p></P>"+
                                    "<div class='chat-message'  text-left >"+
                                        "<div class='left-bubble'>"+
                                          "<span class='chat-date'>"+this.obj.usuario +" em "+"</span>"+ 
                                          "<span class='chat-date'>"+this.obj.data+"</span>"+ 
                                          "<p text-wrap>"+this.obj.msg+"</p>"+
                                        "</div>"+
                                      "</div>"                              
                                    );
                                   }
                   
          } 
          setTimeout(() => {
            if(that.offStatus === false) {
              that.content.scrollToBottom(300);
            }
         }, 1000);

         }        
      });


      if(that.entrada==false){
        console.log("mensagem inicial");
        that.sendMessage('inicio')
        
      }
    });   
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  ionViewWillUnload(){
    console.log("saiu da pagina ionViewWillUnLoad")
    this.sendMessageSaida();
    this.stompClient.disconnect()
  }

  sendMessage(parametro){

    console.log("Entrou no sendMessage");

    if (parametro=='enviar'){
        this.entrada=true;
        let mensagemEnviada={ msg:this.mensagem,sala:this.salaChat,usuario:this.nomeUsuario,email:this.email,tipo:2,subTipo:2}
        this.mensagem="";
        console.log(mensagemEnviada);
        this.stompClient.send("/app/send/message" , {}, JSON.stringify(mensagemEnviada));

    } else {        
                this.mensagem="Entrou na sala"
                let mensagemEnviada={ msg:this.mensagem,sala:this.salaChat,usuario:this.nomeUsuario,email:this.email,tipo:1,subTipo:1}
                this.mensagem="";
                console.log("mensagem enviada    : "+mensagemEnviada);
                this.stompClient.send("/app/send/message" , {}, JSON.stringify(mensagemEnviada));
              
    }
  }
  sendMessageSaida(){
      
      this.mensagem="Saiu da sala"
      let mensagemEnviada={ msg:this.mensagem,sala:this.salaChat,usuario:this.nomeUsuario,email:this.email,tipo:1,subTipo:3}
      this.mensagem="";
      console.log("mensagem enviada ao sair da sala   : "+mensagemEnviada);
      this.stompClient.send("/app/send/message" , {}, JSON.stringify(mensagemEnviada));
      this.entrada=true;
    
  }

}