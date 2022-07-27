import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './component/map/map.component';
import { MapHeaderComponent } from './component/map-header/map-header.component';
import { HeaderButtonComponent } from './component/header-button/header-button.component';
import { PopupComponent } from './component/popup/popup.component';
import { DetailCardComponent } from './component/detail-card/detail-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapHeaderComponent,
    HeaderButtonComponent,
    PopupComponent,
    DetailCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
