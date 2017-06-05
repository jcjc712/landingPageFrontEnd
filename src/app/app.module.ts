import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/*Services*/
import { SettingsService } from '../app/services/settings.service';
import { ContactService } from '../app/services/contact.service';

import { AppComponent } from './app.component';
import { VideoComponent } from './components/video/video.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SettingsComponent } from './components/settings/settings.component';
import { WebNavbarComponent } from './components/web-navbar/web-navbar.component';
import { MobileNavbarComponent } from './components/mobile-navbar/mobile-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    AboutComponent,
    ContactComponent,
    SettingsComponent,
    WebNavbarComponent,
    MobileNavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SettingsService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
