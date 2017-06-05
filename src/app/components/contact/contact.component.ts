import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { ContactService } from '../../services/contact.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private colorBackGround: string;
  private typePage: string;
  loading: boolean = false;
  constructor(private _settingsService: SettingsService, private _contactService: ContactService) {
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
  save(forma: NgForm) {
    this.loading = true;
    this._contactService.postContact(forma.value)
        .subscribe( data => {
          this.loading = false;
          // this.objForm = {};
          forma.reset();
          console.log(data);
        });
  }
}
