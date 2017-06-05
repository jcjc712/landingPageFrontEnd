import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  private typePage: string;
  private colorBackGround: string;
  constructor(private _settingsService: SettingsService) {
    this.colorBackGround = _settingsService.getColorBackGroud();
    this.typePage = _settingsService.getTypePage();
  }

  ngOnInit() {
    /*Cambio de color*/
    this._settingsService._colorBackGround$
        .subscribe(state => {
          this.colorBackGround = state;
        });
    this._settingsService._typePage$
        .subscribe(state => {
          this.typePage = state;
        });
  }

}
