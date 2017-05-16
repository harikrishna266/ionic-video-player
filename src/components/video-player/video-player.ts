import { Component,ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'video-player',
  templateUrl: 'video-player.html'
})
export class VideoPlayer {
	@ViewChild('video') video;
	@ViewChild('playProgressBar') playProgressBar;
	@ViewChild('playControl') playControl;
	@ViewChild('bufferBar') bufferBar;

  text: string;
  public play:any;
  public playProgressInterval:any;
  public flag:boolean;
  public progressObserver: any;
 

  constructor() {
    console.log('Hello VideoPlayer Component');
    this.text = 'Hello World';
	}

	ngAfterViewInit(){
		console.log('video',this.video);
		this.playPause();
  	}

	playPause() { 
  		if (!this.video.nativeElement.paused) {
        	this.video.nativeElement.pause();
        	this.flag=true;
        	console.log(this.video.nativeElement.duration,'duration');
        	console.log(this.video.nativeElement.currentTime,'currentTime');
        	console.log(this.video.nativeElement.duration, 'duration');
   
  		}
   		else{
     		this.video.nativeElement.play();
   //   		setInterval(() => {     		
   //   			this.progressStart();
			// }, 500)
			this.progressObserver = Observable
		        .interval(1000)
		        .map(() => {
		        	console.log('cjnhlkcnl');
		            return this.progressStart();
		        }).subscribe(res=>{});
		   		}
  	}
  		
	progressStart(){
		
		if (!isNaN(this.video.nativeElement.duration) && this.video.nativeElement.currentTime != this.video.nativeElement.duration && !this.video.nativeElement.paused) {
			this.bufferBar.nativeElement.style.width = (this.video.nativeElement.currentTime / this.video.nativeElement.duration)*240 + 'px';
		} else if(this.progressObserver) {
			this.progressObserver.unsubscribe();
		}
		
	}

	ionViewDidLeave() {
		 if(this.progressObserver) {
			this.progressObserver.unsubscribe();
		}
	}

}

