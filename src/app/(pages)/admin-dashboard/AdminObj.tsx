import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCubes,
  faDollarSign,
  faUser,
  faCaretDown,
  faEllipsisV
} from "@fortawesome/free-solid-svg-icons";
import { faGem, faCircleDot } from "@fortawesome/free-regular-svg-icons";
import userImage from './img/user.jpg';
import clientImage from './img/img2.jpg'



export const cards = [
  {
    icon: <FontAwesomeIcon icon={faCubes} className="h-[30px] w-[30px] text-[#ff9b44]" />,
    stat: 112,
    name: "Projects",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faDollarSign}
        className="h-[30px] text-[#ff9b44]"
      />
    ),
    stat: 44,
    name: "Clients",
  },
  {
    icon: <FontAwesomeIcon icon={faGem} className="h-[30px] text-[#ff9b44]" />,
    stat: 37,
    name: "Tasks",
  },
  {
    icon: <FontAwesomeIcon icon={faUser} className="h-[30px] text-[#ff9b44]" />,
    stat: 218,
    name: "Employees",
  },
];

export const cards2 = [
  {
    name: "New Employees",
    stat: <p className="font-medium text-[#699834]">+10%</p>,
    currentValue: 10,
    percentage: 70,
    prevValue: <p className="font-medium text-[#bbc4cc] text-sm ">Overall Employees 218</p>
  },
  {
    name: "Earnings",
    stat: <p className="font-medium text-[#699834]">+12.5%</p>,
    currentValue: "$1,42,300",
    percentage: 70,
    prevValue: <p className="font-medium text-[#bbc4cc] text-sm ">Previous Month <span className="text-[#8e8e8e]">$7500</span></p>
  },
  {
    name: "Expenses",
    stat: <p className="font-medium text-[#f62d51]">-2.8%</p>,
    currentValue: "$8,500",
    percentage: 70,
    prevValue: <p className="font-medium text-[#bbc4cc] text-sm ">Previous Month <span className="text-[#8e8e8e]">$7500</span></p>
  },
  {
    name: "Profit",
    stat: <p className="font-medium text-[#f62d51]">-75%</p>,
    currentValue: "1,12,000",
    percentage: 70,
    prevValue: <p className="font-medium text-[#bbc4cc] text-sm ">Previous Month <span className="text-[#8e8e8e]">$7500</span></p>
  }
]

export const statList = [
  {
    title: "Today Leave",
    result: "4/65",
    listBar: 30,
    bg: "#ff9b44"
  },
  {
    title: "pending Invoice",
    result: "15/92",
    listBar: 30,
    bg: "#ffbc34"
  },
  {
    title: "Completed Projects",
    result: "85/112",
    listBar: 60,
    bg: "#55ce63"
  },
  {
    title: "Open Tickets",
    result: "85/212",
    listBar: 60,
    bg: "#f62d51"
  },
  {
    title: "Closed Tickets",
    result: "190/212",
    listBar: 20,
    bg: "#009efb"
  }
]

export const todayAbsent = [
  {
    img: userImage,
    name: "Martin Lewis",
    date: "4 Sep 2019",
    stat: <div className="text-[#e63c3c] bg-[#f211361f] px-2 rounded">Pending</div>
  },
  {
    img: userImage,
    name: "Martin Lewis",
    date: "4 Sep 2019",
    stat: <div className="text-[#26af48] bg-[#0fb76b1f] px-2 rounded">Approved</div>
  }
]

export const invoice = [
  {
    id: 'INV-0001',
    client: 'Global Technologies',
    dueDate: '11 Mar 2019',
    total: '$380',
    status: <span className="text-[#f39c12] bg-[#ff98001f] px-2 py-1 font-bold text-[12px] rounded">Partially paid</span>
  },
  {
    id: 'INV-0002',
    client: 'Delta Infotech',
    dueDate: '8 Feb 2019',
    total: '$500',
    status: <span className="text-[#26af48] bg-[#0fb76b1f] px-2 py-1 font-bold text-[12px] rounded">paid</span>
  },
  {
    id: 'INV-0003',
    client: 'Cream Inc',
    dueDate: '23 Jan 2019',
    total: '$60',
    status: <span className="text-[#e63c3c] bg-[#f211361f] px-2 py-1 font-bold text-[12px] rounded">Unpaid</span>
  }
]

export const payment = [
  {
    id: 'INV-0001',
    client: 'Global Technologies',
    paymentType: 'Paypal',
    paidDate: '11 Mar 2019',
    paidAmount: '$380'
  },
  {
    id: 'INV-0002',
    client: 'Delta Infotech',
    paymentType: 'Paypal',
    paidDate: '8 Feb 2019',
    paidAmount: '$500'
  },
  {
    id: 'INV-0003',
    client: 'Cream Inc',
    paymentType: 'Paypal',
    paidDate: '23 Jan 2019',
    paidAmount: '$60'
  },
]

export const clients = [
  {
    img: clientImage,
    name: 'Barry Cuda CEO',
    email: 'barrycuda@example.com',
    status: <button className="flex items-center gap-1 text-sm text-[#777777] font-semibold bg-[#0000009f] px-2 rounded-full"><FontAwesomeIcon icon={faCircleDot} className="w-3 text-[#699834]" /> Active <FontAwesomeIcon icon={faCaretDown} className="w-2 text-[#777777]" /></button>,
    action: <FontAwesomeIcon icon={faEllipsisV} className="w-1 text-[#777777]"/>
  },
  {
    img: clientImage,
    name: 'Tressa Wexler Manger',
    email: 'tresserwexler@example.com',
    status: <button className="flex items-center gap-1 text-sm text-[#777777] font-semibold bg-[#0000009f] px-2 rounded-full"><FontAwesomeIcon icon={faCircleDot} className="w-3 text-[#f62d51]" /> Inactive <FontAwesomeIcon icon={faCaretDown} className="w-2 text-[#777777]" /></button>,
    action: <FontAwesomeIcon icon={faEllipsisV} className="w-1 text-[#777777]"/>
  },

  {
    img: clientImage,
    name: 'Ruby Bartlett CEO',
    email: 'rubybartlette@example.com',
    status: <button className="flex items-center gap-1 text-sm text-[#777777] font-semibold bg-[#0000009f] px-2 rounded-full"><FontAwesomeIcon icon={faCircleDot} className="w-3 text-[#f62d51]" /> Inactive <FontAwesomeIcon icon={faCaretDown} className="w-2 text-[#777777]" /></button>,
    action: <FontAwesomeIcon icon={faEllipsisV} className="w-1 text-[#777777]"/>
  },
  {
    img: clientImage,
    name: 'Misty Tision CEO',
    email: 'mistytision@example.com',
    status: <button className="flex items-center gap-1 text-sm text-[#777777] font-semibold bg-[#0000009f] px-2 rounded-full"><FontAwesomeIcon icon={faCircleDot} className="w-3 text-[#699834]" /> Active <FontAwesomeIcon icon={faCaretDown} className="w-2 text-[#777777]" /></button>,
    action: <FontAwesomeIcon icon={faEllipsisV} className="w-1 text-[#777777]"/>
  },
  {
    img: clientImage,
    name: 'Daniel Beacom CEO',
    email: 'danielbeacon@example.com',
    status: <button className="flex items-center gap-1 text-sm text-[#777777] font-semibold bg-[#0000009f] px-2 rounded-full"><FontAwesomeIcon icon={faCircleDot} className="w-3 text-[#f62d51]" /> Inactive <FontAwesomeIcon icon={faCaretDown} className="w-2 text-[#777777]" /></button>,
    action: <FontAwesomeIcon icon={faEllipsisV} className="w-1 text-[#777777]"/>
  }
]

export const recentProjects = [
  {
    projectName: 'Office Management',
    openTasks: <span className="text-white">1</span>,
    completed:  <span className="text-white">9</span>,
    progress: 65,
    action: <FontAwesomeIcon icon={faEllipsisV} className="w-1 text-[#777777]"/>
  },
  {
    projectName: 'Project Management',
    openTasks: <span className="text-white">2</span>,
    completed:  <span className="text-white">5</span>,
    progress: 15,
    action: <FontAwesomeIcon icon={faEllipsisV} className="w-1 text-[#777777]"/>
  },
  {
    projectName: 'Video Calling App',
    openTasks: <span className="text-white">3</span>,
    completed:  <span className="text-white">3</span>,
    progress: 50,
    action: <FontAwesomeIcon icon={faEllipsisV} className="w-1 text-[#777777]"/>
  },
  {
    projectName: 'Hospital Administration',
    openTasks: <span className="text-white">12</span>,
    completed:  <span className="text-white">4</span>,
    progress: 88,
    action: <FontAwesomeIcon icon={faEllipsisV} className="w-1 text-[#777777]"/>
  },
  {
    projectName: 'Digital Marketplace',
    openTasks: <span className="text-white">7</span>,
    completed:  <span className="text-white">14</span>,
    progress: 100,
    action: <FontAwesomeIcon icon={faEllipsisV} className="w-1 text-[#777777]"/>
  }
]