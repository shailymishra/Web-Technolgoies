
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ToasterService {

    private subject = new Subject<any>();
    public alerts: any = [];

    constructor() { }

    sendToaster(type: String, msg: string, timeout: number) {
        this.alerts.push({ type: type, msg: msg, timeout: timeout });
        this.subject.next(this.alerts);
    }

    clearToaster() {
        this.subject.next();
    }

    getToaster(): Observable<any> {
        return this.subject.asObservable();
    }
}