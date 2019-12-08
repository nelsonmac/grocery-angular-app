import { NavService } from './services/nav.service';
import { Component, ViewChild, ElementRef } from '@angular/core';

export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: NavItem[];
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('appDrawer', { static: false }) appDrawer: ElementRef;
  title = 'grocery-angular';

  navItems: NavItem[] = [
    {
      displayName: 'Master',
      iconName: 'kitchen',
      children: [
        {
          displayName: 'Uom',
          iconName: 'card_travel',
          children: [
            {
              displayName: 'List',
              iconName: 'format_list_bulleted',
              route: 'uom-list',
            }
          ]
        },
        {
          displayName: 'Category',
          iconName: 'donut_small',
          children: [
            {
              displayName: 'List',
              iconName: 'format_list_bulleted',
              route: 'category-list',
            }
          ]
        },
        {
          displayName: 'Currency',
          iconName: 'attach_money',
          children: [
            {
              displayName: 'List',
              iconName: 'format_list_bulleted',
              route: 'currency-list',
            }
          ]
        }
      ]
    },
    {
      displayName: 'Item',
          iconName: 'album',
          children: [
            {
              displayName: 'List',
              iconName: 'format_list_bulleted',
              route: 'item-list',
            }
          ]
    },
    {
      displayName: 'Purchase',
          iconName: 'album',
          children: [
            {
              displayName: 'Home',
              iconName: 'home',
              route: 'ph-home',
            }
          ]
    }
  ];

  constructor(
    public navService: NavService) { }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}
