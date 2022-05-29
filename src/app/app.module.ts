import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';


import {TableModule} from 'primeng-lts/table';
// primeng


import { CardModule } from 'primeng-lts/card';



@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,


    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,

    // primeng
  
    CardModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
