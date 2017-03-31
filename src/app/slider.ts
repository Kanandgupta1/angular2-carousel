import { Component, OnInit } from '@angular/core';
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Component({
  selector:'demo-slider',
  styles:[],
  styleUrls:['./../assets/css/slider.css'],
  templateUrl:'./demo.slider.html'
})

export class Slider implements OnInit{
  item='Hello World';
  constructor(){

  }

  ngOnInit(){

  }
  sliderPlay(event,contaner:any){
    var el=this.getElement(contaner);
  }
  getElement(el){
    if(typeof(el)=='string'){
      return document.getElementsByClassName(el);
    }
    if(typeof (el)=='object' && el instanceof Element){
      return el;
    }
    return null;
  }
}
