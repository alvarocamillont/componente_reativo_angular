import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RatingInputComponent } from './rating-input/rating-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RatingInputModule } from './rating-input/rating-input.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, RatingInputModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
