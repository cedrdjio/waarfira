import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss'],
  standalone: true,
  imports: [RouterModule],
})
export class FullComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
