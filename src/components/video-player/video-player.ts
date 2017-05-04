import { Component } from '@angular/core';

/**
 * Generated class for the VideoPlayer component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'video-player',
  templateUrl: 'video-player.html'
})
export class VideoPlayer {

  text: string;

  constructor() {
    console.log('Hello VideoPlayer Component');
    this.text = 'Hello World';
  }

}
