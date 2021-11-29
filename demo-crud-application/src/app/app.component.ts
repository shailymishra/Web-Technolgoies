import { Component, OnInit } from '@angular/core';
import { ToasterService } from './shared/toaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public alerts: any = [];
  subscription: any;

  constructor(private toasterService: ToasterService) { }

  ngOnInit(): void {
    this.subscription = this.toasterService.getToaster().subscribe(alert => {
      this.alerts = alert;
    });
  }
}
