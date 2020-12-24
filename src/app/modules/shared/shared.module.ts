import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderNavigationComponent} from './header-navigation/header-navigation.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [HeaderNavigationComponent, SidebarComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderNavigationComponent, SidebarComponent, BreadcrumbComponent]
})
export class SharedModule { }
