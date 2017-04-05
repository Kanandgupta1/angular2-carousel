import {Component, ElementRef, Renderer, Input, Output, Optional, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ngIamgeSlider',
  template: `
<div class="slider">
  <div class="sliderArrows">
    <a (click)="backWard()"><img src="../../assets/img/carousel/arrows_bullets/white-back.png"/> </a>
    <a (click)="forWard()"><img src="../../assets/img/carousel/arrows_bullets/white-forward.png"/> </a>
  </div>
  <ul class="slide-show">
    <li *ngFor="let li of slides" [ngStyle]="{'display':li?.hidden?'none':''}" [ngClass]="li?.classes">
      <create-slide [tag]="li"></create-slide>
    </li>
  </ul>
  <ol class="navgater">
    <li *ngFor="let bullet of slides" [ngClass]="bullet?.classes">
    </li>
  </ol>
</div>
    `,
  styleUrls: ["slider.component.css"],
  encapsulation: ViewEncapsulation.Native
})
export class ngIamgeSlider {
  /**
   * Play Interval
   */
  @Input('playInterval') interval: any = 15000;
  slides: any;

  @Input("slides") set _slides(s) {
    this.slides = s;
    console.log(this.slides);
    this.number = this.slides.length;
    if (this.slides.length) {
      this.slides[0]["classes"] = ["active"];
      setTimeout(() => {
        this.slides[this.currentElement].classes.push('zoomIn')
        setTimeout(() => {
          this.slides[this.currentElement].classes.push('blur')
        },5000)
      }, 2500)
    }
  }

  @Input('autoPlay') set _autoPlay(b: boolean) {
    this.autoPlay = b
    if (b) {
      this.auto(this.interval);
    }
  }

  currentElement: number = 0;
  autoPlay = false;
  number: number = 0;
  intervalTime: number = 15000;//in ms(mili seconds)
  private delayHideSetTimeOutControl: any;
  slideZoomTime: any;
  transValue: number = 0;
  delayHideTime: number = this.intervalTime;

  constructor() {
    this.auto(this.interval)
  }

  backWard() {
    clearTimeout(this.slideZoomTime)
    if (this.autoPlay)
      clearInterval(this.interval);
    this.currentElement = this.currentElement - 1;
    if (this.currentElement < 0) {
      this.currentElement = this.number - 1;
    }
    this.removeClasses();
    var prev = this.currentElement == this.number - 1 ? 0 : this.currentElement + 1;
    this.slides[prev].classes = ["animateForward"];
    this.show(this.slides[prev]);
    this.show(this.slides[this.currentElement]);

    clearTimeout(this.delayHideSetTimeOutControl);

    this.delayHideSetTimeOutControl = this.delayHide(this.slides[prev], this.delayHideTime);
    this.slides[this.currentElement].classes = ["active", "backward"];
    this.slideZoomTime=setTimeout(() => {
      this.slides[this.currentElement].classes.push('zoomIn')
      setTimeout(() => {
        this.slides[this.currentElement].classes.push('blur')
      },5000)
    }, 2500)
    if (this.autoPlay) this.auto(this.intervalTime);
  }

  removeClasses() {
    for (var i = 0; i < this.number; i++) {
      this.slides[i].classes = {}
    }
  }

  forWard() {
    console.log("forward called")
    clearTimeout(this.slideZoomTime)
    if (this.autoPlay) clearInterval(this.interval);
    this._forWard();
    if (this.autoPlay) this.auto(this.intervalTime);
  }

  private _forWard() {
    this.transValue = 1;
    this.currentElement = 1 + this.currentElement;
    if (this.currentElement >= this.number) {
      this.currentElement = 0;
    }
    this.removeClasses();
    var prev = this.currentElement == 0 ? this.number - 1 : this.currentElement - 1;
    console.log(this.slides[prev]);
    this.slides[prev]["classes"] = ["animateBack"];

    this.show(this.slides[prev]);
    this.show(this.slides[this.currentElement]);

    clearTimeout(this.delayHideSetTimeOutControl);
    this.delayHideSetTimeOutControl = this.delayHide(this.slides[prev], this.delayHideTime);
    this.slides[this.currentElement].classes = ["active", "forward"];
    this.slideZoomTime=setTimeout(() => {
      this.slides[this.currentElement].classes.push('zoomIn')
      setTimeout(() => {
        this.slides[this.currentElement].classes.push('blur')
      },5000)
    }, 2500)
    // this.slideZoomTime = setInterval(() => {
    //   this.slides[this.currentElement].transform = {'transform':'scale(1.' + this.transValue + ')'};
    //   console.log(this.slides[this.currentElement]);
    //   console.log(this.transValue);
    //   this.transValue++;
    //   if (this.transValue == this.delayHideTime / 100)
    //     clearInterval(this.slideZoomTime);
    // }, this.delayHideTime * 5)
  }

  auto(ms) {
    console.log(ms);
    this.autoPlay = true;
    this.intervalTime = ms;
    this.interval = setInterval(this._forWard.bind(this), ms);
  }

  delayHide(el, ms) {
    return setTimeout(() => el.hidden = true, ms);
  }

  show(el) {
    el.hidden = false;
  }
}

@Component({
  selector: "create-slide",
  template: `
        <div *ngIf="tag.sType=='div'" innerHtml="tag.content">

        </div>
        <div *ngIf="tag.sType=='ajaxDiv'">
            <slideAjaxDiv [url]="tag.contentUrl"></slideAjaxDiv>
        </div>
        <img [src]="tag.imgSrc" *ngIf="tag.sType=='img'" />
    `,
  styles: []
})
export class createSlides {
  @Input("tag") tag: any;

  constructor() {

  }
}

@Component({
  selector: "slideAjaxDiv",
  template: `
    Loading
    `
})
export class slideAjaxDiv {
  @Input("url") tag: any;

  constructor() {

  }
}
