export interface AvailabilityInterface {
  date: string;
  times: string[];
}

export interface UpdateAvailabilityInterface {
  date: string;
  time: string;
  reference: string;
}

export interface AvailabilityResponseInterface {
  createdAt: CreatedAt;
  date: string;
  duration: number;
  endTime: EndTime;
  id: number;
  price: number;
  reference: string;
  startTime: StartTime;
}

export interface CreatedAt {}

export interface EndTime {
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

export interface StartTime {
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
