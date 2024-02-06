import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from '../models/menuItem';

@Component({
  selector: 'app-responsive-toolbar',
  templateUrl: './responsive-toolbar.component.html',
  styleUrls: ['./responsive-toolbar.component.css'],
})
export class ResponsiveToolbarComponent implements OnInit {
  // @Input() title: string;
  gridColumns = 3;
  @Output() setGridColumns = new EventEmitter();

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
    this.setGridColumns.emit();
  }

  menuItems: MenuItem[] = [
    {
      label: 'Sign Up',
      icon: 'login',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true,
    },
    {
      label: 'About',
      icon: 'help',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true,
    },
    // {
    //   label: 'Pricing',
    //   icon: 'attach_money',
    //   showOnMobile: false,
    //   showOnTablet: false,
    //   showOnDesktop: true,
    // },
    {
      label: 'Docs',
      icon: 'notes',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true,
    },
    {
      label: 'Showcase',
      icon: 'slideshow',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
    },
    {
      label: 'Blog',
      icon: 'rss_feed',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false,
    },
  ];
  constructor() {}

  ngOnInit() {}
}
