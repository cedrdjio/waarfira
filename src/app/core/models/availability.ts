export class Availability {
  createdAt!: string; // Format de date: 'yyyy-MM-dd HH:mm:ss'
  date!: string;
  duration!: number;
  endTime!: Time;
  id!: number;
  price!: number;
  reference!: string;
  startTime!: Time;
}
export interface Time {
  date: number;
  day: number;
  hours: number;
  minutes: number;
  month: number;
  seconds: number;
  time: number;
  timezoneOffset: number;
  year: number;
}


