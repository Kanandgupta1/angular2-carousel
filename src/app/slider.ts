import {Component, OnInit, trigger, animate, transition, state, style} from '@angular/core';

@Component({
  selector: 'demo-slider',
  styles: [],
  styleUrls: ['./../assets/css/slider.css'],
  templateUrl: './demo.slider.html',
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})

export class Slider implements OnInit {
  public item: string = 'Hello World';
  public elementType: any;
  private slides = [{
    image: 'src/assets/img/carousel/1.jpg',
    title: 'images 1',
    caption: '1',
    slideNo: 1,
    slideActive: false
  }
    , {
      image: 'src/assets/img/carousel/2.jpg',
      title: 'images 2',
      caption: '2',
      slideNo: 2,
      slideActive: false
    }
    , {
      image: 'src/assets/img/carousel/3.jpg',
      title: 'images 3',
      caption: '3',
      slideNo: 3,
      slideActive: false
    }
    , {
      image: 'src/assets/img/carousel/4.jpg',
      title: 'images 4',
      caption: '4',
      slideNo: 4,
      slideActive: false
    }
  ];

  constructor() {

  }

  ngOnInit() {

  }

  sliderPlay(event, el: any) {
    this.playButton(event, el);
  }

  playButton(event, el: any) {
    console.log(event, el);
    this.elementType = this.getElement(el);
    console.log(this.elementType);
    console.log(typeof this.elementType);
    console.log(this.elementType.length);
    if (typeof this.elementType == 'object' && this.elementType.length) {
      console.log(this.elementType);
    }
  }

  getElement(el) {
    if (typeof(el) == 'string') {
      return document.getElementsByClassName(el);
    }
    if (typeof (el) == 'object' && el instanceof Element) {
      return el;
    }
    return null;
  }
}

// http://lishman.io/angular-2-property-binding
// https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html#!#onchanges
