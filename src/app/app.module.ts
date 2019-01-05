import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Menu } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FeedPageModule } from '../pages/feed/feed.module';
import { FeedPage } from '../pages/feed/feed';
import { IntroPageModule } from '../pages/intro/intro.module';
import { MoovieProvider } from '../providers/moovie/moovie';
import { AreasProvider } from '../providers/areas/areas';
import { AreasPage } from '../pages/areas/areas';
import { FormularioPage } from '../pages/formulario/formulario';
import { AreasPageModule } from '../pages/areas/areas.module';
import { FormularioPageModule } from '../pages/formulario/formulario.module';
import { FisicaPage } from '../pages/fisica/fisica';
import { FisicaPageModule } from '../pages/fisica/fisica.module';
import { MatematicaPage } from '../pages/matematica/matematica';
import { MatematicaPageModule } from '../pages/matematica/matematica.module';
import { AlgebraPage } from '../pages/algebra/algebra';
import { AlgebraPageModule } from '../pages/algebra/algebra.module';
import { AlgebraprincipalPageModule } from '../pages/algebraprincipal/algebraprincipal.module';
import { AlgebraprincipalPage } from '../pages/algebraprincipal/algebraprincipal';
import { MenuCampusPage } from '../pages/menu-campus/menu-campus';
import { MenuCampusPageModule } from '../pages/menu-campus/menu-campus.module';
import { MecanicaAprincipalPage } from '../pages/mecanica-aprincipal/mecanica-aprincipal';
import { MecanicaAprincipalPageModule } from '../pages/mecanica-aprincipal/mecanica-aprincipal.module';
import { MecanicaAPage } from '../pages/mecanica-a/mecanica-a';
import { MecanicaAPageModule } from '../pages/mecanica-a/mecanica-a.module';
import { MecanicaBprincipalPage } from '../pages/mecanica-bprincipal/mecanica-bprincipal';
import { MecanicaBPage } from '../pages/mecanica-b/mecanica-b';
import { MecanicaBprincipalPageModule } from '../pages/mecanica-bprincipal/mecanica-bprincipal.module';
import { MecanicaBPageModule } from '../pages/mecanica-b/mecanica-b.module';
import { EletricidadeprincipalPage } from '../pages/eletricidadeprincipal/eletricidadeprincipal';
import { EletricidadePageModule } from '../pages/eletricidade/eletricidade.module';
import { EletricidadeprincipalPageModule } from '../pages/eletricidadeprincipal/eletricidadeprincipal.module';
import { OndasPageModule } from '../pages/ondas/ondas.module';
import { OndasprincipalPageModule } from '../pages/ondasprincipal/ondasprincipal.module';
import { EletricidadePage } from '../pages/eletricidade/eletricidade';
import { OndasPage } from '../pages/ondas/ondas';
import { OndasprincipalPage } from '../pages/ondasprincipal/ondasprincipal';
import { PortuguesPageModule } from '../pages/portugues/portugues.module';
import { PortuguesprincipalPageModule } from '../pages/portuguesprincipal/portuguesprincipal.module';
import { PortuguesPage } from '../pages/portugues/portugues';
import { PortuguesprincipalPage } from '../pages/portuguesprincipal/portuguesprincipal';
import { QuimicageralPage } from '../pages/quimicageral/quimicageral';
import { QuimicageralprincipalPage } from '../pages/quimicageralprincipal/quimicageralprincipal';
import { QuimicaPageModule } from '../pages/quimica/quimica.module';
import { QuimicageralprincipalPageModule } from '../pages/quimicageralprincipal/quimicageralprincipal.module';
import { QuimicaPage } from '../pages/quimica/quimica';
import { EstatisticaPageModule } from '../pages/estatistica/estatistica.module';
import { EstatisticaprincipalPageModule } from '../pages/estatisticaprincipal/estatisticaprincipal.module';
import { EstatisticaPage } from '../pages/estatistica/estatistica';
import { EstatisticaprincipalPage } from '../pages/estatisticaprincipal/estatisticaprincipal';
import { Organica1principalPage } from '../pages/organica1principal/organica1principal';
import { Organica2principalPage } from '../pages/organica2principal/organica2principal';
import { FisicoquimicaprincipalPage } from '../pages/fisicoquimicaprincipal/fisicoquimicaprincipal';
import { Organica1principalPageModule } from '../pages/organica1principal/organica1principal.module';
import { Organica2principalPageModule } from '../pages/organica2principal/organica2principal.module';
import { FisicoquimicaprincipalPageModule } from '../pages/fisicoquimicaprincipal/fisicoquimicaprincipal.module';
import { Organica1Page } from '../pages/organica1/organica1';
import { Organica2Page } from '../pages/organica2/organica2';
import { Organica1PageModule } from '../pages/organica1/organica1.module';
import { Organica2PageModule } from '../pages/organica2/organica2.module';
import { FisicoquimicaPage } from '../pages/fisicoquimica/fisicoquimica';
import { FisicoquimicaPageModule } from '../pages/fisicoquimica/fisicoquimica.module';
import { QuimicageralPageModule } from '../pages/quimicageral/quimicageral.module';
import { CalculoIprincipalPageModule } from '../pages/calculo-iprincipal/calculo-iprincipal.module';
import { CalculoIPageModule } from '../pages/calculo-i/calculo-i.module';
import { CalculoIiprincipalPageModule } from '../pages/calculo-iiprincipal/calculo-iiprincipal.module';
import { CalculoIiPageModule } from '../pages/calculo-ii/calculo-ii.module';
import { CalculoIiiPageModule } from '../pages/calculo-iii/calculo-iii.module';
import { CalculoIiiprincipalPageModule } from '../pages/calculo-iiiprincipal/calculo-iiiprincipal.module';
import { CalculoVariasVariaveisprincipalPage } from '../pages/calculo-varias-variaveisprincipal/calculo-varias-variaveisprincipal';
import { CalculoVariasVariaveisPageModule } from '../pages/calculo-varias-variaveis/calculo-varias-variaveis.module';
import { CalculoVariasVariaveisprincipalPageModule } from '../pages/calculo-varias-variaveisprincipal/calculo-varias-variaveisprincipal.module';
import { EquacoesDiferenciaisprincipalPageModule } from '../pages/equacoes-diferenciaisprincipal/equacoes-diferenciaisprincipal.module';
import { EquacoesDiferenciaisPageModule } from '../pages/equacoes-diferenciais/equacoes-diferenciais.module';
import { EquacoesDiferenciaisSeriesPageModule } from '../pages/equacoes-diferenciais-series/equacoes-diferenciais-series.module';
import { EquacoesDiferenciaisSeriesprincipalPageModule } from '../pages/equacoes-diferenciais-seriesprincipal/equacoes-diferenciais-seriesprincipal.module';
import { MetodosNumericosPageModule } from '../pages/metodos-numericos/metodos-numericos.module';
import { MetodosNumericosprincipalPageModule } from '../pages/metodos-numericosprincipal/metodos-numericosprincipal.module';
import { VariaveisComplexasPageModule } from '../pages/variaveis-complexas/variaveis-complexas.module';
import { VariaveisComplexasprincipalPageModule } from '../pages/variaveis-complexasprincipal/variaveis-complexasprincipal.module';
import { FundamentosMatematicosPageModule } from '../pages/fundamentos-matematicos/fundamentos-matematicos.module';
import { FundamentosMatematicosprincipalPageModule } from '../pages/fundamentos-matematicosprincipal/fundamentos-matematicosprincipal.module';
import { MatematicaArquiteturaPageModule } from '../pages/matematica-arquitetura/matematica-arquitetura.module';
import { MatematicaArquiteturaprincipalPageModule } from '../pages/matematica-arquiteturaprincipal/matematica-arquiteturaprincipal.module';
import { PoaAlgebraVetorialPrincipalPageModule } from '../pages/poa-algebra-vetorial-principal/poa-algebra-vetorial-principal.module';
import { PoaAlgebraVetorialPageModule } from '../pages/poa-algebra-vetorial/poa-algebra-vetorial.module';
import { PoaCalculoIPageModule } from '../pages/poa-calculo-i/poa-calculo-i.module';
import { PoaCalculoIPrincipalPageModule } from '../pages/poa-calculo-i-principal/poa-calculo-i-principal.module';
import { PoaCalculoIiPrincipalPageModule } from '../pages/poa-calculo-ii-principal/poa-calculo-ii-principal.module';
import { PoaCalculoIiPageModule } from '../pages/poa-calculo-ii/poa-calculo-ii.module';
import { PoaMatematicaCgPageModule } from '../pages/poa-matematica-cg/poa-matematica-cg.module';
import { PoaMatematicaCgPrincipalPageModule } from '../pages/poa-matematica-cg-principal/poa-matematica-cg-principal.module';
import { StorageService } from '../service/storage.service';
import { ChatPage } from '../pages/chat/chat';
import { ChatMenuPage } from '../pages/chat-menu/chat-menu';
import { ChatMenuPageModule } from '../pages/chat-menu/chat-menu.module';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ChatPage,
    
    
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule,
    IntroPageModule,
    AreasPageModule,
    FormularioPageModule,
    FisicaPageModule,
    MecanicaAprincipalPageModule,
    MecanicaAPageModule,
    MecanicaBprincipalPageModule,
    MecanicaBPageModule,
    MatematicaPageModule,
    AlgebraPageModule,
    AlgebraprincipalPageModule,
    CalculoIprincipalPageModule,
    CalculoIPageModule,    
    CalculoIiprincipalPageModule,
    CalculoIiPageModule,
    CalculoIiiprincipalPageModule,
    CalculoIiiPageModule,
    CalculoVariasVariaveisprincipalPageModule,
    CalculoVariasVariaveisPageModule,
    EquacoesDiferenciaisprincipalPageModule,
    EquacoesDiferenciaisPageModule,
    EquacoesDiferenciaisSeriesPageModule,
    EquacoesDiferenciaisSeriesprincipalPageModule,
    EletricidadePageModule,
    EletricidadeprincipalPageModule,
    MetodosNumericosPageModule,
    MetodosNumericosprincipalPageModule,
    VariaveisComplexasPageModule,
    VariaveisComplexasprincipalPageModule,
    FundamentosMatematicosPageModule,
    FundamentosMatematicosprincipalPageModule,
    MatematicaArquiteturaPageModule,
    MatematicaArquiteturaprincipalPageModule,
    PoaAlgebraVetorialPrincipalPageModule,
    PoaAlgebraVetorialPageModule,
    PoaCalculoIPageModule,
    PoaCalculoIPrincipalPageModule,
    PoaCalculoIiPageModule,
    PoaCalculoIiPrincipalPageModule,
    PoaMatematicaCgPageModule,
    PoaMatematicaCgPrincipalPageModule,
    OndasPageModule,
    OndasprincipalPageModule,
    PortuguesPageModule,
    PortuguesprincipalPageModule,
    QuimicaPageModule,    
    EstatisticaPageModule,
    EstatisticaprincipalPageModule,
    Organica1PageModule,
    Organica1principalPageModule,
    Organica2PageModule,
    Organica2principalPageModule,
    QuimicageralPageModule,
    FisicoquimicaprincipalPageModule,
    FisicoquimicaPageModule,
    QuimicageralprincipalPageModule,  
    HttpModule,
    MenuCampusPageModule,  
    ChatMenuPageModule,  
    HttpClientModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FeedPage,
    AreasPage,
    FormularioPage,
    FisicaPage,
    MecanicaAprincipalPage,
    MecanicaAPage,
    MecanicaBprincipalPage,
    MecanicaBPage,
    MatematicaPage,
    AlgebraPage,
    AlgebraprincipalPage, 
    EletricidadeprincipalPage,   
    EletricidadePage,
    FisicoquimicaprincipalPage,
    FisicoquimicaPage,
    OndasPage,
    OndasprincipalPage,
    PortuguesPage,
    QuimicaPage,
    QuimicageralPage,
    Organica1Page,
    Organica1principalPage,
    Organica2Page,
    Organica2principalPage,
    EstatisticaPage,
    EstatisticaprincipalPage,
    ChatPage,
    ChatMenuPage,
    MenuCampusPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoovieProvider,
    AreasProvider,
    StorageService  
   
  ]
})

export class AppModule {}
