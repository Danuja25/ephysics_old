import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SharedModule} from '../shared/shared.module';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ComponentsRoutes} from './learn.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [DashboardComponent, HomeComponent],
    imports: [
        CommonModule,
        SharedModule,
        PerfectScrollbarModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        RouterModule.forChild(ComponentsRoutes)
    ],
  exports: [DashboardComponent, HomeComponent]
})
export class LearnModule { }
