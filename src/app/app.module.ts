import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as MD from '@angular/material';
import { MaterialModule } from './material.module';
import { Header } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    Header
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
