import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Slider} from './slider';
import {contentSlider,printSlide,slideAjaxDiv} from './component/index';

@NgModule({
  declarations: [
    AppComponent,
    Slider,
    contentSlider,
    printSlide,
    slideAjaxDiv
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
