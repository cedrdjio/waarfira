export interface Product {
  id: number;
  img?: string;
  name: string;
  desc: string;
  amount: number;
  stock: string;
  date: string;
}
export interface Appointment {
  id: number;
  img?: string;
  name: string;
  desc: string;
  date: string;
  time: string;
  status: "Confirmed"|"Pending"|"Canceled",
}
export const APPOINTMENTS: Appointment[] = [
  {
    id: 1,
    name: "John Doe",
    img: "assets/images/dashboard/user/14.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod pretium massa, et tempus libero viverra vitae.",
    date: "20/08/2022",
    time: "10:00 AM",
    status: "Confirmed",
  },
  {
    id: 2,
    name: "Jane Smith",
    img: "assets/images/dashboard/user/14.jpg",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    date: "12/04/2022",
    time: "11:30 AM",
    status: "Pending",
  },
  {
    id: 3,
    name: "Alice Johnson",
    img: "assets/images/dashboard/user/14.jpg",
    desc: "Suspendisse rutrum malesuada lectus, quis consectetur arcu aliquam non.",
    date: "04/08/2022",
    time: "02:15 PM",
    status: "Confirmed",
  },
  {
    id: 4,
    name: "Robert Brown",
    img: "assets/images/dashboard/user/14.jpg",
    desc: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris lobortis fermentum eros, vel rhoncus libero eleifend eget.",
    date: "25/04/2022",
    time: "04:45 PM",
    status: "Canceled",
  },
  {
    id: 5,
    name: "Emma Wilson",
    img: "assets/images/dashboard/user/14.jpg",
    desc: "Donec sodales, risus at luctus tincidunt, nisi risus accumsan leo, nec fringilla nisi quam sed tortor.",
    date: "29/06/2022",
    time: "09:30 AM",
    status: "Confirmed",
  },
  {
    id: 6,
    name: "David Lee",
    img: "assets/images/dashboard/user/14.jpg",
    desc: "Sed ullamcorper, ipsum non dapibus finibus, sapien ipsum rhoncus sem, nec placerat dui justo sit amet orci.",
    date: "15/05/2022",
    time: "01:00 PM",
    status: "Pending",
  },
  {
    id: 7,
    name: "Sarah Clark",
    img: "assets/images/dashboard/user/14.jpg",
    desc: "Integer congue velit ut magna vestibulum, eget ultricies erat interdum.",
    date: "01/03/2022",
    time: "03:45 PM",
    status: "Confirmed",
  },
  {
    id: 8,
    name: "Michael Taylor",
    img: "assets/images/dashboard/user/14.jpg",
    desc: "Fusce nec mauris id ipsum finibus sollicitudin non sit amet ex.",
    date: "11/11/2022",
    time: "11:00 AM",
    status: "Pending",
  },
  {
    id: 9,
    name: "Laura White",
    img: "assets/images/dashboard/user/14.jpg",
    desc: "Phasellus nec quam eu nisi vehicula sollicitudin.",
    date: "18/12/2022",
    time: "12:30 PM",
    status: "Confirmed",
  },
  {
    id: 10,
    name: "Sophia Garcia",
    img: "assets/images/dashboard/user/14.jpg",
    desc: "Vivamus eget lectus at velit rhoncus vehicula.",
    date: "14/04/2022",
    time: "03:30 PM",
    status: "Confirmed",
  },
];

