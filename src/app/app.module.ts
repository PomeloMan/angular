import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { MainModule } from './main/main.module';

import { AppComponent } from './app.component';

import { StorageService } from './storage/storage.service';

// {@link https://www.angular.cn/guide/ngmodule}
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    MainModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
