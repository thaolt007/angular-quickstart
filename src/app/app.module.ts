import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import {HeroService} from './hero.service';
import { TestComponentComponent } from './test-component/test-component.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {MessageService} from './message.service';
import { MessageComponent } from './message/message.component';
import {AppRoutingModule} from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpClientInMemoryService} from './http-client-in-memory.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    TestComponentComponent,
    HeroDetailComponent,
    MessageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   HttpClientInMemoryService, { dataEncapsulation: false }
    // )
  ],
  providers: [HeroService, MessageService, HttpClientInMemoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
