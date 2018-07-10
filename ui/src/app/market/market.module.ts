//Angular Dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Router
import { MarketRoutes } from './market.routing';

//Core Pages Layout Components
import { SharedModule } from '../@pages/components/shared.module';

//Thirdparty Dependencies - table and model
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ModalModule } from 'ngx-bootstrap';

//Demo Pages
import { MarketComponent } from './market.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(MarketRoutes),
    SharedModule,
    NgxDatatableModule,
    ModalModule
  ],
  declarations: [MarketComponent]
})
export class MarketModule { }
