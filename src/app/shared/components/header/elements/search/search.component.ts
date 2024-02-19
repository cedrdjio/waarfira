import { Component, OnInit } from "@angular/core";
import { NavService, Menu } from "../../../../services/nav.service";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FeatherIconsComponent } from "../../../feather-icons/feather-icons.component";
import { SvgIconComponent } from "../../../svg-icon/svg-icon.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule,FeatherIconsComponent,SvgIconComponent],
})
export class SearchComponent implements OnInit {
  public menuItems: Menu[]=[];
  public items: Menu[]=[];

  public searchResult: boolean = false;
  public searchResultEmpty: boolean = false;
  public text: string="";

  constructor(public navServices: NavService) {
    this.navServices.items.subscribe((menuItems) => (this.items = menuItems));
  }

  ngOnInit() {}

  searchToggle() {
    this.navServices.search = false;
    document.getElementsByTagName("body")[0].classList.remove("offcanvas");
  }

  searchTerm(term: string) {
    term ? this.addFix() : this.removeFix();
    if (!term) {
        this.menuItems = [];
        return; // Add return statement here
    }
    let items: any[] = [];
    term = term.toLowerCase();
    this.items.filter((menuItems) => {
      if (!menuItems?.title) return false;
      if (menuItems.title.toLowerCase().includes(term) && menuItems.type === "link") {
          items.push(menuItems);
      }
      if (!menuItems.children) return false;
      menuItems.children.filter((subItems) => {
          if (subItems.title && subItems.title.toLowerCase().includes(term) && subItems.type === "link") {
              subItems.icon = menuItems.icon;
              items.push(subItems);
              return true;
          }
          if (!subItems.children) return false;
          return subItems.children.filter((suSubItems) => {
              if (suSubItems.title && suSubItems.title.toLowerCase().includes(term)) {
                  suSubItems.icon = menuItems.icon;
                  items.push(suSubItems);
                  return true;
              }
              return false;
          }).length > 0;
      });
      this.checkSearchResultEmpty(items);
      this.menuItems = items;
      return true; // Return true here to indicate menuItems should be included
  });


}

  checkSearchResultEmpty(items:any[]) {
    if (!items.length) this.searchResultEmpty = true;
    else this.searchResultEmpty = false;
  }

  addFix() {
    this.searchResult = true;
    document.getElementsByTagName("body")[0].classList.add("offcanvas");
  }

  removeFix() {
    this.searchResult = false;
    this.text = "";
    document.getElementsByTagName("body")[0].classList.remove("offcanvas");
  }
}
