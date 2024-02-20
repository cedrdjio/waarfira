import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { FeatherIconsComponent } from "../feather-icons/feather-icons.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-tap-to-top',
    standalone: true,
    templateUrl: './tap-to-top.component.html',
    styleUrls: ['./tap-to-top.component.scss'],
    imports: [FeatherIconsComponent,NgbModule,CommonModule]
})
export class TapToTopComponent implements OnInit {

  public show: boolean = false;

  constructor(private viewScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  // @HostListener Decorator
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  	if (number > 600) {
  	  this.show = true;
  	} else {
  	  this.show = false;
  	}
  }

  tapToTop() {
  	this.viewScroller.scrollToPosition([0, 0]);
  }

}
