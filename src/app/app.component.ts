import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  /**
  * Slider data
  */
  slide=[{'sType':'img','imgSrc':'src/assets/img/carousel/1.jpg'},
    {'sType':'img','imgSrc':'src/assets/img/carousel/2.jpg'},
    {'sType':'img','imgSrc':'src/assets/img/carousel/3.jpg'},
    {'sType':'img','imgSrc':'src/assets/img/carousel/4.jpg'},
    {'sType':'img','imgSrc':'src/assets/img/carousel/5.jpg'}
  ];
}
