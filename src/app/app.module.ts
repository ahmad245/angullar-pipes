import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConvertMKPipe } from './pipes/convert-m-k.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConvertMKPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
