import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingInputComponent } from './rating-input.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RatingInputComponent],
  exports: [RatingInputComponent]
})
export class RatingInputModule {}
