import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RxStompService } from './rx-stomp.service';
import { rxStompServiceFactory } from './rx-stomp-service-factory';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [AppComponent, MessagesComponent],
  imports: [BrowserModule],
  providers: [
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
