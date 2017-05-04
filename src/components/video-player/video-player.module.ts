import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoPlayer } from './video-player';

@NgModule({
  declarations: [
    VideoPlayer,
  ],
  imports: [
    IonicPageModule.forChild(VideoPlayer),
  ],
  exports: [
    VideoPlayer
  ]
})
export class VideoPlayerModule {}
