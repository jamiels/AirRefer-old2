import { Routes } from '@angular/router';
import { MarketComponent } from './market.component';

export const MarketRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'market',
      component: MarketComponent,
      data: {
        title: 'tables'
      }
    }]
  }
];