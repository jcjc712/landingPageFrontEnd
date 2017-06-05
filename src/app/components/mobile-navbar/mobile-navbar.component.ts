import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.css']
})
export class MobileNavbarComponent implements OnInit {

  private showButton: boolean = true;
  private colorBackGround: string;
  private typePage: string;
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
  showMenu() {
    this.showButton = !this.showButton;
  }
}
