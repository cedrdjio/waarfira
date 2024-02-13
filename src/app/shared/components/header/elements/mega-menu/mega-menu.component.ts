import { Component, OnInit } from '@angular/core';
import { NavService, Menu } from '../../../../services/nav.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeatherIconsComponent } from '../../../feather-icons/feather-icons.component';

@Component({
  selector: 'app-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.scss'],
  standalone: true,
  imports: [CommonModule,RouterModule,FeatherIconsComponent],
})
export class MegaMenuComponent implements OnInit {

  public megaItems!: Menu[];
  public levelmenuitems!: Menu[];

  constructor(public navServices: NavService) {
  }

  ngOnInit() {
  }

  megaMenuToggle() {
    this.navServices.levelMenu = false;
    this.navServices.megaMenu  = !this.navServices.megaMenu;
    if(window.innerWidth < 991) {
      this.navServices.collapseSidebar = true;
    }
  }

  levelMenuToggle() {
    this.navServices.megaMenu  = false;
    this.navServices.levelMenu = !this.navServices.levelMenu;
    if(window.innerWidth < 991) {
      this.navServices.collapseSidebar = true;
    }
  }

  toggletNavActive(item: any) {
    if (!item.active) {
      this.megaItems.forEach(a => {
        if (this.megaItems.includes(item)) {
          a.active = false;
        }
        if (!a.children) {
          return false; // exit early if children is undefined
        }
        a.children.forEach(b => {
          if (a.children && a.children.includes(item)) { // check if a.children is defined before using it
            b.active = false;
          }
        });
      });
    }
    item.active = !item.active;
  }



}
