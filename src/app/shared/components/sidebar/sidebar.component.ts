import { Component, ViewEncapsulation, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Menu, NavService } from '../../services/nav.service';
import { LayoutService } from '../../services/layout.service';
import { CommonModule } from '@angular/common';
import { FeatherIconsComponent } from '../feather-icons/feather-icons.component';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [CommonModule,RouterModule,FeatherIconsComponent,SvgIconComponent, TranslateModule,],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {


  public iconSidebar: any;
  public menuItems: Menu[]=[];

  // For Horizontal Menu
  public margin: any = 0;
  public width: any = window.innerWidth;
  public leftArrowNone: boolean = true;
  public rightArrowNone: boolean = false;

  constructor(private router: Router, public navServices: NavService,
    public layout: LayoutService) {
      for (let a of this.menuItems) {
        this.navServices.items.subscribe(menuItems => {
            this.menuItems = menuItems;
            this.router.events.subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    for (let items of menuItems) {
                        if (items.path === event.url) {
                            this.setNavActive(items);
                        }
                        if (!items.children) { return false; }
                        for (let subItems of items.children) {
                            if (subItems.path === event.url) {
                                this.setNavActive(subItems);
                                return true;
                            }
                            if (!subItems.children) { return false; }
                            for (let subSubItems of subItems.children) {
                                if (subSubItems.path === event.url) {
                                    this.setNavActive(subSubItems);
                                    return true;
                                }
                            }
                        }
                    }
                }
                return true;
            });
        });
    }



  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.width = event.target.innerWidth - 500;
  }

  sidebarToggle() {
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
  }

  // Active Nave state
  setNavActive(item: Menu) {
    this.menuItems.filter(menuItem => {
      if (menuItem !== item) {
        menuItem.active = false;
      }
      if (menuItem.children && menuItem.children.includes(item)) {
        menuItem.active = true;
      }
      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
          }
        });
      }
    });
  }

  // Click Toggle menu
  toggletNavActive(item: Menu) {
    if (!item.active) {
      this.menuItems.forEach(a => {
        if (this.menuItems.includes(item)) {
          a.active = false;
        }
        if (!a.children)
        { return false;

        }
        a.children.forEach(b => {
          if (a.children && a.children.includes(item)) {
            b.active = false;
          }
        });
        return true;
      });
    }
    item.active = !item.active;
    return true;
  }


  // For Horizontal Menu
  scrollToLeft() {
    if (this.margin >= -this.width) {
      this.margin = 0;
      this.leftArrowNone = true;
      this.rightArrowNone = false;
    } else {
      this.margin += this.width;
      this.rightArrowNone = false;
    }
  }

  scrollToRight() {
    if (this.margin <= -3051) {
      this.margin = -3464;
      this.leftArrowNone = false;
      this.rightArrowNone = true;
    } else {
      this.margin += -this.width;
      this.leftArrowNone = false;
    }
  }
}