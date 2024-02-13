import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatherIconsComponent } from '../../../feather-icons/feather-icons.component';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss'],
  standalone: true,
  imports: [CommonModule,RouterModule,FeatherIconsComponent],
})
export class MessageBoxComponent implements OnInit {

  public openMessageBox: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMessageBox() {
    this.openMessageBox = !this.openMessageBox;
  }

}
