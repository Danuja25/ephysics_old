import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.css']
})
export class HeaderNavigationComponent{

  @Output()
  toggleSidebar = new EventEmitter<void>();

  public showSearch = false;

  constructor() { }

}
