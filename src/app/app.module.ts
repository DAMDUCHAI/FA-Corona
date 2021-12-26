
import {  AngularFirestoreModule } from '@angular/fire/firestore';

import { AngularFireModule } from '@angular/fire';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

import { WordWideComponent } from './word-wide/word-wide.component';
import { RegionalComponent } from './regional/regional.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkerService } from './marker.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DigitBeautyPipe } from './pipes/digit-beauty.pipe';
import { RegionalDetailComponent } from './regional-detail/regional-detail.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';

import { Top10Component } from './top10/top10.component';
import { CommonModule } from '@angular/common';


import {environment} from '../environments/environment';
import { AddComponent } from './declaration/add/add.component';

import { CheckPhoneComponent } from './declaration/check-phone/check-phone.component';
import { Top10FatalityComponent } from './top10-fatality/top10-fatality.component';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LineChartComponent,
   
    WordWideComponent,
        RegionalComponent,
        HeaderComponent,
        FooterComponent,
        DigitBeautyPipe,
        RegionalDetailComponent,
        HomeComponent,
        NewsComponent,
       
        Top10Component,
                AddComponent,
              
                CheckPhoneComponent,
                               Top10FatalityComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LeafletModule,
    ReactiveFormsModule,
     FormsModule,
     NgxPaginationModule,
     MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,

    CommonModule,
    
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
    
  
  ],
  providers: [ MarkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
