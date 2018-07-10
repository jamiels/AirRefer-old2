import { Routes } from '@angular/router';
//Layouts
import { 
  BlankComponent,
  ExecutiveLayout,
  BlankCasualComponent,
  BlankCorporateComponent,
  BlankSimplywhiteComponent
} from './@pages/layouts';

//Sample Pages
import { ExecutiveDashboardComponent } from './dashboard/dashboard.component';
import { CardsComponentPage} from './cards/cards.component';
import { ViewsPageComponent} from './views/views.component';
import { ChartsComponent } from './charts/charts.component';
import { SocialComponent } from './social/social.component';
import { LoginComponent } from './session/login/login.component';

export const AppRoutes: Routes = [
  //Executive
  {
    path: '',
    component: ExecutiveLayout,
    children: [{
      path: '',
      component: ExecutiveDashboardComponent,
      data: {
        title: 'Dashboard'
      }
    }],
  },
  {
    path: '',
    component: ExecutiveLayout,
    children: [{
      path: 'market',
      component: SocialComponent,
      data: {
        title: 'Market'
      }
    }]
  },
  {
    path: 'executive',
    component: ExecutiveLayout,
    children: [{
      path: 'extra',
      loadChildren: './extra/extra.module#ExtraModule'
    }]
  },{
    path: 'executive',
    component: ExecutiveLayout,
    children: [{
      path: 'layouts',
      loadChildren: './layouts/layouts.module#LayoutPageModule'
    }]
  },{
    path: 'executive',
    component: ExecutiveLayout,
    children: [{
      path: 'builder',
      loadChildren: './builder/builder.module#BuilderModule'
    }]
  },{
    path: 'executive',
    component: BlankComponent,
    children: [{
      path: 'session',
      loadChildren: './session/session.module#SessionModule'
    }]
  },
  {
    path: 'executive',
    component: ExecutiveLayout,
    children: [{
      path: 'forms',
      loadChildren: './forms/forms.module#FormsPageModule'
    }]
  },
  {
    path: 'executive',
    component: ExecutiveLayout,
    children: [{
      path: 'ui',
      loadChildren: './ui/ui.module#UiModule'
    }]
  },{
    path: 'executive',
    component: ExecutiveLayout,
    children: [{
      path: 'email',
      loadChildren: './email/email.module#EmailModule'
    }]
  },
  {
    path: 'executive',
    component: ExecutiveLayout,
    children: [{
      path: 'cards',
      component: CardsComponentPage,
      data: {
        title: 'cards'
      }
    }]
  },
  {
    path: 'executive',
    component: ExecutiveLayout,
    children: [{
      path: 'views',
      component: ViewsPageComponent,
      data: {
        title: 'views'
      }
    }]
  },
  {
    path: 'executive',
    component: ExecutiveLayout,
    children: [{
      path: 'tables',
      loadChildren: './tables/tables.module#TablesModule'
    }]
  },
  {
    path: 'executive',
    component: ExecutiveLayout,
    children: [{
      path: 'maps',
      loadChildren: './maps/maps.module#MapsModule',
      data: {
        title: 'maps'
      }
    }]
  },
  {
    path: 'executive',
    component: ExecutiveLayout,
    children: [{
      path: 'charts',
      component: ChartsComponent,
      data: {
        title: 'charts'
      }
    }]
  }
];
