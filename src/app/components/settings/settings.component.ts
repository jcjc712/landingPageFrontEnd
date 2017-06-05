import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  private showButton: boolean = true;
  private colorsBackGround: string[];
  private colorBackGround: string;
  private selectedDevice: string;
  constructor(private _settingsService: SettingsService) {
    this.colorsBackGround = this._settingsService.getColorsBackGroud();
    this.colorBackGround = _settingsService.getColorBackGroud();
    this.selectedDevice = _settingsService.getTypePage();
  }

  ngOnInit() {
    this._settingsService._colorBackGround$
        .subscribe(state => {
          this.colorBackGround = state;
        });

    this._settingsService._typePage$
        .subscribe(state => {
          this.selectedDevice = state;
        });
  }

  changeColor(color) {
    this._settingsService.changeBackGround(color);
  }
  openCloseSettings() {
    this.showButton = !this.showButton;
  }
  onChange(newValue) {
    this._settingsService.changeTypePage(newValue);
  }

}
