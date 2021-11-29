import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedService {

    constructor() {

    }

    public sliderMenuSubject: BehaviorSubject<any> = new BehaviorSubject(true);

    sendSliderMenuFlag(dirtyFlag: boolean) {
        this.sliderMenuSubject.next(dirtyFlag);
    }

    getSliderMenuFlag(): Observable<any> {
        return this.sliderMenuSubject.asObservable();
    }

}

