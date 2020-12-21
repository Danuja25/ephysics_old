import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppModule} from '../../app.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AppModule,
    SharedModule
  ],
})
export class LearnModule { }
