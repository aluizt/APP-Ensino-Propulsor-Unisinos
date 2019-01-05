import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatMenuPage } from './chat-menu';

@NgModule({
  declarations: [
    ChatMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatMenuPage),
  ],
})
export class ChatMenuPageModule {}