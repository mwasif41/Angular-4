import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StopwatchComponent } from './components/stopwatch/stopwatch.component';
import { DatetimeComponent } from './components/datetime/datetime.component';

@NgModule({
  declarations: [
    AppComponent,
    StopwatchComponent,
    DatetimeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
