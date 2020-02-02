import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RightComponent } from './right/right.component';
import { FooterComponent } from './core/footer/footer.component';
import { LeftComponent } from './left/left.component';

@NgModule({
  declarations: [
    AppComponent,
    RightComponent,
    FooterComponent,
    LeftComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
