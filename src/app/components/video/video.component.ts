import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})

export class VideoComponent implements OnInit {
  constructor() {
  }

  ngOnInit():void {
  }
}
