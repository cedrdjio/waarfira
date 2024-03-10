import { Component } from '@angular/core';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [],
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent {

  public show: boolean = false
  constructor() {}

  toggle() {
    this.show = !this.show
  }

  public activity = [
    {
      date: "8th March, 2022",
      title: "Consultation with Patient",
      dace: "Patient visit for regular checkup.",
      time: "1 day ago",
      primaryDotColor: "primary"
    },
    {
      date: "15th Oct, 2022",
      title: "Prescription Issued",
      dace: "Issued prescription for patient treatment.",
      time: "Today",
      primaryDotColor: "warning"
    },
    {
      date: "20th Sep, 2022",
      title: "Medical Seminar",
      dace: "Attended medical seminar on latest treatment techniques.",
      time: "12:00 PM",
      primaryDotColor: "secondary"
    },
  ]
}
