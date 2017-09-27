import { Component, OnInit } from '@angular/core';
import { Video } from '../modelos/video';

@Component({
  selector: 'video-component',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  video: Video;
  
  constructor() { }

  ngOnInit() {
    this.video=new Video("America","90 anos america",5,"../../assets/america.mp4",{controls:true, autoplay:true});
    let el=document.getElementsByTagName("video-component")[0];
    this.video.render(el);
  }

}
