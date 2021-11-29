import { Component, OnInit, ChangeDetectorRef, AfterContentChecked, OnDestroy } from '@angular/core';
import { SharedService } from './shared/shared.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentChecked, OnDestroy {

  subscription$: Subscription;
  isSliderMenu = true;

  constructor(private sharedService: SharedService, private cdr: ChangeDetectorRef) { }
  ngOnInit() {
    this.subscription$ = this.sharedService.getSliderMenuFlag().subscribe(res => {
      this.isSliderMenu = res;
    });
  }

  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }

  ngOnDestroy() {
    this.sharedService.sendSliderMenuFlag(true);
    this.subscription$.unsubscribe();
  }
}
