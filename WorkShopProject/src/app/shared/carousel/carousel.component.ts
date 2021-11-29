import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import * as constant from '../config';
@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html'
})
export class CarouselComponent implements OnInit {
    public myInterval = 5000;
    public noWrapSlides = false;
    public imageUrl = constant.CAROUSEL_MAPPING;
    public slides: Array<any> = [];
    public imageId = [101, 102, 103, 104, 105, 106, 107];
    public selectedId = 104;
    public activeSlideIndex = 3;
    ngOnInit() {
        this.imageId.map(id => {
            this.slides.push({
                image: this.imageUrl[id],
                text: `This is image ${id} `,
                active: id === this.selectedId
            });


        });
        console.log('slide..', this.slides);
    }
}
