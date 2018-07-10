import { Component, OnInit } from '@angular/core';
import { MarketComponent } from '../market/market.component';
import {DatatableComponent} from '@swimlane/ngx-datatable';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class ExecutiveDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
