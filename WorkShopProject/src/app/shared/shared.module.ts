import { NgModule } from '@angular/core';
import { SharedService } from './shared.service';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@NgModule({
  // imports: [CommonModule],
  imports: [CarouselModule.forRoot(), CommonModule],
  declarations: [CarouselComponent],
  exports: [CarouselComponent, CommonModule],
  providers: [SharedService],
})
export class SharedModule { }
