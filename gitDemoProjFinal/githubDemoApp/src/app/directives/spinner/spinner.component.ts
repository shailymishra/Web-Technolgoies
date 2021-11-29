'use strict';

import {Component, Input, OnDestroy} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-spinner',
    templateUrl: 'spinner.component.html'
})
export class SpinnerComponent implements OnDestroy {
    private currentTimeout: any;
    private isDelayedRunning = false;

    @Input()
    public delay = 300;

    @Input()
    public set isRunning(value: boolean) {
        if (!value) {
            this.cancelTimeout();
            this.isDelayedRunning = false;
            return;
        }

        if (this.currentTimeout) {
            return;
        }

        this.currentTimeout = setTimeout(() => {
            this.isDelayedRunning = value;
            this.cancelTimeout();
        }, this.delay);
    }

    private cancelTimeout(): void {
        clearTimeout(this.currentTimeout);
        this.currentTimeout = undefined;
    }

    ngOnDestroy(): any {
        this.cancelTimeout();
    }
}
